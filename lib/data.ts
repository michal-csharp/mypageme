import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

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

export async function getContent(): Promise<ContentData> {
  const filePath = path.join(DATA_DIR, "content.json");
  const json = await fs.readFile(filePath, "utf-8");
  return JSON.parse(json);
}

export async function getArticles(): Promise<Article[]> {
  const filePath = path.join(DATA_DIR, "articles.json");
  try {
    const json = await fs.readFile(filePath, "utf-8");
    return JSON.parse(json);
  } catch {
    return [];
  }
}
