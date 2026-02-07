import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { TrendingUp, Code, ArrowRight } from "lucide-react";
import { financeProjects, technicalProjects, Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={() => navigate(`/project/${project.id}`)}
      className="w-full text-left bg-card rounded-lg border border-border hover:border-gold/50 transition-colors p-4 group"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h4 className="font-semibold text-foreground mb-1 group-hover:text-gold transition-colors">
            {project.title}
          </h4>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-gold shrink-0 transition-colors" />
      </div>
    </motion.button>
  );
}

export function ProjectsSection() {
  return (
    <section className="snap-section relative flex items-center py-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Featured <span className="text-gold">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of finance and technical projects demonstrating analytical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Finance Projects */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-gold" />
              <h3 className="font-display text-xl text-foreground">Finance Projects</h3>
            </div>
            <div className="space-y-4">
              {financeProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>

          {/* Technical Projects */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Code className="w-5 h-5 text-gold" />
              <h3 className="font-display text-xl text-foreground">Analytics & Technical</h3>
            </div>
            <div className="space-y-4">
              {technicalProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
