"use client";

import { Card } from "@/components/ui/card";
import { AlertTriangle, Clock, Users, DollarSign, TrendingDown, Zap } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Losing 8× More Deals Due to Slow Lead Response",
    description: "Every hour of delay in lead follow-up dramatically reduces conversion rates. Your competitors with instant response are capturing deals that should be yours.",
    stat: "8× lower conversion",
    color: "text-red-400"
  },
  {
    icon: Users,
    title: "75% of Trial Users Abandon in Week One",
    description: "Poor onboarding experiences cause massive early churn. Users don't see value quickly enough and abandon your product before becoming paying customers.",
    stat: "75% abandonment rate",
    color: "text-orange-400"
  },
  {
    icon: TrendingDown,
    title: "Hidden Churn Risks Going Undetected",
    description: "You're losing customers without knowing why. By the time you notice churn signals, it's too late to save the relationship and revenue.",
    stat: "23% churn from onboarding",
    color: "text-yellow-400"
  },
  {
    icon: DollarSign,
    title: "Wasting $18M+ Annually on Unused Software",
    description: "Your team is paying for 30-53% of licenses that go unused. This massive waste drains budget that could fuel growth initiatives.",
    stat: "30-53% license waste",
    color: "text-red-500"
  },
  {
    icon: AlertTriangle,
    title: "Support Queues Overwhelming Your Team",
    description: "Customer support backlogs are harming NPS scores while your team drowns in repetitive queries that could be automated.",
    stat: "66% automatable queries",
    color: "text-orange-500"
  },
  {
    icon: Zap,
    title: "Manual Tasks Consuming Strategic Time",
    description: "Your team spends hundreds of hours on manual admin work instead of focusing on product development and strategic growth initiatives.",
    stat: "Hundreds of hours wasted",
    color: "text-yellow-500"
  }
];

export function PainPoints() {
  return (
    <section className="py-20 bg-gray-900/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Hidden Revenue Killers in Your SaaS
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Every day without complete AI systems, you're losing deals, customers, and budget to preventable failures. 
            Here's what's costing you growth right now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((pain, index) => {
            const IconComponent = pain.icon;
            return (
              <Card key={index} className="bg-gray-900/70 border-gray-800/30 backdrop-blur-sm p-6 hover:bg-gray-900/80 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gray-800/50">
                    <IconComponent className={`w-6 h-6 ${pain.color}`} />
                  </div>
                  <div className={`text-sm font-bold ${pain.color} bg-gray-800/50 px-2 py-1 rounded`}>
                    {pain.stat}
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{pain.title}</h3>
                <p className="text-gray-300 leading-relaxed">{pain.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-8 backdrop-blur-sm border border-red-500/20 max-w-4xl mx-auto">
            <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">The Cost of Inaction</h3>
            <p className="text-gray-300 text-lg">
              Every month without AI systems costs you qualified leads, increases churn, and wastes thousands in operational overhead. 
              Your competitors are already gaining the advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}