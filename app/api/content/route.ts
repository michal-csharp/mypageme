import { NextResponse } from "next/server";
import * as storage from "@/lib/storage";
import { getContent } from "@/lib/data";
import type { ContentData } from "@/lib/data";

export async function GET() {
  try {
    // getContent() vrací z storage nebo fallback na data/content.json
    const data = await getContent();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to read content" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body: ContentData = await request.json();
    await storage.setContent(body);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to save content" },
      { status: 500 }
    );
  }
}
