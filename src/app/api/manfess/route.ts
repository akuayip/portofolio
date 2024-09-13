import { NextResponse } from "next/server";

interface Manfess {
  id: string;
  message: string;
  timestamp: Date;
  name?: string;
}

let manfessData: Manfess[] = [];

export async function POST(req: Request) {
  const { message, name } = await req.json();
  if (!message) {
    return NextResponse.json({
      success: false,
      message: "Message is required",
    });
  }

  const newManfess = {
    id: crypto.randomUUID(),
    message,
    name: name || "Anonym",
    timestamp: new Date(),
  };

  manfessData.push(newManfess);

  return NextResponse.json({ success: true, data: newManfess });
}

export async function GET() {
  return NextResponse.json({ success: true, data: manfessData });
}
