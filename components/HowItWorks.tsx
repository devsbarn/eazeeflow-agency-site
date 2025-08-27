import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { copy } from "@/content/copy";
import { type Vertical } from "@/content/verticals";

interface HowItWorksProps {
  currentVertical?: Vertical;
}

export function HowItWorks({ currentVertical }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {copy.howItWorks.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {copy.howItWorks.intro}
          </p>
        </div>

        <div className="space-y-8">
          {copy.howItWorks.steps.map((step, index) => (
            <Card key={index} className="bg-gray-900/70 border-gray-800/30 backdrop-blur-sm p-8 hover:bg-gray-900/80 transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex items-center gap-6 lg:w-1/3">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center border-2 border-gray-600">
                      <span className="text-2xl font-bold text-white">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-gray-800/50 border border-gray-700">
                      <CheckCircle className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{step.title}</h3>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                    {step.body}
                  </p>
                  
                  {/* Show vertical-specific examples for step 1 */}
                  {index === 0 && currentVertical?.step1Examples && (
                    <div className="mt-4">
                      <h4 className="text-white font-semibold mb-3">Industry-Specific Focus Areas:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {currentVertical.step1Examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span className="text-gray-200 text-sm">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}