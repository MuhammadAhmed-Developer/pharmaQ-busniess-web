import { heroBackgrounds } from "@/data/site";

export type InfoPage = {
  path: string;
  title: string;
  subtitle: string;
  intro: string;
  points: string[];
};

export const infoPages: InfoPage[] = [
  {
    path: "/what-we-do",
    title: "What We Do",
    subtitle: "End-to-end pharmaceutical business support",
    intro:
      "PhraramQ combines product strategy, quality systems, and market execution to serve healthcare providers with reliable pharmaceutical solutions.",
    points: [
      "Design market-relevant product portfolios for hospitals, clinics, and retail channels.",
      "Build demand planning and supply assurance models for uninterrupted availability.",
      "Enable ethical promotion through medically responsible communication.",
    ],
  },
  {
    path: "/what-we-do/global-presence",
    title: "Global Presence",
    subtitle: "Partnerships across regional and international markets",
    intro:
      "Our network-oriented operating model supports long-term presence in target markets through distributor alliances and compliant expansion.",
    points: [
      "Region-specific go-to-market execution with local market adaptation.",
      "Distributor onboarding frameworks with quality and compliance checkpoints.",
      "Cross-border coordination for stable product registration and supply.",
    ],
  },
  {
    path: "/what-we-do/national-distribution-setup",
    title: "National Distribution Setup",
    subtitle: "Reliable nationwide reach with service-level discipline",
    intro:
      "We support broad territory coverage through channel partnerships, demand forecasting, and temperature-safe handling protocols.",
    points: [
      "Structured stock movement planning to reduce stock-outs.",
      "Tiered territory model for major cities and secondary markets.",
      "Field coordination and partner support for last-mile consistency.",
    ],
  },
  {
    path: "/what-we-do/our-journey",
    title: "Our Journey",
    subtitle: "Built on consistency, quality, and trust",
    intro:
      "From focused market entry to a growing pharmaceutical footprint, our journey reflects disciplined execution and long-term healthcare commitment.",
    points: [
      "Started with a mission to improve access to dependable therapy options.",
      "Expanded portfolio through clinically relevant product selection.",
      "Scaled operations while maintaining compliance-first standards.",
    ],
  },
  {
    path: "/what-we-do/marketing-portfolio",
    title: "Marketing Portfolio",
    subtitle: "Therapy-focused portfolio with practical market fit",
    intro:
      "Our portfolio strategy aligns therapeutic need, physician expectations, and supply continuity to support sustainable growth.",
    points: [
      "Coverage across multiple treatment categories.",
      "Lifecycle planning for mature and emerging product lines.",
      "Data-informed portfolio review for evolving clinical demand.",
    ],
  },
  {
    path: "/who-we-are",
    title: "Who We Are",
    subtitle: "An innovation-led and quality-first pharma business",
    intro:
      "PhraramQ is focused on responsible pharmaceutical growth by combining scientific rigor, operational clarity, and patient-centered values.",
    points: [
      "Quality systems embedded in every operational layer.",
      "Ethical business standards and transparent partnerships.",
      "Commitment to long-term healthcare impact.",
    ],
  },
  {
    path: "/who-we-are/ceo-message",
    title: "CEO Message",
    subtitle: "A long-term commitment to healthcare excellence",
    intro:
      "We are building PhraramQ as a trusted pharmaceutical partner where quality, accessibility, and patient outcomes remain our core priorities.",
    points: [
      "Scale with responsibility and scientific discipline.",
      "Invest in people, process, and product consistency.",
      "Create durable value for healthcare communities.",
    ],
  },
  {
    path: "/who-we-are/mission-vision-values",
    title: "Mission, Vision & Values",
    subtitle: "Purpose-led strategy for sustainable healthcare impact",
    intro:
      "Our mission is to deliver reliable pharmaceutical solutions, our vision is healthier communities, and our values guide every decision.",
    points: [
      "Mission: Dependable, affordable, quality-focused medicines.",
      "Vision: Better health outcomes through trusted access.",
      "Values: Integrity, patient focus, excellence, accountability.",
    ],
  },
  {
    path: "/who-we-are/corporate-profile",
    title: "Corporate Profile",
    subtitle: "Structured operations with quality-centered governance",
    intro:
      "Our corporate profile reflects a modern pharmaceutical organization that balances growth with compliance, governance, and stakeholder trust.",
    points: [
      "Clear governance and responsible decision frameworks.",
      "Cross-functional collaboration across key business units.",
      "Scalable systems designed for operational resilience.",
    ],
  },
  {
    path: "/csr",
    title: "Corporate Social Responsibility",
    subtitle: "Community-focused programs beyond business outcomes",
    intro:
      "Our CSR agenda supports social wellbeing through education, awareness, and healthcare-linked initiatives.",
    points: [
      "Community support projects with measurable outcomes.",
      "Health literacy and outreach awareness activities.",
      "Sustainable engagement in social development.",
    ],
  },
  {
    path: "/csr/research-forum",
    title: "Research Forum",
    subtitle: "Knowledge-sharing for medical and scientific growth",
    intro:
      "Our research forums create opportunities for discussion, practical learning, and collaboration among medical stakeholders.",
    points: [
      "Expert-led sessions on current therapeutic trends.",
      "Cross-disciplinary dialogue between clinicians and teams.",
      "Continuous learning culture for evidence-based practice.",
    ],
  },
  {
    path: "/csr/social-activities",
    title: "Social Activities",
    subtitle: "Meaningful engagement with local communities",
    intro:
      "We run social initiatives that strengthen community wellbeing and reinforce our commitment to inclusive progress.",
    points: [
      "Volunteer programs in partnership with local groups.",
      "Support drives for vulnerable communities.",
      "Awareness campaigns on preventive healthcare topics.",
    ],
  },
  {
    path: "/csr/training-camps",
    title: "Training Camps",
    subtitle: "Capacity building for healthcare professionals",
    intro:
      "Our training camps deliver practical, skill-oriented programs that support healthcare teams in real-world settings.",
    points: [
      "Program modules aligned with current practice needs.",
      "Hands-on sessions for better clinical readiness.",
      "Continuous professional development orientation.",
    ],
  },
  {
    path: "/csr/medical-camp",
    title: "Medical Camp",
    subtitle: "Accessible care initiatives for underserved communities",
    intro:
      "Medical camps are designed to increase access to screening, consultation, and awareness in high-need areas.",
    points: [
      "Community-based medical outreach and consultation.",
      "Preventive screening and referral support.",
      "Health education for long-term awareness.",
    ],
  },
  {
    path: "/news-media",
    title: "News & Media",
    subtitle: "Stories, updates, and organizational highlights",
    intro:
      "Explore company updates, social campaigns, and knowledge initiatives that reflect our culture and healthcare contribution.",
    points: [
      "Announcements around milestones and achievements.",
      "Coverage of internal and external engagement activities.",
      "Media-ready updates for partners and stakeholders.",
    ],
  },
  {
    path: "/news-media/social-media",
    title: "Social Media",
    subtitle: "Digital engagement with healthcare communities",
    intro:
      "Our social channels share meaningful updates, educational content, and company culture moments.",
    points: [
      "Channel-specific content for audience relevance.",
      "Regular updates on products, people, and programs.",
      "Transparent two-way communication approach.",
    ],
  },
  {
    path: "/news-media/our-culture",
    title: "Our Culture",
    subtitle: "Performance, collaboration, and integrity in action",
    intro:
      "We foster a workplace culture that rewards ownership, teamwork, and continuous learning.",
    points: [
      "Purpose-driven teams aligned on patient value.",
      "Leadership support for growth and accountability.",
      "Inclusive environment with shared success mindset.",
    ],
  },
  {
    path: "/news-media/learn-with-us",
    title: "Learn With Us",
    subtitle: "Learning platforms for teams and partners",
    intro:
      "Learn With Us is our education-led initiative to support knowledge exchange and capability development.",
    points: [
      "Internal and external learning modules.",
      "Practical sessions led by domain specialists.",
      "Ongoing education as a strategic enabler.",
    ],
  },
  {
    path: "/manufacturing-facilities",
    title: "Manufacturing Facilities",
    subtitle: "Quality-centric infrastructure for dependable output",
    intro:
      "Our manufacturing ecosystem is designed for consistency, compliance, and production reliability.",
    points: [
      "Facility controls aligned with regulated standards.",
      "Process discipline for repeatable product quality.",
      "Capacity planning to support portfolio growth.",
    ],
  },
  {
    path: "/manufacturing-facilities/main-plant",
    title: "Main Plant",
    subtitle: "Core production hub with robust process controls",
    intro:
      "The main plant supports multi-line production with validated systems and trained teams.",
    points: [
      "Standardized production workflows and documentation.",
      "Integrated quality checkpoints at key stages.",
      "Operational flexibility for category-specific output.",
    ],
  },
  {
    path: "/manufacturing-facilities/cephalosporin-plant",
    title: "Cephalosporin Plant",
    subtitle: "Dedicated facility for specialized formulations",
    intro:
      "Our cephalosporin facility is configured for focused production under category-specific controls.",
    points: [
      "Dedicated environment and process segregation.",
      "Validated controls to ensure batch consistency.",
      "Quality monitoring integrated into each stage.",
    ],
  },
  {
    path: "/manufacturing-facilities/quality-control",
    title: "Quality Control",
    subtitle: "Analytical checks for every production stage",
    intro:
      "Quality control teams perform rigorous in-process and finished-product evaluations to maintain trust.",
    points: [
      "Methodical sampling and analytical review protocols.",
      "In-process controls for early issue detection.",
      "Release standards aligned with compliance requirements.",
    ],
  },
  {
    path: "/manufacturing-facilities/quality-assurance",
    title: "Quality Assurance",
    subtitle: "System-level quality oversight and compliance",
    intro:
      "Quality assurance governs process integrity, documentation reliability, and continuous improvement.",
    points: [
      "SOP governance and compliance auditing practices.",
      "Corrective and preventive action workflows.",
      "Cross-team quality culture enablement.",
    ],
  },
  {
    path: "/manufacturing-facilities/research-development",
    title: "Research & Development",
    subtitle: "Innovation pipelines for future-ready products",
    intro:
      "R&D efforts focus on practical formulation innovation and market-aligned product progression.",
    points: [
      "Formulation development based on therapy needs.",
      "Stability and performance evaluations.",
      "Transfer-ready development for scalable manufacturing.",
    ],
  },
  {
    path: "/drug-safety",
    title: "Drug Safety",
    subtitle: "Patient safety and vigilance at the forefront",
    intro:
      "Our drug safety framework ensures continuous monitoring and responsible action throughout product lifecycle.",
    points: [
      "Safety reporting mechanisms for timely visibility.",
      "Structured review of quality and safety signals.",
      "Coordination with stakeholders for risk minimization.",
    ],
  },
  {
    path: "/drug-safety/pharmacovigilance",
    title: "Pharmacovigilance",
    subtitle: "Continuous monitoring for medicine safety",
    intro:
      "Pharmacovigilance activities help identify, assess, and respond to product safety signals in a timely manner.",
    points: [
      "Case intake, evaluation, and escalation workflow.",
      "Timely communication with relevant stakeholders.",
      "Patient-centric safety accountability.",
    ],
  },
  {
    path: "/drug-safety/product-business-development",
    title: "Product & Business Development",
    subtitle: "Balanced growth through strategic portfolio expansion",
    intro:
      "We evaluate opportunities that align therapeutic value, operational feasibility, and long-term business sustainability.",
    points: [
      "Market-led product evaluation and prioritization.",
      "Partnership development for sustainable growth.",
      "Commercial strategy aligned with quality commitments.",
    ],
  },
  {
    path: "/drug-safety/clinical-research",
    title: "Clinical Research",
    subtitle: "Evidence-led support for treatment outcomes",
    intro:
      "Clinical research collaborations and data-informed practices support scientifically responsible healthcare advancement.",
    points: [
      "Structured study support with ethical discipline.",
      "Evidence interpretation for practical application.",
      "Insight generation for future product decisions.",
    ],
  },
  {
    path: "/career",
    title: "Career",
    subtitle: "Build your future with PhraramQ",
    intro:
      "Join a team where innovation, accountability, and healthcare impact come together in meaningful careers.",
    points: [
      "Growth pathways across technical and commercial roles.",
      "Performance culture backed by mentorship and learning.",
      "Purpose-driven environment focused on real impact.",
    ],
  },
];

export function getInfoPageByPath(path: string) {
  return infoPages.find((page) => page.path === path);
}

export function getInfoPageBySegments(slug: string[]) {
  const path = `/${slug.join("/")}`;
  return getInfoPageByPath(path);
}

export function getHeroImageForPath(path: string) {
  const pageIndex = infoPages.findIndex((page) => page.path === path);
  const index = pageIndex >= 0 ? pageIndex % heroBackgrounds.length : 0;
  return heroBackgrounds[index];
}
