import { Banknote, Headset, Truck, ShoppingBag } from "lucide-react";

export interface Vertical {
  id: "general" | "bfsi" | "bpo" | "tsl" | "ecommerce";
  label: string;
  eyebrowLabel: string;
  heroAudience: string;
  description: string;
  icon: any;
  step1Examples?: string[];
  testimonial: {
    quote: string;
    role: string;
  };
  metrics?: Record<string, string>;
}

export const verticals: Vertical[] = [
  {
    id: "general",
    label: "General",
    eyebrowLabel: "FOR INDEPENDENT FINANCIAL ADVISORS | BPO FOUNDERS | FREIGHT AGENTS | E‑COMMERCE LEADERS",
    heroAudience: "Business Leaders",
    description: "Complete AI Growth Systems for all industries",
    icon: null,
    testimonial: {
      quote: "The AI system transformed our entire operation. We're handling 3x the volume with the same team.",
      role: "Business Owner"
    }
  },
  {
    id: "bfsi",
    label: "BFSI",
    eyebrowLabel: "FOR INDEPENDENT FINANCIAL ADVISORS",
    heroAudience: "Financial Advisors",
    description: "Finance, Banking & Insurance",
    icon: Banknote,
    step1Examples: ["FINRA compliance workflows", "AUM reporting automation", "Client onboarding processes"],
    testimonial: {
      quote: "I was spending over 20 hours a week on compliance paperwork. The Operations System automated 70% of it in the first month. For the first time, I'm spending my time with clients, not files. It paid for itself in 6 weeks.",
      role: "Independent Financial Advisor"
    },
    metrics: {
      "Compliance Time Saved": "70%",
      "Client Capacity Increase": "3x",
      "ROI Timeline": "6 weeks"
    }
  },
  {
    id: "bpo",
    label: "BPO",
    eyebrowLabel: "FOR BPO FOUNDERS",
    heroAudience: "BPO Leaders",
    description: "Outsourcing / Contact Centers",
    icon: Headset,
    step1Examples: ["Average Handle Time optimization", "Agent productivity tracking", "Quality assurance automation"],
    testimonial: {
      quote: "We couldn't compete with larger centers on price or technology. The Accelerator System gave us the AI automation to handle 2x the call volume without hiring more agents, massively improving our profit margins and letting us win larger contracts.",
      role: "BPO Founder"
    },
    metrics: {
      "Call Volume Increase": "2x",
      "Profit Margin Improvement": "45%",
      "Agent Efficiency": "85%"
    }
  },
  {
    id: "tsl",
    label: "TSL",
    eyebrowLabel: "FOR FREIGHT AGENTS",
    heroAudience: "Logistics Leaders",
    description: "Transport, Freight & Logistics",
    icon: Truck,
    step1Examples: ["Load matching optimization", "Route planning automation", "Carrier compliance tracking"],
    testimonial: {
      quote: "I was losing loads every night because I couldn't answer the phone. The 24/7 Quoting System captures and quotes leads while I sleep. It landed me one extra load in the first week that paid for the entire month's service.",
      role: "Overwhelmed Freight Agent"
    },
    metrics: {
      "Lead Capture Rate": "95%",
      "Response Time": "< 2 min",
      "Revenue Increase": "40%"
    }
  },
  {
    id: "ecommerce",
    label: "E‑commerce",
    eyebrowLabel: "FOR E‑COMMERCE LEADERS",
    heroAudience: "E‑commerce Leaders",
    description: "Specialized Retail",
    icon: ShoppingBag,
    step1Examples: ["Cart abandonment recovery", "Personalization engines", "Inventory optimization"],
    testimonial: {
      quote: "Our cart abandonment rate was killing us. Generic personalization tools didn't work. The Personalized Commerce Engine recovered 35% of abandoned carts in the first quarter, directly adding 6-figures to our top line.",
      role: "E‑Commerce Growth Manager"
    },
    metrics: {
      "Cart Recovery Rate": "35%",
      "Revenue Impact": "6-figures",
      "Conversion Lift": "28%"
    }
  }
];

export const getVerticalById = (id: string): Vertical | undefined => {
  return verticals.find(v => v.id === id);
};

export const getVerticalBySlug = (slug: string): Vertical | undefined => {
  const slugMap: Record<string, string> = {
    'bfsi': 'bfsi',
    'bpo': 'bpo',
    'tsl': 'tsl',
    'ecommerce': 'ecommerce'
  };
  
  const verticalId = slugMap[slug];
  return verticalId ? getVerticalById(verticalId) : undefined;
};