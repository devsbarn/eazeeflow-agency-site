"use client";

import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, FileCheck, Server, Users } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption and security protocols protect your data at every stage",
    color: "text-emerald-400"
  },
  {
    icon: Lock,
    title: "Data Sovereignty",
    description: "Your data never leaves your environment—complete control and ownership",
    color: "text-blue-400"
  },
  {
    icon: Eye,
    title: "Full Audit Trails",
    description: "Complete visibility into all AI operations with comprehensive logging",
    color: "text-indigo-400"
  },
  {
    icon: FileCheck,
    title: "Compliance Ready",
    description: "HIPAA, GDPR, SOX, and industry-specific regulatory compliance built-in",
    color: "text-cyan-400"
  },
  {
    icon: Server,
    title: "On-Premise Deployment",
    description: "Deploy AI systems within your existing infrastructure for maximum security",
    color: "text-violet-400"
  },
  {
    icon: Users,
    title: "Role-Based Access",
    description: "Granular permissions and access controls for different user levels",
    color: "text-rose-400"
  }
];

const certifications = [
  "SOC 2 Type II",
  "ISO 27001",
  "HIPAA Compliant",
  "GDPR Ready",
  "SOX Controls",
  "PCI DSS"
];

export function Security() {
  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enterprise Security & Compliance
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Your data security is our top priority. We implement comprehensive security measures and compliance protocols that meet the highest industry standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-gray-900/50 border-gray-800/30 backdrop-blur-sm p-6 hover:bg-gray-900/70 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gray-800/50">
                    <IconComponent className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Certifications & Compliance</h3>
            <p className="text-gray-300">
              We maintain the highest security standards and regulatory compliance across industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50">
                <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <p className="text-white font-medium text-sm">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}