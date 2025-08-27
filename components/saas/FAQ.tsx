"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, DollarSign, Settings, Zap, Users } from "lucide-react";

const faqs = [
  {
    question: "How quickly will I see results from the AI systems?",
    answer: "You'll see immediate improvements in lead response time (within 24 hours of launch) and measurable increases in qualified leads within 30 days. Most clients achieve 3× ROI within 90 days through improved conversions and operational savings. The systems are designed for rapid value delivery, not lengthy development cycles.",
    icon: Clock
  },
  {
    question: "What's the real ROI and how do you guarantee it?",
    answer: "Our clients typically see 3-5× more qualified MQLs within 3-6 months, 25-95% profit increases from retention improvements, and $10Ks in operational savings. We guarantee 3× ROI within 90 days for our Tier 3 clients, and offer a 30-day value guarantee across all tiers. If you don't see measurable improvements, we'll refund your setup fee.",
    icon: DollarSign
  },
  {
    question: "How do these systems integrate with our existing SaaS tools?",
    answer: "Our AI systems are built specifically for SaaS workflows and integrate seamlessly with popular tools like HubSpot, Salesforce, Zendesk, Intercom, and Stripe. We handle all technical integration during the setup phase, ensuring your existing data flows and processes remain intact while being enhanced by AI automation.",
    icon: Settings
  },
  {
    question: "What makes this different from other AI tools or agencies?",
    answer: "Unlike generic AI agencies or standalone tools, we deliver complete, integrated systems designed specifically for SaaS companies. Our solutions create compounding value across sales, success, and operations – not just isolated improvements. We understand SaaS metrics, buyer behavior, and operational challenges that generic providers miss.",
    icon: Zap
  },
  {
    question: "Do we need technical expertise to manage these systems?",
    answer: "No technical expertise required. We handle all setup, configuration, and integration. Your team receives comprehensive training, and we provide ongoing support and optimization. The systems are designed to be managed by your existing sales, marketing, and customer success teams without needing developers or AI specialists.",
    icon: Users
  }
];

export function FAQ() {
  return (
    <section className="py-20 bg-gray-900/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Common Questions About AI Implementation
          </h2>
          <p className="text-xl text-gray-300">
            Get answers to the most important questions SaaS leaders ask about AI system integration.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon;
            return (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-900/70 border-gray-800/30 backdrop-blur-sm rounded-xl px-6 hover:bg-gray-900/80 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <IconComponent className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <span className="text-white font-semibold text-base md:text-lg">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-gray-300 leading-relaxed pl-10 text-sm md:text-base">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}