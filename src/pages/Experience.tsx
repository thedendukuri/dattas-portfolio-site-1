import { ThemeProvider } from "@/hooks/useTheme";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TopNav } from "@/components/TopNav";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

const Experience = () => {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <TopNav />
      <ExperienceSection />
    </ThemeProvider>
  );
};

export default Experience;
