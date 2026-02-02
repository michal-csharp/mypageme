"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";

interface AboutSectionProps {
  skills: string[];
}

export default function AboutSection({ skills }: AboutSectionProps) {
  return (
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
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-accent transition-colors"
              >
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
