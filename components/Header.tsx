"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Globe, Menu } from "lucide-react";

const whoWeAreContent = {
  description:
    "Sysneom is an innovative global consulting firm delivering industry-leading digital solutions to transform and empower businesses.",
  columns: [
    {
      title: "Our Company",
      links: [
        { title: "Industries", href: "/industries" },
        { title: "Diversity, Equity & Inclusion", href: "/dei" },
        { title: "Our Partners", href: "/partners" },
        { title: "Corporate Sustainability", href: "/sustainability" },
        { title: "Awards", href: "/awards" },
      ],
    },
    {
      title: "In the News",
      links: [
        { title: "Press Releases", href: "/press" },
        { title: "Events", href: "/events" },
        { title: "Insights", href: "/insights" },
        { title: "Podcasts", href: "/podcasts" },
        { title: "White Papers", href: "/white-papers" },
      ],
    },
  ],
  latest: {
    pressRelease: {
      title: "Latest Press Release",
      content: "Sysneom Expands AI Capabilities with Strategic Acquisition",
    },
    news: {
      title: "Latest In the News",
      content: "Sysneom's Innovative Approach to Digital Transformation",
    },
  },
};

const whatWeDoContent = {
  columns: [
    {
      title: "Services",
      links: [
        { title: "Digital Strategy", href: "/digital-strategy" },
        { title: "Technology Consulting", href: "/consulting" },
        { title: "Cloud Solutions", href: "/cloud" },
        { title: "AI & Machine Learning", href: "/ai-ml" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { title: "Enterprise Modernization", href: "/modernization" },
        { title: "Data Analytics", href: "/analytics" },
        { title: "Cybersecurity", href: "/security" },
        { title: "Digital Banking", href: "/banking" },
      ],
    },
  ],
};

export default function NavMenu() {
  return (
    <div className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-foreground">
            Sysneom
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 font-medium">
                  Who We Are
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[900px] p-6 grid grid-cols-12 gap-6">
                    <div className="col-span-3">
                      <p className="text-sm text-muted-foreground">
                        {whoWeAreContent.description}
                      </p>
                    </div>

                    {whoWeAreContent.columns.map((column, index) => (
                      <div key={column.title} className="col-span-3">
                        <h3 className="font-medium mb-2 text-foreground">
                          {column.title}
                        </h3>
                        <ul className="space-y-2">
                          {column.links.map((link) => (
                            <li key={link.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={link.href}
                                  className="text-sm text-muted-foreground hover:text-primary"
                                >
                                  {link.title}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="col-span-3">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium mb-1 text-foreground">
                            {whoWeAreContent.latest.pressRelease.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {whoWeAreContent.latest.pressRelease.content}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1 text-foreground">
                            {whoWeAreContent.latest.news.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {whoWeAreContent.latest.news.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 font-medium">
                  What We Do
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-6 grid grid-cols-2 gap-6">
                    {whatWeDoContent.columns.map((column) => (
                      <div key={column.title}>
                        <h3 className="font-medium mb-2 text-foreground">
                          {column.title}
                        </h3>
                        <ul className="space-y-2">
                          {column.links.map((link) => (
                            <li key={link.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={link.href}
                                  className="text-sm text-muted-foreground hover:text-primary"
                                >
                                  {link.title}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/careers" legacyBehavior passHref>
                  <NavigationMenuLink className="h-10 px-4 py-2 inline-flex items-center justify-center font-medium hover:text-primary">
                    Careers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="h-10 px-4 py-2 inline-flex items-center justify-center font-medium hover:text-primary">
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="hidden md:flex mr-2">
              <Globe className="h-5 w-5" />
              <span className="sr-only">Language</span>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="who-we-are">
                      <AccordionTrigger>Who We Are</AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-4 flex flex-col space-y-2">
                          {whoWeAreContent.columns.map((column) => (
                            <React.Fragment key={column.title}>
                              <h4 className="font-medium text-sm text-foreground mt-2">
                                {column.title}
                              </h4>
                              {column.links.map((link) => (
                                <Link
                                  key={link.title}
                                  href={link.href}
                                  className="text-sm text-muted-foreground hover:text-primary"
                                >
                                  {link.title}
                                </Link>
                              ))}
                            </React.Fragment>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="what-we-do">
                      <AccordionTrigger>What We Do</AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-4 flex flex-col space-y-2">
                          {whatWeDoContent.columns.map((column) => (
                            <React.Fragment key={column.title}>
                              <h4 className="font-medium text-sm text-foreground mt-2">
                                {column.title}
                              </h4>
                              {column.links.map((link) => (
                                <Link
                                  key={link.title}
                                  href={link.href}
                                  className="text-sm text-muted-foreground hover:text-primary"
                                >
                                  {link.title}
                                </Link>
                              ))}
                            </React.Fragment>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Link
                    href="/careers"
                    className="text-lg font-medium text-foreground hover:text-primary"
                  >
                    Careers
                  </Link>
                  <Link
                    href="/contact"
                    className="text-lg font-medium text-foreground hover:text-primary"
                  >
                    Contact Us
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}
