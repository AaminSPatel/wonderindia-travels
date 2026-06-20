import Link from "next/link";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="font-display text-7xl font-semibold text-deepblue dark:text-cream">404</span>
      <h1 className="mt-4 font-display text-2xl font-semibold text-deepblue dark:text-cream">
        This trail doesn&apos;t lead anywhere
      </h1>
      <p className="mt-2 max-w-sm font-body text-sm text-deepblue/60 dark:text-cream/60">
        The page you&apos;re looking for may have moved. Let&apos;s get you back on route.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </section>
  );
}
