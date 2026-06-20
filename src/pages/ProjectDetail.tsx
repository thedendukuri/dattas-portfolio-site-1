import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Code, ExternalLink, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getProjectById } from "@/data/projects";
import { ThemeProvider } from "@/hooks/useTheme";
import { ThemeToggle } from "@/components/ThemeToggle";

function ProjectDetailContent() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);

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
            onClick={() => navigate("/projects")}
            variant="ghost"
            className="hover:text-gold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
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

          {/* Live Site Link + Certificate */}
          {(project.liveUrl || project.certificateUrl) && (
            <div className="flex flex-wrap gap-3 mb-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gold text-gold hover:bg-gold hover:text-background font-semibold transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit {project.liveUrl.replace("https://", "")}
                </a>
              )}
              {project.certificateUrl && (
                <a
                  href={project.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-border text-foreground hover:border-gold hover:text-gold font-semibold transition-colors"
                >
                  <Award className="w-4 h-4" />
                  View Certificate
                </a>
              )}
            </div>
          )}

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

          {/* Image Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="mt-10">
              <h2 className="font-display text-xl text-foreground mb-6">Project Screenshots</h2>

              {/* Main Image */}
              <div className="relative rounded-xl overflow-hidden border border-border bg-card">
                <img
                  src={project.images[activeImage].src}
                  alt={project.images[activeImage].caption}
                  className="w-full object-contain max-h-[520px]"
                />

                {/* Prev / Next buttons */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImage((prev) => (prev - 1 + project.images!.length) % project.images!.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 border border-border hover:border-gold hover:text-gold transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setActiveImage((prev) => (prev + 1) % project.images!.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 border border-border hover:border-gold hover:text-gold transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Caption */}
              <p className="text-center text-sm text-muted-foreground mt-3">
                {project.images[activeImage].caption}
              </p>

              {/* Thumbnail Strip */}
              {project.images.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                        idx === activeImage ? "border-gold" : "border-border hover:border-gold/50"
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="w-20 h-14 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
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
