export const SITE_URL = "https://phraramq.com";

export const companyInfo = {
  name: "PhraramQ",
  legalName: "PhraramQ Pharmaceuticals",
  shortDescription:
    "An innovation-led pharmaceutical business focused on reliable, affordable, and high-quality healthcare products.",
  longDescription:
    "PhraramQ partners with healthcare professionals and distributors to deliver trusted pharmaceutical products. We combine quality systems, ethical business practices, and efficient supply operations to improve patient outcomes at scale.",
  email: "hello@phraramq.com",
  phone: "+92-300-0000000",
  address: "Suite 204, Health Tower, Karachi, Pakistan",
  social: {
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
  },
};

export type NavChildItem = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChildItem[];
};

export const heroBackgrounds = [
  "/Hero%20img/hero1.png",
  "/Hero%20img/hero2.png",
  "/Hero%20img/hero3.png",
  "/Hero%20img/hero4.png",
] as const;

export const navMenu: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "What We Do",
    href: "/what-we-do",
    children: [
      { label: "Global Presence", href: "/what-we-do/global-presence" },
      {
        label: "National Distribution Setup",
        href: "/what-we-do/national-distribution-setup",
      },
      { label: "Our Journey", href: "/what-we-do/our-journey" },
      {
        label: "Marketing Portfolio",
        href: "/what-we-do/marketing-portfolio",
      },
      { label: "Products", href: "/products" },
    ],
  },
  {
    label: "Who We Are",
    href: "/who-we-are",
    children: [
      { label: "CEO Message", href: "/who-we-are/ceo-message" },
      {
        label: "Mission, Vision & Values",
        href: "/who-we-are/mission-vision-values",
      },
      { label: "Corporate Profile", href: "/who-we-are/corporate-profile" },
    ],
  },
  {
    label: "CSR",
    href: "/csr",
    children: [
      { label: "Research Forum", href: "/csr/research-forum" },
      { label: "Social Activities", href: "/csr/social-activities" },
      { label: "Training Camps", href: "/csr/training-camps" },
      { label: "Medical Camp", href: "/csr/medical-camp" },
    ],
  },
  {
    label: "News & Media",
    href: "/news-media",
    children: [
      { label: "Social Media", href: "/news-media/social-media" },
      { label: "Our Culture", href: "/news-media/our-culture" },
      { label: "Learn With Us", href: "/news-media/learn-with-us" },
    ],
  },
  {
    label: "Manufacturing Facilities",
    href: "/manufacturing-facilities",
    children: [
      {
        label: "Main Plant",
        href: "/manufacturing-facilities/main-plant",
      },
      {
        label: "Cephalosporin Plant",
        href: "/manufacturing-facilities/cephalosporin-plant",
      },
      {
        label: "Quality Control",
        href: "/manufacturing-facilities/quality-control",
      },
      {
        label: "Quality Assurance",
        href: "/manufacturing-facilities/quality-assurance",
      },
      {
        label: "Research & Development",
        href: "/manufacturing-facilities/research-development",
      },
    ],
  },
  {
    label: "Drug Safety",
    href: "/drug-safety",
    children: [
      { label: "Pharmacovigilance", href: "/drug-safety/pharmacovigilance" },
      {
        label: "Product & Business Development",
        href: "/drug-safety/product-business-development",
      },
      { label: "Clinical Research", href: "/drug-safety/clinical-research" },
    ],
  },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

export const navLinks = navMenu.map(({ label, href }) => ({ label, href }));

export const coreStats = [
  { label: "Products", value: "12+" },
  { label: "Cities Served", value: "80+" },
  { label: "Distribution Partners", value: "150+" },
  { label: "Quality Promise", value: "100%" },
];

export const capabilities = [
  {
    title: "Product Development",
    description:
      "We curate and expand a portfolio that addresses practical clinical needs and evolving market demand.",
    image: "/detailImage.jpeg",
  },
  {
    title: "Responsible Operations",
    description:
      "Our teams follow strict quality, safety, and compliance standards across sourcing, handling, and delivery.",
    image: "/brandimg.jpeg",
  },
  {
    title: "Distribution Reliability",
    description:
      "With a responsive network, we maintain predictable product availability for healthcare providers.",
    image: "/allproductImage.jpeg",
  },
];

export const faqs = [
  {
    question: "What does PhraramQ specialize in?",
    answer:
      "PhraramQ specializes in supplying pharmaceutical products with a focus on quality consistency, dependable availability, and regulatory compliance.",
  },
  {
    question: "Do you support wholesale and distribution partnerships?",
    answer:
      "Yes. We actively collaborate with distributors, clinics, and pharmacies through structured supply and support models.",
  },
  {
    question: "How can I contact your business team?",
    answer:
      "You can use our contact form or email us directly at hello@phraramq.com for business and product inquiries.",
  },
];
