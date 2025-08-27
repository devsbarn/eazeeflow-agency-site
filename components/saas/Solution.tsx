"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { 
  Target, 
  Users, 
  Settings, 
  ArrowRight,
  CheckCircle,
  Zap,
  TrendingUp,
  Shield
} from "lucide-react";

const systems = [
  {
    icon: Target,
    title: "AI-Powered Sales & Marketing Automation",
    subtitle: "Predictive Acquisition Engine",
    description: "Instantly engage and qualify leads with 24/7 AI chatbots, predictive lead scoring, and hyper-personalized outreach that turns visits into high-quality opportunities.",
    features: [
      "24/7 AI chatbot captures leads instantly",
      "Predictive lead scoring prioritizes hot prospects",
      "Personalized email/content generation",
      "Seamless CRM integration (HubSpot/Salesforce)"
    ],
    results: "3-5× qualified MQLs in 3-6 months",
    urgency: "Critical",
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 to-blue-500/20",
    investment: "$10K setup + $2-3K/month"
  },
  {
    icon: Users,
    title: "AI-Driven Onboarding & Customer Success",
    subtitle: "Onboarding & Retention Assistant",
    description: "Guide new users through onboarding and continuously monitor health to ensure trial users see value quickly and existing customers stay engaged.",
    features: [
      "AI onboarding chatbot with real-time help",
      "Behavioral analytics and user segmentation",
      "Predictive churn model with early alerts",
      "Sentiment analysis of support interactions"
    ],
    results: "5% retention lift = 25-95% profit increase",
    urgency: "High",
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-indigo-500/20",
    investment: "$15K setup + $3-4K/month"
  },
  {
    icon: Settings,
    title: "AI-Enabled Operations & Support Automation",
    subtitle: "Operational Efficiency & Support Suite",
    description: "Automate support and back-office tasks, eliminating bottlenecks so teams stay lean while customers get instant answers around the clock.",
    features: [
      "AI support bot handles 66% of routine queries",
      "RPA workflow engine automates admin tasks",
      "License optimization AI cuts 25-30% waste",
      "Real-time operational dashboard"
    ],
    results: "40-60% reduction in support tickets",
    urgency: "Medium-High",
    color: "text-emerald-400",
    gradient: "from-emerald-500/20 to-green-500/20",
    investment: "$15K setup + $2K/month"
  }
];

const tiers = [
  {
    name: "Essential AI Growth Starter",
    price: "$10K",
    target: "Small SaaS teams (50-100 employees, $1-5M ARR)",
    includes: "System 1 fully implemented",
    features: [
      "AI chatbot with lead qualification",
      "Predictive lead scoring",
      "Personalization engine",
      "CRM integration",
      "2-week deployment",
      "Email & biweekly call support"
    ],
    roi: "2-3 months to break even",
    highlight: false
  },
  {
    name: "Accelerated Growth Suite",
    price: "$25K",
    target: "Growing SaaS (100-200 employees, $5-10M ARR)",
    includes: "Systems 1 + 2 with enhanced integrations",
    features: [
      "Everything in Tier 1",
      "AI onboarding & churn prediction",
      "Behavioral analytics dashboard",
      "Quarterly success reviews",
      "SaaS best-practices playbooks",
      "Multi-system data synergy"
    ],
    roi: "Pipeline uplift + 2-3% retention gain",
    highlight: true
  },
  {
    name: "SaaS AI Transformation",
    price: "$45K",
    target: "Ambitious SaaS ($10M+ ARR)",
    includes: "All systems + full ops automation",
    features: [
      "Everything in Tiers 1 & 2",
      "Complete operations automation",
      "Custom legacy integrations",
      "Dedicated account team",
      "On-site workshops",
      "Ongoing strategy partnership"
    ],
    roi: "3× ROI in 90 days guaranteed",
    highlight: false
  }
];

export function Solution() {
  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Systems Overview */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Complete AI Systems That Actually Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Unlike isolated tools, our integrated AI systems create compounding value across your entire SaaS operation. 
            Each system addresses specific failure scenarios while working together for maximum ROI.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {systems.map((system, index) => {
            const IconComponent = system.icon;
            return (
              <Card key={index} className="bg-gray-900/70 border-gray-800/30 backdrop-blur-sm p-8 hover:bg-gray-900/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gray-900/50 border border-gray-800/50`}>
                    <IconComponent className={`w-8 h-8 ${system.color}`} />
                  </div>
                  <div>
                    <div className={`text-xs font-bold ${system.color} bg-gray-800/50 px-2 py-1 rounded mb-1`}>
                      {system.urgency} Priority
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">{system.title}</h3>
                  </div>
                </div>
                
                <h4 className={`text-base md:text-lg font-semibold ${system.color} mb-3`}>{system.subtitle}</h4>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">{system.description}</p>
                
                <div className="space-y-3 mb-6">
                  {system.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className={`w-4 h-4 ${system.color} flex-shrink-0`} />
                      <span className="text-gray-200 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-800/50 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Expected Results:</span>
                    <TrendingUp className={`w-4 h-4 ${system.color}`} />
                  </div>
                  <p className={`font-semibold ${system.color} mb-2 text-sm md:text-base`}>{system.results}</p>
                  <p className="text-gray-400 text-sm">{system.investment}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Pricing Tiers */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Choose Your AI Growth Path</h3>
          <p className="text-xl text-gray-300">
            Tailored packages for every stage of SaaS growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <Card key={index} className={`${tier.highlight ? 'bg-gray-900/80 border-cyan-500/30 scale-105' : 'bg-gray-900/70 border-gray-800/30'} backdrop-blur-sm p-8 hover:bg-gray-900/80 transition-all duration-300`}>
              {tier.highlight && (
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full text-center mb-4">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{tier.name}</h4>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{tier.price}</div>
                <p className="text-gray-400 text-sm">{tier.target}</p>
              </div>

              <div className="mb-6">
                <p className="text-cyan-300 font-semibold mb-4">{tier.includes}</p>
                <div className="space-y-2">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-800/50 pt-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold text-sm">ROI Timeline:</span>
                </div>
                <p className="text-gray-300 text-sm">{tier.roi}</p>
              </div>

              <BookingModal>
                <Button 
                  className={`w-full ${tier.highlight ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700' : 'bg-gray-800 hover:bg-gray-700'} text-white font-semibold py-3`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </BookingModal>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gray-900/70 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-gray-800/30 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-emerald-400" />
              <h3 className="text-xl md:text-2xl font-bold text-white">Why Choose Complete AI Systems?</h3>
            </div>
            <p className="text-gray-300 mb-6 text-base md:text-lg">
              Unlike generic AI agencies or individual tool vendors, we deliver integrated systems specifically designed for SaaS workflows. 
              Our solutions create compounding value that standalone tools simply can't match.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">SaaS-Specific</h4>
                <p className="text-gray-400 text-sm">Built for your exact workflows and integrations</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">Proven Results</h4>
                <p className="text-gray-400 text-sm">Data-backed outcomes from real SaaS clients</p>
              </div>
              <div className="text-center">
                <Settings className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">Complete Integration</h4>
                <p className="text-gray-400 text-sm">End-to-end systems that work together</p>
              </div>
            </div>
            <BookingModal>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                Schedule Your AI Strategy Session
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </BookingModal>
          </div>
        </div>
      </div>
    </section>
  );
}