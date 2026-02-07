import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

export function HomeSection() {
  return (
    <section className="snap-section relative flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 navy-gradient opacity-10 dark:opacity-30" />
      
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <img
              src={profilePhoto}
              alt="Datta Gopal Dendukuri"
              className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover gold-border"
            />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-gold/30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-4"
        >
          Datta Gopal{" "}
          <span className="text-gold">Dendukuri</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground font-medium mb-6"
        >
          Finance & Data Analytics Professional
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Hello! My name is Datta Gopal Dendukuri. I am an MBA Student at UMass Lowell with expertise in financial modeling and data analytics. 
          Combined with my undergrad degree and 3 years of experience ( 3 years as with a local small business as an operations & strategy lead, 
          and 1 year as a Banker at TD Bank, I've grown passionate about leveraging data-driven insights to drive business growth. I am currently 
          looking for internship opportunities to further my professional growth.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://www.linkedin.com/in/datta-dendukuri/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-gold hover:text-gold transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/thedendukuri"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-gold hover:text-gold transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="mailto:ddendukuri@outlook.com"
            className="p-3 rounded-full bg-card border border-border hover:border-gold hover:text-gold transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-gold" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
