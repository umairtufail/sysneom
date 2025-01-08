"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <motion.div
            className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 font-syne text-foreground">
              Empowering Innovation
              <br />
              <span className="text-primary">Accelerating Transformation</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              We work with businesses globally to deliver tailored, end-to-end
              Artificial Intelligence, Consulting, Data, Digital, Cloud & DevOps
              and Software Engineering solutions that drive value and growth.
            </p>
            <p className="text-muted-foreground">
              Our business domain expertise covers hi-tech, financial services
              and insurance, while we explore the art of the possible in our
              groundbreaking Innovation Labs.
            </p>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/image.jpg"
              alt="Smiling professional"
              width={500}
              height={500}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
