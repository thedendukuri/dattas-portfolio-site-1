import { useState, useRef, useEffect } from "react";
import { ThemeProvider } from "@/hooks/useTheme";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NavDots } from "@/components/NavDots";
import { TopNav } from "@/components/TopNav";
import { HomeSection } from "@/components/sections/HomeSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const sections = ["Home", "Experience", "Projects", "Skills", "Contact"];

function Portfolio() {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const sectionHeight = window.innerHeight;
      const newSection = Math.round(scrollTop / sectionHeight);
      
      if (newSection !== currentSection && newSection >= 0 && newSection < sections.length) {
        setCurrentSection(newSection);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  const navigateToSection = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <ThemeToggle />
      <TopNav onNavigate={navigateToSection} />
      <NavDots
        sections={sections}
        currentSection={currentSection}
        onNavigate={navigateToSection}
      />
      
      <main ref={containerRef} className="snap-container">
        <HomeSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}

const Index = () => {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
};

export default Index;
