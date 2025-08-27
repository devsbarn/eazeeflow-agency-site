import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { copy } from "@/content/copy";

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
            <Zap className="w-10 h-10 text-cyan-400" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {copy.finalCta.title}
            </h2>
          </div>

          <div className="space-y-6 mb-10">
            {copy.finalCta.body.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mb-8">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="#apply">
                {copy.finalCta.button}
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </Button>
          </div>

          <p className="text-gray-400 text-base md:text-lg">
            {copy.finalCta.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}