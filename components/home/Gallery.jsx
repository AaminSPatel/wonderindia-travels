"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop",
    h: "h-64",
    caption: "Goa beach shacks",
  },
  {
    src: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800&auto=format&fit=crop",
    h: "h-80",
    caption: "Dal Lake, Kashmir",
  },
  {
    src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop",
    h: "h-56",
    caption: "Amber Fort, Jaipur",
  },
  {
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop",
    h: "h-72",
    caption: "Alleppey backwaters",
  },
  {
    src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
    h: "h-64",
    caption: "Nubra Valley, Ladakh",
  },
  {
    src: "https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=800&auto=format&fit=crop",
    h: "h-80",
    caption: "Lake Pichola, Udaipur",
  },
  {
    src: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=800&auto=format&fit=crop",
    h: "h-56",
    caption: "Root bridges, Meghalaya",
  },
  {
    src:"https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=1600&auto=format&fit=crop",
    h: "h-72",
    caption: "Ganga Aarti, Rishikesh",
  },
];

export default function Gallery() {
  return (
    <section className="section-py container-px">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Travel Gallery"
          title="Moments From Our Travellers"
          description="A glimpse into the landscapes, festivals and stays that make India unforgettable."
        />

        <div className="mt-12 columns-2 gap-5 sm:columns-3 lg:columns-4">
          {photos.map((p, i) => (
            <motion.div
              key={p.caption}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className={`group relative mb-5 overflow-hidden rounded-2xl ${p.h} break-inside-avoid`}
            >
              <Image
                src={p.src}
                alt={p.caption}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-deepblue/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-utility text-xs font-medium text-cream">
                  {p.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
