import { destinations } from "@/data/destinations";
import { packages } from "@/data/packages";
import { blogPosts } from "@/data/testimonials";

export default function sitemap() {
  const base = "https://www.wanderindia.com";
  const staticRoutes = ["", "/about", "/destinations", "/packages", "/contact", "/booking", "/blog"].map(
    (route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
    })
  );

  const destinationRoutes = destinations.map((d) => ({
    url: `${base}/destinations/${d.slug}`,
    lastModified: new Date(),
  }));

  const packageRoutes = packages.map((p) => ({
    url: `${base}/packages/${p.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...destinationRoutes, ...packageRoutes, ...blogRoutes];
}
