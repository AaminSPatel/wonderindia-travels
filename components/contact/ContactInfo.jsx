"use client";

import { motion } from "framer-motion";
import { HiOutlinePhone, HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa6";
import { staggerContainer, fadeUp } from "@/lib/utils";

const cards = [
  {
    icon: HiOutlinePhone,
    label: "Call Us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    color: "bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-300",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300",
  },
  {
    icon: HiOutlineEnvelope,
    label: "Email Us",
    value: "hello@wanderindia.com",
    href: "mailto:hello@wanderindia.com",
    color: "bg-sunset-50 text-sunset-600 dark:bg-sunset-500/10 dark:text-sunset-300",
  },
  {
    icon: HiOutlineMapPin,
    label: "Visit Us",
    value: "Andheri East, Mumbai 400069",
    href: "#map",
    color: "bg-deepblue/5 text-deepblue dark:bg-white/10 dark:text-cream",
  },
];

export default function ContactInfo() {
  return (
    <section className="container-px mt-16 relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {cards.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            variants={fadeUp}
            custom={i}
            whileHover={{ y: -6 }}
            className="glass-card flex flex-col items-start rounded-3xl p-6"
          >
            <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${c.color}`}>
              <c.icon className="h-6 w-6" />
            </span>
            <span className="mt-4 font-utility text-xs uppercase tracking-wide text-deepblue/50 dark:text-cream/50">
              {c.label}
            </span>
            <span className="mt-1 font-display text-sm font-semibold text-deepblue dark:text-cream">
              {c.value}
            </span>
          </motion.a>
        ))}
      </motion.div>

      <div className="mt-8 flex justify-center gap-4">
        {[FaInstagram, FaFacebookF, FaYoutube].map((Icon, i) => (
          <a
            key={i}
            href="#"
            aria-label="Social link"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-deepblue/5 text-deepblue transition-colors hover:bg-deepblue hover:text-cream dark:bg-white/10 dark:text-cream"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </section>
  );
}
