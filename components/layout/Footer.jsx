import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { HiOutlinePhone, HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";

const exploreLinks = [
  { href: "/destinations", label: "Destinations" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Travel Blog" },
];

const packageLinks = [
  { href: "/packages?category=Honeymoon", label: "Honeymoon Tours" },
  { href: "/packages?category=Family+Tour", label: "Family Tours" },
  { href: "/packages?category=Adventure+Tour", label: "Adventure Tours" },
  { href: "/packages?category=Luxury+Tour", label: "Luxury Tours" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deepblue text-cream">
      <div className="absolute inset-0 bg-grain opacity-40" aria-hidden="true" />
      <div className="container-px relative section-py">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="font-display text-2xl font-semibold">
              Wander<span className="text-sunset">India</span>
            </Link>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-cream/60">
              India&apos;s trusted travel agency for curated holiday packages,
              honeymoon tours, family vacations and adventure travel — with
              verified guides and secure booking on every trip.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[FaInstagram, FaFacebookF, FaYoutube, FaXTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-sunset"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-cream/90">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-sm text-cream/60 transition-colors hover:text-sunset-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-cream/90">
              Packages
            </h4>
            <ul className="mt-5 space-y-3">
              {packageLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-sm text-cream/60 transition-colors hover:text-sunset-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-cream/90">
              Get in Touch
            </h4>
            <ul className="mt-5 space-y-4 font-body text-sm text-cream/60">
              <li className="flex items-start gap-3">
                <HiOutlineMapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-300" />
                204, Skyline Business Park, Andheri East, Mumbai 400069
              </li>
              <li className="flex items-center gap-3">
                <HiOutlinePhone className="h-5 w-5 flex-shrink-0 text-sky-300" />
                <a href="tel:+919876543210" className="hover:text-sunset-300">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlineEnvelope className="h-5 w-5 flex-shrink-0 text-sky-300" />
                <a href="mailto:hello@wanderindia.com" className="hover:text-sunset-300">hello@wanderindia.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 font-utility text-xs text-cream/40 sm:flex-row">
          <p>© {new Date().getFullYear()} WanderIndia Holidays Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-cream/70">Privacy Policy</Link>
            <Link href="#" className="hover:text-cream/70">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
