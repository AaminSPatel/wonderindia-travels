"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiXMark } from "react-icons/hi2";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/destinations", label: "Destinations" },
  { href: "/packages", label: "Packages" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[70] bg-deepblue/40 backdrop-blur-sm lg:hidden"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed right-0 top-0 z-[80] flex h-full w-[82%] max-w-sm flex-col justify-between bg-cream px-7 py-7 shadow-glass-lg dark:bg-ink-800 lg:hidden"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-display text-xl font-semibold text-deepblue dark:text-cream">
                  Wander<span className="text-sunset">India</span>
                </span>
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="rounded-full bg-deepblue/5 p-2 text-deepblue dark:bg-white/10 dark:text-cream"
                >
                  <HiXMark className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-10 flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <Link
                      href={l.href}
                      onClick={onClose}
                      className="block border-b border-deepblue/10 py-4 font-display text-lg font-medium text-deepblue dark:border-white/10 dark:text-cream"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
            <div>
              <Link
                href="/booking"
                onClick={onClose}
                className="btn-primary w-full justify-center"
              >
                Book Your Trip
              </Link>
              <div className="mt-6 flex items-center gap-4 text-deepblue/60 dark:text-cream/60">
                <FaInstagram className="h-5 w-5" />
                <FaFacebookF className="h-5 w-5" />
                <FaYoutube className="h-5 w-5" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
