"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UseCasesMenu } from "@/components/UseCasesMenu";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Results", href: "#testimonials" },
    { label: "Compare", href: "#comparison" },
    { label: "Apply", href: "#apply" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800/30 bg-gray-950/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/eazeeflow_logo.png"
              alt="EazeeFlow"
              width={150}
              height={60}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <UseCasesMenu />
            {navItems.slice(0, -1).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white hover:text-cyan-400 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold">
              <Link href="#apply">Apply</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-gray-950 border-gray-800">
              <div className="flex flex-col space-y-4 mt-6">
                <UseCasesMenu isMobile />
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    asChild
                    className="w-full justify-start text-white hover:text-cyan-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}
                <div className="pt-4">
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href="#apply">Apply</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}