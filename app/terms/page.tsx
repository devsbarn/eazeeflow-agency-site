import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Terms of Service - Vertical AI Growth System",
  description: "Terms of service for EazeeFlow's Vertical AI Growth System services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using our services, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
              <p className="text-gray-300 mb-4">
                EazeeFlow provides AI Growth Systems and related consulting services. 
                We reserve the right to modify or discontinue services at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about these Terms, please contact us at legal@eazeeflow.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}