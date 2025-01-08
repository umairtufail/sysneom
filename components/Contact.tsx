"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 font-syne text-foreground"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <form className="space-y-6">
            <div>
              <Label htmlFor="name" className="font-syne text-foreground">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Your name"
                className="bg-background text-foreground"
              />
            </div>
            <div>
              <Label htmlFor="email" className="font-syne text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                className="bg-background text-foreground"
              />
            </div>
            <div>
              <Label htmlFor="message" className="font-syne text-foreground">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Your message"
                className="bg-background text-foreground"
              />
            </div>
            <Button
              type="submit"
              className="w-full font-syne bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
