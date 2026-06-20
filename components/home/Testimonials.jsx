"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { HiStar } from "react-icons/hi2";
import { FaQuoteLeft } from "react-icons/fa6";
import SectionHeading from "@/components/shared/SectionHeading";
import { testimonials } from "@/data/testimonials";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="section-py container-px bg-deepblue/[0.03] dark:bg-white/[0.02]">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Traveller Stories"
          title="What Our Travellers Say"
          description="Real trips, real itineraries, real feedback from across India."
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="testimonial-swiper mt-14 pb-14"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="glass-card mx-auto max-w-3xl rounded-3xl p-8 text-center sm:p-12">
                <FaQuoteLeft className="mx-auto h-8 w-8 text-sky-300" />
                <p className="mt-6 font-display text-lg leading-relaxed text-deepblue text-balance dark:text-cream sm:text-xl">
                  {t.quote}
                </p>
                <div className="mt-6 flex justify-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <HiStar key={i} className="h-4 w-4 text-sunset" />
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-display text-sm font-semibold text-deepblue dark:text-cream">
                      {t.name}
                    </p>
                    <p className="font-utility text-xs text-deepblue/50 dark:text-cream/50">
                      {t.location} · {t.trip}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
