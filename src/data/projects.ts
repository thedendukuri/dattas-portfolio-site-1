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
    id: "pricing-analysis",
    title: "B2B Pricing Analysis",
    description: "BigQuery SQL analysis identifying a 15% margin optimization strategy across 10K+ transactions",
    details: "Analyzed 10K+ B2B transactions across 50+ competitors using BigQuery SQL with window functions, LAG, and ROW_NUMBER. Identified a 15% margin optimization strategy and built a dynamic pricing dashboard with scenario modeling and data slicers. Recommended volume discount tiers that reduced price-match risk by 22%.",
    technologies: ["BigQuery", "SQL", "Window Functions", "Pricing Strategy", "Data Visualization"],
    category: "finance",
  },
  {
    id: "jp-morgan-simulation",
    title: "JP Morgan Investment Banking Simulation",
    description: "Comprehensive virtual internship experience focusing on M&A advisory and valuation",
    details: "Performed DCF valuations, comparable company analysis, and developed pitch presentations for potential M&A transactions. Created detailed financial models and executive summaries as part of the Forage virtual experience program.",
    technologies: ["Excel", "PowerPoint", "Financial Modeling", "DCF", "Comparable Analysis"],
    category: "finance",
  },
];

export const technicalProjects: Project[] = [
  {
    id: "wayfair-dashboard",
    title: "Wayfair Product Category Dashboard",
    description: "Executive-ready furniture sales analysis quantifying margin and return trends across 2,500+ transactions",
    details: "Analyzed 2,500+ furniture transactions through Jupyter Notebook and SQL (Clickhouse OLAP DB) to build an executive-ready category performance dashboard. Identified top-performing categories (coffee tables: 18.2% margin, 4.1% returns) vs. underperformers (bed frames: 12.3% returns) through pivot analysis, informing supplier negotiation and promotional prioritization.",
    technologies: ["Python", "Jupyter Notebook", "SQL", "Clickhouse", "Data Analysis", "Excel"],
    category: "technical",
  },
  {
    id: "pravaaha-platform",
    title: "Pravaaha.com — Indian Markets Platform",
    description: "Full-stack financial markets platform with live stock screener across 423+ NSE/BSE equities",
    details: "Built a full-stack Indian financial markets platform (Railway/Node, Supabase/PostgreSQL) featuring a live stock screener across 423+ NSE/BSE equities with real-time price data, sector filtering, and market cap–ranked sorting via Yahoo Finance API integration. Designed multi-timeframe OHLC charting (1D to 1Y) and a mutual funds tracker. Architected a two-stage RSS news ingestion pipeline using Supabase Edge Functions (Deno/TypeScript) and pg_cron — fetching from 20 sources hourly, deduplicating via SHA-256 content hashing, and processing into normalized tables serving 900+ articles to the frontend.",
    technologies: ["Node.js", "PostgreSQL", "Supabase", "TypeScript", "Deno", "Yahoo Finance API", "Railway"],
    category: "technical",
  },
  {
    id: "vinayaka-etl",
    title: "Supply Chain ETL Pipeline — Vinayaka Flowers",
    description: "PostgreSQL-backed ETL pipeline integrating Supabase REST APIs for real-time operational reporting",
    details: "Designed a PostgreSQL-backed ETL pipeline integrating Supabase REST APIs to centralize order and product data, enabling real-time operational reporting and reconciling sales data with inventory records. Modeled normalized database schemas for products, carts, and orders to support scalable transaction processing across 20+ SKUs. Implemented transactional checkout processing to ensure atomic cart-to-order conversion and automated inventory updates.",
    technologies: ["PostgreSQL", "Supabase", "ETL", "SQL", "REST APIs", "Data Modeling"],
    category: "technical",
  },
];

export const allProjects = [...financeProjects, ...technicalProjects];

export function getProjectById(id: string): Project | undefined {
  return allProjects.find((project) => project.id === id);
}
