import Link from "next/link";
import { IconArrow } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-white px-5 py-24">
      <div className="text-center">
        <p className="font-display text-7xl font-extrabold text-gradient">404</p>
        <h1 className="mt-4 text-2xl font-bold text-brand-900">
          This page took a gap year
        </h1>
        <p className="mx-auto mt-3 max-w-md text-brand-900/70">
          The page you&apos;re looking for doesn&apos;t exist — but your future
          does. Let&apos;s get you back on track.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to home <IconArrow />
        </Link>
      </div>
    </section>
  );
}
