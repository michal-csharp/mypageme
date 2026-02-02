"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  size: "small" | "medium" | "large" | "wide";
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
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
  );
}
