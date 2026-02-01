import { getContent, getArticles } from "@/lib/data";
import HomeContent from "./components/HomeContent";

export default async function Home() {
  const [content, articles] = await Promise.all([
    getContent(),
    getArticles(),
  ]);

  return <HomeContent content={content} articles={articles} />;
}
