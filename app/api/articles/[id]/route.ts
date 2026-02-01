import { NextResponse } from "next/server";
import * as storage from "@/lib/storage";
import type { Article } from "@/lib/data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const articles = await storage.getArticles();
    const article = articles.find((a) => a.id === params.id);
    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }
    return NextResponse.json(article);
  } catch {
    return NextResponse.json(
      { error: "Failed to read articles" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const articles = await storage.getArticles();
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
    await storage.setArticles(articles);
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
    const articles = await storage.getArticles();
    const filtered = articles.filter((a) => a.id !== params.id);
    if (filtered.length === articles.length) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }
    await storage.setArticles(filtered);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to delete article" },
      { status: 500 }
    );
  }
}
