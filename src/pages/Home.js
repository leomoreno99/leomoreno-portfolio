import React from "react";
import { AboutMeSection } from "../components/AboutSection/AboutMeSection";
import ContactSection from "../components/ContactSection/ContactSection";
import HeroSection from "../components/HeroSection/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection/SkillsSection";
import {NavMenuNew} from '../components/NavMenuNew'

export const Home = ({tema}) => {
  return (
    <div>
      <NavMenuNew />
      <HeroSection />
      <AboutMeSection tema={tema} />
      <SkillsSection />
      <ProjectsSection tema={tema} />
      <ContactSection />
    </div>
  );
};
