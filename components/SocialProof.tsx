"use client";

import { Card } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";

const results = [
  {
    company: "TechCorp Manufacturing",
    industry: "Manufacturing",
    result: "Reduced processing time by 75%",
    metric: "75%",
    icon: Clock,
    description: "Automated quality control and inventory management systems",
    color: "text-emerald-400"
  },
  {
    company: "Global Finance Solutions",
    industry: "Financial Services",
    result: "$2.3M annual cost savings",
    metric: "$2.3M",
    icon: DollarSign,
    description: "AI-powered document processing and compliance automation",
    color: "text-green-400"
  },
  {
    company: "HealthTech Innovations",
    industry: "Healthcare",
    result: "500% increase in data accuracy",
    metric: "500%",
    icon: TrendingUp,
    description: "Automated patient data analysis and reporting systems",
    color: "text-blue-400"
  },
  {
    company: "RetailMax Enterprise",
    industry: "Retail",
    result: "Improved customer satisfaction by 85%",
    metric: "85%",
    icon: Users,
    description: "AI-driven customer service and inventory optimization",
    color: "text-cyan-400"
  }
];

export function SocialProof() {
  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our complete AI systems deliver measurable outcomes that transform business operations and drive sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => {
            const IconComponent = result.icon;
            return (
              <Card key={index} className="bg-gray-900/50 border-gray-800/30 backdrop-blur-sm p-6 hover:bg-gray-900/70 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent className={`w-6 h-6 ${result.color}`} />
                  <span className="text-gray-400 text-sm font-medium">{result.industry}</span>
                </div>
                
                <div className={`text-3xl font-bold ${result.color} mb-2`}>
                  {result.metric}
                </div>
                
                <h3 className="text-white font-semibold mb-2">{result.company}</h3>
                <p className="text-gray-300 text-sm mb-3">{result.result}</p>
                <p className="text-gray-400 text-xs">{result.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            Join 200+ companies that have transformed their operations with our AI systems
          </p>
        </div>
      </div>
    </section>
  );
}