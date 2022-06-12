import React from "react";
import { AboutMeSection } from "../components/AboutMeSection";
// import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* <AboutSection /> */}
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};
