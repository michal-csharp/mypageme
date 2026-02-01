"use client";

import { Github, Linkedin, Mail, ArrowRight, Code2, Palette, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { ContentData, Article } from "@/lib/data";

interface HomeContentProps {
  content: ContentData;
  articles: Article[];
}

export default function HomeContent({ content, articles }: HomeContentProps) {
  const { hero, about, social, contact, projects } = content;

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-4 py-2 bg-surface-light rounded-full text-sm text-muted"
          >
            {hero.badge}
          </motion.div>

          {hero.heroPhoto && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-8 mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-accent/30"
            >
              <img
                src={hero.heroPhoto}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}

          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            {hero.title}
            <span className="block text-accent">{hero.titleAccent}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted mb-12 max-w-2xl mx-auto">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="group px-8 py-4 bg-accent hover:bg-accent-dark transition-colors rounded-full text-lg font-semibold flex items-center justify-center gap-2"
            >
              Moje práce
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-surface-light hover:bg-surface transition-colors rounded-full text-lg font-semibold"
            >
              Kontakt
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section - Bento Style */}
      <section className="px-4 py-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">O mně</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 bg-surface p-8 rounded-3xl border border-surface-light hover:border-accent/30 transition-colors flex gap-6"
            >
              {about.aboutPhoto && (
                <div className="shrink-0">
                  <img
                    src={about.aboutPhoto}
                    alt=""
                    className="w-24 h-24 rounded-2xl object-cover"
                  />
                </div>
              )}
              <div>
                <Code2 className="text-accent mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-4">{about.bioTitle}</h3>
                <p className="text-muted leading-relaxed whitespace-pre-line">
                  {about.bioText}
                </p>
              </div>
            </motion.div>

            {/* Quick Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-accent/20 to-accent/5 p-8 rounded-3xl border border-accent/20"
            >
              <Zap className="text-accent mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">{about.fastTitle}</h3>
              <p className="text-muted">{about.fastText}</p>
            </motion.div>

            {/* Skills Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-surface p-8 rounded-3xl border border-surface-light hover:border-accent/30 transition-colors"
            >
              <Palette className="text-accent mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Technologie</h3>
              <div className="flex flex-wrap gap-3">
                {about.skills.filter(Boolean).map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-surface-light rounded-full text-sm border border-surface-light hover:border-accent/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Social Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-surface p-8 rounded-3xl border border-surface-light hover:border-accent/30 transition-colors"
            >
              <h3 className="text-xl font-bold mb-4">Najdi mě</h3>
              <div className="flex flex-col gap-4">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted hover:text-accent transition-colors"
                >
                  <Github size={24} />
                  <span>GitHub</span>
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted hover:text-accent transition-colors"
                >
                  <Linkedin size={24} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section - Bento Grid */}
      <section id="projects" className="px-4 py-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Vybrané projekty
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px]">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                  group relative bg-surface rounded-3xl border border-surface-light
                  hover:border-accent/50 transition-all duration-300 overflow-hidden
                  ${project.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
                  ${project.size === "wide" ? "md:col-span-2" : ""}
                  ${project.size === "medium" || project.size === "small" ? "md:col-span-1" : ""}
                `}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 group-hover:scale-110 transition-transform duration-500" />

                <div className="relative h-full p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-background via-background/80 to-transparent">
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm md:text-base">
                      {project.description}
                    </p>
                    {project.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-surface-light rounded-full text-xs border border-surface-light"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="absolute top-6 right-6 w-10 h-10 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Articles Section */}
      {articles.length > 0 && (
        <section id="articles" className="px-4 py-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Články
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/clanky/${article.slug}`}
                    className="block group bg-surface rounded-3xl border border-surface-light hover:border-accent/50 transition-all overflow-hidden"
                  >
                    {article.photos[0] && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={article.photos[0]}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold group-hover:text-accent transition-colors mb-2">
                        {article.title}
                      </h3>
                      <p className="text-muted text-sm line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="px-4 py-20 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            {contact.title}
            <span className="block text-accent">{contact.titleAccent}</span>
          </h2>

          <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
            {contact.subtitle}
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dark transition-colors rounded-full text-xl font-semibold mb-12"
          >
            <Mail size={24} />
            {contact.email}
          </a>

          {/* Footer */}
          <div className="pt-12 mt-12 border-t border-surface-light">
            <div className="flex justify-center gap-6 mb-6">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-muted text-sm">
              © {new Date().getFullYear()} Portfolio. Vytvořeno s Next.js a Tailwind CSS.
              {" · "}
              <Link href="/admin" className="hover:text-accent transition-colors">
                Admin
              </Link>
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
