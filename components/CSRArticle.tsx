"use client";
interface CSRArticleProps {
  company: string;
  date: string;
  title: string;
  content: string;
  image?: string;
  imagePosition?: 'right' | 'left' | 'side' | 'gallery';
  additionalImages?: string[];
  bulletPoints?: string[];
  layout?: 'default' | 'side-image' | 'gallery' | 'bullet-points';
}

export default function CSRArticle({
  company,
  date,
  title,
  content,
  image,
  imagePosition = 'right',
  additionalImages = [],
  bulletPoints = [],
  layout = 'default'
}: CSRArticleProps) {
  const renderContent = () => {
    switch (layout) {
      case 'side-image':
        return (
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex gap-5 mb-4">
                <span className="text-trans-nepal-blue-light text-sm font-semibold">
                  {company}
                </span>
                <span className="text-trans-nepal-blue-lighter text-sm font-semibold">
                  {date}
                </span>
              </div>
              <h2 className="text-trans-nepal-blue font-heading text-xl font-semibold leading-normal mb-4">
                {title}
              </h2>
              <div className="text-gray-700 text-opacity-84 text-base font-medium leading-8 text-justify space-y-5">
                {content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            {image && (
              <div className="flex-shrink-0">
                <img 
                  src={image}
                  alt={title}
                  className="w-full lg:w-[467px] h-[248px] object-cover rounded-2xl"
                />
              </div>
            )}
          </div>
        );

      case 'gallery':
        return (
          <>
            <div className="flex gap-5 mb-4">
              <span className="text-trans-nepal-blue-light text-sm font-semibold">
                {company}
              </span>
              <span className="text-trans-nepal-blue-lighter text-sm font-semibold">
                {date}
              </span>
            </div>
            <h2 className="text-trans-nepal-blue font-heading text-xl font-semibold leading-normal mb-4">
              {title}
            </h2>
            <p className="text-gray-700 text-opacity-84 text-base font-medium leading-8 text-justify mb-8">
              {content}
            </p>
            {additionalImages.length > 0 && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
                {additionalImages.map((img, index) => (
                  <img 
                    key={index}
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-[217px] object-cover rounded-2xl"
                  />
                ))}
              </div>
            )}
          </>
        );

      case 'bullet-points':
        return (
            <>
            <div className="flex gap-5 mb-4">
                <span className="text-trans-nepal-blue-light text-sm font-semibold">
                {company}
                </span>
                <span className="text-trans-nepal-blue-lighter text-sm font-semibold">
                {date}
                </span>
            </div>
            <h2 className="text-trans-nepal-blue font-heading text-xl font-semibold leading-normal mb-4">
                {title}
            </h2>
            <div className="flex flex-col lg:flex-row gap-10 items-start mb-8">
                <div className="flex-1">
                {bulletPoints.map((point, index) => (
                    <div
                    key={index}
                    className="text-black text-base font-semibold leading-normal mb-3"
                    >
                    {`${index + 1}. ${point}`}
                    </div>
                ))}
                </div>
                {image && (
                <div className="flex-shrink-0">
                    <img
                    src={image}
                    alt={title}
                    className="w-full lg:w-[345px] h-[159px] object-cover rounded-2xl"
                    />
                </div>
                )}
            </div>
            <div className="text-gray-700 text-opacity-84 text-base font-medium leading-8 text-justify space-y-5">
                {content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
                ))}
            </div>
            </>
        );

      default:
        return (
          <>
            <div className="flex gap-5 mb-4">
              <span className="text-trans-nepal-blue-light text-sm font-semibold">
                {company}
              </span>
              <span className="text-trans-nepal-blue-lighter text-sm font-semibold">
                {date}
              </span>
            </div>
            <h1 className="text-trans-nepal-blue font-heading text-xl font-semibold leading-normal mb-4">
              {title}
            </h1>
            <div className="relative">
              <p className="text-gray-700 text-opacity-84 text-base font-medium leading-8 text-justify mb-5">
                {content}
              </p>
              {image && imagePosition === 'right' && (
                <img 
                  src={image}
                  alt={title}
                  className="w-[400px] h-[269px] object-cover rounded-2xl float-right ml-5 -mt-24"
                />
              )}
            </div>
          </>
        );
    }
  };

  return (
    <article className="mb-16">
      {renderContent()}
    </article>
  );
}
