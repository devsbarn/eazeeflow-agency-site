import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BenefitsBar } from "@/components/BenefitsBar";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FinalCTA } from "@/components/FinalCTA";
import { ApplicationForm } from "@/components/ApplicationForm";
import { Footer } from "@/components/Footer";
import { verticals } from "@/content/verticals";

interface PageProps {
  searchParams: { vertical?: string; variant?: string };
}

export default function Home({ searchParams }: PageProps) {
  // Handle query param vertical selection
  const selectedVertical = searchParams.vertical 
    ? verticals.find(v => v.id === searchParams.vertical)
    : undefined;

  return (
    <main className="min-h-screen bg-gray-950">
      <Header />
      <Hero currentVertical={selectedVertical} />
      <BenefitsBar />
      <HowItWorks currentVertical={selectedVertical} />
      <Testimonials currentVertical={selectedVertical} />
      <ComparisonTable />
      <FinalCTA />
      <ApplicationForm currentVertical={selectedVertical} />
      <Footer />
    </main>
  );
}
