import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { projectTypes } from "./portfolio";

export const enquirySchema = z.object({
  full_name: z.string().trim().min(2, "Please enter your full name.").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[\d\s()-]{10,18}$/, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  project_type: z.enum(projectTypes),
  project_location: z.string().trim().min(2).max(200),
  message: z.string().trim().min(10, "Please tell us a little more about your project.").max(4000),
  website: z.string().max(0).optional(),
});

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const since = new Date(Date.now() - 60_000).toISOString();
    const { count, error: checkError } = await supabaseAdmin
      .from("project_enquiries")
      .select("id", { count: "exact", head: true })
      .eq("phone", data.phone)
      .gte("created_at", since);
    if (checkError)
      throw new Error("We could not save your enquiry. Please try again or call the studio.");
    if (count && count > 0)
      throw new Error(
        "Your enquiry is already saved. Please wait a minute before sending another.",
      );
    const { website: _honeypot, ...enquiry } = data;
    const { error } = await supabaseAdmin.from("project_enquiries").insert(enquiry);
    if (error)
      throw new Error("We could not save your enquiry. Please try again or call the studio.");
    return { success: true };
  });
