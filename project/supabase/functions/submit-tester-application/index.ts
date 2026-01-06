import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

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
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const applicationData = await req.json();

    const { data, error } = await supabase
      .from("tester_applications")
      .insert([
        {
          name: applicationData.name,
          email: applicationData.email,
          user_type: applicationData.user_type,
          markets_traded: applicationData.markets_traded || [],
          backtesting_tools: applicationData.backtesting_tools,
          biggest_problem: applicationData.biggest_problem,
          why_interested: applicationData.why_interested,
          feedback_commitment: applicationData.feedback_commitment,
          python_experience: applicationData.python_experience,
          comfortable_early_stage: applicationData.comfortable_early_stage,
          preferred_contact: applicationData.preferred_contact,
          whatsapp: applicationData.whatsapp || "",
          status: "tester_waitlist",
        },
      ])
      .select();

    if (error) {
      console.error("Database error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to submit application" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const emailContent = `
New Tester Application Received

Name: ${applicationData.name}
Email: ${applicationData.email}
User Type: ${applicationData.user_type}
Markets Traded: ${(applicationData.markets_traded || []).join(", ")}

Backtesting Tools Used:
${applicationData.backtesting_tools}

Biggest Problem with Backtesting:
${applicationData.biggest_problem}

Why Interested:
${applicationData.why_interested}

Feedback Commitment: ${applicationData.feedback_commitment}
Python Experience: ${applicationData.python_experience}
Comfortable with Early Stage: ${applicationData.comfortable_early_stage}
Preferred Contact: ${applicationData.preferred_contact}
WhatsApp: ${applicationData.whatsapp || "Not provided"}

Submitted: ${new Date().toISOString()}
    `.trim();

    console.log("Tester application notification:", emailContent);

    return new Response(
      JSON.stringify({ success: true, data }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error processing application:", error);
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