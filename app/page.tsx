import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BenefitsBar } from "@/components/BenefitsBar";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FinalCTA } from "@/components/FinalCTA";
import { ApplicationForm } from "@/components/ApplicationForm";
import { Footer } from "@/components/Footer";
// import { verticals } from "@/content/verticals"; // No longer needed for root page

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Header />
      <Hero />
      <BenefitsBar />
      <HowItWorks />
      <Testimonials />
      <ComparisonTable />
      <FinalCTA />
      <ApplicationForm />
      <Footer />
    </main>
  );
}
