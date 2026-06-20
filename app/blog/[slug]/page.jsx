import Image from "next/image";
import { notFound } from "next/navigation";
import { HiOutlineClock, HiOutlineCalendarDays, HiOutlineUser } from "react-icons/hi2";
import { blogPosts, getPostBySlug } from "@/data/testimonials";
import BlogCard from "@/components/blog/BlogCard";
import SectionHeading from "@/components/shared/SectionHeading";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: "article",
    },
  };
}

export default function BlogDetailPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden pt-20">
        <Image src={post.image} alt={post.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-deepblue/90 via-deepblue/40 to-deepblue/10" />
        <div className="container-px relative mx-auto flex h-full max-w-4xl flex-col justify-end pb-12">
          <span className="chip w-fit border-transparent bg-sunset text-white">{post.category}</span>
          <h1 className="heading-xl mt-4 text-cream text-3xl sm:text-5xl text-balance">{post.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-5 font-utility text-xs text-cream/70">
            <span className="flex items-center gap-1.5">
              <HiOutlineUser className="h-4 w-4" /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <HiOutlineCalendarDays className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <HiOutlineClock className="h-4 w-4" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      <section className="section-py container-px">
        <div className="mx-auto max-w-3xl font-body text-base leading-relaxed text-deepblue/70 dark:text-cream/70">
          <p className="font-display text-xl text-deepblue dark:text-cream">{post.excerpt}</p>

          <p className="mt-6">
            India rewards travellers who plan with intention. Whether you are
            chasing snow-capped passes, quiet backwaters or sunrise temple
            bells, the difference between an average trip and a memorable one
            usually comes down to timing, pacing and a handful of details
            that aren&apos;t obvious until you&apos;ve made the mistake once.
            This guide pulls from our travel desk&apos;s own notes — the
            questions we get asked most before a booking, and the answers
            that actually hold up once travellers are on the ground.
          </p>

          <h2 className="mt-10 font-display text-xl font-semibold text-deepblue dark:text-cream">
            Start With the Season, Not the Destination
          </h2>
          <p className="mt-3">
            The single biggest mistake we see is booking a destination before
            checking whether the season suits it. A Himalayan hill station in
            peak monsoon, or a desert city in May, can undo even the best
            itinerary. Cross-check your travel window against each
            destination&apos;s best-time guidance before locking dates.
          </p>

          <h2 className="mt-10 font-display text-xl font-semibold text-deepblue dark:text-cream">
            Build in Slack Days
          </h2>
          <p className="mt-3">
            Mountain routes, in particular, are vulnerable to weather delays.
            Wherever possible, keep one buffer day in a multi-stop itinerary
            so a single delayed transfer doesn&apos;t cascade into a missed
            flight home.
          </p>

          <h2 className="mt-10 font-display text-xl font-semibold text-deepblue dark:text-cream">
            Book Verified Stays and Guides
          </h2>
          <p className="mt-3">
            India&apos;s tourism infrastructure varies widely by region.
            Sticking to verified accommodation and licensed local guides —
            rather than the cheapest unlisted option — tends to be the
            difference between a smooth trip and a stressful one, especially
            in remote areas with limited connectivity.
          </p>

          <p className="mt-8">
            Have questions about planning a trip like this? Our travel desk
            is happy to help build a custom itinerary around your dates and
            budget — reach out through our contact page anytime.
          </p>
        </div>
      </section>

      <section className="section-py container-px bg-deepblue/[0.03] dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Keep Reading" title="More From the Travel Journal" />
          <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <BlogCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
