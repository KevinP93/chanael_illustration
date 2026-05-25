import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      ok: true,
      message: "Événement de réservation reçu.",
    },
    { status: 202 },
  );
}
