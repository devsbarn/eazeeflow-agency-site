import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BenefitsBar } from "@/components/BenefitsBar";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FinalCTA } from "@/components/FinalCTA";
import { ApplicationForm } from "@/components/ApplicationForm";
import { Footer } from "@/components/Footer";
import { getVerticalBySlug } from "@/content/verticals";
import type { Metadata } from "next";

interface VerticalPageProps {
  params: { vertical: string };
  searchParams: { variant?: string };
}

export async function generateMetadata({ params }: VerticalPageProps): Promise<Metadata> {
  const vertical = getVerticalBySlug(params.vertical);
  
  if (!vertical) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: `${vertical.label} AI Growth System - Reclaim 20+ Hours Per Week`,
    description: `Complete AI Growth Systems built exclusively for ${vertical.description}. Automate client acquisition, operations, and compliance so you can focus on scaling your business.`,
    openGraph: {
      title: `${vertical.label} AI Growth System - Reclaim 20+ Hours Per Week`,
      description: `Complete AI Growth Systems built exclusively for ${vertical.description}. Automate client acquisition, operations, and compliance so you can focus on scaling your business.`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${vertical.label} AI Growth System - Reclaim 20+ Hours Per Week`,
      description: `Complete AI Growth Systems built exclusively for ${vertical.description}. Automate client acquisition, operations, and compliance so you can focus on scaling your business.`,
    },
  };
}

export default function VerticalPage({ params, searchParams }: VerticalPageProps) {
  const vertical = getVerticalBySlug(params.vertical);
  
  if (!vertical) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-950">
      <Header />
      <Hero verticalId={vertical.id} />
      <BenefitsBar />
      <HowItWorks currentVertical={vertical} />
      <Testimonials currentVertical={vertical} />
      <ComparisonTable />
      <FinalCTA />
      <ApplicationForm verticalId={vertical.id} />
      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  return [
    { vertical: 'bfsi' },
    { vertical: 'bpo' },
    { vertical: 'tsl' },
    { vertical: 'ecommerce' },
  ];
}