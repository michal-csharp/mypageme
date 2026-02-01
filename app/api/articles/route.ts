import { NextResponse } from "next/server";
import * as storage from "@/lib/storage";
import type { Article } from "@/lib/data";

export async function GET() {
  try {
    const articles = await storage.getArticles();
    return NextResponse.json(articles);
  } catch {
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  try {
    const articles = await storage.getArticles();
    const body = await request.json();
    const id = Date.now().toString();
    const slug =
      body.slug ||
      (body.title || "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    const now = new Date().toISOString();
    const newArticle: Article = {
      id,
      title: body.title || "Bez názvu",
      slug: slug || id,
      excerpt: body.excerpt || "",
      content: body.content || "",
      photos: body.photos || [],
      createdAt: now,
      updatedAt: now,
    };
    articles.push(newArticle);
    await storage.setArticles(articles);
    return NextResponse.json(newArticle);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to create article" },
      { status: 500 }
    );
  }
}
