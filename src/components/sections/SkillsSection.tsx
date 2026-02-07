import { motion } from "framer-motion";
import { Database, BarChart3, DollarSign, Wrench, Award } from "lucide-react";

const skillCategories = [
  {
    title: "Data & Analytics",
    icon: Database,
    skills: ["SQL", "Python (Pandas, NumPy)", "R (dplyr, ggplot2)", "Excel (PivotTables, VBA)", "JavaScript"],
  },
  {
    title: "BI & Visualization",
    icon: BarChart3,
    skills: ["Tableau", "Power BI"],
  },
  {
    title: "Finance",
    icon: DollarSign,
    skills: ["Financial Modeling", "DCF Valuation", "Portfolio Optimization", "Budgeting & Cost Control", "VaR Modeling"],
  },
  {
    title: "Systems & Tools",
    icon: Wrench,
    skills: ["Salesforce CRM", "QuickBooks", "Toast POS", "Jupyter Notebook", "ChatGPT", "Agentforce"],
  },
];

const certifications = [
  {
    title: "IBM Data Analysis Using Python",
    issuer: "IBM",
  },
  {
    title: "Bloomberg Markets Certification",
    issuer: "Bloomberg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function SkillsSection() {
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
            Skills & <span className="text-gold">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical proficiency across data analytics, finance, and business intelligence
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-card rounded-lg p-5 border border-border hover:border-gold/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <category.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="w-5 h-5 text-gold" />
            <h3 className="font-display text-xl text-foreground">Professional Certifications</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-card rounded-lg p-4 border border-border hover:border-gold/50 transition-colors text-center"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gold/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-medium text-foreground text-sm mb-1">{cert.title}</h4>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
