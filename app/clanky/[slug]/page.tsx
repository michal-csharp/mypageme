import { getArticles } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: { slug: string };
}

export default async function ArticlePage({ params }: Props) {
  const articles = await getArticles();
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <article className="max-w-3xl mx-auto px-4 py-16">
        <Link
          href="/#articles"
          className="inline-flex items-center gap-2 text-muted hover:text-accent mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Zpět na články
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
        <p className="text-muted mb-8">
          {new Date(article.updatedAt).toLocaleDateString("cs-CZ")}
        </p>

        {article.photos.length > 0 && (
          <div className="space-y-4 mb-8">
            {article.photos.map((photo, i) => (
              <img
                key={i}
                src={photo}
                alt=""
                className="w-full rounded-2xl object-cover"
              />
            ))}
          </div>
        )}

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-muted mb-8">{article.excerpt}</p>
          <div className="whitespace-pre-line text-gray-200 leading-relaxed">
            {article.content}
          </div>
        </div>
      </article>
    </main>
  );
}
