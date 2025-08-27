"use client";

import { Modal, ModalContent, ModalTrigger, ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CheckCircle } from "lucide-react";

interface BookingModalProps {
  children: React.ReactNode;
}

export function BookingModal({ children }: BookingModalProps) {
  return (
    <Modal>
      <ModalTrigger asChild>
        {children}
      </ModalTrigger>
      <ModalContent className="max-w-4xl h-[80vh] bg-gray-900/95 border-gray-800/50 backdrop-blur-sm">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-800/50">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-6 h-6 text-cyan-400" />
              <ModalTitle className="text-2xl font-bold text-white">Book Your AI Strategy Session</ModalTitle>
            </div>
            <p className="text-gray-300">
              Schedule a free 30-minute consultation to discuss your AI automation opportunities
            </p>
          </div>
          
          <div className="flex-1 flex">
            <div className="w-1/3 p-6 bg-gray-950/50 border-r border-gray-800/50">
              <h3 className="text-lg font-semibold text-white mb-4">What to Expect:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">AI Opportunity Assessment</p>
                    <p className="text-gray-400 text-sm">Identify high-impact automation opportunities in your business</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">ROI Projection</p>
                    <p className="text-gray-400 text-sm">Get estimated cost savings and efficiency gains</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Implementation Roadmap</p>
                    <p className="text-gray-400 text-sm">Receive a customized plan for AI integration</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">30 Minutes</p>
                    <p className="text-gray-400 text-sm">Focused, actionable consultation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <iframe
                src="https://cal.com/eazeeflow"
                className="w-full h-full border-0"
                title="Book AI Strategy Session"
              />
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}