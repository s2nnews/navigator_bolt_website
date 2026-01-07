import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import Stripe from "npm:stripe@17.5.0";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

function generateLicenseKey(): string {
  const segments = 4;
  const segmentLength = 5;
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

  const key = [];
  for (let i = 0; i < segments; i++) {
    let segment = '';
    for (let j = 0; j < segmentLength; j++) {
      segment += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    key.push(segment);
  }

  return key.join('-');
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY");
    const stripeWebhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");

    if (!stripeSecretKey || !stripeWebhookSecret || !supabaseUrl || !supabaseAnonKey) {
      throw new Error("Missing required environment variables");
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2024-12-18.acacia",
    });

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const signature = req.headers.get("stripe-signature");
    if (!signature) {
      throw new Error("No signature found");
    }

    const body = await req.text();
    const event = stripe.webhooks.constructEvent(body, signature, stripeWebhookSecret);

    console.log("Processing webhook event:", event.type);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        if (session.mode === "subscription" && session.subscription) {
          const subscription = await stripe.subscriptions.retrieve(
            session.subscription as string
          );

          const licenseType = subscription.items.data[0]?.plan?.interval === 'year' ? 'Annual' : 'Monthly';
          const licenseKey = generateLicenseKey();

          const { error } = await supabase.from("licenses").insert({
            license_key: licenseKey,
            email: session.customer_details?.email || session.customer_email,
            stripe_session_id: session.id,
            stripe_subscription_id: session.subscription as string,
            license_type: licenseType,
            status: subscription.status,
            valid_until: new Date(subscription.current_period_end * 1000).toISOString(),
          });

          if (error) {
            console.error("Error creating license:", error);
            throw error;
          }

          console.log("License created successfully with key:", licenseKey);
        }
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;

        const { error } = await supabase
          .from("licenses")
          .update({
            status: subscription.status,
            valid_until: new Date(subscription.current_period_end * 1000).toISOString(),
          })
          .eq("stripe_subscription_id", subscription.id);

        if (error) {
          console.error("Error updating license:", error);
          throw error;
        }

        console.log("License updated successfully");
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;

        const { error } = await supabase
          .from("licenses")
          .update({
            status: "canceled",
          })
          .eq("stripe_subscription_id", subscription.id);

        if (error) {
          console.error("Error canceling license:", error);
          throw error;
        }

        console.log("License canceled successfully");
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});