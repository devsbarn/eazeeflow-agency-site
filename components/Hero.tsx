"use client";

import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { ArrowRight, Zap, TrendingUp, Shield } from "lucide-react";
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
        <div className="my-8">
          <Image
            src="/eazeeflow_logo.png"
            alt="EazeeFlow"
            width={200}
            height={80}
            className="mx-auto mb-8"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transform Your Business with
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent block mt-2">
            Complete AI Systems
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          We don't just build AI tools—we architect complete automation systems
          that deliver
          <span className="text-emerald-400 font-semibold">
            {" "}
            measurable ROI{" "}
          </span>
          and transform how your business operates.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 bg-gray-900/50 rounded-full px-4 py-2 backdrop-blur-sm border border-cyan-800/30">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <span className="text-white font-medium">
              40% Average Cost Reduction
            </span>
          </div>
          <div className="flex items-center gap-2 bg-gray-900/50 rounded-full px-4 py-2 backdrop-blur-sm border border-blue-800/30">
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-white font-medium">
              10x Faster Processing
            </span>
          </div>
          <div className="flex items-center gap-2 bg-gray-900/50 rounded-full px-4 py-2 backdrop-blur-sm border border-indigo-800/30">
            <Shield className="w-5 h-5 text-indigo-400" />
            <span className="text-white font-medium">Enterprise Security</span>
          </div>
        </div>

        <BookingModal>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Book Your AI Strategy Session
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </BookingModal>

        <p className="text-gray-400 mt-4">
          Free 30-minute consultation • No commitment required
        </p>
      </div>
    </section>
  );
}
