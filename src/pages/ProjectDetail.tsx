import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Code, ExternalLink, Award, X, ZoomIn } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getProjectById } from "@/data/projects";
import { ThemeProvider } from "@/hooks/useTheme";
import { ThemeToggle } from "@/components/ThemeToggle";

function ProjectDetailContent() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [lightboxImg, setLightboxImg] = useState<{ src: string; caption: string } | null>(null);

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
        <div className="container mx-auto px-6 py-4 max-w-4xl flex items-center justify-between">
          <Button
            onClick={() => navigate("/projects")}
            variant="ghost"
            className="hover:text-gold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
          {project.id === "wayfair-dashboard" && (
            <p className="text-xs text-muted-foreground italic text-right max-w-[220px] leading-relaxed">
              This project is ongoing —<br className="hidden sm:block" /> I'll keep adding new updates.
            </p>
          )}
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

          {/* Workflow Pathway */}
          {project.images && project.images.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-xl text-foreground mb-1">How I Worked Through It</h2>
              <p className="text-sm text-muted-foreground mb-10">A step-by-step walkthrough of the analysis process</p>

              <div className="relative">
                {/* Vertical connecting line */}
                <div className="absolute left-[19px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-gold via-gold/40 to-transparent" />

                <div className="space-y-12">
                  {project.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.45, delay: idx * 0.05 }}
                      className="relative pl-14"
                    >
                      {/* Step number bubble */}
                      <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-card border-2 border-gold text-gold font-bold text-sm z-10">
                        {idx + 1}
                      </div>

                      {/* Caption / step label */}
                      <p className="text-sm font-medium text-foreground mb-3 leading-relaxed pt-1.5">
                        {img.caption}
                      </p>

                      {/* Screenshot */}
                      <div
                        className="relative group rounded-xl overflow-hidden border border-border bg-card shadow-sm cursor-zoom-in"
                        onClick={() => setLightboxImg(img)}
                      >
                        <img
                          src={img.src}
                          alt={`Step ${idx + 1}`}
                          className="w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                        />
                        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors flex items-center justify-center">
                          <ZoomIn className="w-8 h-8 text-foreground opacity-0 group-hover:opacity-80 transition-opacity drop-shadow" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </main>
      {/* Lightbox */}
      {lightboxImg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-card border border-border hover:border-gold hover:text-gold transition-colors"
            onClick={() => setLightboxImg(null)}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImg.src}
              alt={lightboxImg.caption}
              className="w-full rounded-xl border border-border shadow-2xl object-contain max-h-[80vh]"
            />
            <p className="text-center text-sm text-muted-foreground mt-3 px-4">
              {lightboxImg.caption}
            </p>
          </div>
        </motion.div>
      )}
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
