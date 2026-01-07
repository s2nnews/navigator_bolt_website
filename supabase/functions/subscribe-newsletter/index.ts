import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface SubscribeRequest {
  email: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { email }: SubscribeRequest = await req.json();

    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const BEEHIIV_API_KEY = Deno.env.get("BEEHIIV_API_KEY");
    const PUBLICATION_ID = "pub_06229b51-43a9-4f30-9804-ade8acd9e5a5";

    if (!BEEHIIV_API_KEY) {
      console.error("BEEHIIV_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Service configuration error" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const beehiivUrl = `https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}/subscriptions`;

    const requestBody = {
      email: email,
      send_welcome_email: true,
      reactivate_existing: true,
      utm_source: "s2n-navigator-website",
      utm_medium: "footer",
      double_opt_in: "off",
    };

    console.log("Subscribing email to Beehiiv:", email);
    console.log("Request body:", JSON.stringify(requestBody, null, 2));

    const beehiivResponse = await fetch(beehiivUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${BEEHIIV_API_KEY}`,
      },
      body: JSON.stringify(requestBody),
    });

    const responseText = await beehiivResponse.text();
    console.log("Beehiiv response status:", beehiivResponse.status);
    console.log("Beehiiv response:", responseText);

    if (!beehiivResponse.ok) {
      let errorData;
      try {
        errorData = JSON.parse(responseText);
      } catch (e) {
        errorData = { message: responseText };
      }
      console.error("Beehiiv API error:", errorData);
      return new Response(
        JSON.stringify({ error: "Failed to subscribe. Please try again." }),
        {
          status: beehiivResponse.status,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const data = JSON.parse(responseText);
    console.log("Successfully subscribed:", email, "Response data:", data);

    return new Response(
      JSON.stringify({ success: true, message: "Successfully subscribed!" }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error processing subscription:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
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