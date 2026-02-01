import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import type { Article } from "@/lib/data";

const DATA_FILE = path.join(process.cwd(), "data", "articles.json");

function getArticlesPath() {
  return DATA_FILE;
}

export async function GET() {
  try {
    const json = await fs.readFile(getArticlesPath(), "utf-8");
    const articles: Article[] = JSON.parse(json);
    return NextResponse.json(articles);
  } catch {
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  try {
    const articles: Article[] = JSON.parse(
      await fs.readFile(getArticlesPath(), "utf-8")
    );
    const body = await request.json();
    const id = Date.now().toString();
    const slug =
      body.slug ||
      body.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    const now = new Date().toISOString();
    const newArticle: Article = {
      id,
      title: body.title || "Bez názvu",
      slug,
      excerpt: body.excerpt || "",
      content: body.content || "",
      photos: body.photos || [],
      createdAt: now,
      updatedAt: now,
    };
    articles.push(newArticle);
    await fs.writeFile(
      getArticlesPath(),
      JSON.stringify(articles, null, 2),
      "utf-8"
    );
    return NextResponse.json(newArticle);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to create article" },
      { status: 500 }
    );
  }
}
