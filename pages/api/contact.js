import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  const contactData = {
    fullName: "Gerges Nashaat",
    email: "georgios.nashaat@test.com",
    subject: "test",
    message: "test",
  };

  const { error } = await supabase.from("contact").insert([contactData]);

  if (error)
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to send message. Please try again",
      });

  //* SUCCESS MESSAGE
  res
    .status(200)
    .json({ success: true, message: "Message received successfully!" });
}
