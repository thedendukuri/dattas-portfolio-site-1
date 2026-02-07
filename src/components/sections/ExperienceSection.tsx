import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Operations Specialist",
    company: "NEST Canteen",
    location: "Littleton, MA",
    period: "Jan 2023 – Present",
    highlights: [
      "Built and scaled the restaurant from launch through daily operations, leading end-to-end operations including vendor sourcing, pricing strategy, inventory management, cash flow tracking, & invoice generation using QuickBooks",
      "Supports capacity planning & supply chain analytics by forecasting inventory needs, tracking vendor lead times & modeling weekly demand",
      "Analyzes data from Toast for regular trends analysis using Excel; designed & tracked weekly financial metrics (revenue, margins, spend)",
      "Currently building a lightweight admin portal using React.js, Google Firebase, & Python to automate reporting, reconciliation, & receipt/email generation",
      "Integrated a new POS system and revenue channels that increased monthly revenues by approximately 130%",
    ],
  },
  {
    title: "Retail Banker I",
    company: "TD Bank",
    location: "Woburn, MA",
    period: "Sep 2024 – Apr 2025",
    highlights: [
      "Supported client account servicing & sales activities using Odyssey, Salesforce Retail, and Encore",
      "Met quarterly sales and referral targets through cross-selling accounts, CDs, and loan referrals",
      "Maintained client relationships and ensured regulatory compliance in daily transactions",
    ],
  },
  {
    title: "Building Manager",
    company: "University of Massachusetts, Lowell",
    location: "Lowell, MA",
    period: "Sep 2021 – Dec 2022",
    highlights: [
      "Coordinated event logistics and daily facility operations",
      "Provided AV and on-site support for university events and external guests",
    ],
  },
];

const education = [
  {
    degree: "M.B.A. Finance",
    school: "University of Massachusetts, Lowell",
    status: "In Progress",
    expected: "Jan 2025 – Dec 2026 | 3.35 GPA",
  },
  {
    degree: "Graduate Certificate in Financial Management",
    school: "University of Massachusetts, Lowell",
    status: "Completed",
    expected: "Jan 2025 – May 2025 | 3.20 GPA",
  },
  {
    degree: "B.Sc. Business Administration (MIS & Finance)",
    school: "University of Massachusetts, Lowell",
    status: "Completed",
    expected: "Sep 2019 – Aug 2024",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export function ExperienceSection() {
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
            Experience & <span className="text-gold">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building expertise in finance, data analytics, and operational excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-gold" />
              <h3 className="font-display text-xl text-foreground">Professional Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-6 border-l-2 border-border hover:border-gold transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-card border-2 border-gold" />
                  
                  <div className="bg-card rounded-lg p-4 border border-border hover:border-gold/50 transition-colors">
                    <h4 className="font-semibold text-foreground">{exp.title}</h4>
                    <p className="text-gold font-medium">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-1 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-gold mt-1.5">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-gold" />
              <h3 className="font-display text-xl text-foreground">Education</h3>
            </div>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card rounded-lg p-5 border border-border hover:border-gold/50 transition-colors"
                >
                  <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-gold">{edu.school}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      edu.status === "In Progress" 
                        ? "bg-gold/20 text-gold" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {edu.status}
                    </span>
                    {edu.expected && (
                      <span className="text-xs text-muted-foreground">{edu.expected}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
