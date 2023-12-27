import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;

export async function POST(req, res) {
    try {
        const { email, subject, message } = await req.json();

        console.log("Received data:", { email, subject, message });

        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: toEmail,
            subject: email,
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>Thank you for contacting us!</p>
                    <p>New message submitted.</p>
                    <p>{message}</p>
                </>
            ),
        });

        return NextResponse.json(data);
    } catch(error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Failed to process the request." });
    }
}