import Link from "next/link";
import { site } from "@/lib/site";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href ? `${site.url}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="bg-white border-b border-brand-50">
        <div className="container-page py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm">
            {allItems.map((item, i) => {
              const isLast = i === allItems.length - 1;
              return (
                <li key={item.label} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <span className="text-brand-300" aria-hidden="true">/</span>
                  )}
                  {isLast || !item.href ? (
                    <span className="font-medium text-brand-900">{item.label}</span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-brand-900/60 hover:text-brand-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
