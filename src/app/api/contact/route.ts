import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      ok: true,
      message:
        "Le point d'entrée de contact est créé. Branche Supabase ou Resend pour persister les messages.",
    },
    { status: 202 },
  );
}
