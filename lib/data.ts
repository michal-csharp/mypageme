import { promises as fs } from "fs";
import path from "path";
import * as storage from "./storage";

const DATA_DIR = path.join(process.cwd(), "data");
const CONTENT_FILE = path.join(DATA_DIR, "content.json");
const ARTICLES_FILE = path.join(DATA_DIR, "articles.json");

export interface ContentData {
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    heroPhoto: string;
  };
  about: {
    bioTitle: string;
    bioText: string;
    fastTitle: string;
    fastText: string;
    skills: string[];
    aboutPhoto: string;
  };
  social: {
    github: string;
    linkedin: string;
  };
  contact: {
    email: string;
    title: string;
    titleAccent: string;
    subtitle: string;
  };
  projects: Array<{
    id: string;
    title: string;
    description: string;
    tech: string[];
    size: "small" | "medium" | "large" | "wide";
  }>;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  photos: string[];
  createdAt: string;
  updatedAt: string;
}

async function getDefaultContent(): Promise<ContentData> {
  const json = await fs.readFile(CONTENT_FILE, "utf-8");
  return JSON.parse(json);
}

async function getDefaultArticles(): Promise<Article[]> {
  try {
    const json = await fs.readFile(ARTICLES_FILE, "utf-8");
    return JSON.parse(json);
  } catch {
    return [];
  }
}

export async function getContent(): Promise<ContentData> {
  const data = await storage.getContent();
  if (data) return data;
  return getDefaultContent();
}

export async function getArticles(): Promise<Article[]> {
  const data = await storage.getArticles();
  if (data && data.length > 0) return data;
  return getDefaultArticles();
}
