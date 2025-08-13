import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[#252f5c] h-[150px] lg:h-[205px] flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="font-['Poppins'] text-[32px] lg:text-[45px] font-bold leading-normal mb-3">Rental Services</h1>
          <div className="flex items-center justify-center space-x-2 text-[12px] font-['Inter'] font-normal">
            <span>Home Services Rental Services</span>
            <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.77162 8.47377L3.00028 12.2451L2.05762 11.3024L5.35762 8.00243L2.05762 4.70243L3.00028 3.75977L6.77162 7.5311C6.8966 7.65612 6.96681 7.82566 6.96681 8.00243C6.96681 8.17921 6.8966 8.34875 6.77162 8.47377Z" fill="white"/>
            </svg>
            <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.77162 8.47377L3.00028 12.2451L2.05762 11.3024L5.35762 8.00243L2.05762 4.70243L3.00028 3.75977L6.77162 7.5311C6.8966 7.65612 6.96681 7.82566 6.96681 8.00243C6.96681 8.17921 6.8966 8.34875 6.77162 8.47377Z" fill="white"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-[40px] lg:py-[60px] bg-white">
        <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-2 lg:flex lg:justify-center lg:items-center gap-[30px] lg:gap-[100px]">
          {/* Fleet Size */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-5">
              <div className="w-[60px] h-[60px] rounded-full bg-[#C8D0ED] flex items-center justify-center">
                <svg width="42" height="24" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.63619 24.6174C10.5524 24.6174 11.4311 24.2619 12.0789 23.6291C12.7268 22.9963 13.0907 22.1381 13.0907 21.2433C13.0907 20.3484 12.7268 19.4902 12.0789 18.8574C11.4311 18.2246 10.5524 17.8691 9.63619 17.8691C8.71998 17.8691 7.84131 18.2246 7.19345 18.8574C6.5456 19.4902 6.18164 20.3484 6.18164 21.2433C6.18164 22.1381 6.5456 22.9963 7.19345 23.6291C7.84131 24.2619 8.71998 24.6174 9.63619 24.6174ZM29.4998 24.6174C30.416 24.6174 31.2947 24.2619 31.9426 23.6291C32.5904 22.9963 32.9544 22.1381 32.9544 21.2433C32.9544 20.3484 32.5904 19.4902 31.9426 18.8574C31.2947 18.2246 30.416 17.8691 29.4998 17.8691C28.5836 17.8691 27.7049 18.2246 27.0571 18.8574C26.4092 19.4902 26.0453 20.3484 26.0453 21.2433C26.0453 22.1381 26.4092 22.9963 27.0571 23.6291C27.7049 24.2619 28.5836 24.6174 29.4998 24.6174Z" stroke="#283B9A" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M6.18182 21.2447H1V1H26.0455V21.2447M26.0455 21.2447H13.0909M26.0455 21.2447V6.9047H33.4477L39 14.0747V21.2447H33.655" stroke="#283B9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="text-[#283b9a] font-['Poppins'] text-[20px] font-bold leading-normal mb-[5px]">500 +</div>
            <div className="text-[#283b9a] font-['Poppins'] text-[15px] font-normal leading-normal">Fleet Size</div>
          </div>

          {/* Happy Clients */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-5">
              <div className="w-[60px] h-[60px] rounded-full bg-[#C8D0ED] flex items-center justify-center">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.7087 25.0003C21.7368 25.0003 25.0003 21.7368 25.0003 17.7087C25.0003 13.6805 21.7368 10.417 17.7087 10.417C13.6805 10.417 10.417 13.6805 10.417 17.7087C10.417 21.7368 13.6805 25.0003 17.7087 25.0003ZM22.917 17.7087C22.917 20.5868 20.5868 22.917 17.7087 22.917C14.8305 22.917 12.5003 20.5868 12.5003 17.7087C12.5003 14.8305 14.8305 12.5003 17.7087 12.5003C20.5868 12.5003 22.917 14.8305 22.917 17.7087ZM4.16699 39.5837V33.7503C4.16699 29.317 13.1889 27.0837 17.7087 27.0837C20.7149 27.0837 25.7139 28.0722 28.7243 30.0389C30.8701 29.4587 33.2232 29.167 34.8962 29.167C36.8316 29.167 39.4285 29.5566 41.5732 30.3441C42.642 30.7378 43.666 31.2545 44.4399 31.9232C45.2201 32.5972 45.8337 33.5087 45.8337 34.6524V39.5837H4.16699ZM6.25033 33.7503C6.25033 33.4201 6.40241 32.968 7.04824 32.3805C7.70762 31.7805 8.7222 31.1993 10.0066 30.693C12.5805 29.6774 15.7055 29.167 17.7087 29.167C19.7118 29.167 22.8378 29.6774 25.4097 30.693C26.6951 31.1993 27.7097 31.7805 28.368 32.3805C29.0149 32.968 29.167 33.4201 29.167 33.7503V37.5003H6.25033V33.7503ZM30.5764 31.7399C32.1524 31.4139 33.7326 31.2503 34.8962 31.2503C36.6118 31.2503 38.9618 31.6045 40.8545 32.3003C41.8014 32.6482 42.567 33.0587 43.0785 33.5003C43.5837 33.9368 43.7503 34.3201 43.7503 34.6534V37.5003H31.2503V33.7503C31.2503 33.0212 31.0055 32.3493 30.5764 31.7399ZM40.6253 21.3545C40.6253 24.5201 38.0618 27.0837 34.8962 27.0837C33.3767 27.0837 31.9195 26.4801 30.845 25.4056C29.7706 24.3312 29.167 22.874 29.167 21.3545C29.167 18.1889 31.7305 15.6253 34.8962 15.6253C38.0618 15.6253 40.6253 18.1889 40.6253 21.3545ZM34.8962 25.0003C36.9107 25.0003 38.542 23.3691 38.542 21.3545C38.542 19.3399 36.9107 17.7087 34.8962 17.7087C33.9292 17.7087 33.0019 18.0928 32.3182 18.7765C31.6344 19.4602 31.2503 20.3876 31.2503 21.3545C31.2503 23.3691 32.8816 25.0003 34.8962 25.0003Z" fill="#36427C"/>
                </svg>
              </div>
            </div>
            <div className="text-[#283b9a] font-['Poppins'] text-[20px] font-bold leading-normal mb-[5px]">1,200+</div>
            <div className="text-[#283b9a] font-['Poppins'] text-[15px] font-normal leading-normal">Happy Clients</div>
          </div>

          {/* Years of Service */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-5">
              <div className="w-[60px] h-[60px] rounded-full bg-[#C8D0ED] flex items-center justify-center">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.8125 17.0625C32.8125 13.9296 31.568 10.9251 29.3527 8.7098C27.1374 6.49453 24.1329 5.25 21 5.25C17.8671 5.25 14.8626 6.49453 12.6473 8.7098C10.432 10.9251 9.1875 13.9296 9.1875 17.0625C9.1875 21.9083 13.0646 28.224 21 35.7892C28.9354 28.224 32.8125 21.9083 32.8125 17.0625ZM21 39.375C11.3741 30.6259 6.5625 23.1866 6.5625 17.0625C6.5625 13.2334 8.08359 9.5612 10.7911 6.85365C13.4987 4.14609 17.1709 2.625 21 2.625C24.8291 2.625 28.5013 4.14609 31.2089 6.85365C33.9164 9.5612 35.4375 13.2334 35.4375 17.0625C35.4375 23.1866 30.6259 30.6259 21 39.375Z" fill="#283B9A"/>
                  <path d="M21 21C22.0443 21 23.0458 20.5852 23.7842 19.8467C24.5227 19.1083 24.9375 18.1068 24.9375 17.0625C24.9375 16.0182 24.5227 15.0167 23.7842 14.2783C23.0458 13.5398 22.0443 13.125 21 13.125C19.9557 13.125 18.9542 13.5398 18.2158 14.2783C17.4773 15.0167 17.0625 16.0182 17.0625 17.0625C17.0625 18.1068 17.4773 19.1083 18.2158 19.8467C18.9542 20.5852 19.9557 21 21 21ZM21 23.625C19.2595 23.625 17.5903 22.9336 16.3596 21.7029C15.1289 20.4722 14.4375 18.803 14.4375 17.0625C14.4375 15.322 15.1289 13.6528 16.3596 12.4221C17.5903 11.1914 19.2595 10.5 21 10.5C22.7405 10.5 24.4097 11.1914 25.6404 12.4221C26.8711 13.6528 27.5625 15.322 27.5625 17.0625C27.5625 18.803 26.8711 20.4722 25.6404 21.7029C24.4097 22.9336 22.7405 23.625 21 23.625Z" fill="#283B9A"/>
                </svg>
              </div>
            </div>
            <div className="text-[#283b9a] font-['Poppins'] text-[20px] font-bold leading-normal mb-[5px]">75+</div>
            <div className="text-[#283b9a] font-['Poppins'] text-[15px] font-normal leading-normal">Years of Service</div>
          </div>

          {/* Availability Rate */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-5">
              <div className="w-[60px] h-[60px] rounded-full bg-[#C8D0ED] flex items-center justify-center">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 43.75C21.2916 43.75 17.6665 42.6503 14.5831 40.5901C11.4996 38.5298 9.09641 35.6014 7.67727 32.1753C6.25812 28.7492 5.88681 24.9792 6.61028 21.3421C7.33376 17.7049 9.11952 14.364 11.7418 11.7418C14.364 9.11952 17.7049 7.33376 21.3421 6.61028C24.9792 5.88681 28.7492 6.25812 32.1753 7.67727C35.6014 9.09641 38.5298 11.4996 40.5901 14.5831C42.6503 17.6665 43.75 21.2916 43.75 25C43.75 29.9728 41.7746 34.742 38.2583 38.2583C34.742 41.7746 29.9728 43.75 25 43.75ZM25 9.37501C21.9097 9.37501 18.8887 10.2914 16.3192 12.0083C13.7497 13.7252 11.747 16.1655 10.5644 19.0206C9.38177 21.8757 9.07234 25.0173 9.67524 28.0483C10.2781 31.0792 11.7663 33.8634 13.9515 36.0485C16.1367 38.2337 18.9208 39.7219 21.9517 40.3248C24.9827 40.9277 28.1243 40.6182 30.9794 39.4356C33.8345 38.253 36.2748 36.2503 37.9917 33.6808C39.7086 31.1113 40.625 28.0903 40.625 25C40.625 20.856 38.9788 16.8817 36.0485 13.9515C33.1183 11.0212 29.144 9.37501 25 9.37501Z" fill="#283B9A"/>
                  <path d="M31.25 26.5622H25C24.5873 26.5568 24.193 26.3904 23.9011 26.0986C23.6092 25.8067 23.4429 25.4124 23.4375 24.9997V14.583C23.4375 14.1686 23.6021 13.7712 23.8951 13.4782C24.1882 13.1851 24.5856 13.0205 25 13.0205C25.4144 13.0205 25.8118 13.1851 26.1049 13.4782C26.3979 13.7712 26.5625 14.1686 26.5625 14.583V23.4372H31.25C31.6644 23.4372 32.0618 23.6018 32.3549 23.8948C32.6479 24.1878 32.8125 24.5853 32.8125 24.9997C32.8125 25.4141 32.6479 25.8115 32.3549 26.1045C32.0618 26.3976 31.6644 26.5622 31.25 26.5622Z" fill="#283B9A"/>
                </svg>
              </div>
            </div>
            <div className="text-[#283b9a] font-['Poppins'] text-[20px] font-bold leading-normal mb-[5px]">99.8%</div>
            <div className="text-[#283b9a] font-['Poppins'] text-[15px] font-normal leading-normal">Availability Rate</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-[40px] lg:py-[60px] bg-white">
        <div className="max-w-[1200px] mx-auto px-5 flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[60px]">
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-[#283b9a] font-['Poppins'] text-[20px] font-bold leading-[40px] mb-5 text-center lg:text-left">
              Why choose us?
            </h2>
            <p className="text-[#4b4b4b] font-['Poppins'] text-[15px] font-medium leading-[30px] mb-5 text-center lg:text-left">
              At Allcargo, we understand the importance of cost-effectiveness and convenience. That's why our nationwide coverage and customizable rental plans make us the preferred choice for businesses of all sizes.
            </p>
            <ul className="space-y-2.5 list-none">
              <li className="text-[rgba(32,44,103,0.75)] font-['Poppins'] text-[15px] font-normal leading-[30px] pl-5 relative">
                <span className="absolute left-0 top-3 w-1.5 h-1.5 bg-[rgba(32,44,103,0.75)] rounded-full"></span>
                Diverse range of vehicles from trucks to specialized equipment
              </li>
              <li className="text-[rgba(32,44,103,0.75)] font-['Poppins'] text-[15px] font-normal leading-[30px] pl-5 relative">
                <span className="absolute left-0 top-3 w-1.5 h-1.5 bg-[rgba(32,44,103,0.75)] rounded-full"></span>
                Perfect for temporary projects and immediate transportation needs
              </li>
              <li className="text-[rgba(32,44,103,0.75)] font-['Poppins'] text-[15px] font-normal leading-[30px] pl-5 relative">
                <span className="absolute left-0 top-3 w-1.5 h-1.5 bg-[rgba(32,44,103,0.75)] rounded-full"></span>
                Seamless transportation solutions across India with local support
              </li>
            </ul>
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/0864e069618597d5526193f909459a9969c01392?width=904" 
              alt="Feature" 
              className="w-full max-w-[452px] h-[250px] lg:h-[302px] rounded-[15px] object-cover mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-[40px] lg:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[#283b9a] font-['Inter'] text-[20px] font-bold leading-[30px] mb-[40px] lg:mb-[60px] text-center lg:text-left">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] lg:gap-10">
            {/* Rental Guaranteed */}
            <div className="bg-[#f5f6fb] p-[30px] lg:p-10 rounded-[15px] text-center flex flex-col items-center">
              <div className="relative mb-[20px] lg:mb-[30px]">
                <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-full bg-white flex items-center justify-center">
                  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[35px] h-[35px] lg:w-[46px] lg:h-[46px]">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.1875 15.525V9.0045L20.8438 5.10313V38.4761L15.7205 34.0831C13.044 31.7888 10.8956 28.9425 9.42267 25.7396C7.94977 22.5368 7.18727 19.0503 7.1875 15.525ZM25.1562 38.4733L30.2795 34.0802C32.9556 31.7862 35.1038 28.9404 36.5767 25.7381C38.0496 22.5357 38.8123 19.0527 38.8125 15.5279V8.99875L25.1562 5.10025V38.4733ZM2.875 5.75L23 0L43.125 5.75V15.525C43.1252 19.6725 42.2281 23.7709 40.4951 27.539C38.7622 31.3071 36.2345 34.6557 33.0855 37.3549L23 46L12.9145 37.3549C9.76589 34.656 7.23841 31.3079 5.50548 27.5403C3.77256 23.7728 2.8752 19.6749 2.875 15.5279V5.75Z" fill="#283B9A"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-[#283b9a] font-['Inter'] text-[18px] lg:text-[20px] font-bold leading-[30px] mb-2">
                Rental Guaranteed
              </h3>
              <p className="text-[rgba(0,0,0,0.70)] font-['Inter'] text-[14px] lg:text-[15px] font-normal leading-[20px] lg:leading-[22px] text-center">
                Our diverse fleet is maintained to the highest standards, ensuring reliability and efficiency every step of your cargo transportation journey.
              </p>
            </div>

            {/* Flexible Solutions */}
            <div className="bg-[#f5f6fb] p-[30px] lg:p-10 rounded-[15px] text-center flex flex-col items-center">
              <div className="relative mb-[20px] lg:mb-[30px]">
                <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-full bg-white flex items-center justify-center">
                  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[35px] h-[35px] lg:w-[45px] lg:h-[45px]">
                    <path d="M10.8187 15.2997L17.5875 16.4997H17.6063L14.3625 19.7435L5.34375 18.1497L3.75 9.13098L6.99375 5.90598L8.175 12.6747L10.275 10.5747C11.8392 9.0055 13.6978 7.76042 15.7441 6.91088C17.7904 6.06133 19.9843 5.62402 22.2 5.62402C24.4157 5.62402 26.6096 6.06133 28.6559 6.91088C30.7022 7.76042 32.5608 9.0055 34.125 10.5747C34.1988 10.651 34.2675 10.7291 34.3312 10.8091C34.395 10.8904 34.4638 10.9685 34.5375 11.0435C34.8188 11.3435 35.1 11.6622 35.3625 11.981C35.5313 12.1872 35.7 12.4122 35.8687 12.6372C36.1687 13.0497 36.4312 13.4622 36.6937 13.8935L36.7631 14.0004C36.8044 14.0591 36.8438 14.1235 36.8812 14.1935C37.2273 14.8111 37.5342 15.4498 37.8 16.106L37.8375 16.1997C38.4938 17.8497 38.8875 19.556 39.0187 21.2997L35.1938 20.756C35.0033 19.3909 34.6049 18.063 34.0125 16.8185L33.9 16.5935C33.6246 16.0473 33.3113 15.521 32.9625 15.0185C32.93 14.9822 32.8988 14.9416 32.8688 14.8966C32.453 14.289 31.9823 13.721 31.4625 13.1997C29.003 10.7415 25.668 9.36053 22.1906 9.36053C18.7133 9.36053 15.3782 10.7415 12.9187 13.1997L10.8187 15.2997ZM30.0375 25.256L39.0563 26.8497L39.075 26.8685L40.6688 35.8872L37.425 39.131L36.225 32.3622L34.125 34.4622C27.525 41.0435 16.8375 41.0435 10.2562 34.4622L9.80625 33.956C7.20169 31.1496 5.63388 27.5377 5.3625 23.7185L9.1875 24.2622C9.5625 27.0185 10.8 29.681 12.9187 31.7997C13.35 32.231 13.8187 32.6247 14.2875 32.981C19.425 36.8622 26.775 36.4872 31.4625 31.7997L33.5625 29.6997L26.7938 28.4997L30.0375 25.256Z" fill="#283B9A"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-[#283b9a] font-['Inter'] text-[18px] lg:text-[20px] font-bold leading-[30px] mb-2">
                Flexible Solutions
              </h3>
              <p className="text-[rgba(0,0,0,0.70)] font-['Inter'] text-[14px] lg:text-[15px] font-normal leading-[20px] lg:leading-[22px] text-center">
                From short-term rentals for temporary projects to long-term leases for ongoing operations, we provide personalized solutions that fit your timeline.
              </p>
            </div>

            {/* Cost-Effective */}
            <div className="bg-[#f5f6fb] p-[30px] lg:p-10 rounded-[15px] text-center flex flex-col items-center">
              <div className="relative mb-[20px] lg:mb-[30px]">
                <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-full bg-white flex items-center justify-center">
                  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[35px] h-[35px] lg:w-[45px] lg:h-[45px]">
                    <path d="M22.5 23.4375C20.7595 23.4375 19.0903 24.1289 17.8596 25.3596C16.6289 26.5903 15.9375 28.2595 15.9375 30C15.9375 31.7405 16.6289 33.4097 17.8596 34.6404C19.0903 35.8711 20.7595 36.5625 22.5 36.5625C24.2405 36.5625 25.9097 35.8711 27.1404 34.6404C28.3711 33.4097 29.0625 31.7405 29.0625 30C29.0625 28.2595 28.3711 26.5903 27.1404 25.3596C25.9097 24.1289 24.2405 23.4375 22.5 23.4375ZM19.6875 30C19.6875 29.2541 19.9838 28.5387 20.5113 28.0113C21.0387 27.4838 21.7541 27.1875 22.5 27.1875C23.2459 27.1875 23.9613 27.4838 24.4887 28.0113C25.0162 28.5387 25.3125 29.2541 25.3125 30C25.3125 30.7459 25.0162 31.4613 24.4887 31.9887C23.9613 32.5162 23.2459 32.8125 22.5 32.8125C21.7541 32.8125 21.0387 32.5162 20.5113 31.9887C19.9838 31.4613 19.6875 30.7459 19.6875 30Z" fill="#283B9A"/>
                    <path d="M32.8612 9.59223L26.9006 1.23535L4.98375 18.7441L3.76875 18.731V18.7497H2.8125V41.2497H42.1875V18.7497H40.3838L36.795 8.2516L32.8612 9.59223ZM36.4219 18.7497H17.6194L31.6237 13.976L34.4775 13.0629L36.4219 18.7497ZM29.1562 10.856L14.7 15.7835L26.1488 6.63723L29.1562 10.856ZM6.5625 34.0666V25.9291C7.35408 25.6497 8.07309 25.1967 8.66682 24.6033C9.26055 24.0099 9.71394 23.2912 9.99375 22.4997H35.0062C35.2858 23.2915 35.7391 24.0106 36.3328 24.6044C36.9266 25.1981 37.6457 25.6514 38.4375 25.931V34.0685C37.6457 34.348 36.9266 34.8013 36.3328 35.3951C35.7391 35.9888 35.2858 36.708 35.0062 37.4997H9.9975C9.71659 36.7079 9.26243 35.9887 8.66816 35.3948C8.07389 34.8008 7.3545 34.3471 6.5625 34.0666Z" fill="#283B9A"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-[#283b9a] font-['Inter'] text-[18px] lg:text-[20px] font-bold leading-[30px] mb-2">
                Cost-Effective
              </h3>
              <p className="text-[rgba(0,0,0,0.70)] font-['Inter'] text-[14px] lg:text-[15px] font-normal leading-[20px] lg:leading-[22px] text-center">
                Our nationwide coverage and customizable rental plans make us the preferred choice for businesses focused on budget efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-[40px] lg:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-[#283b9a] font-['Poppins'] text-[20px] font-bold leading-[30px] mb-[40px] lg:mb-10">
            Testimonials
          </h2>
          <div className="max-w-[818px] mx-auto bg-[rgba(86,100,178,0.06)] rounded-[15px] py-[40px] lg:py-[60px] px-[20px] lg:px-10">
            <div className="flex justify-center gap-2.5 mb-[20px] lg:mb-[30px]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-[25px] lg:h-[25px]">
                  <path d="M24.2188 9.92676H15.252L12.5 1.5625L9.74805 9.92676H0.78125L8.11572 15.0732L5.25928 23.4375L12.5 18.2539L19.7407 23.4375L16.8789 15.0732L24.2188 9.92676Z" fill="#FF7700" fillOpacity="0.59"/>
                </svg>
              ))}
            </div>
            <p className="text-[#171f45] font-['Inter'] text-[14px] lg:text-[15px] italic font-normal leading-[22px] lg:leading-[25px] mb-[20px] lg:mb-[30px]">
              "Allcargo's flexible rental options and expert support guarantee a hassle-free experience tailored to our needs. Their commitment to excellence is evident."
            </p>
            <div className="flex items-center justify-center gap-[15px] mb-5">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/51cea4e1348d76e9d5d816683f5092a378923f11?width=60" 
                alt="Ram Shah" 
                className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] rounded-full"
              />
              <span className="text-[#283b9a] font-['Poppins'] text-[14px] lg:text-[15px] font-bold leading-[30px]">
                Ram Shah
              </span>
            </div>
            <div className="flex justify-center gap-3 lg:gap-4">
              <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#374276]"></div>
              <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#D9D9D9]"></div>
              <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#D9D9D9]"></div>
              <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#D9D9D9]"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
