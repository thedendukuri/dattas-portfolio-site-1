import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, Download } from "lucide-react";

const experiences = [
  {
    title: "Supply Chains Analytics Intern",
    company: "Vinayaka Flowers",
    location: "Remote",
    period: "Mar 2026 – Present",
    highlights: [
      "Designed a PostgreSQL-backed ETL pipeline integrating Supabase REST APIs to centralize order and product data, enabling real-time operational reporting and reconciling sales data with inventory records.",
      "Modeled normalized database schemas for products, carts, and orders to support scalable transaction processing across 20+ SKUs. Built SQL-based cart and checkout workflows with pricing, inventory validation, and order finalization logic.",
      "Implemented transactional checkout processing to ensure atomic cart-to-order conversion and data consistency across inventory and order tables; automated inventory updates during checkout.",
    ],
  },
  {
    title: "Founder",
    company: "Prvaaha.com",
    location: "Remote",
    period: "Feb 2026 – Present",
    highlights: [
      "Built a full-stack Indian financial markets platform (Railway/Node, Supabase/PostgreSQL) featuring a live stock screener across 423+ NSE/BSE equities with real-time price data, sector filtering, and market cap–ranked sorting via Yahoo Finance API integration.",
      "Designed multi-timeframe OHLC charting (1D to 1Y) for individual equities alongside a mutual funds tracker, replicating core analytical tools used by retail investors and equity research workflows.",
      "Architected a two-stage RSS news ingestion pipeline using Supabase Edge Functions (Deno/TypeScript) & pg_cron — fetching from 20 sources hourly, deduplicating via SHA-256 content hashing, and processing into normalized tables serving 900+ articles to the frontend.",
    ],
  },
  {
    title: "Operations Specialist",
    company: "NEST Inc.",
    location: "Littleton, MA",
    period: "Jan 2023 – Present",
    highlights: [
      "Supports daily operations managing vendor coordination and inventory monitoring, while periodically generating financial reports using QuickBooks and Excel, incorporating key KPIs into analyses.",
      "Built Excel-based dashboards analyzing POS data to surface demand trends, directly informing weekly purchasing decisions and inventory forecasts.",
      "Performs periodic variance analysis on operational spending to identify cost drivers, supporting budgeting improvements and continuous optimization of expense control.",
    ],
  },
  {
    title: "Retail Banker I",
    company: "TD Bank",
    location: "Woburn, MA",
    period: "Sep 2024 – Apr 2025",
    highlights: [
      "Managed client account servicing and sales support using Salesforce, Odyssey, and Encore, assisting with account openings, lending products, and financial service recommendations.",
      "Maintained compliance with federal banking regulations, reviewing transaction activity and supporting internal audit procedures.",
      "Identified cross-sell opportunities for deposit accounts and CDs, contributing to branch referral and sales targets.",
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
    degree: "B.Sc. Business Administration (MIS & Finance)",
    school: "University of Massachusetts, Lowell",
    status: "Completed",
    expected: "Sep 2019 – Aug 2024 | Dual concentration: Finance & MIS",
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
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Building expertise in finance, data analytics, and operational excellence
          </p>
          <a
            href="/gopal-dendukuri-resume.pdf"
            download="Gopal-Dendukuri-Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gold text-gold hover:bg-gold hover:text-background font-semibold transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
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
