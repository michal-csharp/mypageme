import { Redis } from "@upstash/redis";
import { promises as fs } from "fs";
import path from "path";
import type { ContentData } from "./data";
import type { Article } from "./data";

const DATA_DIR = path.join(process.cwd(), "data");
const CONTENT_FILE = path.join(DATA_DIR, "content.json");
const ARTICLES_FILE = path.join(DATA_DIR, "articles.json");

// Podpora pro Upstash Redis (Vercel Marketplace) i migrovaný Vercel KV
const redisUrl =
  process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const redisToken =
  process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

const redis =
  redisUrl && redisToken
    ? new Redis({ url: redisUrl, token: redisToken })
    : null;

const KEYS = {
  content: "mypage:content",
  articles: "mypage:articles",
} as const;

export function hasRedis(): boolean {
  return redis !== null;
}

export async function getContent(): Promise<ContentData | null> {
  if (redis) {
    const data = await redis.get<ContentData>(KEYS.content);
    return data;
  }
  try {
    const json = await fs.readFile(CONTENT_FILE, "utf-8");
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export async function setContent(data: ContentData): Promise<void> {
  if (redis) {
    await redis.set(KEYS.content, data);
    return;
  }
  await fs.writeFile(CONTENT_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export async function getArticles(): Promise<Article[]> {
  if (redis) {
    const data = await redis.get<Article[]>(KEYS.articles);
    return data ?? [];
  }
  try {
    const json = await fs.readFile(ARTICLES_FILE, "utf-8");
    return JSON.parse(json);
  } catch {
    return [];
  }
}

export async function setArticles(articles: Article[]): Promise<void> {
  if (redis) {
    await redis.set(KEYS.articles, articles);
    return;
  }
  await fs.writeFile(
    ARTICLES_FILE,
    JSON.stringify(articles, null, 2),
    "utf-8"
  );
}
