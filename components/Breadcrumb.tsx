import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  centered?: boolean;
}

export default function Breadcrumb({ items, centered = false }: BreadcrumbProps) {
  return (
    <div className={`text-brand-blue font-inter text-xs font-normal mt-6 md:mt-10 mb-4 md:mb-8 flex items-center gap-2 px-4 md:px-10 lg:px-20 ${centered ? 'justify-center' : ''}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && (
            <ChevronRight className="w-2 h-4 text-brand-blue" />
          )}
        </div>
      ))}
    </div>
  );
}
