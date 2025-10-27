import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  items, 
  className = ''
}) => {
  // Generate structured data for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.url && { "item": `${process.env.NEXT_PUBLIC_BASE_URL || 'https://divinelits.com'}${item.url}` })
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      
      <nav aria-label="Breadcrumb" className={`sr-only ${className}`}>
        <ol className="flex items-center flex-wrap gap-1 text-sm">
          {items.map((item, index) => (
            <li key={`breadcrumb-${index}`} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 mx-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
              
              {index === items.length - 1 ? (
                <span 
                  className="text-gray-800 font-medium text-sm"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : item.url ? (
                <Link 
                  href={item.url}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200 ease-in-out text-sm hover:underline underline-offset-2"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-gray-400 text-sm">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;