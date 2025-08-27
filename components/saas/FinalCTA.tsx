"use client";

import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { ArrowRight, Zap, TrendingUp, Clock, Target } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gray-900/70 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-gray-800/30 shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Target className="w-10 h-10 text-cyan-400" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Stop Losing Revenue to Preventable Failures
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed px-4">
            Every day without complete AI systems costs you qualified leads,
            increases churn, and wastes operational budget. Your competitors are
            already gaining the advantage. Don't let them capture the $1.1T+
            SaaS opportunity while you're stuck with manual processes.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-red-500/20">
              <h3 className="text-red-400 font-bold text-lg mb-3">
                Cost of Waiting
              </h3>
              <ul className="text-gray-300 space-y-2 text-left text-sm md:text-base">
                <li>• 8× lower conversions from slow lead response</li>
                <li>• 75% trial abandonment from poor onboarding</li>
                <li>• $18M+ wasted annually on unused licenses</li>
                <li>• Competitors capturing your market share</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-emerald-500/20">
              <h3 className="text-emerald-400 font-bold text-lg mb-3">
                Value of Acting Now
              </h3>
              <ul className="text-gray-300 space-y-2 text-left text-sm md:text-base">
                <li>• 3-5× more qualified MQLs in 3-6 months</li>
                <li>• 25-95% profit increase from retention</li>
                <li>• 3× ROI guaranteed within 90 days</li>
                <li>• Sustainable competitive advantage</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 px-4">
            <div className="flex items-center gap-2 bg-gray-800/50 rounded-full px-4 py-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span className="text-white font-medium text-sm md:text-base">
                3× ROI in 90 Days
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 rounded-full px-4 py-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium text-sm md:text-base">
                Results in 30 Days
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 rounded-full px-4 py-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-medium text-sm md:text-base">
                SaaS-Specific Systems
              </span>
            </div>
          </div>

          <div className="px-4">
            <BookingModal>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 mb-4 w-full sm:w-auto"
              >
                Get Your Free Growth Strategy Session
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </BookingModal>

            <p className="text-gray-400 text-base md:text-lg mb-8">
              Free 30-minute consultation • Custom ROI analysis • No commitment
              required
            </p>
          </div>

          <div className="border-t border-gray-800/50 pt-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-400 mb-1">50+</div>
                <div className="text-gray-400 text-sm">
                  SaaS Companies Transformed
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400 mb-1">
                  $1.1T+
                </div>
                <div className="text-gray-400 text-sm">
                  SaaS Market Opportunity
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  90 Days
                </div>
                <div className="text-gray-400 text-sm">
                  Guaranteed ROI Timeline
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
