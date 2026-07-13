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
    image: "/prod/product1.jpeg",
    detailImage: "/prod/product1.jpeg",
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
    image: "/prod/product2.jpeg",
    detailImage: "/prod/product2.jpeg",
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
    image: "/prod/product3.jpeg",
    detailImage: "/prod/product3.jpeg",
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
    image: "/prod/product4.jpeg",
    detailImage: "/prod/product4.jpeg",
  },
  {
    id: "p5",
    slug: "emplon-10-5mg",
    name: "Emplon 10/5mg",
    category: "Cardiology",
    shortDescription: "Empagliflozin+Linagliptin combination tablets.",
    description:
      "Emplon 10/5mg tablets are marketed by Pharma Q Pharmaceutical (Pvt) Ltd for physician-directed therapy.",
    indications: [
      "Hypertension",
      "Blood pressure management",
      "Cardiovascular risk control",
    ],
    dosageForm: "Oral Tablet",
    packaging: "10/5mg blister pack",
    image: "/prod/product5.jpeg",
    detailImage: "/prod/product5.jpeg",
  },
  {
    id: "p6",
    slug: "emplon-10-5mg-welmark",
    name: "Emplon 10/5mg (Welmark)",
    category: "Cardiology",
    shortDescription: "Emplon 10/5mg tablets by Welmark Pharmaceuticals.",
    description:
      "Emplon 10/5mg tablets manufactured by Welmark Pharmaceuticals for physician-directed therapy.",
    indications: [
      "Hypertension",
      "Blood pressure management",
      "Cardiovascular risk control",
    ],
    dosageForm: "Oral Tablet",
    packaging: "10/5mg blister pack",
    image: "/prod/product6.jpeg",
    detailImage: "/prod/product6.jpeg",
  },
  {
    id: "p7",
    slug: "pycoxal-tablets",
    name: "Pycoxal",
    category: "Neurology",
    shortDescription:
      "Mecobalamin + L Methyl Folate tablets for nerve support.",
    description:
      "Pycoxal combines mecobalamin and L-methyl folate to support peripheral and diabetic neuropathy care pathways.",
    indications: [
      "Alzheimer's disease support",
      "Peripheral neuropathy",
      "Diabetic neuropathy",
    ],
    dosageForm: "Oral Tablet",
    packaging: "30 tablets",
    image: "/prod/product7.jpeg",
    detailImage: "/prod/product7.jpeg",
  },
  {
    id: "p8",
    slug: "bonate-d-tablets",
    name: "Bonate-D",
    category: "Bone Health",
    shortDescription:
      "Red algae calcium with vitamins D3, K2, and essential minerals.",
    description:
      "Bonate-D provides red algae calcium with vitamins D3, K2, C, and essential minerals to support bone strength, heart health, and overall vitality.",
    indications: [
      "Bone strength support",
      "Heart health support",
      "Pregnancy and general wellness support",
    ],
    dosageForm: "Oral Tablet",
    packaging: "20 tablets",
    image: "/prod/product8.jpeg",
    detailImage: "/prod/product8.jpeg",
  },
  {
    id: "p9",
    slug: "brince-40mg",
    name: "Brince 40mg",
    category: "Gastroenterology",
    shortDescription: "Esomeprazole 40mg tablets for acid-related disorders.",
    description:
      "Brince (Esomeprazole) 40mg tablets are manufactured by Welmark Pharmaceuticals for Pharma Q and used in acid-related gastrointestinal care under physician supervision.",
    indications: [
      "Acid reflux management",
      "GERD support",
      "Gastric acid control",
    ],
    dosageForm: "Oral Tablet",
    packaging: "40mg blister pack",
    image: "/prod/product9.jpeg",
    detailImage: "/prod/product9.jpeg",
  },
  {
    id: "p10",
    slug: "welmalt-100mg",
    name: "Welmalt 100mg",
    category: "Hematology",
    shortDescription: "Iron Polymaltose Complex 100mg iron supplement tablets.",
    description:
      "Welmalt (Iron Polymaltose Complex) 100mg provides elemental iron for the treatment and prevention of iron deficiency under physician supervision.",
    indications: [
      "Iron deficiency anemia",
      "Iron deficiency prevention",
      "Anemia support therapy",
    ],
    dosageForm: "Oral Tablet",
    packaging: "2 x 10 tablets",
    image: "/prod/product10.jpeg",
    detailImage: "/prod/product10.jpeg",
  },
];
