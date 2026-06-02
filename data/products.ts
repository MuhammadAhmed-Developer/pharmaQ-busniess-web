export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  indications: string[];
  dosageForm: string;
  packaging: string;
  image: string;
  detailImage: string;
};

export const products: Product[] = [
  {
    id: "p4",
    slug: "respinex-syrup",
    name: "RespiNex Syrup",
    category: "Respiratory",
    shortDescription: "Respiratory comfort syrup formulation.",
    description:
      "RespiNex Syrup is a physician-guided option for respiratory symptom management and patient comfort.",
    indications: [
      "Upper respiratory discomfort",
      "Supportive therapy",
      "Seasonal respiratory care",
    ],
    dosageForm: "Oral Syrup",
    packaging: "120 ml bottle",
    image: "/products/product7.jpeg",
    detailImage: "/products/product8.jpeg",
  },
  {
    id: "p5",
    slug: "gastrolief-suspension",
    name: "GastroLief Suspension",
    category: "Gastroenterology",
    shortDescription: "Digestive support suspension.",
    description:
      "GastroLief Suspension is manufactured for reliable digestive system support under professional guidance.",
    indications: [
      "Digestive discomfort support",
      "Gastro-protective protocols",
      "Patient follow-up management",
    ],
    dosageForm: "Oral Suspension",
    packaging: "150 ml bottle",
    image: "/products/product9.jpeg",
    detailImage: "/products/product10.jpeg",
  },
  {
    id: "p6",
    slug: "immuno-q-injection",
    name: "Immuno Q Injection",
    category: "Critical Care",
    shortDescription: "Sterile injectable for supervised settings.",
    description:
      "Immuno Q Injection supports hospital-grade treatment pathways where precise dosing and handling are critical.",
    indications: [
      "In-patient managed care",
      "Hospital administration",
      "Clinician-directed use",
    ],
    dosageForm: "Injectable",
    packaging: "5 ampoules pack",
    image: "/products/product11.jpeg",
    detailImage: "/products/product12.jpeg",
  },
  {
    id: "p1",
    slug: "cardiovex-tablets",
    name: "Cardiovex Tablets",
    category: "Cardiology",
    shortDescription: "Daily cardiovascular support formulation.",
    description:
      "Cardiovex Tablets are designed to support routine cardiovascular therapy in supervised care settings.",
    indications: [
      "Cardiovascular risk management",
      "Long-term therapeutic support",
      "Physician-led treatment plans",
    ],
    dosageForm: "Oral Tablet",
    packaging: "3 x 10 blister pack",
    image: "/products/product1.jpeg",
    detailImage: "/products/product2.jpeg",
  },
  {
    id: "p2",
    slug: "neurocalm-capsules",
    name: "NeuroCalm Capsules",
    category: "Neurology",
    shortDescription: "Adjunctive neuro care capsule.",
    description:
      "NeuroCalm Capsules support neurologic wellness protocols with standardized quality controls.",
    indications: [
      "Neurologic support",
      "Adjunctive chronic care",
      "Specialist-supervised usage",
    ],
    dosageForm: "Hard Gelatin Capsule",
    packaging: "2 x 15 capsule strip",
    image: "/products/product3.jpeg",
    detailImage: "/products/product4.jpeg",
  },
  {
    id: "p3",
    slug: "glycoguard-tablets",
    name: "GlycoGuard Tablets",
    category: "Diabetology",
    shortDescription: "Routine glycemic control aid.",
    description:
      "GlycoGuard Tablets are introduced for consistent diabetic care pathways and continuity planning.",
    indications: [
      "Type-2 diabetic support",
      "Metabolic monitoring programs",
      "Chronic condition continuity",
    ],
    dosageForm: "Oral Tablet",
    packaging: "3 x 10 blister pack",
    image: "/products/product5.jpeg",
    detailImage: "/products/product6.jpeg",
  },
];
