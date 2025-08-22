import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';


// --- HeroSection inlined ---
interface BreadcrumbItem {
  label: string;
  href?: string;
}

const breadcrumbs: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'CSR' }
];

// --- MainContentSection inlined ---
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 flex-shrink-0">
        <path d="M44 18L24 2L4 18V22H8V42H18V34C18 32.4087 18.6321 30.8826 19.7574 29.7574C20.8826 28.6321 22.4087 28 24 28C25.5913 28 27.1174 28.6321 28.2426 29.7574C29.3679 30.8826 30 32.4087 30 34V42H40V22H44V18Z" fill="#737BA4"/>
      </svg>
    ),
    title: "Support for Rehabilitation",
    description: "Building Hope through Infrastructure Support"
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 flex-shrink-0">
        <path fillRule="evenodd" clipRule="evenodd" d="M24 3H23.948C23.8718 3.00032 23.7957 3.00499 23.72 3.014C23.5645 3.03061 23.4097 3.0533 23.256 3.082C22.7581 3.17965 22.2696 3.32017 21.796 3.502C20.592 3.954 18.926 4.804 16.8 6.4C15.22 7.584 12.646 8.28 10.204 8.648C8.83313 8.84954 7.45122 8.96709 6.066 9H4V24C4 27.312 5.356 30.28 7.2 32.794C9.046 35.304 11.46 37.47 13.8 39.226C16.7116 41.3918 19.834 43.2585 23.12 44.798L23.168 44.818L23.176 44.822L23.22 44.842C23.4743 44.9496 23.748 45.0033 24.0241 44.9999C24.3001 44.9964 24.5725 44.9359 24.824 44.822L24.832 44.818L24.878 44.798C25.1371 44.6797 25.3944 44.5577 25.65 44.432C26.166 44.18 26.898 43.812 27.77 43.332C30.0075 42.1166 32.1562 40.7446 34.2 39.226C36.54 37.47 38.954 35.306 40.8 32.794C42.644 30.28 44 27.312 44 24V9H41.934L41.7 8.994C40.3931 8.95317 39.0896 8.83697 37.796 8.646C35.354 8.28 32.78 7.588 31.2 6.4C29.074 4.804 27.408 3.954 26.202 3.502C25.7283 3.32017 25.2399 3.17965 24.742 3.082C24.5137 3.04203 24.2834 3.01532 24.052 3.002H24.024L24.012 3H24ZM22 14V22H14V26H22V34H26V26H34V22H26V14H22Z" fill="#737BA4"/>
      </svg>
    ),
    title: "Health Crisis Support",
    description: "Strengthening Nepal's Fight Against COVID-19"
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 flex-shrink-0">
        <path d="M26.6649 3.2028e-07H21.3696C20.3302 -0.000345054 19.3101 0.278642 18.4174 0.807394C17.5246 1.33615 16.7925 2.09496 16.2986 3.00343V20.7481H31.8497V3.25871C31.384 2.28421 30.6497 1.46083 29.732 0.88405C28.8143 0.307272 27.7508 0.000737265 26.6649 3.2028e-07ZM27.8205 15.197H26.1474V16.8589C26.1474 17.4178 25.9239 17.9539 25.526 18.3491C25.1282 18.7443 24.5885 18.9663 24.0259 18.9663C23.4632 18.9663 22.9236 18.7443 22.5257 18.3491C22.1279 17.9539 21.9043 17.4178 21.9043 16.8589V15.197H20.2312C19.0929 15.197 18.1649 14.3095 18.1132 13.1907C18.1331 12.6443 18.3644 12.1265 18.7589 11.7452C19.1534 11.3638 19.6808 11.1483 20.2312 11.1433H21.9043V9.44717C21.9043 8.25642 22.853 7.29526 24.0259 7.29526C25.1988 7.29526 26.1474 8.25642 26.1474 9.44717V11.1433H27.8205C28.9589 11.1433 29.8868 12.0651 29.9403 13.1907C29.9142 13.7317 29.6794 14.2418 29.2847 14.6154C28.89 14.9889 28.3657 15.1972 27.8205 15.197ZM41.8089 20.7481H33.5745V3.65106C38.3075 4.96174 41.7951 9.35637 41.8089 14.5682V20.7481ZM14.5738 20.7481V3.61508C9.76498 4.8795 6.22563 9.30839 6.22563 14.5682V20.7447L14.5738 20.7481ZM6.10489 22.3758H41.8951C43.8959 22.3758 45.5 23.9692 45.5 25.9566C45.5 27.9269 43.8787 29.5374 41.8951 29.5374H38.4661V32.6042C38.4661 35.8389 37.3899 38.8235 35.5719 41.2256C35.7944 41.9914 35.6029 42.8515 34.9975 43.4563C33.5599 44.8981 31.8485 46.0422 29.9625 46.8222C28.0764 47.6021 26.0533 48.0025 24.0103 48C21.9692 47.9982 19.9484 47.5966 18.0636 46.8181C16.1789 46.0396 14.4673 44.8995 13.0266 43.4632C12.7377 43.1755 12.5315 42.8164 12.4293 42.423C12.3271 42.0296 12.3326 41.6161 12.4454 41.2256C10.5629 38.7407 9.54685 35.7141 9.5511 32.6042V29.5374H6.10489C4.12134 29.5374 2.5 27.9269 2.5 25.9566C2.5 23.9863 4.12134 22.3758 6.10489 22.3758ZM35.9755 32.6042V29.5374H12.0418V32.6042C12.0418 35.2222 12.8938 37.6413 14.3375 39.6048C15.0205 39.514 15.7346 39.7299 16.259 40.2507C17.2745 41.2657 18.4819 42.0715 19.8118 42.6216C21.1417 43.1717 22.568 43.4554 24.0086 43.4563C27.034 43.4563 29.7678 42.2399 31.7531 40.2558C32.2757 39.7316 32.995 39.514 33.6797 39.6048C35.1751 37.5733 35.9787 35.1208 35.9738 32.6042" fill="#737BA4"/>
      </svg>
    ),
    title: "Disaster Relief Contributions",
    description: "Quick Response to National Emergencies"
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 flex-shrink-0">
        <path d="M36 37C35.2043 37 34.4413 36.6839 33.8787 36.1213C33.3161 35.5587 33 34.7956 33 34C33 33.2044 33.3161 32.4413 33.8787 31.8787C34.4413 31.3161 35.2043 31 36 31C36.7957 31 37.5587 31.3161 38.1213 31.8787C38.6839 32.4413 39 33.2044 39 34C39 34.7956 38.6839 35.5587 38.1213 36.1213C37.5587 36.6839 36.7957 37 36 37ZM39 19L42.92 24H34V19M12 37C11.2044 37 10.4413 36.6839 9.87868 36.1213C9.31607 35.5587 9 34.7956 9 34C9 33.2044 9.31607 32.4413 9.87868 31.8787C10.4413 31.3161 11.2044 31 12 31C12.7956 31 13.5587 31.3161 14.1213 31.8787C14.6839 32.4413 15 33.2044 15 34C15 34.7956 14.6839 35.5587 14.1213 36.1213C13.5587 36.6839 12.7956 37 12 37ZM40 16H34V8H6C3.78 8 2 9.78 2 12V34H6C6 35.5913 6.63214 37.1174 7.75736 38.2426C8.88258 39.3679 10.4087 40 12 40C13.5913 40 15.1174 39.3679 16.2426 38.2426C17.3679 37.1174 18 35.5913 18 34H30C30 35.5913 30.6321 37.1174 31.7574 38.2426C32.8826 39.3679 34.4087 40 36 40C37.5913 40 39.1174 39.3679 40.2426 38.2426C41.3679 37.1174 42 35.5913 42 34H46V24L40 16Z" fill="#737BA4"/>
      </svg>
    ),
    title: "Logistics Support During Crisis",
    description: "Keeping the Nation Moving in Times of Crisis"
  }
];

// --- NewsGrid inlined ---
interface NewsArticle {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

const newsArticles: NewsArticle[] = [
  {
    id: "1",
    date: "May 21, 2024",
    title: "CSR-Manav Sewa Ashram",
    excerpt: "TransNepal Freight Services Pvt. Ltd contributed Rs. 5,11,111 to Manav Sewa Ashram, Biratnagar",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/7db26ff5b8b5f7822412879aaaefeacf878e346b?width=740"
  },
  {
    id: "2",
    date: "December 2, 2020",
    title: "CSR-Fight against COVID-19",
    excerpt: "In its drive to fight against COVID-19 TransNepal has extended its hand to Nagarik Care Centre for construction of 110 bed facility at BiratnagaR",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/6da8262d8b6ee65ea1796cb2dd4e8bf400cd3874?width=742"
  },
  {
    id: "3",
    date: "September 28, 2022",
    title: "Green Initiatives to keep Environment clean by TransNepal",
    excerpt: "Part of Green Initiatives and to keep the environment clean TransNepal has planted 100 Ashoka Trees",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ed8c2c14f5983d6d586462880a2ea8ded8703dd9?width=742"
  },
  {
    id: "4",
    date: "August 25, 2020",
    title: "TransNepal contributes to Pradesh No.1 Corona Jana Suraksha Kosh",
    excerpt: "TransNepal contributes to Pradesh No.1 Corona Jana Suraksha Kosh and collaborates on other initiatives to bolster Nepal's fight against COVID-19.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/87896efaf3c15493d39da4d99e0e72cb0ffa4cab?width=762"
  },
  {
    id: "5",
    date: "August 18, 2020",
    title: "Allcargo Logistics contributes to CM's Relief Fund collaborates to fight against COVID-19",
    excerpt: "TransNepal contributes to Pradesh No.1 Corona Jana Suraksha Kosh and collaborates on other initiatives to bolster Nepal's fight against COVID-19...",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/881ecb15938f9e4896f0cfe123644b6e512a9a65?width=742"
  },
  {
    id: "6",
    date: "December 2, 2020",
    title: "Allcargo recognises CSR partners' efforts in positively impacting lives at Manthan 2020",
    excerpt: "Discussing strategies and challenges in achieving sustainable CSR outcomes, leveraging opportunities to expand CSR outreach and recognizing the committed",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/0865c0bc0f1f46784a339914cbcae4a00ce87890?width=742"
  },
  {
    id: "7",
    date: "March 28, 2022",
    title: "5 must-have communication skills for leaders",
    excerpt: "Strong communication skills are a must for any successful sales person. Three in four employees see effective communication as the number one leadership attribute.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ad10e80cb332ca107e7cfbf3a32aa5c9f82b6ddf?width=740"
  }
];

export default function CSR() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
            <section className="bg-transnepal-dark">
              <div className="max-w-screen-xl mx-auto px-4 lg:px-20 py-12 md:py-16">
                <div className="text-center">
                  <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight">
                    <span className="block">Customer Shared</span>
                    <span className="block">Responsibility</span>
                  </h1>
      
                  {/* Breadcrumbs */}
                  <div className="flex items-center justify-center space-x-2 text-white text-xs font-inter">
                    <a href="/" className="hover:underline">Home</a>
                    <ChevronRight className="h-2 w-2" />
                    <span>CSR</span>
                  </div>
                </div>
              </div>
            </section>

      {/* MainContentSection inlined */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start mb-12 sm:mb-16 md:mb-20">
          {/* Main Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/588382af72d64faaac658169369054b8d1c39339?width=1182"
              alt="CSR Activities"
              className="w-full h-auto rounded-[15px] object-cover"
            />
          </div>

          {/* Features List */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8 lg:gap-10 lg:ml-28">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 lg:gap-5 opacity-70">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-blue-800 font-inter text-lg sm:text-xl font-bold leading-normal mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 font-inter text-xs sm:text-sm leading-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NewsGrid inlined */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {newsArticles.map((article) => (
            <div key={article.id} className="relative">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 sm:h-64 lg:h-[349px] object-cover rounded-[15px]"
                />
              </div>
              {/* Date above title */}
              <div className="mt-4 sm:mt-5">
                <span className="block text-black font-poppins text-xs mb-2">
                  {article.date}
                </span>
                <Link href="/csr-more">
                  <h3 className="text-blue-800 font-poppins text-base sm:text-lg font-medium leading-normal mb-2 hover:underline cursor-pointer">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-gray-500 font-poppins text-xs leading-normal">
                  {article.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
