"use client";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection, { type Project } from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description: "Komplexní administrační rozhraní pro správu online obchodu",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      size: "large",
    },
    {
      id: 2,
      title: "Weather App",
      description: "Minimalistická aplikace pro sledování počasí",
      tech: ["React", "API", "CSS"],
      size: "medium",
    },
    {
      id: 3,
      title: "Portfolio Generator",
      description: "Nástroj pro rychlé vytváření portfolio stránek",
      tech: ["Next.js", "Framer Motion"],
      size: "medium",
    },
    {
      id: 4,
      title: "Task Manager",
      description: "Moderní aplikace pro správu úkolů a projektů s real-time synchronizací",
      tech: ["React", "Firebase", "Tailwind"],
      size: "wide",
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
      <HeroSection />
      <AboutSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </main>
  );
}
