export interface Project {
  id: string;
  title: string;
  description: string;
  details: string;
  technologies: string[];
  category: "finance" | "technical";
}

export const financeProjects: Project[] = [
  {
    id: "jp-morgan-simulation",
    title: "JP Morgan Investment Banking Simulation",
    description: "Comprehensive virtual internship experience focusing on M&A advisory and valuation",
    details: "Performed DCF valuations, comparable company analysis, and developed pitch presentations for potential M&A transactions. Created detailed financial models and executive summaries.",
    technologies: ["Excel", "PowerPoint", "Financial Modeling", "DCF"],
    category: "finance",
  },
  {
    id: "monthly-variance-analysis",
    title: "Monthly Variance Analysis",
    description: "Budget variance analysis framework for cost control and performance tracking",
    details: "Developed automated variance analysis reports comparing actual vs. budgeted expenses. Identified cost overruns and provided actionable recommendations for departmental spending.",
    technologies: ["Excel", "PivotTables", "VBA", "Financial Reporting"],
    category: "finance",
  },
  {
    id: "quickbooks-integration",
    title: "QuickBooks Integration & Standardization",
    description: "Streamlined invoicing and billing processes for operational efficiency",
    details: "Implemented standardized invoice templates and billing workflows in QuickBooks. Reduced invoice processing time by 40% and improved accounts receivable accuracy to 98%.",
    technologies: ["QuickBooks", "Process Automation", "AR Management"],
    category: "finance",
  },
];

export const technicalProjects: Project[] = [
  {
    id: "sales-data-validation",
    title: "Sales Data Validation & Automation",
    description: "Python automation for donor reports and email receipt generation",
    details: "Built automated data validation pipelines using Python to verify donor records and generate personalized email receipts. Integrated with existing CRM systems for seamless data flow.",
    technologies: ["Python", "Pandas", "Automation", "Data Validation"],
    category: "technical",
  },
  {
    id: "prthvi-ecommerce",
    title: "Prthvi E-Commerce Platform",
    description: "Full-stack e-commerce website development using React.js",
    details: "Developed a responsive e-commerce platform with product catalog, shopping cart, and checkout functionality. Implemented user authentication and order management features.",
    technologies: ["React.js", "JavaScript", "CSS", "E-commerce"],
    category: "technical",
  },
  {
    id: "pos-migration-toast",
    title: "POS System Migration to Toast",
    description: "Led point-of-sale migration reducing vendor fees by 15%",
    details: "Managed the complete migration from legacy POS to Toast platform. Conducted vendor analysis, negotiated pricing, and coordinated staff training for smooth transition.",
    technologies: ["Toast POS", "Project Management", "Vendor Negotiation"],
    category: "technical",
  },
  {
    id: "doordash-analytics",
    title: "DoorDash Operations Analytics",
    description: "Channel performance analytics and pricing optimization",
    details: "Analyzed delivery channel performance data to optimize pricing strategies. Developed dashboards to track order volumes, delivery times, and customer satisfaction metrics.",
    technologies: ["Data Analytics", "Excel", "Pricing Strategy"],
    category: "technical",
  },
  {
    id: "q4-sales-analysis",
    title: "Q4 Sales Analysis",
    description: "SQL-based transactional data insights for quarterly reporting",
    details: "Created complex SQL queries to extract and analyze Q4 transactional data. Generated insights on sales trends, customer segments, and product performance for executive reporting.",
    technologies: ["SQL", "Data Analysis", "Business Intelligence"],
    category: "technical",
  },
];

export const allProjects = [...financeProjects, ...technicalProjects];

export function getProjectById(id: string): Project | undefined {
  return allProjects.find((project) => project.id === id);
}
