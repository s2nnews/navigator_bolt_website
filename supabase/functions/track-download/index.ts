import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { platform } = await req.json();

    if (!platform || !['windows', 'macos'].includes(platform)) {
      return new Response(
        JSON.stringify({ error: "Invalid platform" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const ip_address = req.headers.get("x-forwarded-for") ||
                       req.headers.get("x-real-ip") ||
                       "unknown";
    const user_agent = req.headers.get("user-agent") || null;
    const referrer = req.headers.get("referer") || null;

    const { data, error } = await supabase
      .from("downloads")
      .insert({
        platform,
        ip_address,
        user_agent,
        referrer,
      })
      .select()
      .single();

    if (error) {
      console.error("Error tracking download:", error);
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

    return new Response(
      JSON.stringify({ success: true, data }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.error("Error in track-download function:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
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
