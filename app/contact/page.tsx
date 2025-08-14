"use client";

import { useState } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />

      {/* Hero Section */}
      <div className="w-full h-[205px] bg-[#252f5c] flex items-center justify-center flex-col">
        <div className="text-center">
          <h1 className="text-white font-poppins text-[45px] font-semibold mb-[25px]">
            Contact Us
          </h1>
          <div className="flex items-center gap-2 justify-center">
            <span className="text-white font-inter text-xs font-normal">
              Home
            </span>
            <svg width="8" height="17" viewBox="0 0 8 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-2 h-4 flex-shrink-0">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.77162 8.97399L3.00028 12.7453L2.05762 11.8027L5.35762 8.50266L2.05762 5.20266L3.00028 4.25999L6.77162 8.03133C6.8966 8.15635 6.96681 8.32588 6.96681 8.50266C6.96681 8.67944 6.8966 8.84898 6.77162 8.97399Z" fill="white"/>
            </svg>
            <span className="text-white font-inter text-xs font-normal">
              Contact Us
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 px-4 lg:px-[157px] mb-0">
          {/* Left Section */}
          <div className="flex-1 max-w-[565px]">
            <h2 className="text-trans-nepal-light-blue font-inter text-[25px] font-semibold mb-5">
              Ready to Start?
            </h2>
            <h3 className="text-trans-nepal-blue font-poppins text-[36px] font-medium leading-normal mb-[60px]">
              We are next to your single call, feel free to get informed
            </h3>
            
            <div className="flex flex-col gap-10">
              {/* Address */}
              <div className="flex items-start gap-[15px]">
                <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0 mt-[5px]">
                  <path d="M7 3.825C7.66304 3.825 8.29893 4.04888 8.76777 4.4474C9.23661 4.84591 9.5 5.38642 9.5 5.95C9.5 6.22906 9.43534 6.50539 9.3097 6.7632C9.18406 7.02102 8.99991 7.25528 8.76777 7.4526C8.53562 7.64993 8.26002 7.80645 7.95671 7.91324C7.65339 8.02004 7.3283 8.075 7 8.075C6.33696 8.075 5.70107 7.85112 5.23223 7.4526C4.76339 7.05409 4.5 6.51359 4.5 5.95C4.5 5.38642 4.76339 4.84591 5.23223 4.4474C5.70107 4.04888 6.33696 3.825 7 3.825ZM7 0C8.85652 0 10.637 0.626873 11.9497 1.74271C13.2625 2.85856 14 4.37196 14 5.95C14 10.4125 7 17 7 17C7 17 0 10.4125 0 5.95C0 4.37196 0.737498 2.85856 2.05025 1.74271C3.36301 0.626873 5.14348 0 7 0ZM7 1.7C5.67392 1.7 4.40215 2.14777 3.46447 2.9448C2.52678 3.74183 2 4.82283 2 5.95C2 6.8 2 8.5 7 14.2035C12 8.5 12 6.8 12 5.95C12 4.82283 11.4732 3.74183 10.5355 2.9448C9.59785 2.14777 8.32608 1.7 7 1.7Z" fill="#283b9a" fillOpacity="0.71"/>
                </svg>
                <div className="flex-1">
                  <h4 className="text-trans-nepal-blue font-poppins text-[17px] font-semibold mb-[5px]">
                    Address
                  </h4>
                  <p className="text-trans-nepal-dark-blue font-poppins text-[15px] font-medium leading-[30px]">
                    TransNepal Tower, Piyush Marg, Biratnagar-05 Nepal
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-[15px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0 mt-[5px]">
                  <path d="M5.21893 10.7807C3.7852 9.34417 2.6826 7.61178 1.98826 5.70468C1.60626 4.66202 1.95626 3.51668 2.74159 2.73135L3.22759 2.24602C3.35825 2.11509 3.51345 2.01123 3.6843 1.94036C3.85515 1.86949 4.03829 1.83301 4.22326 1.83301C4.40822 1.83301 4.59137 1.86949 4.76222 1.94036C4.93307 2.01123 5.08827 2.11509 5.21893 2.24602L6.35693 3.38402C6.48785 3.51467 6.59172 3.66987 6.66258 3.84072C6.73345 4.01157 6.76993 4.19472 6.76993 4.37968C6.76993 4.56465 6.73345 4.7478 6.66258 4.91865C6.59172 5.08949 6.48785 5.24469 6.35693 5.37535L6.07693 5.65535C5.96485 5.7674 5.87594 5.90043 5.81529 6.04685C5.75463 6.19327 5.72341 6.3502 5.72341 6.50868C5.72341 6.66717 5.75463 6.8241 5.81529 6.97051C5.87594 7.11693 5.96485 7.24996 6.07693 7.36202L8.63693 9.92268C8.74898 10.0348 8.88201 10.1237 9.02843 10.1843C9.17484 10.245 9.33178 10.2762 9.49026 10.2762C9.64874 10.2762 9.80567 10.245 9.95209 10.1843C10.0985 10.1237 10.2315 10.0348 10.3436 9.92268L10.6243 9.64268C10.7549 9.51176 10.9101 9.40789 11.081 9.33702C11.2518 9.26615 11.435 9.22967 11.6199 9.22967C11.8049 9.22967 11.988 9.26615 12.1589 9.33702C12.3297 9.40789 12.4849 9.51176 12.6156 9.64268L13.7536 10.7807C13.8845 10.9113 13.9884 11.0665 14.0593 11.2374C14.1301 11.4082 14.1666 11.5914 14.1666 11.7763C14.1666 11.9613 14.1301 12.1445 14.0593 12.3153C13.9884 12.4862 13.8845 12.6414 13.7536 12.772L13.2683 13.2573C12.4829 14.0433 11.3376 14.3933 10.2949 14.0113C8.38783 13.317 6.65544 12.2144 5.21893 10.7807Z" stroke="#283b9a" strokeOpacity="0.71" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                <div className="flex-1">
                  <h4 className="text-trans-nepal-blue font-poppins text-[17px] font-semibold mb-[5px]">
                    Contact
                  </h4>
                  <div className="text-trans-nepal-dark-blue font-poppins text-[15px] font-medium leading-[30px]">
                    <div>Telephone: +977 21 501441</div>
                    <div>Fax: +977 21 501470</div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-[15px]">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0 mt-[5px]">
                  <path d="M7.99967 12.5C9.41416 12.5 10.7707 11.9732 11.7709 11.0355C12.7711 10.0979 13.333 8.82608 13.333 7.5C13.333 6.17392 12.7711 4.90215 11.7709 3.96447C10.7707 3.02678 9.41416 2.5 7.99967 2.5C6.58519 2.5 5.22863 3.02678 4.22844 3.96447C3.22824 4.90215 2.66634 6.17392 2.66634 7.5C2.66634 8.82608 3.22824 10.0979 4.22844 11.0355C5.22863 11.9732 6.58519 12.5 7.99967 12.5ZM7.99967 1.25C8.87515 1.25 9.74206 1.41166 10.5509 1.72575C11.3597 2.03984 12.0947 2.50022 12.7137 3.08058C13.3328 3.66095 13.8238 4.34994 14.1589 5.10823C14.4939 5.86651 14.6663 6.67924 14.6663 7.5C14.6663 9.1576 13.964 10.7473 12.7137 11.9194C11.4635 13.0915 9.76778 13.75 7.99967 13.75C4.31301 13.75 1.33301 10.9375 1.33301 7.5C1.33301 5.8424 2.03539 4.25269 3.28563 3.08058C4.53587 1.90848 6.23156 1.25 7.99967 1.25ZM8.33301 4.375V7.65625L11.333 9.325L10.833 10.0938L7.33301 8.125V4.375H8.33301Z" fill="#283b9a" fillOpacity="0.71"/>
                </svg>
                <div className="flex-1">
                  <h4 className="text-trans-nepal-blue font-poppins text-[17px] font-semibold mb-[5px]">
                    Working Hours
                  </h4>
                  <p className="text-trans-nepal-dark-blue font-poppins text-[15px] font-medium leading-[30px]">
                    10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="flex-1 max-w-[570px]">
            <form onSubmit={handleSubmit} className="border border-trans-nepal-blue rounded-[36px] p-6 lg:p-10 flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[10px]">
                <label className="text-trans-nepal-dark-blue font-poppins text-[15px] font-normal">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="h-16 rounded-[10px] bg-gray-50 border-none px-4 outline-none focus:ring-2 focus:ring-trans-nepal-blue/20"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-[10px]">
                <label className="text-trans-nepal-dark-blue font-poppins text-[15px] font-normal">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="h-16 rounded-[10px] bg-gray-50 border-none px-4 outline-none focus:ring-2 focus:ring-trans-nepal-blue/20"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-[10px]">
                <label className="text-trans-nepal-dark-blue font-poppins text-[15px] font-normal">
                  Send Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message.."
                  className="h-[133px] rounded-[10px] bg-gray-50 border-none p-[15px] outline-none resize-none placeholder:text-gray-400 font-inter text-[13px] font-normal focus:ring-2 focus:ring-trans-nepal-blue/20"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="text-white font-poppins text-lg font-semibold flex w-[163px] h-[50px] px-6 py-3 justify-center items-center rounded-[15px] bg-trans-nepal-blue cursor-pointer hover:bg-trans-nepal-dark-blue transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Map Section - Google Maps Embed */}
        <div className="relative px-4 lg:px-[157px] mt-20">
          <div className="w-full h-[300px] lg:h-[464px] rounded-[31px] overflow-hidden relative">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.7581474501126!2d87.27345267579435!3d26.463523779249265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef74147f7fa62d%3A0x631d4e7be0d690c2!2sTrans%20Nepal%20Freight%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1755147528254!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}


