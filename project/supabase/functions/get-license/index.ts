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
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!stripeSecretKey || !supabaseUrl || !supabaseServiceKey) {
      throw new Error("Required environment variables are not configured");
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2024-12-18.acacia",
    });

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const url = new URL(req.url);
    const sessionId = url.searchParams.get('session_id');

    if (!sessionId) {
      return new Response(
        JSON.stringify({ error: "session_id is required" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const { data: existingLicense } = await supabase
      .from('licenses')
      .select('*')
      .eq('stripe_session_id', sessionId)
      .maybeSingle();

    if (existingLicense) {
      return new Response(
        JSON.stringify({
          license_key: existingLicense.license_key,
          email: existingLicense.email,
          license_type: existingLicense.license_type,
          status: existingLicense.status,
          valid_until: new Date(existingLicense.valid_until).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
        }),
        {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['subscription', 'line_items', 'customer'],
    });

    const customerEmail = session.customer_details?.email || session.customer_email;
    if (!customerEmail) {
      throw new Error("No customer email found in session");
    }

    const subscription = session.subscription as Stripe.Subscription;
    const licenseType = subscription?.items?.data[0]?.plan?.interval === 'year' ? 'Annual' : 'Monthly';

    const validUntil = subscription?.current_period_end
      ? new Date(subscription.current_period_end * 1000)
      : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    const licenseKey = generateLicenseKey();

    const { data: newLicense, error: insertError } = await supabase
      .from('licenses')
      .insert({
        license_key: licenseKey,
        email: customerEmail,
        stripe_session_id: sessionId,
        stripe_subscription_id: typeof subscription === 'string' ? subscription : subscription?.id,
        license_type: licenseType,
        status: 'active',
        valid_until: validUntil.toISOString(),
      })
      .select()
      .single();

    if (insertError) {
      throw insertError;
    }

    return new Response(
      JSON.stringify({
        license_key: newLicense.license_key,
        email: newLicense.email,
        license_type: newLicense.license_type,
        status: newLicense.status,
        valid_until: new Date(newLicense.valid_until).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error getting/creating license:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});