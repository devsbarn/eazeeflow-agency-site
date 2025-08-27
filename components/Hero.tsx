"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { copy } from "@/content/copy";
import { verticals, type Vertical } from "@/content/verticals";

interface HeroProps {
  currentVertical?: Vertical;
}

export function Hero({ currentVertical }: HeroProps) {
  const [selectedVertical, setSelectedVertical] = React.useState(
    currentVertical?.id || "general"
  );

  React.useEffect(() => {
    if (currentVertical) {
      setSelectedVertical(currentVertical.id);
    }
  }, [currentVertical]);

  const displayVertical = verticals.find(v => v.id === selectedVertical) || verticals[0];

  const handleVerticalChange = (value: string) => {
    setSelectedVertical(value as "general" | "bfsi" | "bpo" | "tsl" | "ecommerce");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full px-4 py-2 border border-cyan-500/20 mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-300 font-medium text-sm">
                {displayVertical.eyebrowLabel}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {copy.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {copy.hero.subtitle}
            </p>

            {/* Vertical Switcher - Only show on general page */}
            {!currentVertical && (
              <div className="mb-8">
                <Tabs value={selectedVertical} onValueChange={handleVerticalChange}>
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-gray-900/50 border border-gray-800/30">
                    {verticals.filter(v => v.id !== "general").map((vertical) => (
                      <TabsTrigger 
                        key={vertical.id} 
                        value={vertical.id}
                        className="text-xs md:text-sm data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-300"
                      >
                        {vertical.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            )}

            {/* CTA Button */}
            <div className="mb-8">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Link href="#apply">{copy.hero.cta}</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="text-center lg:text-left">
              <p className="text-amber-400 font-medium text-sm">
                {copy.hero.trustIndicators}
              </p>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  </div>
                  <p className="text-lg font-medium">AI Growth System</p>
                  <p className="text-sm">Visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}