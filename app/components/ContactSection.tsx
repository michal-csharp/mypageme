"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
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
          Kontaktuj mě
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
            © 2026 Portfolio. Vytvořeno s Next.js a Tailwind CSS.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
