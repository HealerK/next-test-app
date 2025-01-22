import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "...",
    to: "shinemyatshwe@gmail.com",
    subject: "How are you bro?",
    react: <WelcomeTemplate name="Healer" />,
  });

  return NextResponse.json({});
}
