"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight, FaPlay } from "react-icons/fa6";
import MagneticButton from "@/components/ui/MagneticButton";
import GradientBlob from "@/components/ui/GradientBlob";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-sky bg-200% animate-gradient-shift pt-32 pb-24">
      <div className="absolute inset-0 bg-grain opacity-30" aria-hidden="true" />
      <GradientBlob variant="sky" className="-top-20 -left-20 h-96 w-96" />
      <GradientBlob variant="emerald" className="bottom-0 right-0 h-[28rem] w-[28rem]" />

      {/* Floating destination chips */}
      <motion.div
        className="absolute right-[8%] top-[22%] hidden lg:block"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="glass flex items-center gap-3 rounded-2xl p-3 shadow-glass-lg">
          <Image
            src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=200&auto=format&fit=crop"
            alt="Kashmir houseboat"
            width={56}
            height={56}
            className="rounded-xl object-cover"
          />
          <div>
            <p className="font-display text-sm font-semibold text-cream">Kashmir</p>
            <p className="font-utility text-xs text-cream/70">from ₹24,999</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[18%] right-[18%] hidden lg:block"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="glass flex items-center gap-3 rounded-2xl p-3 shadow-glass-lg">
          <Image
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=200&auto=format&fit=crop"
            alt="Kerala backwaters"
            width={56}
            height={56}
            className="rounded-xl object-cover"
          />
          <div>
            <p className="font-display text-sm font-semibold text-cream">Kerala</p>
            <p className="font-utility text-xs text-cream/70">from ₹19,999</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute left-[6%] bottom-[12%] hidden lg:flex items-center gap-2 rounded-2xl glass px-4 py-3 shadow-glass-lg"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
          ✓
        </span>
        <div>
          <p className="font-display text-sm font-semibold text-cream">50,000+</p>
          <p className="font-utility text-xs text-cream/70">Happy travellers</p>
        </div>
      </motion.div>

      <div className="container-px relative mx-auto max-w-5xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading-eyebrow !text-sunset-300 mb-6 inline-flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sunset-300" />
          India&apos;s Most Trusted Travel Agency
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-cream text-balance sm:text-6xl lg:text-7xl"
        >
          Discover India&apos;s Most
          <span className="block bg-gradient-to-r from-sky-300 via-emerald-300 to-sunset-300 bg-clip-text text-transparent">
            Amazing Destinations
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-xl font-body text-base text-cream/75 sm:text-lg"
        >
          From snow-capped Himalayan passes to sunlit Goan shores — curated
          holiday packages, verified guides and secure booking, planned around you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton as="a" {...{ href: "/packages" }} className="btn-primary !bg-sunset hover:!bg-sunset-600">
            Explore Packages <FaArrowRight className="h-3.5 w-3.5" />
          </MagneticButton>
          <MagneticButton as="a" {...{ href: "/booking" }} className="btn-secondary">
            <FaPlay className="h-3 w-3" /> Plan Your Trip
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-8 font-utility text-cream/60"
        >
          {["12+ States", "500+ Verified Guides", "4.8★ Avg. Rating"].map((t) => (
            <span key={t} className="text-xs sm:text-sm">{t}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
