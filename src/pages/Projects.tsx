import { ThemeProvider } from "@/hooks/useTheme";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TopNav } from "@/components/TopNav";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

const Projects = () => {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <TopNav />
      <ProjectsSection />
    </ThemeProvider>
  );
};

export default Projects;
