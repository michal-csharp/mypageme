"use client";

import { useEffect, useState } from "react";
import {
  Save,
  Plus,
  Trash2,
  Upload,
  Settings,
  FileText,
  Image as ImageIcon,
} from "lucide-react";
import type { ContentData, Article } from "@/lib/data";

export default function AdminPage() {
  const [content, setContent] = useState<ContentData | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState<"content" | "articles">("content");
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [newArticle, setNewArticle] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const [contentRes, articlesRes] = await Promise.all([
        fetch("/api/content"),
        fetch("/api/articles"),
      ]);
      const contentData = await contentRes.json();
      const articlesData = await articlesRes.json();
      setContent(contentData);
      setArticles(articlesData);
    } catch (err) {
      setMessage("Chyba při načítání dat");
    } finally {
      setLoading(false);
    }
  }

  async function saveContent() {
    if (!content) return;
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      if (res.ok) setMessage("Obsah uložen!");
      else setMessage("Chyba při ukládání");
    } catch {
      setMessage("Chyba při ukládání");
    } finally {
      setSaving(false);
    }
  }

  async function uploadImage(field: "heroPhoto" | "aboutPhoto") {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file || !content) return;
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", "images");
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (data.url) {
        if (field === "heroPhoto") {
          setContent((c) => (c ? { ...c, hero: { ...c.hero, heroPhoto: data.url } } : c));
        } else {
          setContent((c) => (c ? { ...c, about: { ...c.about, aboutPhoto: data.url } } : c));
        }
        setMessage("Foto nahráno");
      }
    };
    input.click();
  }

  async function addProject() {
    if (!content) return;
    const id = (Math.max(0, ...content.projects.map((p) => parseInt(p.id) || 0)) + 1).toString();
    setContent({
      ...content,
      projects: [
        ...content.projects,
        { id, title: "Nový projekt", description: "", tech: [], size: "medium" },
      ],
    });
  }

  function removeProject(id: string) {
    if (!content) return;
    setContent({
      ...content,
      projects: content.projects.filter((p) => p.id !== id),
    });
  }

  function updateProject(id: string, updates: Partial<(typeof content.projects)[0]>) {
    if (!content) return;
    setContent({
      ...content,
      projects: content.projects.map((p) =>
        p.id === id ? { ...p, ...updates } : p
      ),
    });
  }

  function addSkill() {
    if (!content) return;
    setContent({
      ...content,
      about: { ...content.about, skills: [...content.about.skills, ""] },
    });
  }

  function updateSkill(index: number, value: string) {
    if (!content) return;
    const skills = [...content.about.skills];
    skills[index] = value;
    setContent({ ...content, about: { ...content.about, skills } });
  }

  function removeSkill(index: number) {
    if (!content) return;
    const skills = content.about.skills.filter((_, i) => i !== index);
    setContent({ ...content, about: { ...content.about, skills } });
  }

  async function saveArticle(article: Partial<Article>) {
    setSaving(true);
    setMessage("");
    try {
      if (editingArticle) {
        const res = await fetch(`/api/articles/${editingArticle.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(article),
        });
        if (res.ok) {
          setMessage("Článek uložen");
          setEditingArticle(null);
          loadData();
        } else setMessage("Chyba při ukládání");
      } else {
        const res = await fetch("/api/articles", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(article),
        });
        if (res.ok) {
          setMessage("Článek přidán");
          setNewArticle(false);
          loadData();
        } else setMessage("Chyba při ukládání");
      }
    } catch {
      setMessage("Chyba při ukládání");
    } finally {
      setSaving(false);
    }
  }

  async function deleteArticle(id: string) {
    if (!confirm("Smazat článek?")) return;
    const res = await fetch(`/api/articles/${id}`, { method: "DELETE" });
    if (res.ok) {
      setMessage("Článek smazán");
      setEditingArticle(null);
      loadData();
    }
  }

  async function uploadArticlePhoto(onUpload: (url: string) => void) {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", "images");
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (data.url) onUpload(data.url);
    };
    input.click();
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted">Načítání...</p>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted">Chyba při načítání dat</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-gray-100">
      <header className="border-b border-surface-light px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Settings size={24} />
          Lokální administrace
        </h1>
        <div className="flex items-center gap-4">
          {message && (
            <span className="text-sm text-accent">{message}</span>
          )}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent"
          >
            Zobrazit web →
          </a>
          <button
            onClick={saveContent}
            disabled={saving || activeTab !== "content"}
            className="flex items-center gap-2 px-4 py-2 bg-accent rounded-lg hover:bg-accent-dark disabled:opacity-50"
          >
            <Save size={18} />
            Uložit
          </button>
        </div>
      </header>

      <div className="flex border-b border-surface-light">
        <button
          onClick={() => {
            setActiveTab("content");
            setEditingArticle(null);
            setNewArticle(false);
          }}
          className={`px-6 py-4 font-medium ${
            activeTab === "content"
              ? "border-b-2 border-accent text-accent"
              : "text-muted hover:text-gray-100"
          }`}
        >
          Obsah stránky
        </button>
        <button
          onClick={() => {
            setActiveTab("articles");
            setEditingArticle(null);
            setNewArticle(false);
          }}
          className={`px-6 py-4 font-medium flex items-center gap-2 ${
            activeTab === "articles"
              ? "border-b-2 border-accent text-accent"
              : "text-muted hover:text-gray-100"
          }`}
        >
          <FileText size={18} />
          Články
        </button>
      </div>

      <main className="max-w-4xl mx-auto p-6">
        {activeTab === "content" && (
          <div className="space-y-8">
            {/* Hero */}
            <section className="bg-surface p-6 rounded-2xl border border-surface-light">
              <h2 className="text-lg font-bold mb-4">Hero sekce</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-muted mb-1">Badge</label>
                  <input
                    type="text"
                    value={content.hero.badge}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        hero: { ...content.hero, badge: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2 bg-surface-light border border-input rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-1">Nadpis</label>
                  <input
                    type="text"
                    value={content.hero.title}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        hero: { ...content.hero, title: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2 bg-surface-light border border-input rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-1">Nadpis (akcent)</label>
                  <input
                    type="text"
                    value={content.hero.titleAccent}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        hero: { ...content.hero, titleAccent: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2 bg-surface-light border border-input rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-1">Popis</label>
                  <textarea
                    value={content.hero.description}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        hero: { ...content.hero, description: e.target.value },
                      })
                    }
                    rows={2}
                    className="w-full px-4 py-2 bg-surface-light border border-input rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-2">Hero fotka (volitelné)</label>
                  <div className="flex items-center gap-4">
                    {content.hero.heroPhoto && (
                      <img
                        src={content.hero.heroPhoto}
                        alt="Hero"
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    )}
                    <button
                      onClick={() => uploadImage("heroPhoto")}
                      className="flex items-center gap-2 px-4 py-2 bg-surface-light rounded-lg hover:border-accent border border-transparent"
                    >
                      <Upload size={18} />
                      Nahrát
                    </button>
                    {content.hero.heroPhoto && (
                      <button
                        onClick={() =>
                          setContent({
                            ...content,
                            hero: { ...content.hero, heroPhoto: "" },
                          })
                        }
                        className="text-red-400 text-sm"
                      >
                        Odstranit
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* About */}
            <section className="bg-surface p-6 rounded-2xl border border-surface-light">
              <h2 className="text-lg font-bold mb-4">O mně</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-muted mb-1">Bio nadpis</label>
                  <input
                    type="text"
                    value={content.about.bioTitle}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        about: { ...content.about, bioTitle: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2 bg-surface-light border border-input rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-1">Bio text</label>
                  <textarea
                    value={content.about.bioText}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        about: { ...content.about, bioText: e.target.value },
                      })
                    }
                    rows={4}
                    className="w-full px-4 py-2 bg-surface-light border border-input rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-2">About fotka (volitelné)</label>
                  <div className="flex items-center gap-4">
                    {content.about.aboutPhoto && (
                      <img
                        src={content.about.aboutPhoto}
                        alt="About"
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    )}
                    <button
                      onClick={() => uploadImage("aboutPhoto")}
                      className="flex items-center gap-2 px-4 py-2 bg-surface-light rounded-lg hover:border-accent border border-transparent"
                    >
                      <Upload size={18} />
                      Nahrát
                    </button>
                    {content.about.aboutPhoto && (
                      <button
                        onClick={() =>
                          setContent({
                            ...content,
                            about: { ...content.about, aboutPhoto: "" },
                          })
                        }
                        className="text-red-400 text-sm"
                      >
                        Odstranit
                      </button>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-muted mb-2">Technologie (jedna na řádek nebo tag)</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {content.about.skills.map((skill, i) => (
                      <span key={i} className="flex items-center gap-1 px-3 py-1 bg-surface-light rounded-full">
                        <input
                          type="text"
                          value={skill}
                          onChange={(e) => updateSkill(i, e.target.value)}
                          className="bg-transparent w-28 text-sm focus:outline-none"
                        />
                        <button onClick={() => removeSkill(i)} className="text-red-400">
                          <Trash2 size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={addSkill}
                    className="text-sm text-accent hover:underline"
                  >
                    + Přidat skill
                  </button>
                </div>
              </div>
            </section>

            {/* Social */}
            <section className="bg-surface p-6 rounded-2xl border border-surface-light">
              <h2 className="text-lg font-bold mb-4">Sociální sítě</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-muted mb-1">GitHub URL</label>
                  <input
                    type="url"
                    value={content.social.github}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        social: { ...content.social, github: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2 bg-surface-light border border-input rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-1">LinkedIn URL</label>
                  <input
                    type="url"
                    value={content.social.linkedin}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        social: { ...content.social, linkedin: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2 bg-surface-light border border-input rounded-lg"
                  />
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-surface p-6 rounded-2xl border border-surface-light">
              <h2 className="text-lg font-bold mb-4">Kontakt</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-muted mb-1">E-mail</label>
                  <input
                    type="email"
                    value={content.contact.email}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        contact: { ...content.contact, email: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2 bg-surface-light border border-input rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-1">Nadpis kontaktu</label>
                  <input
                    type="text"
                    value={content.contact.title}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        contact: { ...content.contact, title: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2 bg-surface-light border border-input rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-1">Podnadpis</label>
                  <textarea
                    value={content.contact.subtitle}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        contact: { ...content.contact, subtitle: e.target.value },
                      })
                    }
                    rows={2}
                    className="w-full px-4 py-2 bg-surface-light border border-input rounded-lg"
                  />
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="bg-surface p-6 rounded-2xl border border-surface-light">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Projekty</h2>
                <button
                  onClick={addProject}
                  className="flex items-center gap-2 px-4 py-2 bg-accent rounded-lg hover:bg-accent-dark"
                >
                  <Plus size={18} />
                  Přidat projekt
                </button>
              </div>
              <div className="space-y-4">
                {content.projects.map((project) => (
                  <div
                    key={project.id}
                    className="p-4 bg-surface-light rounded-xl border border-input"
                  >
                    <div className="flex justify-between mb-3">
                      <span className="text-sm text-muted">#{project.id}</span>
                      <button
                        onClick={() => removeProject(project.id)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="grid gap-3">
                      <input
                        type="text"
                        placeholder="Název"
                        value={project.title}
                        onChange={(e) =>
                          updateProject(project.id, { title: e.target.value })
                        }
                        className="w-full px-4 py-2 bg-background border border-input rounded-lg"
                      />
                      <textarea
                        placeholder="Popis"
                        value={project.description}
                        onChange={(e) =>
                          updateProject(project.id, {
                            description: e.target.value,
                          })
                        }
                        rows={2}
                        className="w-full px-4 py-2 bg-background border border-input rounded-lg"
                      />
                      <div>
                        <label className="block text-xs text-muted mb-1">Tech (čárkou odděleně)</label>
                        <input
                          type="text"
                          value={project.tech.join(", ")}
                          onChange={(e) =>
                            updateProject(project.id, {
                              tech: e.target.value
                                .split(",")
                                .map((t) => t.trim())
                                .filter(Boolean),
                            })
                          }
                          placeholder="Next.js, TypeScript"
                          className="w-full px-4 py-2 bg-background border border-input rounded-lg"
                        />
                      </div>
                      <select
                        value={project.size}
                        onChange={(e) =>
                          updateProject(project.id, {
                            size: e.target.value as "small" | "medium" | "large" | "wide",
                          })
                        }
                        className="w-full px-4 py-2 bg-background border border-input rounded-lg"
                      >
                        <option value="small">Malý</option>
                        <option value="medium">Střední</option>
                        <option value="large">Velký (2x2)</option>
                        <option value="wide">Široký (2x1)</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === "articles" && (
          <div className="space-y-6">
            {!editingArticle && !newArticle && (
              <>
                <div className="flex justify-end">
                  <button
                    onClick={() => setNewArticle(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-accent rounded-lg hover:bg-accent-dark"
                  >
                    <Plus size={18} />
                    Nový článek
                  </button>
                </div>
                <div className="space-y-3">
                  {articles.length === 0 ? (
                    <p className="text-muted py-8 text-center">
                      Zatím žádné články. Klikněte na „Nový článek“.
                    </p>
                  ) : (
                    articles.map((a) => (
                      <div
                        key={a.id}
                        className="flex items-center justify-between p-4 bg-surface rounded-xl border border-surface-light"
                      >
                        <div>
                          <h3 className="font-medium">{a.title}</h3>
                          <p className="text-sm text-muted">{a.excerpt.slice(0, 80)}...</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setEditingArticle(a)}
                            className="px-3 py-1 bg-accent rounded-lg text-sm"
                          >
                            Upravit
                          </button>
                          <button
                            onClick={() => deleteArticle(a.id)}
                            className="px-3 py-1 text-red-400 hover:bg-red-400/10 rounded-lg"
                          >
                            Smazat
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </>
            )}

            {(editingArticle || newArticle) && (
              <ArticleForm
                article={editingArticle || undefined}
                onSave={saveArticle}
                onCancel={() => {
                  setEditingArticle(null);
                  setNewArticle(false);
                }}
                onUploadPhoto={uploadArticlePhoto}
                saving={saving}
              />
            )}
          </div>
        )}
      </main>
    </div>
  );
}

function ArticleForm({
  article,
  onSave,
  onCancel,
  onUploadPhoto,
  saving,
}: {
  article?: Article;
  onSave: (a: Partial<Article>) => void;
  onCancel: () => void;
  onUploadPhoto: (cb: (url: string) => void) => void;
  saving: boolean;
}) {
  const [title, setTitle] = useState(article?.title || "");
  const [slug, setSlug] = useState(article?.slug || "");
  const [excerpt, setExcerpt] = useState(article?.excerpt || "");
  const [content, setContent] = useState(article?.content || "");
  const [photos, setPhotos] = useState<string[]>(article?.photos || []);

  const handleAddPhoto = () => {
    if (photos.length >= 2) return;
    onUploadPhoto((url) => setPhotos((p) => [...p, url]));
  };

  return (
    <div className="bg-surface p-6 rounded-2xl border border-surface-light space-y-4">
      <h2 className="text-lg font-bold">
        {article ? "Upravit článek" : "Nový článek"}
      </h2>
      <p className="text-sm text-muted">
        Každý článek může mít max. 2 fotografie.
      </p>
      <div>
        <label className="block text-sm text-muted mb-1">Název</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 bg-surface-light border border-input rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm text-muted mb-1">Slug (URL)</label>
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="muj-clanek"
          className="w-full px-4 py-2 bg-surface-light border border-input rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm text-muted mb-1">Perex</label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={2}
          className="w-full px-4 py-2 bg-surface-light border border-input rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm text-muted mb-1">Obsah</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={8}
          className="w-full px-4 py-2 bg-surface-light border border-input rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm text-muted mb-2">Fotografie (max. 2)</label>
        <div className="flex gap-4 flex-wrap">
          {photos.map((url, i) => (
            <div key={i} className="relative">
              <img
                src={url}
                alt=""
                className="w-32 h-32 object-cover rounded-lg"
              />
              <button
                onClick={() => setPhotos((p) => p.filter((_, j) => j !== i))}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
              >
                ×
              </button>
            </div>
          ))}
          {photos.length < 2 && (
            <button
              onClick={handleAddPhoto}
              className="w-32 h-32 border-2 border-dashed border-surface-light rounded-lg flex items-center justify-center hover:border-accent text-muted"
            >
              <ImageIcon size={32} />
            </button>
          )}
        </div>
      </div>
      <div className="flex gap-3 pt-4">
        <button
          onClick={() =>
            onSave({
              title,
              slug: slug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
              excerpt,
              content,
              photos,
            })
          }
          disabled={saving}
          className="flex items-center gap-2 px-4 py-2 bg-accent rounded-lg hover:bg-accent-dark disabled:opacity-50"
        >
          <Save size={18} />
          Uložit
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-surface-light rounded-lg hover:bg-surface"
        >
          Zrušit
        </button>
      </div>
    </div>
  );
}
