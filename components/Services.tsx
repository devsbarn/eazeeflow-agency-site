"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { 
  Brain, 
  Workflow, 
  Database, 
  Shield, 
  Zap, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Assessment",
    description: "Comprehensive analysis of your business processes to identify high-impact automation opportunities",
    benefits: [
      "Process optimization analysis",
      "ROI projections and timelines",
      "Technology stack recommendations",
      "Implementation roadmap"
    ],
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    icon: Workflow,
    title: "Complete System Integration",
    description: "End-to-end AI system development that seamlessly integrates with your existing infrastructure",
    benefits: [
      "Custom AI model development",
      "Legacy system integration",
      "API development and management",
      "Real-time monitoring dashboards"
    ],
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-indigo-500/20"
  },
  {
    icon: Database,
    title: "Data Intelligence Platforms",
    description: "Transform raw data into actionable insights with advanced analytics and predictive modeling",
    benefits: [
      "Automated data processing",
      "Predictive analytics models",
      "Real-time reporting systems",
      "Business intelligence dashboards"
    ],
    color: "text-indigo-400",
    gradient: "from-indigo-500/20 to-violet-500/20"
  },
  {
    icon: Shield,
    title: "Enterprise Security & Compliance",
    description: "Bank-level security with full compliance management for regulated industries",
    benefits: [
      "End-to-end encryption",
      "Compliance automation",
      "Audit trail management",
      "Risk assessment protocols"
    ],
    color: "text-emerald-400",
    gradient: "from-emerald-500/20 to-green-500/20"
  }
];

export function Services() {
  return (
    <section className="py-20 bg-gray-900/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Complete AI Systems, Not Just Tools
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            We architect comprehensive solutions that address your entire workflow, from data ingestion to actionable insights, ensuring seamless integration and maximum ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className={`bg-gradient-to-br ${service.gradient} border-gray-800/30 backdrop-blur-sm p-8 hover:bg-gray-900/70 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-105`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gray-900/50 border border-gray-800/50`}>
                    <IconComponent className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${service.color} flex-shrink-0`} />
                      <span className="text-gray-200">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800/30 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-amber-400" />
              <h3 className="text-2xl font-bold text-white">Ready to Transform Your Business?</h3>
            </div>
            <p className="text-gray-300 mb-6 text-lg">
              Get a custom AI strategy session and discover how our complete systems can deliver measurable ROI for your organization.
            </p>
            <BookingModal>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Your Strategy Session
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </BookingModal>
          </div>
        </div>
      </div>
    </section>
  );
}