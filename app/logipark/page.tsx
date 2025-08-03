import Link from "next/link";
import { ChevronDown } from "lucide-react";

// Interface definitions
interface DirectorData {
  name: string;
  title: string;
  image: string;
}

interface ManagementMemberData {
  name: string;
  title: string;
  image: string;
}

interface DirectorCardProps {
  director: DirectorData;
}

interface ManagementCardProps {
  member: ManagementMemberData;
}

// Header component
function Header() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about", hasDropdown: true },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Tariff", href: "/tariff" },
    { name: "Associates", href: "/associates", isActive: true, hasDropdown: true },
    { name: "Contact Us", href: "/contact" },
    { name: "Gallery", href: "/gallery" },
    { name: "News & Events", href: "/news" },
    { name: "CSR", href: "/csr" },
  ];

  return (
    <header className="bg-white w-full">
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-20 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/05a2e25bd5bd144c730c0f82310ea5a3e11c1634?placeholderIfAbsent=true" 
            alt="TransNepal TRS Logipark Logo" 
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              <Link
                href={item.href}
                className={`
                  flex items-center gap-2 px-3 py-2 rounded-full text-sm font-normal whitespace-nowrap transition-all duration-200
                  ${item.isActive 
                    ? 'bg-brand-primary text-white' 
                    : 'text-gray-900 hover:bg-gray-100'
                  }
                `}
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown 
                    className={`w-2 h-2 ${item.isActive ? 'text-white' : 'text-gray-600'}`} 
                  />
                )}
              </Link>
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1">
          <span className="w-6 h-0.5 bg-gray-900"></span>
          <span className="w-6 h-0.5 bg-gray-900"></span>
          <span className="w-6 h-0.5 bg-gray-900"></span>
        </button>
      </div>

      {/* Mobile Navigation - Hidden by default, can be shown with state management */}
      <div className="lg:hidden hidden bg-white border-t border-gray-200 px-4 py-4">
        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center justify-between px-3 py-2 rounded-lg text-sm font-normal transition-all duration-200
                ${item.isActive 
                  ? 'bg-brand-primary text-white' 
                  : 'text-gray-900 hover:bg-gray-100'
                }
              `}
            >
              {item.name}
              {item.hasDropdown && (
                <ChevronDown 
                  className={`w-4 h-4 ${item.isActive ? 'text-white' : 'text-gray-600'}`} 
                />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

// HeroSection component
function HeroSection() {
  return (
    <section className="bg-brand-light w-full">
      <div className="container mx-auto px-4 sm:px-8 lg:px-20 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Company Title */}
          <div className="lg:col-span-5 xl:col-span-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-secondary text-center lg:text-left leading-tight">
              TransNepal TRS Logipark
              <br />
              Pvt. Ltd.
            </h1>
          </div>

          {/* Image Column 1 */}
          <div className="lg:col-span-3 xl:col-span-3">
            <div className="flex flex-col space-y-4">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/b065a4bcf9cdd5047c312704198b22338cb19561?placeholderIfAbsent=true"
                alt="TransNepal facility"
                className="w-full rounded-b-[40px] object-cover aspect-[0.45]"
              />
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/7cb0f6fd076e1f2b61bb49b8bb457f9cdac88f10?placeholderIfAbsent=true"
                alt="TransNepal operations"
                className="w-full rounded-[40px] object-cover aspect-[0.865] ml-auto"
              />
            </div>
          </div>

          {/* Image Column 2 */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="flex flex-col space-y-4 lg:space-y-16">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/7831143af6948187717b963c2331c5fa64f74ed7?placeholderIfAbsent=true"
                alt="Logistics operations"
                className="w-full rounded-b-[40px] object-cover aspect-[0.865]"
              />
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/136faaad0399f5fe471c459bb32d882f1a3b80e7?placeholderIfAbsent=true"
                alt="Terminal facilities"
                className="w-full rounded-tl-[40px] rounded-bl-[40px] object-cover aspect-[0.564] ml-auto max-w-[85%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CompanyOverview component
function CompanyOverview() {
  return (
    <section className="bg-white w-full py-8 lg:py-16">
      <div className="container mx-auto px-4 sm:px-8 lg:px-20">
        {/* Breadcrumb */}
        <div className="mb-8 lg:mb-16">
          <p className="text-xs sm:text-sm text-brand-primary font-normal font-inter">
            Home Associates TransNepal TRS Logipark Pvt.Ltd.
          </p>
        </div>

        {/* Company Overview Section */}
        <div className="space-y-6 lg:space-y-12">
          {/* Section Title */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-secondary font-poppins mb-4">
              Company overview
            </h2>
            <div className="w-32 sm:w-40 h-px bg-brand-secondary"></div>
          </div>

          {/* Company Description */}
          <div className="max-w-none">
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-brand-secondary font-poppins leading-relaxed">
              TransNepal TRS Logipark Pvt. Ltd. a 50:50 Joint Venture company 
              incorporated in the year 2023 with the objective of operating and 
              managing terminals in Nepal. The company has signed the contract of 
              operation and management of Chobhar ICD with Nepal Intermodel 
              Transport Development Board and commenced its operation from December 
              2023
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// DirectorCard component
function DirectorCard({ director }: DirectorCardProps) {
  return (
    <div className="bg-brand-light rounded-2xl p-6 lg:p-8 flex items-center gap-6 lg:gap-8">
      {/* Director Photo */}
      <div className="flex-shrink-0">
        <img 
          src={director.image}
          alt={director.name}
          className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover"
        />
      </div>

      {/* Director Info */}
      <div className="flex-1 min-w-0">
        <div className="space-y-2 lg:space-y-3">
          {director.title && (
            <p className="text-lg lg:text-xl font-normal text-brand-primary font-inter leading-tight">
              {director.title}
            </p>
          )}
          <h3 className="text-lg lg:text-xl font-normal text-brand-primary font-inter leading-tight">
            {director.name}
          </h3>
        </div>
      </div>
    </div>
  );
}

// BoardOfDirectors component
function BoardOfDirectors() {
  const directors: DirectorData[] = [
    {
      name: "Mukesh Kumar Rathi",
      title: "Director",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0c0764397fcaf8f7ff0eb937bc52ae5cea5a084f?placeholderIfAbsent=true"
    },
    {
      name: "Debangshu Mukherjee", 
      title: "Director",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/179a3389b0ca1be418b6ebbdafe49da868d217d6?placeholderIfAbsent=true"
    },
    {
      name: "Raghvendra Pratap Singh",
      title: "Director", 
      image: "https://api.builder.io/api/v1/image/assets/TEMP/05f1082ba9dc51a7dedfa0af156a6b8e37765f4f?placeholderIfAbsent=true"
    },
    {
      name: "Director",
      title: "Director",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0fe57b6baa3eb002c5ec0a54f2061dba15e07599?placeholderIfAbsent=true"
    },
    {
      name: "Bhimraj Joshi",
      title: "Director",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1df5218a3baa12ec5d353d0851a82d99cd12f09b?placeholderIfAbsent=true"
    },
    {
      name: "Dipendra Pratap Singh",
      title: "Director",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/df24db103fe8ef1d0f350ace0ba97f1d92ae97a5?placeholderIfAbsent=true"
    }
  ];

  return (
    <section className="bg-white w-full py-8 lg:py-16">
      <div className="container mx-auto px-4 sm:px-8 lg:px-20">
        {/* Section Title */}
        <div className="mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-primary font-inter mb-3">
            Board of Directors
          </h2>
          <div className="w-32 sm:w-40 h-px bg-brand-primary"></div>
          <div className="w-32 sm:w-40 h-px bg-brand-primary mt-1"></div>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16">
          {directors.map((director, index) => (
            <DirectorCard key={index} director={director} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ManagementCard component
function ManagementCard({ member }: ManagementCardProps) {
  return (
    <div className="bg-brand-light rounded-2xl p-6 lg:p-8 flex items-center gap-6 lg:gap-8">
      {/* Member Photo */}
      <div className="flex-shrink-0">
        <img 
          src={member.image}
          alt={member.name}
          className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover"
        />
      </div>

      {/* Member Info */}
      <div className="flex-1 min-w-0">
        <div className="space-y-2 lg:space-y-3">
          <p className="text-lg lg:text-xl font-normal text-brand-primary font-inter leading-tight">
            {member.title}
          </p>
          {member.name !== member.title && (
            <h3 className="text-lg lg:text-xl font-normal text-brand-primary font-inter leading-tight">
              {member.name}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

// ManagementTeam component
function ManagementTeam() {
  const managementMembers: ManagementMemberData[] = [
    {
      name: "Management Committee Member",
      title: "Management Committee Member",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/be2dfa47d67ca2acf4a17dde1a01fd44957cc8fb?placeholderIfAbsent=true"
    },
    {
      name: "Management Committee Member",
      title: "Management Committee Member", 
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b7cd8b503ae6956f86f9eedaa37577927ed55f57?placeholderIfAbsent=true"
    },
    {
      name: "Chief Executive Officer",
      title: "Chief Executive Officer",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/df24db103fe8ef1d0f350ace0ba97f1d92ae97a5?placeholderIfAbsent=true"
    },
    {
      name: "Chief Financial Officer",
      title: "Chief Financial Officer",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/05f1082ba9dc51a7dedfa0af156a6b8e37765f4f?placeholderIfAbsent=true"
    }
  ];

  return (
    <section className="bg-white w-full py-8 lg:py-16">
      <div className="container mx-auto px-4 sm:px-8 lg:px-20">
        {/* Section Title */}
        <div className="mb-8 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-primary font-inter mb-3">
            Management Team
          </h2>
          <div className="w-32 sm:w-40 h-px bg-brand-primary"></div>
        </div>

        {/* Management Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16">
          {managementMembers.map((member, index) => (
            <ManagementCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer component
function Footer() {
  const usefulLinks = [
    "Department Of Customs",
    "NITDB Board", 
    "FNCCI",
    "Indian Embassy Nepal",
    "Check Email"
  ];

  return (
    <footer className="bg-brand-primary text-white w-full">
      <div className="container mx-auto px-4 sm:px-8 lg:px-20 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Connect With Us Section */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Logo and Social Media */}
              <div className="md:col-span-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/4e67a501104de24166f58469dc9d7d53df3579f8?placeholderIfAbsent=true"
                      alt="TransNepal TRS Logo"
                      className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
                    />
                  </div>
                  
                  {/* Social Media Icons */}
                  <div className="flex flex-col space-y-4">
                    <div className="flex space-x-3">
                      <img 
                        src="https://api.builder.io/api/v1/image/assets/TEMP/c24f45a1c443637b6e0c6e55776dfa0321ae5603?placeholderIfAbsent=true"
                        alt="Social icon"
                        className="w-3 h-2 object-contain"
                      />
                    </div>
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/43733e3b338260c6ca09ef5e6dcd4769eb9ef08d?placeholderIfAbsent=true"
                      alt="Social media"
                      className="w-6 h-3 object-contain"
                    />
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/9c7a6141a0758de403ed31e48625e85b429b8b5d?placeholderIfAbsent=true"
                      alt="Social link"
                      className="w-6 h-3 object-contain"
                    />
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/b15b2763b1a2be14501cf55801a188138b87c3b6?placeholderIfAbsent=true"
                      alt="Social platform"
                      className="w-5 h-3 object-contain"
                    />
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/9c7a6141a0758de403ed31e48625e85b429b8b5d?placeholderIfAbsent=true"
                      alt="Social network"
                      className="w-6 h-3 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Useful Links */}
              <div className="md:col-span-4">
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-bold font-inter border-b-2 border-white pb-2 inline-block">
                    USEFUL LINKS
                  </h3>
                  <nav className="space-y-3">
                    {usefulLinks.map((link, index) => (
                      <div key={index}>
                        <Link 
                          href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-base lg:text-lg font-normal font-inter hover:underline transition-all duration-200 block"
                        >
                          {link}
                        </Link>
                        {index < usefulLinks.length - 1 && <div className="h-3"></div>}
                      </div>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 lg:mt-12 pt-4 border-t border-white/20">
              <p className="text-sm lg:text-base font-normal font-inter leading-relaxed">
                All rights Reserved | Copyright © 2024 Trans Nepal Freight Services Pvt. Ltd.
              </p>
            </div>
          </div>

          {/* Company Logo/Image */}
          <div className="lg:col-span-5">
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1b8024df22b69df127e668051bb0b37bea3e8f3f?placeholderIfAbsent=true"
                  alt="TransNepal Company"
                  className="w-64 h-96 lg:w-80 lg:h-[400px] rounded-full object-cover"
                />
                <div className="absolute top-12 right-16 lg:top-16 lg:right-20">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/94563d02392920c884b25d3f031afc29c93c9bb6?placeholderIfAbsent=true"
                    alt="Arrow indicator"
                    className="w-3 h-5 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main page component
export default function AssociatesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <CompanyOverview />
        <BoardOfDirectors />
        <ManagementTeam />
      </main>
      <Footer />
    </div>
  );
}
