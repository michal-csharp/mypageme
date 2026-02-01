import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import type { Article } from "@/lib/data";

const DATA_FILE = path.join(process.cwd(), "data", "articles.json");

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const articles: Article[] = JSON.parse(
      await fs.readFile(DATA_FILE, "utf-8")
    );
    const article = articles.find((a) => a.id === params.id);
    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }
    return NextResponse.json(article);
  } catch {
    return NextResponse.json({ error: "Failed to read articles" }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const articles: Article[] = JSON.parse(
      await fs.readFile(DATA_FILE, "utf-8")
    );
    const index = articles.findIndex((a) => a.id === params.id);
    if (index === -1) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }
    const body = await request.json();
    const updated: Article = {
      ...articles[index],
      ...body,
      id: params.id,
      updatedAt: new Date().toISOString(),
    };
    articles[index] = updated;
    await fs.writeFile(DATA_FILE, JSON.stringify(articles, null, 2), "utf-8");
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to update article" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const articles: Article[] = JSON.parse(
      await fs.readFile(DATA_FILE, "utf-8")
    );
    const filtered = articles.filter((a) => a.id !== params.id);
    if (filtered.length === articles.length) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }
    await fs.writeFile(
      DATA_FILE,
      JSON.stringify(filtered, null, 2),
      "utf-8"
    );
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to delete article" },
      { status: 500 }
    );
  }
}
