import Hero from "@/components/home/Hero";
import SearchSection from "@/components/home/SearchSection";
import PopularDestinations from "@/components/home/PopularDestinations";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Stats from "@/components/home/Stats";
import FeaturedPackages from "@/components/home/FeaturedPackages";
import Testimonials from "@/components/home/Testimonials";
import Gallery from "@/components/home/Gallery";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Best Travel Agency in India | Holiday & Tour Packages",
  description:
    "Book holiday packages, honeymoon tours, family vacations and adventure travel across India with WanderIndia — best prices, verified guides, secure booking and 24/7 support.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SearchSection />
      <PopularDestinations />
      <WhyChooseUs />
      <Stats />
      <FeaturedPackages />
      <Testimonials />
      <Gallery />
      <FAQ />
      <CTASection />

      {/* SEO content block */}
      <section className="container-px pb-24">
        <div className="mx-auto max-w-4xl font-body text-sm leading-relaxed text-deepblue/60 dark:text-cream/50">
          <h2 className="font-display text-xl font-semibold text-deepblue dark:text-cream">
            India&apos;s Most Trusted Travel Agency for Holiday & Tour Packages
          </h2>
          <p className="mt-4">
            WanderIndia is recognised as one of the best travel agencies in
            India, offering thoughtfully curated holiday packages across the
            country&apos;s most loved destinations — from the snow-laden
            valleys of Kashmir and Ladakh to the backwaters of Kerala and the
            beaches of Goa and the Andaman Islands. Whether you&apos;re
            planning a romantic honeymoon package, a multi-generational
            family tour, an adrenaline-filled adventure trip, or a solo
            escape to recharge, our travel consultants build every itinerary
            around your pace, budget and interests.
          </p>
          <p className="mt-4">
            Every tour package on WanderIndia includes verified accommodation,
            background-checked local guides and transparent, all-inclusive
            pricing with no hidden charges. Our secure online travel booking
            platform processes payments through 256-bit encryption, and a
            dedicated 24/7 support desk stays reachable by phone, WhatsApp and
            email throughout your journey — before departure, during your
            trip and after you return home.
          </p>
          <p className="mt-4">
            Searching for the best holiday packages in India, affordable
            honeymoon packages, family tour packages, or luxury travel
            experiences? Explore our destinations and packages pages to
            compare itineraries by duration, budget and traveller type, or
            reach out directly for a fully custom holiday plan built by our
            travel experts.
          </p>
        </div>
      </section>
    </>
  );
}
