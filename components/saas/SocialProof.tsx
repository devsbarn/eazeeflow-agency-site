"use client";

import { Card } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign, Users, Target, Zap } from "lucide-react";

const results = [
  {
    metric: "8×",
    title: "Higher Conversion Rate",
    description: "Leads contacted within 5 minutes convert 8× more often than slow responses",
    icon: Target,
    color: "text-cyan-400",
    source: "InsideSales Research"
  },
  {
    metric: "3-5×",
    title: "Qualified MQLs Increase",
    description: "Clients implementing our AI systems typically see 3-5× more qualified leads within 3-6 months",
    icon: TrendingUp,
    color: "text-emerald-400",
    source: "Client Results"
  },
  {
    metric: "25-95%",
    title: "Profit Increase",
    description: "Even a 5% improvement in customer retention can boost profits by 25-95%",
    icon: DollarSign,
    color: "text-green-400",
    source: "Harvard Business Review"
  },
  {
    metric: "66%",
    title: "Support Queries Automated",
    description: "AI chatbots can resolve 66% of routine customer questions automatically",
    icon: Users,
    color: "text-blue-400",
    source: "Zendesk Study"
  },
  {
    metric: "$18M",
    title: "Average Software Waste",
    description: "Enterprises waste an average of $18M annually on unused software licenses",
    icon: Zap,
    color: "text-orange-400",
    source: "Zylo Research"
  },
  {
    metric: "75%",
    title: "Trial User Abandonment",
    description: "Poor onboarding causes 75% of users to abandon SaaS products in the first week",
    icon: Clock,
    color: "text-red-400",
    source: "Userlens Study"
  }
];

const caseStudies = [
  {
    company: "Mid-Market SaaS Company",
    industry: "$5M ARR • 150 Employees",
    challenge: "Slow lead response and poor qualification",
    solution: "Implemented AI-Powered Sales & Marketing Automation",
    results: [
      "3× increase in qualified MQLs",
      "8× faster lead response time",
      "40% improvement in demo booking rate",
      "ROI achieved in 2.5 months"
    ],
    timeframe: "90 days"
  },
  {
    company: "Growing SaaS Platform",
    industry: "$8M ARR • 200 Employees",
    challenge: "High trial-to-paid conversion issues",
    solution: "Deployed AI-Driven Onboarding & Customer Success",
    results: [
      "4% reduction in early churn",
      "35% improvement in trial conversion",
      "50% faster time-to-value",
      "25% increase in NRR"
    ],
    timeframe: "6 months"
  },
  {
    company: "Enterprise SaaS Solution",
    industry: "$15M ARR • 300 Employees",
    challenge: "Operational inefficiencies and support overload",
    solution: "Full AI-Enabled Operations & Support Automation",
    results: [
      "60% reduction in support tickets",
      "$200K annual savings from license optimization",
      "5-point NPS improvement",
      "300+ hours/month saved on admin tasks"
    ],
    timeframe: "4 months"
  }
];

export function SocialProof() {
  return (
    <section className="py-20 bg-gray-900/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Industry Data */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Data Doesn't Lie
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry research and client results prove the massive impact of complete AI systems on SaaS growth metrics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {results.map((result, index) => {
            const IconComponent = result.icon;
            return (
              <Card key={index} className="bg-gray-900/70 border-gray-800/30 backdrop-blur-sm p-6 hover:bg-gray-900/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent className={`w-6 h-6 ${result.color}`} />
                  <span className="text-gray-400 text-sm font-medium">{result.source}</span>
                </div>
                
                <div className={`text-4xl font-bold ${result.color} mb-2`}>
                  {result.metric}
                </div>
                
                <h3 className="text-white font-semibold mb-2">{result.title}</h3>
                <p className="text-gray-300 text-sm">{result.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Case Studies */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Real SaaS Success Stories</h3>
          <p className="text-xl text-gray-300">
            See how complete AI systems transformed these SaaS companies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-gray-900/70 border-gray-800/30 backdrop-blur-sm p-8 hover:bg-gray-900/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="mb-6">
                <h4 className="text-lg md:text-xl font-bold text-white mb-2">{study.company}</h4>
                <p className="text-cyan-400 font-medium mb-3">{study.industry}</p>
                <div className="bg-gray-800/50 rounded-lg p-3 md:p-4 mb-4">
                  <p className="text-gray-300 text-sm mb-2"><span className="text-red-400 font-semibold">Challenge:</span> {study.challenge}</p>
                  <p className="text-gray-300 text-sm"><span className="text-blue-400 font-semibold">Solution:</span> {study.solution}</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <h5 className="text-emerald-400 font-semibold">Results in {study.timeframe}:</h5>
                {study.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-200 text-sm">{result}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-lg p-3 border border-emerald-800/30">
                <p className="text-emerald-400 font-semibold text-sm text-center">Delivered in {study.timeframe}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            Join 50+ SaaS companies that have transformed their growth with our AI systems
          </p>
        </div>
      </div>
    </section>
  );
}