"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brain, Cloud, BarChart } from "lucide-react";

const services = [
  {
    title: "AI Solutions",
    description:
      "Leverage cutting-edge artificial intelligence to transform your business processes.",
    icon: Brain,
  },
  {
    title: "Cloud Services",
    description:
      "Scalable and secure cloud solutions to power your digital infrastructure.",
    icon: Cloud,
  },
  {
    title: "Digital Transformation",
    description:
      "Comprehensive strategies to evolve your business in the digital age.",
    icon: BarChart,
  },
];

export default function Services() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 font-syne text-foreground"
        >
          Our Services
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card text-card-foreground">
                <CardHeader>
                  <service.icon className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle className="font-syne">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
