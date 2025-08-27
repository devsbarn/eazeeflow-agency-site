import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { copy } from "@/content/copy";
import { verticals, type Vertical } from "@/content/verticals";

interface TestimonialsProps {
  currentVertical?: Vertical;
}

export function Testimonials({ currentVertical }: TestimonialsProps) {
  // If we have a current vertical, show its testimonial prominently, otherwise show all
  const testimonialsToShow = currentVertical 
    ? [currentVertical] 
    : verticals.filter(v => v.id !== "general");

  return (
    <section id="testimonials" className="py-20 bg-gray-900/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {copy.testimonials.title}
          </h2>
        </div>

        <div className={`grid gap-8 ${currentVertical ? 'max-w-4xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-2'}`}>
          {testimonialsToShow.map((vertical, index) => (
            <Card key={vertical.id} className="bg-gray-900/70 border-gray-800/30 backdrop-blur-sm p-8 hover:bg-gray-900/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-cyan-400/30" />
                <p className="text-gray-200 text-lg leading-relaxed pl-6">
                  "{vertical.testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                  {vertical.testimonial.role.split(' ').map(word => word[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <p className="text-cyan-400 text-sm font-medium">{vertical.label} Industry</p>
                  <h4 className="text-white font-semibold">{vertical.testimonial.role}</h4>
                </div>
              </div>
              
              {vertical.metrics && (
                <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-lg p-4 border border-emerald-800/30">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(vertical.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-emerald-400 font-bold text-lg">{value}</div>
                        <div className="text-emerald-300 text-xs">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* BFSI Legal Note */}
        {(currentVertical?.id === "bfsi" || !currentVertical) && (
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm max-w-4xl mx-auto">
              {copy.legal.bfsiNote}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}