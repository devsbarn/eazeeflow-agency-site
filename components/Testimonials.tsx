"use client";

import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "CTO",
    company: "TechCorp Manufacturing",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    quote: "EazeeFlow didn't just implement AI tools—they transformed our entire operation. The complete system they built reduced our processing time by 75% and saved us over $1.2M annually.",
    rating: 5,
    results: "75% faster processing, $1.2M saved"
  },
  {
    name: "Michael Rodriguez",
    title: "VP of Operations",
    company: "Global Finance Solutions",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    quote: "The level of integration and automation they achieved was beyond our expectations. Our compliance processes are now fully automated, and we've eliminated 90% of manual errors.",
    rating: 5,
    results: "90% error reduction, full compliance automation"
  },
  {
    name: "Dr. Emily Watson",
    title: "Chief Medical Officer",
    company: "HealthTech Innovations",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    quote: "Their AI system revolutionized our patient data analysis. What used to take our team weeks now happens in real-time, with 500% better accuracy. It's transformed patient care.",
    rating: 5,
    results: "500% accuracy improvement, real-time processing"
  },
  {
    name: "James Thompson",
    title: "CEO",
    company: "RetailMax Enterprise",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    quote: "EazeeFlow's complete AI system approach is what set them apart. They didn't just solve one problem—they optimized our entire customer journey and inventory management.",
    rating: 5,
    results: "85% customer satisfaction increase"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Business Leaders Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's how our complete AI systems have transformed businesses across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800/30 backdrop-blur-sm p-8 hover:bg-gray-900/70 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-cyan-400/30" />
                <p className="text-gray-200 text-lg leading-relaxed pl-6">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  <p className="text-cyan-400 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-lg p-3 border border-emerald-800/30">
                <p className="text-emerald-400 font-semibold text-sm">Key Results: {testimonial.results}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}