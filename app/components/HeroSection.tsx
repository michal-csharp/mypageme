"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
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
  );
}
