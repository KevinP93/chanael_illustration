import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      ok: true,
      message: "Votre demande a bien été reçue.",
    },
    { status: 202 },
  );
}
