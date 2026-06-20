"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import MagneticButton from "@/components/ui/MagneticButton";
import GradientBlob from "@/components/ui/GradientBlob";

export default function CTASection() {
  return (
    <section className="container-px pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-sky bg-200% animate-gradient-shift px-8 py-16 text-center sm:px-16 sm:py-20"
      >
        <div className="absolute inset-0 bg-grain opacity-30" />
        <GradientBlob variant="sunset" className="-top-10 left-1/4 h-72 w-72" />
        <div className="relative">
          <h2 className="heading-xl text-cream text-3xl sm:text-4xl lg:text-5xl text-balance">
            Your Next Trip Starts With One Message
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-cream/70">
            Tell us where you'd like to go and our travel desk will reply with a
            tailored itinerary within 24 hours — no obligation, no spam.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton as="a" {...{ href: "/contact" }} className="btn-primary">
              Talk to a Travel Expert <FaArrowRight className="h-3.5 w-3.5" />
            </MagneticButton>
            <MagneticButton /* as="a"  */{...{ href: "/packages" }} className="btn-secondary ">
              Browse Packages
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
