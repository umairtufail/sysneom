"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const insights = [
  {
    title: "The Future of AI in Business",
    description:
      "Explore how artificial intelligence is reshaping industries and driving innovation.",
    category: "Artificial Intelligence",
  },
  {
    title: "Cloud Migration Strategies",
    description:
      "Learn best practices for seamless cloud migration and optimization.",
    category: "Cloud Computing",
  },
  {
    title: "Digital Transformation Trends",
    description:
      "Stay ahead of the curve with the latest digital transformation trends and strategies.",
    category: "Digital Strategy",
  },
];

export default function Insights() {
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
          Latest Insights
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card text-card-foreground">
                <CardHeader>
                  <CardTitle className="font-syne">{insight.title}</CardTitle>
                  <CardDescription>{insight.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {insight.description}
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto font-syne text-primary"
                  >
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Button
            size="lg"
            className="font-syne bg-primary text-primary-foreground hover:bg-primary/90"
          >
            View All Insights
          </Button>
        </div>
      </div>
    </section>
  );
}
