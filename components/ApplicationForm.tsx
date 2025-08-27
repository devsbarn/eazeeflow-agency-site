"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle } from "lucide-react";
import { type Vertical } from "@/content/verticals";

interface ApplicationFormProps {
  verticalId?: string;
}

interface FormData {
  fullName: string;
  email: string;
  company: string;
  role: string;
  vertical: string;
  teamSize: string;
  challenge: string;
  timeline: string;
  phone: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
  role?: string;
  vertical?: string;
  teamSize?: string;
  challenge?: string;
  timeline?: string;
  phone?: string;
  consent?: string;
}

export function ApplicationForm({ verticalId }: ApplicationFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState<FormErrors>({});
  
  const [formData, setFormData] = React.useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    role: "",
    vertical: verticalId || "",
    teamSize: "",
    challenge: "",
    timeline: "",
    phone: "",
    consent: false
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.role.trim()) newErrors.role = "Role/Title is required";
    if (!formData.vertical) newErrors.vertical = "Please select a vertical";
    if (!formData.teamSize) newErrors.teamSize = "Please select team size";
    if (!formData.challenge.trim()) newErrors.challenge = "Please describe your biggest challenge";
    if (!formData.timeline) newErrors.timeline = "Please select your ideal timeline";
    if (!formData.consent) newErrors.consent = "You must agree to be contacted";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors below",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Application submitted successfully!",
          description: "We'll be in touch within 24 hours to schedule your consultation.",
        });
        
        // Scroll to top of form
        document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="apply" className="py-20 bg-gray-900/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gray-900/70 border-gray-800/30 backdrop-blur-sm p-8 text-center">
            <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Application Received!</h3>
            <p className="text-gray-300 mb-6">
              Thank you for your interest in our Vertical AI Growth System. We've received your application and will be in touch within 24 hours to schedule your consultation.
            </p>
            <p className="text-sm text-gray-400">
              Check your email for confirmation details and next steps.
            </p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-20 bg-gray-900/30">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Apply for Your Custom AI Growth Plan
          </h2>
          <p className="text-gray-300 text-lg">
            Tell us about your business and we'll create a custom AI system designed specifically for your industry and challenges.
          </p>
        </div>

        <Card className="bg-gray-900/70 border-gray-800/30 backdrop-blur-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullName" className="text-white">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="mt-2 bg-gray-800/50 border-gray-700 text-white"
                  placeholder="John Smith"
                />
                {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <Label htmlFor="email" className="text-white">Work Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-2 bg-gray-800/50 border-gray-700 text-white"
                  placeholder="john@company.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="company" className="text-white">Company *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="mt-2 bg-gray-800/50 border-gray-700 text-white"
                  placeholder="Acme Corp"
                />
                {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
              </div>

              <div>
                <Label htmlFor="role" className="text-white">Role/Title *</Label>
                <Input
                  id="role"
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  className="mt-2 bg-gray-800/50 border-gray-700 text-white"
                  placeholder="CEO, Founder, Director"
                />
                {errors.role && <p className="text-red-400 text-sm mt-1">{errors.role}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="vertical" className="text-white">Industry Vertical *</Label>
                <Select value={formData.vertical} onValueChange={(value) => handleInputChange('vertical', value)}>
                  <SelectTrigger className="mt-2 bg-gray-800/50 border-gray-700 text-white">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bfsi">BFSI - Finance, Banking & Insurance</SelectItem>
                    <SelectItem value="bpo">BPO - Contact Center / Outsourcing</SelectItem>
                    <SelectItem value="tsl">TSL - Transport & Logistics</SelectItem>
                    <SelectItem value="ecommerce">E‑commerce - Specialized Retail</SelectItem>
                  </SelectContent>
                </Select>
                {errors.vertical && <p className="text-red-400 text-sm mt-1">{errors.vertical}</p>}
              </div>

              <div>
                <Label htmlFor="teamSize" className="text-white">Team Size *</Label>
                <Select value={formData.teamSize} onValueChange={(value) => handleInputChange('teamSize', value)}>
                  <SelectTrigger className="mt-2 bg-gray-800/50 border-gray-700 text-white">
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1-5 employees</SelectItem>
                    <SelectItem value="6-20">6-20 employees</SelectItem>
                    <SelectItem value="21-50">21-50 employees</SelectItem>
                    <SelectItem value="51-100">51-100 employees</SelectItem>
                    <SelectItem value="100+">100+ employees</SelectItem>
                  </SelectContent>
                </Select>
                {errors.teamSize && <p className="text-red-400 text-sm mt-1">{errors.teamSize}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="challenge" className="text-white">Biggest Challenge *</Label>
              <Textarea
                id="challenge"
                value={formData.challenge}
                onChange={(e) => handleInputChange('challenge', e.target.value)}
                className="mt-2 bg-gray-800/50 border-gray-700 text-white min-h-[100px]"
                placeholder="Describe the biggest operational challenge or bottleneck holding back your growth..."
              />
              {errors.challenge && <p className="text-red-400 text-sm mt-1">{errors.challenge}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="timeline" className="text-white">Ideal Timeline *</Label>
                <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                  <SelectTrigger className="mt-2 bg-gray-800/50 border-gray-700 text-white">
                    <SelectValue placeholder="When do you want to start?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP - Ready to start immediately</SelectItem>
                    <SelectItem value="1-month">Within 1 month</SelectItem>
                    <SelectItem value="2-3-months">2-3 months</SelectItem>
                    <SelectItem value="3-6-months">3-6 months</SelectItem>
                    <SelectItem value="exploring">Just exploring options</SelectItem>
                  </SelectContent>
                </Select>
                {errors.timeline && <p className="text-red-400 text-sm mt-1">{errors.timeline}</p>}
              </div>

              <div>
                <Label htmlFor="phone" className="text-white">Phone (Optional)</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="mt-2 bg-gray-800/50 border-gray-700 text-white"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                className="mt-1"
              />
              <div>
                <Label htmlFor="consent" className="text-white text-sm leading-relaxed">
                  I agree to be contacted by EazeeFlow regarding my application and consent to the processing of my personal data for this purpose. *
                </Label>
                {errors.consent && <p className="text-red-400 text-sm mt-1">{errors.consent}</p>}
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 text-lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting Application...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}