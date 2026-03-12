"use client";

import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Braces,
  Monitor,
  Cpu,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "BotClash.live",
      description:
        "Real-time platforma pro souboje AI botů. Živé výsledky, komunitní engagement a škálovatelný frontend postavený na moderním stacku.",
      tech: ["Next.js", "TypeScript", "Realtime", "Tailwind CSS"],
      url: "https://botclash.live",
      label: "Live",
      icon: <Cpu size={20} />,
    },
    {
      id: 2,
      title: "JollyWoof eShop",
      description:
        "Kompletní e-shop s důrazem na čistý nákupní flow, mobilní UX a rychlou správu produktů. Optimalizovaný pro konverze.",
      tech: ["Next.js", "E-commerce", "Vercel", "Responsive"],
      url: "https://jollywoof-eshop.vercel.app",
      label: "Demo",
      icon: <Monitor size={20} />,
    },
  ];

  const skills = [
    { name: "React & Next.js", level: 75 },
    { name: "TypeScript", level: 70 },
    { name: "Tailwind CSS", level: 72 },
    { name: "C#", level: 68 },
    { name: "Node.js", level: 60 },
    { name: "Git & CI/CD", level: 62 },
  ];

  const codeSnippet = [
    { line: 1, text: "const developer = {" },
    { line: 2, text: '  name: "michal-csharp",' },
    { line: 3, text: '  role: "Full-Stack Developer",' },
    { line: 4, text: '  stack: ["React", "Next.js", "TS"],' },
    { line: 5, text: "  available: true," },
    { line: 6, text: "};" },
  ];

  return (
    <main className="min-h-screen bg-background text-zinc-100 relative">
      {/* ── NAV ── */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="font-mono text-sm text-accent tracking-wide">
            ~/michal-csharp
          </a>
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-foreground transition-colors">
              Projects
            </a>
            <a
              href="#contact"
              className="px-4 py-1.5 rounded-full border border-accent/40 text-accent hover:bg-accent/10 transition-all"
            >
              Kontakt
            </a>
          </div>
        </div>
      </motion.nav>

      {/* ── HERO ── */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - text */}
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
              open for work
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Stavím weby,
              <br />
              <span className="gradient-text">které fungují.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-muted text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
            >
              Čistý kód, moderní stack a design zaměřený na výsledek. Každý
              projekt řeším od návrhu po deploy.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent-dark transition-colors"
              >
                Projekty
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
              <a
                href="https://github.com/michal-csharp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border rounded-lg text-zinc-300 hover:border-accent/40 transition-colors"
              >
                <Github size={18} />
                GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* Right - code block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="gradient-border glow">
              <div className="bg-surface rounded-2xl p-6">
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs text-muted font-mono">
                    developer.ts
                  </span>
                </div>
                {/* Code lines */}
                <div className="font-mono text-sm leading-7">
                  {codeSnippet.map((line) => (
                    <div key={line.line} className="flex">
                      <span className="w-6 mr-6 text-right text-zinc-700 text-xs select-none leading-7">
                        {line.line}
                      </span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: highlightSyntax(line.text),
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="px-6 py-24 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-10"
          >
            <Terminal size={20} className="text-accent" />
            <h2 className="text-2xl font-bold">O mně</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Bio */}
            <motion.div variants={fadeUp} className="md:col-span-3 gradient-border">
              <div className="bg-surface rounded-2xl p-8">
                <p className="text-zinc-300 leading-relaxed mb-4">
                  Jsem developer s důrazem na frontend a produktový design. Baví
                  mě budovat věci od nuly – od wireframu po produkci.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  Pracuji s React/Next.js ekosystémem, TypeScriptem a moderními
                  CSS frameworky. Každý projekt beru jako příležitost posunout
                  laťku výš – v kódu i v designu.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="md:col-span-2 grid grid-cols-2 gap-4"
            >
              {[
                { value: "2+", label: "Roky praxe" },
                { value: "10+", label: "Projektů" },
                { value: "100%", label: "Spolehlivost" },
                { value: "24h", label: "Odezva" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-surface border border-border rounded-xl p-5 text-center hover:border-accent/30 transition-colors"
                >
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div variants={fadeUp} className="mt-8">
            <div className="bg-surface border border-border rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Braces size={18} className="text-accent" />
                Stack & Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-zinc-300">{skill.name}</span>
                      <span className="text-muted font-mono text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-surface-light rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="px-6 py-24 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-10"
          >
            <Monitor size={20} className="text-accent" />
            <h2 className="text-2xl font-bold">Projekty</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.a
                key={project.id}
                variants={fadeUp}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block gradient-border hover:glow transition-shadow duration-500"
              >
                <div className="bg-surface rounded-2xl p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs font-mono text-accent/70">
                          {project.label}
                        </span>
                      </div>
                    </div>
                    <ExternalLink
                      size={18}
                      className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-mono rounded-md bg-surface-light border border-border text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="px-6 py-24 max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <Mail size={20} className="text-accent" />
            <h2 className="text-2xl font-bold">Kontakt</h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto"
          >
            Máte projekt nebo nápad? Napište mi — rád se podívám, co spolu
            můžeme vytvořit.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="mailto:michvlcek@icloud.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent-dark transition-colors"
            >
              <Mail size={18} />
              michvlcek@icloud.com
            </a>
            <a
              href="https://github.com/michal-csharp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface border border-border rounded-lg text-zinc-300 hover:border-accent/40 transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
          </motion.div>

          {/* Footer */}
          <motion.div variants={fadeUp} className="pt-10 border-t border-border">
            <div className="flex justify-center gap-5 mb-5">
              <a
                href="https://github.com/michal-csharp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-accent transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-zinc-600 text-xs font-mono">
              © 2026 michal-csharp — built with Next.js & Tailwind
            </p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

/* Simple syntax highlight helper */
function highlightSyntax(text: string): string {
  return text
    .replace(/(".*?")/g, '<span class="text-emerald-400">$1</span>')
    .replace(/(const|true)/g, '<span class="text-purple-400">$1</span>')
    .replace(/(\[|\]|\{|\})/g, '<span class="text-cyan-400">$1</span>');
}