"use client";

import {
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "BotClash.live",
      description:
        "Interaktivní platforma zaměřená na souboje botů, živé výsledky a komunitní engagement. Projekt je navržený pro rychlou orientaci, silný vizuál a škálovatelný frontend.",
      tech: ["Next.js", "TypeScript", "Realtime UI", "Tailwind CSS"],
      url: "https://botclash.live",
      label: "Live produkt",
    },
    {
      id: 2,
      title: "JollyWoof eShop",
      description:
        "Moderní e-shop zaměřený na čistý nákupní proces, jasnou produktovou prezentaci a mobilní použitelnost. Důraz na výkon, UX a jednoduchou správu obsahu.",
      tech: ["Next.js", "E-commerce", "Responsive UI", "Vercel"],
      url: "https://jollywoof-eshop.vercel.app",
      label: "E-shop demo",
    },
  ];

  const skills = [
    "React & Next.js",
    "TypeScript",
    "Tailwind CSS",
    "UI Systems",
    "UX Design",
    "Responsive Design",
  ];

  return (
    <main className="min-h-screen bg-background text-gray-100">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-surface border border-surface-light rounded-full text-sm text-muted"
          >
            <Sparkles size={14} />
            Dostupný pro nové projekty
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight leading-tight">
            Moderní weby,
            <span className="block text-accent">které dávají smysl.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted mb-12 max-w-2xl mx-auto">
            Frontend vývoj a design v minimalistickém stylu. Rychlé rozhraní,
            čistá struktura a důraz na detail.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="group px-7 py-3.5 bg-accent hover:bg-accent-dark transition-colors rounded-full text-base font-medium flex items-center justify-center gap-2"
            >
              Portfolio
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 bg-surface border border-surface-light hover:border-accent/40 transition-colors rounded-full text-base font-medium"
            >
              Kontakt
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="px-4 py-14 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">O mně</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 bg-surface p-8 rounded-2xl border border-surface-light"
            >
              <h3 className="text-2xl font-semibold mb-4">Ahoj!</h3>
              <p className="text-muted leading-relaxed">
                Jsem frontend developer s vášní pro čistý kód a moderní design.
                Vytvářím rychlé a přehledné weby, které pomáhají značkám růst.
                Nejvíc mě baví spojení performance, jednoduchého UX a elegantního UI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-surface p-8 rounded-2xl border border-surface-light"
            >
              <h3 className="text-2xl font-semibold mb-4">Fokus</h3>
              <p className="text-muted">
                Minimalismus, rychlost a konzistence napříč celým produktem.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-surface p-8 rounded-2xl border border-surface-light"
            >
              <h3 className="text-2xl font-semibold mb-4">Technologie</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-surface-light rounded-full text-sm border border-surface-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-surface p-8 rounded-2xl border border-surface-light"
            >
              <h3 className="text-xl font-semibold mb-4">Najdi mě</h3>
              <div className="flex flex-col gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted hover:text-accent transition-colors"
                >
                  <Github size={24} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
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

      {/* Projects Section */}
      <section id="projects" className="px-4 py-14 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
            Vybrané projekty
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-surface rounded-2xl border border-surface-light hover:border-accent/40 transition-colors overflow-hidden"
              >
                <div className="p-7 md:p-8 min-h-[320px] flex flex-col">
                  <div className="mb-6">
                    <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
                      {project.label}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
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
                  </div>

                  <div className="mt-auto pt-8">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-blue-300 transition-colors"
                    >
                      Otevřít projekt
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-16 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Pojďme společně
            <span className="block text-accent">vytvořit něco skvělého</span>
          </h2>

          <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
            Máte zajímavý projekt nebo hledáte spolupráci? Napište mi!
          </p>

          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-accent hover:bg-accent-dark transition-colors rounded-full text-base font-medium mb-12"
          >
            <Mail size={24} />
            hello@example.com
          </a>

          {/* Footer */}
          <div className="pt-10 mt-10 border-t border-surface-light">
            <div className="flex justify-center gap-6 mb-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-muted text-sm">
              © 2026 Portfolio. Vytvořeno s Next.js a Tailwind CSS.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
