"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { HiBars3, HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import MegaMenu from "../MegaMenu";
import MobileMenu from "../MobileMenu";
import MagneticButton from "@/components/ui/MagneticButton";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/destinations", label: "Destinations", mega: true },
  { href: "/packages", label: "Packages" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    setDark((d) => {
      document.documentElement.classList.toggle("dark", !d);
      return !d;
    });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2.5" : "py-4"
      }`}
    >
      <div className="container-px">
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
            scrolled
              ? "glass shadow-glass border-white/30"
              : "border border-transparent bg-transparent"
          }`}
        >
          <Link href="/" className="font-display text-xl font-semibold tracking-tight text-deepblue dark:text-cream">
            Wander<span className="text-sunset">India</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <div
                key={l.href}
                className="relative"
                onMouseEnter={() => l.mega && setMegaOpen(true)}
                onMouseLeave={() => l.mega && setMegaOpen(false)}
              >
                <Link
                  href={l.href}
                  className="relative px-4 py-2 font-utility text-sm font-medium text-deepblue/80 transition-colors hover:text-deepblue dark:text-cream/80 dark:hover:text-cream"
                >
                  {l.label}
                </Link>
                <AnimatePresence>{l.mega && megaOpen && <MegaMenu />}</AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-deepblue/70 transition-colors hover:bg-deepblue/5 dark:text-cream/70 dark:hover:bg-white/10 sm:flex"
            >
              {dark ? <HiOutlineSun className="h-5 w-5" /> : <HiOutlineMoon className="h-5 w-5" />}
            </button>

            <MagneticButton
              as="a"
              {...{ href: "/booking" }}
              className="btn-primary hidden !px-6 !py-3 text-sm lg:inline-flex"
            >
              Plan Your Trip
            </MagneticButton>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-deepblue dark:text-cream lg:hidden"
            >
              <HiBars3 className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}