import BlogHero from "@/components/blog/BlogHero";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/testimonials";

export const metadata = {
  title: "Travel Blog | India Travel Guides, Tips & Honeymoon Ideas",
  description:
    "Read our travel blog for India holiday guides, budget travel tips, honeymoon destination ideas and adventure travel guides — written by our travel desk.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <section className="section-py container-px">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
