"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Clock, DollarSign, Zap, Users, Lock } from "lucide-react";

const faqs = [
  {
    question: "How do you ensure data security and compliance?",
    answer: "We implement bank-level security with end-to-end encryption, SOC 2 compliance, and industry-specific regulatory adherence (HIPAA, GDPR, SOX). All data processing happens within your secure environment with full audit trails and access controls.",
    icon: Shield
  },
  {
    question: "What's the typical ROI timeline for AI implementation?",
    answer: "Most clients see initial ROI within 3-6 months, with full system benefits realized within 12 months. Our phased approach ensures you start seeing value quickly while building toward comprehensive transformation. Average ROI is 300-500% within the first year.",
    icon: DollarSign
  },
  {
    question: "How do you handle integration with existing systems?",
    answer: "We specialize in seamless integration with legacy systems through custom APIs and middleware. Our approach preserves your existing workflows while enhancing them with AI capabilities. No system replacement required—we work with what you have.",
    icon: Zap
  },
  {
    question: "What level of ongoing support do you provide?",
    answer: "We provide 24/7 monitoring, regular system optimization, and dedicated support teams. Our partnership doesn't end at implementation—we continuously optimize your AI systems and provide training for your team to maximize value.",
    icon: Users
  },
  {
    question: "How long does a typical AI system implementation take?",
    answer: "Implementation timelines vary based on complexity, but most complete systems are deployed within 8-16 weeks. We use an agile approach with weekly milestones, so you see progress immediately and can provide feedback throughout the process.",
    icon: Clock
  },
  {
    question: "What happens to our data during the AI implementation?",
    answer: "Your data never leaves your secure environment. We implement AI systems within your infrastructure, ensuring complete data sovereignty. All processing, training, and analytics happen on your premises or in your designated cloud environment with full encryption.",
    icon: Lock
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
            Get answers to the most important questions business leaders ask about AI system integration.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon;
            return (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-900/50 border-gray-800/30 backdrop-blur-sm rounded-xl px-6 hover:bg-gray-900/70 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <IconComponent className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <span className="text-white font-semibold text-lg">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-gray-300 leading-relaxed pl-10">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}