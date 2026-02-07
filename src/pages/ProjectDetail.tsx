import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProjectById } from "@/data/projects";
import { ThemeProvider } from "@/hooks/useTheme";
import { ThemeToggle } from "@/components/ThemeToggle";

function ProjectDetailContent() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  const CategoryIcon = project.category === "finance" ? TrendingUp : Code;

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4 max-w-4xl">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="hover:text-gold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-lg bg-gold/10">
              <CategoryIcon className="w-5 h-5 text-gold" />
            </div>
            <span className="text-sm text-gold font-medium capitalize">
              {project.category === "finance" ? "Finance Project" : "Analytics & Technical"}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-12">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full bg-gold/10 text-gold border border-gold/20 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Details */}
          <div className="bg-card rounded-xl border border-border p-8">
            <h2 className="font-display text-xl text-foreground mb-4">Project Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.details}
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default function ProjectDetail() {
  return (
    <ThemeProvider>
      <ProjectDetailContent />
    </ThemeProvider>
  );
}
