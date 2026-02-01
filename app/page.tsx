"use client";

import { Github, Linkedin, Mail, ArrowRight, Code2, Palette, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description: "Komplexní administrační rozhraní pro správu online obchodu",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      size: "large", // 2x2
    },
    {
      id: 2,
      title: "Weather App",
      description: "Minimalistická aplikace pro sledování počasí",
      tech: ["React", "API", "CSS"],
      size: "medium", // 1x1
    },
    {
      id: 3,
      title: "Portfolio Generator",
      description: "Nástroj pro rychlé vytváření portfolio stránek",
      tech: ["Next.js", "Framer Motion"],
      size: "medium", // 1x1
    },
    {
      id: 4,
      title: "Task Manager",
      description: "Moderní aplikace pro správu úkolů a projektů s real-time synchronizací",
      tech: ["React", "Firebase", "Tailwind"],
      size: "wide", // 2x1
    },
  ];

  const skills = [
    "React & Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Figma",
    "UI/UX Design",
    "Responsive Design",
  ];

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
            👋 Dostupný pro nové projekty
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Frontend Developer
            <span className="block text-accent">& Designer</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted mb-12 max-w-2xl mx-auto">
            Tvořím digitální zážitky v Olomouci.
            Specializuji se na moderní webové aplikace a UI design.
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
              className="md:col-span-2 bg-surface p-8 rounded-3xl border border-surface-light hover:border-accent/30 transition-colors"
            >
              <Code2 className="text-accent mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Ahoj!</h3>
              <p className="text-muted leading-relaxed">
                Jsem frontend developer s vášní pro čistý kód a moderní design.
                Miluji vyvíjet rychlé, responzivní aplikace, které poskytují skvělý
                uživatelský zážitek. Pracuji s nejnovějšími technologiemi a rád se učím nové věci.
              </p>
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
              <h3 className="text-2xl font-bold mb-4">Fast</h3>
              <p className="text-muted">
                Rychlé načítání a optimalizovaný výkon jsou moje priority
              </p>
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
                {skills.map((skill, index) => (
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
                  ${project.size === "medium" ? "md:col-span-1" : ""}
                `}
              >
                {/* Placeholder Image Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 group-hover:scale-110 transition-transform duration-500" />

                {/* Content */}
                <div className="relative h-full p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-background via-background/80 to-transparent">
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm md:text-base">
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
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-20 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Pojďme společně
            <span className="block text-accent">vytvořit něco skvělého</span>
          </h2>

          <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
            Máte zajímavý projekt nebo hledáte spolupráci? Napište mi!
          </p>

          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dark transition-colors rounded-full text-xl font-semibold mb-12"
          >
            <Mail size={24} />
            hello@example.com
          </a>

          {/* Footer */}
          <div className="pt-12 mt-12 border-t border-surface-light">
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
              © 2024 Portfolio. Vytvořeno s Next.js a Tailwind CSS.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
