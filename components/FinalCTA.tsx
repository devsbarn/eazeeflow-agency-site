"use client";

import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { ArrowRight, Zap, TrendingUp, Clock } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gray-900/50 rounded-3xl p-12 backdrop-blur-sm border border-gray-800/30 shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-10 h-10 text-amber-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Transform Your Business?
            </h2>
          </div>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join 200+ companies that have revolutionized their operations with our complete AI systems. 
            Get your custom strategy session and discover how we can deliver measurable ROI for your organization.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 bg-gray-800/50 rounded-full px-4 py-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span className="text-white font-medium">Average 400% ROI</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 rounded-full px-4 py-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">Results in 3-6 months</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 rounded-full px-4 py-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-medium">Enterprise Security</span>
            </div>
          </div>

          <BookingModal>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 mb-4"
            >
              Book Your Free AI Strategy Session
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </BookingModal>

          <p className="text-gray-400 text-lg">
            Free 30-minute consultation • Custom ROI analysis • No commitment required
          </p>

          <div className="mt-8 pt-8 border-t border-gray-800/50">
            <p className="text-gray-500 text-sm">
              Trusted by Fortune 500 companies and growing businesses worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}