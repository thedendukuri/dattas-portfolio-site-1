import { motion } from "framer-motion";

interface NavDotsProps {
  sections: string[];
  currentSection: number;
  onNavigate: (index: number) => void;
}

export function NavDots({ sections, currentSection, onNavigate }: NavDotsProps) {
  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      {sections.map((section, index) => (
        <motion.button
          key={section}
          onClick={() => onNavigate(index)}
          className="group relative flex items-center justify-end"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Go to ${section}`}
        >
          {/* Tooltip */}
          <span className="absolute right-8 px-2 py-1 text-xs font-medium bg-card text-foreground rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
            {section}
          </span>
          
          {/* Dot */}
          <motion.div
            className={`w-3 h-3 rounded-full border-2 transition-colors ${
              currentSection === index
                ? "bg-gold border-gold"
                : "bg-transparent border-muted-foreground hover:border-gold"
            }`}
            animate={{
              scale: currentSection === index ? 1.2 : 1,
            }}
          />
        </motion.button>
      ))}
    </nav>
  );
}
