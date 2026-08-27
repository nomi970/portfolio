import React from "react";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { ContactSection } from "@/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ProcessSection />
      <ContactSection />
    </div>
  );
}
