import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  inquiry: string;
  message: string;
};

function validatePayload(payload: ContactPayload) {
  return (
    payload.name.trim().length >= 2 &&
    payload.email.includes("@") &&
    payload.message.trim().length >= 10
  );
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (!validatePayload(body)) {
    return Response.json(
      { message: "Please provide valid contact details and message." },
      { status: 400 },
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!host || !user || !pass || !to) {
    return Response.json(
      {
        message:
          "Email service is not configured. Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_TO_EMAIL.",
      },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });

  await transporter.sendMail({
    from: `PhraramQ Website <${user}>`,
    to,
    replyTo: body.email,
    subject: `New ${body.inquiry || "General"} inquiry from ${body.name}`,
    text: [
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      `Company: ${body.company || "N/A"}`,
      `Inquiry: ${body.inquiry || "General"}`,
      "",
      "Message:",
      body.message,
    ].join("\n"),
  });

  return Response.json(
    { message: "Message sent successfully." },
    { status: 200 },
  );
}
