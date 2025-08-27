"use client";

import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { ArrowRight, Zap, TrendingUp, Target } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 pt-4">
          <Image
            src="/eazeeflow_logo.png"
            alt="EazeeFlow"
            width={250}
            height={100}
            className="mx-auto mb-4"
          />
        </div>

        <div className="mb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full px-4 py-2 border border-cyan-500/20 mb-6">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-small">
              Seize the $1.1T+ SaaS Opportunity
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Complete AI Growth Infrastructure
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent block mt-2">
            for SaaS Companies
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
          Stop losing deals to slow lead response. End the guesswork on churn.
          Get{" "}
          <span className="text-emerald-400 font-semibold">
            complete AI systems
          </span>{" "}
          – not just tools – that boost conversions, accelerate onboarding, and
          automate operations.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 px-4">
          <div className="flex items-center gap-2 bg-gray-900/50 rounded-full px-4 py-2 backdrop-blur-sm border border-cyan-800/30">
            <Target className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-medium text-sm md:text-base">
              8× Higher Conversions
            </span>
          </div>
          <div className="flex items-center gap-2 bg-gray-900/50 rounded-full px-4 py-2 backdrop-blur-sm border border-blue-800/30">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <span className="text-white font-medium text-sm md:text-base">
              25-95% Profit Increase
            </span>
          </div>
          <div className="flex items-center gap-2 bg-gray-900/50 rounded-full px-4 py-2 backdrop-blur-sm border border-indigo-800/30">
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-white font-medium text-sm md:text-base">
              3× ROI in 90 Days
            </span>
          </div>
        </div>

        <div className="px-4">
          <BookingModal>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Get Your Free Growth Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </BookingModal>

          <p className="text-gray-400 mt-4 text-sm md:text-base">
            Free 30-minute consultation • Custom ROI analysis • No commitment
            required
          </p>
        </div>
      </div>
    </section>
  );
}
