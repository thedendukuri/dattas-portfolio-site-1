import { ThemeProvider } from "@/hooks/useTheme";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TopNav } from "@/components/TopNav";
import { SkillsSection } from "@/components/sections/SkillsSection";

const Skills = () => {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <TopNav />
      <SkillsSection />
    </ThemeProvider>
  );
};

export default Skills;
