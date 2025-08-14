"use client";
interface NewsCardProps {
  author: string;
  date: string;
  title: string;
  content: string;
  imageUrl: string;
  imageAlt?: string;
}

export default function NewsCard({ author, date, title, content, imageUrl, imageAlt }: NewsCardProps) {
  // Special layout for Tatopani ICD article
  if (
    title ===
    "Trans Silk joint venture company of Trans Nepal to operate Tatopani ICD for five years"
  ) {
    return (
      <div className="mb-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h2 className="text-brand-primary font-poppins text-xl font-semibold leading-normal mb-2">
              {title}
            </h2>
            <div className="flex gap-4 mb-4">
              <span
                className="text-sm font-semibold"
                style={{ color: 'rgba(40, 59, 154, 0.72)' }}
              >
                {author}
              </span>
              <span
                className="text-sm font-semibold"
                style={{ color: 'rgba(40, 59, 154, 0.60)' }}
              >
                {date}
              </span>
            </div>
          </div>
          <img
            src={imageUrl}
            alt={imageAlt || title}
            className="w-full md:w-[320px] h-[220px] object-cover rounded-2xl mb-4 md:mb-0 md:ml-6 flex-shrink-0"
          />
        </div>
        {/* Content full width below image and title */}
        <div className="mt-4">
          <p className="text-gray-700 font-inter text-base leading-7 text-justify">
            {content}
          </p>
        </div>
      </div>
    );
  }

  // Default layout for other articles
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-start">
      <div className="flex-1 max-w-none lg:max-w-3xl">
        <h2 className="text-brand-primary font-poppins text-xl font-semibold leading-normal mb-4">
          {title}
        </h2>
        <div className="flex gap-4 mb-4">
          <span
            className="text-sm font-semibold"
            style={{ color: 'rgba(40, 59, 154, 0.72)' }}
          >
            {author}
          </span>
          <span
            className="text-sm font-semibold"
            style={{ color: 'rgba(40, 59, 154, 0.60)' }}
          >
            {date}
          </span>
        </div>
        <div
          className="text-base font-medium leading-8 text-justify"
          style={{ color: 'rgba(75, 75, 75, 0.84)' }}
        >
          {content}
        </div>
      </div>
      <div className="flex-shrink-0 w-full lg:w-auto">
        <img
          src={imageUrl}
          alt={imageAlt || title}
          className="w-full lg:w-96 h-auto rounded-lg object-cover"
          style={{ maxWidth: '442px' }}
        />
      </div>
    </div>
  );
}
