"use client";

import { motion } from "framer-motion";
import { HiOutlineTag, HiOutlineShieldCheck, HiOutlineLockClosed, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import SectionHeading from "@/components/shared/SectionHeading";
import { staggerContainer, fadeUp } from "@/lib/utils";

const features = [
  {
    icon: HiOutlineTag,
    title: "Best Prices",
    desc: "Direct partnerships with hotels and operators mean no middleman markup on any package.",
    color: "bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-300",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Trusted Guides",
    desc: "Every local guide is background-verified and rated by past travellers before assignment.",
    color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300",
  },
  {
    icon: HiOutlineLockClosed,
    title: "Secure Booking",
    desc: "256-bit encrypted payments and instant confirmation on every booking, every time.",
    color: "bg-sunset-50 text-sunset-600 dark:bg-sunset-500/10 dark:text-sunset-300",
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: "24/7 Support",
    desc: "A dedicated travel desk reachable by call, WhatsApp or chat throughout your trip.",
    color: "bg-deepblue/5 text-deepblue dark:bg-white/10 dark:text-cream",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-py container-px bg-deepblue/[0.03] dark:bg-white/[0.02]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why WanderIndia"
          title="Travel Planned the Way It Should Be"
          description="Four commitments we hold ourselves to on every single booking, big or small."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="neu group rounded-3xl p-7"
            >
              <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${f.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                <f.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-deepblue dark:text-cream">
                {f.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-deepblue/60 dark:text-cream/60">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
