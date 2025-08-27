"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { verticals } from "@/content/verticals";
import { cn } from "@/lib/utils";

interface UseCasesMenuProps {
  isMobile?: boolean;
}

export function UseCasesMenu({ isMobile = false }: UseCasesMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  
  const currentVertical = verticals.find(v => pathname === `/${v.id}` || (pathname === "/" && v.id === "general"));
  const menuVerticals = verticals.filter(v => v.id !== "general");

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="w-full justify-start text-white hover:text-cyan-400">
            Use Cases
            <ChevronDown className="ml-auto h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Industry Solutions</h3>
            <Command>
              <CommandList>
                <CommandGroup>
                  {menuVerticals.map((vertical) => {
                    const IconComponent = vertical.icon;
                    const isActive = currentVertical?.id === vertical.id;
                    
                    return (
                      <CommandItem key={vertical.id} asChild>
                        <Link
                          href={`/${vertical.id}`}
                          className={cn(
                            "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors",
                            isActive && "bg-cyan-50 border border-cyan-200"
                          )}
                          onClick={() => setOpen(false)}
                        >
                          <div className="p-2 rounded-md bg-gray-100">
                            <IconComponent className="w-4 h-4 text-cyan-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">{vertical.label}</div>
                            <div className="text-sm text-gray-600">{vertical.description}</div>
                          </div>
                          {isActive && <Check className="w-4 h-4 text-cyan-600" />}
                        </Link>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white hover:text-cyan-400 bg-transparent hover:bg-gray-800/50">
            Use Cases
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-80 p-4">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Industry Solutions</h3>
              <Command>
                <CommandList>
                  <CommandGroup>
                    {menuVerticals.map((vertical) => {
                      const IconComponent = vertical.icon;
                      const isActive = currentVertical?.id === vertical.id;
                      
                      return (
                        <CommandItem key={vertical.id} asChild>
                          <NavigationMenuLink asChild>
                            <Link
                              href={`/${vertical.id}`}
                              className={cn(
                                "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors w-full",
                                isActive && "bg-cyan-50 border border-cyan-200"
                              )}
                            >
                              <div className="p-2 rounded-md bg-gray-100">
                                <IconComponent className="w-4 h-4 text-cyan-600" />
                              </div>
                              <div className="flex-1 text-left">
                                <div className="font-medium text-gray-900">{vertical.label}</div>
                                <div className="text-sm text-gray-600">{vertical.description}</div>
                              </div>
                              {isActive && <Check className="w-4 h-4 text-cyan-600" />}
                            </Link>
                          </NavigationMenuLink>
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}