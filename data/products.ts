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
    id: "p1",
    slug: "rosavet-10mg",
    name: "Rosavet 10mg",
    category: "Cardiology",
    shortDescription: "Rosuvastatin 10mg tablets for lipid management.",
    description:
      "Rosavet (Rosuvastatin) 10mg is a statin formulation for lowering elevated cholesterol and supporting cardiovascular risk reduction under physician supervision.",
    indications: [
      "Hypercholesterolemia",
      "Dyslipidemia management",
      "Cardiovascular risk reduction",
    ],
    dosageForm: "Oral Tablet",
    packaging: "10 tablets",
    image: "/products/product1.jpeg",
    detailImage: "/products/product1.jpeg",
  },
  {
    id: "p2",
    slug: "rosavet-20mg",
    name: "Rosavet 20mg",
    category: "Cardiology",
    shortDescription: "Rosuvastatin 20mg tablets for lipid management.",
    description:
      "Rosavet (Rosuvastatin) 20mg provides a higher-strength statin option for patients requiring intensified cholesterol control as directed by a physician.",
    indications: [
      "Hypercholesterolemia",
      "Dyslipidemia management",
      "Cardiovascular risk reduction",
    ],
    dosageForm: "Oral Tablet",
    packaging: "10 tablets",
    image: "/products/product2.jpeg",
    detailImage: "/products/product2.jpeg",
  },
  {
    id: "p3",
    slug: "nitren-2-5mg",
    name: "Nitren 2.5mg",
    category: "Cardiology",
    shortDescription: "Nebivolol 2.5mg tablets for blood pressure support.",
    description:
      "Nitren (Nebivolol as Hydrochloride) 2.5mg is a beta-blocker used in hypertension and heart failure management as prescribed by a clinician.",
    indications: [
      "Hypertension",
      "Heart failure support",
      "Cardiovascular therapy",
    ],
    dosageForm: "Oral Tablet",
    packaging: "3 x 10 tablets",
    image: "/products/product3.jpeg",
    detailImage: "/products/product3.jpeg",
  },
  {
    id: "p4",
    slug: "nitren-5mg",
    name: "Nitren 5mg",
    category: "Cardiology",
    shortDescription: "Nebivolol 5mg tablets for blood pressure support.",
    description:
      "Nitren (Nebivolol as Hydrochloride) 5mg offers a higher-strength nebivolol option for sustained blood pressure and cardiac care under medical guidance.",
    indications: [
      "Hypertension",
      "Heart failure support",
      "Cardiovascular therapy",
    ],
    dosageForm: "Oral Tablet",
    packaging: "3 x 10 tablets",
    image: "/products/product4.jpeg",
    detailImage: "/products/product4.jpeg",
  },
  {
    id: "p5",
    slug: "emplon-10-5mg",
    name: "Emplon 10/5mg",
    category: "Cardiology",
    shortDescription: "Empagliflozin+Linagliptin combination tablets.",
    description:
      "Emplon 10/5mg tablets are marketed by Pharma Q Pharmaceutical (Pvt) Ltd for physician-directed cardiovascular therapy.",
    indications: [
      "Hypertension",
      "Blood pressure management",
      "Cardiovascular risk control",
    ],
    dosageForm: "Oral Tablet",
    packaging: "10/5mg blister pack",
    image: "/products/product5.jpeg",
    detailImage: "/products/product5.jpeg",
  },
  {
    id: "p6",
    slug: "emplon-10-5mg-welmark",
    name: "Emplon 10/5mg (Welmark)",
    category: "Cardiology",
    shortDescription: "Emplon 10/5mg tablets by Welmark Pharmaceuticals.",
    description:
      "Emplon 10/5mg tablets manufactured by Welmark Pharmaceuticals for physician-directed cardiovascular therapy.",
    indications: [
      "Hypertension",
      "Blood pressure management",
      "Cardiovascular risk control",
    ],
    dosageForm: "Oral Tablet",
    packaging: "10/5mg blister pack",
    image: "/products/product6.jpeg",
    detailImage: "/products/product6.jpeg",
  },
  {
    id: "p7",
    slug: "pycoxal-tablets",
    name: "Pycoxal",
    category: "Neurology",
    shortDescription:
      "Mecobalamin + L Methyl Folate tablets for nerve support.",
    description:
      "Pycoxal combines mecobalamin (2mg), pyridoxal-5-phosphate (35mg), and L-methyl folate (1000mcg) to support peripheral and diabetic neuropathy care pathways.",
    indications: [
      "Alzheimer's disease support",
      "Peripheral neuropathy",
      "Diabetic neuropathy",
    ],
    dosageForm: "Oral Tablet",
    packaging: "30 tablets",
    image: "/products/product7.jpeg",
    detailImage: "/products/product7.jpeg",
  },
  {
    id: "p8",
    slug: "bonate-d-tablets",
    name: "Bonate-D",
    category: "Bone Health",
    shortDescription:
      "Red algae calcium with vitamins D3, K2, and essential minerals.",
    description:
      "Bonate-D provides red algae calcium (1000mg) with vitamins D3, K2, C, and essential minerals to support bone strength, heart health, and overall vitality.",
    indications: [
      "Bone strength support",
      "Heart health support",
      "Pregnancy and general wellness support",
    ],
    dosageForm: "Oral Tablet",
    packaging: "20 tablets",
    image: "/products/product8.jpeg",
    detailImage: "/products/product8.jpeg",
  },
  {
    id: "p9",
    slug: "brince-40mg",
    name: "Brince 40mg",
    category: "Cardiology",
    shortDescription: "Brince 40mg tablets for hypertension management.",
    description:
      "Brince 40mg tablets are manufactured by Welmark Pharmaceuticals for Pharma Q and used in blood pressure management under physician-directed care.",
    indications: [
      "Hypertension",
      "Blood pressure management",
      "Cardiovascular protection",
    ],
    dosageForm: "Oral Tablet",
    packaging: "40mg blister pack",
    image: "/products/product9.jpeg",
    detailImage: "/products/product9.jpeg",
  },
  {
    id: "p10",
    slug: "welmalt-100mg",
    name: "Welmalt 100mg",
    category: "Hematology",
    shortDescription: "Iron Polymaltose Complex 100mg iron supplement tablets.",
    description:
      "Welmalt (Iron Polymaltose Complex) 100mg provides elemental iron for the treatment and prevention of iron deficiency under physician supervision. Manufactured by Welmark Pharmaceuticals.",
    indications: [
      "Iron deficiency anemia",
      "Iron deficiency prevention",
      "Anemia support therapy",
    ],
    dosageForm: "Oral Tablet",
    packaging: "1 x 10 tablets",
    image: "/products/product10.jpeg",
    detailImage: "/products/product10.jpeg",
  },
];
