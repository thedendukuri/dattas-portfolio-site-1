import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo-1.jpeg";

export function HomeSection() {
  return (
    <section className="snap-section relative flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 navy-gradient opacity-10 dark:opacity-30" />

      {/* Animated background shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4"
        >
          <div className="relative inline-block">
            <img
              src={profilePhoto}
              alt="Datta Gopal Dendukuri"
              className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover gold-border"
            />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-gold/30"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground mb-2"
        >
          Datta Gopal{" "}
          <span className="text-gold">Dendukuri</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground font-medium mb-4"
        >
          MBA Candidate · Finance & Analytics
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-5 leading-relaxed"
        >
          MBA candidate at UMass Lowell with a dual background in Finance & MIS, specializing in analytics, financial modeling, and operational reporting.
          Experienced in transforming business data into actionable insights using Python, SQL, Excel, and Tableau — from building ETL pipelines and full-stack platforms
          to pricing dashboards and category performance analyses. Seeking an early-career role in analytics or financial operations.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center gap-4 mb-4"
        >
          <a
            href="https://www.linkedin.com/in/datta-dendukuri/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-card border border-border hover:border-gold hover:text-gold transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/thedendukuri"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-card border border-border hover:border-gold hover:text-gold transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:ddendukuri@outlook.com"
            className="p-2.5 rounded-full bg-card border border-border hover:border-gold hover:text-gold transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <a
            href="/gopal-dendukuri-resume.pdf"
            download="Gopal-Dendukuri-Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-gold text-gold hover:bg-gold hover:text-background font-semibold transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
