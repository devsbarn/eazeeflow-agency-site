"use client";

import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Zap, Target, TrendingUp, Settings, Users } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "AI Growth Strategy Session",
    duration: "Week 1",
    description: "We analyze your current SaaS metrics, identify the biggest revenue leaks, and create a custom AI implementation roadmap tailored to your specific challenges.",
    deliverables: [
      "Complete revenue funnel analysis",
      "AI opportunity assessment",
      "Custom implementation roadmap",
      "ROI projections and timeline"
    ],
    icon: Target,
    color: "text-cyan-400"
  },
  {
    step: "02",
    title: "System Design & Integration",
    duration: "Weeks 2-4",
    description: "Our team builds and configures your AI systems, integrating seamlessly with your existing SaaS stack (CRM, support tools, analytics platforms).",
    deliverables: [
      "AI system configuration",
      "CRM/tool integrations",
      "Custom workflow automation",
      "Testing and optimization"
    ],
    icon: Settings,
    color: "text-blue-400"
  },
  {
    step: "03",
    title: "Team Training & Launch",
    duration: "Week 5",
    description: "We train your team on the new AI systems, ensure smooth handoff, and launch with full monitoring to guarantee immediate value delivery.",
    deliverables: [
      "Team training sessions",
      "System documentation",
      "Launch monitoring",
      "Performance baseline setup"
    ],
    icon: Users,
    color: "text-emerald-400"
  },
  {
    step: "04",
    title: "Optimization & Scale",
    duration: "Ongoing",
    description: "Continuous monitoring, optimization, and scaling of your AI systems based on performance data to maximize ROI and adapt to your growing needs.",
    deliverables: [
      "Performance monitoring",
      "Continuous optimization",
      "Monthly strategy reviews",
      "System scaling and updates"
    ],
    icon: TrendingUp,
    color: "text-violet-400"
  }
];

const guarantees = [
  {
    title: "30-Day Value Guarantee",
    description: "See measurable improvements in lead response time and qualification within 30 days, or we'll refund your setup fee.",
    icon: Zap
  },
  {
    title: "90-Day ROI Promise",
    description: "Achieve 3× ROI within 90 days through increased conversions and operational savings, or we'll work for free until you do.",
    icon: TrendingUp
  },
  {
    title: "White-Glove Support",
    description: "Dedicated account management and 24/7 system monitoring ensure your AI systems perform optimally from day one.",
    icon: Users
  }
];

export function Process() {
  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            From Strategy to Results in 5 Weeks
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Our proven process delivers complete AI systems fast. No lengthy development cycles, 
            no technical complexity – just plug-and-play AI engineered specifically for SaaS growth.
          </p>
        </div>

        <div className="space-y-8 mb-20">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <div key={index} className="relative">
                <Card className="bg-gray-900/70 border-gray-800/30 backdrop-blur-sm p-6 md:p-8 hover:bg-gray-900/80 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex items-center gap-6 lg:w-1/3">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center border-2 border-gray-600`}>
                          <span className="text-2xl font-bold text-white">{step.step}</span>
                        </div>
                        <div className={`p-3 rounded-xl bg-gray-800/50 border border-gray-700`}>
                          <IconComponent className={`w-8 h-8 ${step.color}`} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{step.title}</h3>
                        <div className={`text-sm font-semibold ${step.color} bg-gray-800/50 px-3 py-1 rounded-full inline-block`}>
                          {step.duration}
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-2/3">
                      <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">{step.description}</p>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-4">Key Deliverables:</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <div key={deliverableIndex} className="flex items-center gap-3">
                              <CheckCircle className={`w-5 h-5 ${step.color} flex-shrink-0`} />
                              <span className="text-gray-200 text-sm md:text-base">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                {!isLast && (
                  <div className="flex justify-center my-6">
                    <ArrowRight className="w-8 h-8 text-gray-600" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Guarantees */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Our Guarantees to You</h3>
          <p className="text-xl text-gray-300">
            We're so confident in our AI systems, we back them with ironclad guarantees
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => {
            const IconComponent = guarantee.icon;
            return (
              <Card key={index} className="bg-gray-900/70 border-emerald-800/30 backdrop-blur-sm p-6 md:p-8 text-center hover:bg-gray-900/80 transition-all duration-300">
                <div className="p-4 rounded-full bg-emerald-500/20 w-fit mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-4">{guarantee.title}</h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{guarantee.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}