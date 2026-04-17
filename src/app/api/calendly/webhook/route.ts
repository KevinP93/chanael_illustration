import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      ok: true,
      message:
        "Webhook Calendly prêt à être enrichi avec la vérification de signature et la synchronisation des réservations.",
    },
    { status: 202 },
  );
}
