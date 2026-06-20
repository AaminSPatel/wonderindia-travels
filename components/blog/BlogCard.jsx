"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineClock } from "react-icons/hi2";

export default function BlogCard({ post, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-glass transition-shadow duration-300 hover:shadow-glass-lg dark:bg-ink-800"
      >
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-utility text-xs font-semibold text-deepblue backdrop-blur-md">
            {post.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-semibold leading-snug text-deepblue dark:text-cream">
            {post.title}
          </h3>
          <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-deepblue/60 dark:text-cream/60">
            {post.excerpt}
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-deepblue/10 pt-4 font-utility text-xs text-deepblue/50 dark:border-white/10 dark:text-cream/50">
            <span>{post.author}</span>
            <span className="flex items-center gap-1">
              <HiOutlineClock className="h-3.5 w-3.5" /> {post.readTime}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
