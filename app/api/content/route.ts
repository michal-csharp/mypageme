import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import type { ContentData } from "@/lib/data";

const DATA_FILE = path.join(process.cwd(), "data", "content.json");

export async function GET() {
  try {
    const json = await fs.readFile(DATA_FILE, "utf-8");
    const data = JSON.parse(json);
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
    await fs.writeFile(DATA_FILE, JSON.stringify(body, null, 2), "utf-8");
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to save content" },
      { status: 500 }
    );
  }
}
