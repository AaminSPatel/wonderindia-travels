"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus } from "react-icons/hi2";
import SectionHeading from "@/components/shared/SectionHeading";

const defaultFaqs = [
  {
    q: "How do I book a holiday package with WanderIndia?",
    a: "Choose a package or destination, click Book Now, and complete our 4-step booking flow — package, traveler details, dates and payment. You'll receive instant confirmation by email and WhatsApp.",
  },
  {
    q: "Are your tour guides verified?",
    a: "Yes. Every local guide is background-verified, trained and rated by past travellers before being assigned to any group.",
  },
  {
    q: "Can I customize an existing package?",
    a: "Absolutely — every package on our site can be tailored for dates, hotel category, meal plan and add-on activities. Use the inquiry form on any package page.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit/debit cards, UPI, net banking and EMI options through our 256-bit encrypted payment gateway.",
  },
  {
    q: "Is travel insurance included in packages?",
    a: "Travel insurance is optional on most packages and can be added during the booking flow for a small additional cost.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Cancellations made 15+ days before travel receive a full refund minus processing fees. Closer cancellations are reviewed case-by-case — contact our support desk for details.",
  },
];

export default function FAQ({ faqs = defaultFaqs, title = "Frequently Asked Questions", eyebrow = "FAQs" }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-py container-px">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow={eyebrow} title={title} />

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="overflow-hidden rounded-2xl border border-deepblue/10 bg-white dark:border-white/10 dark:bg-ink-800"
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-sm font-semibold text-deepblue dark:text-cream sm:text-base">
                  {f.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-deepblue/5 text-deepblue dark:bg-white/10 dark:text-cream"
                >
                  <HiPlus className="h-4 w-4" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="px-6 pb-5 font-body text-sm leading-relaxed text-deepblue/60 dark:text-cream/60">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
