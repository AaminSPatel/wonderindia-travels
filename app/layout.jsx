import { Outfit, Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";
import LoadingScreen from "@/components/layout/LoadingScreen";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.wanderindia.com"),
  title: {
    default: "WanderIndia — Best Travel Agency in India | Holiday & Tour Packages",
    template: "%s | WanderIndia",
  },
  description:
    "WanderIndia is India's trusted travel agency for holiday packages, honeymoon tours, family vacations and adventure travel. Best prices, verified guides, secure booking and 24/7 support across Goa, Kashmir, Kerala, Ladakh and more.",
  keywords: [
    "Best Travel Agency in India",
    "Holiday Packages India",
    "Tour Packages India",
    "Travel Booking",
    "Honeymoon Packages",
    "Family Tour Packages",
    "Adventure Travel India",
    "Luxury Travel India",
  ],
  openGraph: {
    title: "WanderIndia — Best Travel Agency in India",
    description:
      "Discover India's most amazing destinations with curated holiday packages, trusted guides and secure booking.",
    url: "https://www.wanderindia.com",
    siteName: "WanderIndia",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "WanderIndia Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WanderIndia — Best Travel Agency in India",
    description:
      "Curated holiday packages, trusted guides and secure booking across India's top destinations.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "WanderIndia",
    url: "https://www.wanderindia.com",
    description:
      "India's trusted travel agency for holiday packages, honeymoon tours, family vacations and adventure travel.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "204, Skyline Business Park, Andheri East",
      addressLocality: "Mumbai",
      addressRegion: "MH",
      postalCode: "400069",
      addressCountry: "IN",
    },
    telephone: "+91-98765-43210",
    priceRange: "₹₹",
  };

  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <LoadingScreen />
        <SmoothScrollProvider>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
