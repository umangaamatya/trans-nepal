import React from "react";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

  // Hero component code
  const BreadcrumbArrow = () => (
    <svg 
      width="8" 
      height="17" 
      viewBox="0 0 8 17" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-[8px] h-[16px] flex-shrink-0"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M6.77162 8.97377L3.00028 12.7451L2.05762 11.8024L5.35762 8.50243L2.05762 5.20243L3.00028 4.25977L6.77162 8.0311C6.8966 8.15612 6.96681 8.32566 6.96681 8.50243C6.96681 8.67921 6.8966 8.84875 6.77162 8.97377Z" 
        fill="white"
      />
    </svg>
  );

  // Statistics component code
  const WorldIcon = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M7.5 18.75H42.5M7.5 31.25H42.5M6.25 25C6.25 27.4623 6.73498 29.9005 7.67726 32.1753C8.61953 34.4502 10.0006 36.5172 11.7417 38.2582C13.4828 39.9993 15.5498 41.3805 17.8247 42.3227C20.0995 43.265 22.5377 43.75 25 43.75C27.4623 43.75 29.9005 43.265 32.1753 42.3227C34.4502 41.3805 36.5172 39.9993 38.2582 38.2582C39.9993 36.5172 41.3805 34.4502 42.3227 32.1753C43.265 29.9005 43.75 27.4623 43.75 25C43.75 20.0272 41.7746 15.2581 38.2582 11.7417C34.7419 8.22544 29.9728 6.25 25 6.25C20.0272 6.25 15.2581 8.22544 11.7417 11.7417C8.22544 15.2581 6.25 20.0272 6.25 25Z" 
        stroke="#36427C" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M23.9583 6.25C20.4486 11.8742 18.5879 18.3706 18.5879 25C18.5879 31.6294 20.4486 38.1258 23.9583 43.75M26.0416 6.25C29.5513 11.8742 31.412 18.3706 31.412 25C31.412 31.6294 29.5513 38.1258 26.0416 43.75" 
        stroke="#36427C" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  const PeopleIcon = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M17.7087 25.0003C21.7368 25.0003 25.0003 21.7368 25.0003 17.7087C25.0003 13.6805 21.7368 10.417 17.7087 10.417C13.6805 10.417 10.417 13.6805 10.417 17.7087C10.417 21.7368 13.6805 25.0003 17.7087 25.0003ZM22.917 17.7087C22.917 20.5868 20.5868 22.917 17.7087 22.917C14.8305 22.917 12.5003 20.5868 12.5003 17.7087C12.5003 14.8305 14.8305 12.5003 17.7087 12.5003C20.5868 12.5003 22.917 14.8305 22.917 17.7087ZM4.16699 39.5837V33.7503C4.16699 29.317 13.1889 27.0837 17.7087 27.0837C20.7149 27.0837 25.7139 28.0722 28.7243 30.0389C30.8701 29.4587 33.2232 29.167 34.8962 29.167C36.8316 29.167 39.4285 29.5566 41.5732 30.3441C42.642 30.7378 43.666 31.2545 44.4399 31.9232C45.2201 32.5972 45.8337 33.5087 45.8337 34.6524V39.5837H4.16699ZM6.25033 33.7503C6.25033 33.4201 6.40241 32.968 7.04824 32.3805C7.70762 31.7805 8.7222 31.1993 10.0066 30.693C12.5805 29.6774 15.7055 29.167 17.7087 29.167C19.7118 29.167 22.8378 29.6774 25.4097 30.693C26.6951 31.1993 27.7097 31.7805 28.368 32.3805C29.0149 32.968 29.167 33.4201 29.167 33.7503V37.5003H6.25033V33.7503ZM30.5764 31.7399C32.1524 31.4139 33.7326 31.2503 34.8962 31.2503C36.6118 31.2503 38.9618 31.6045 40.8545 32.3003C41.8014 32.6482 42.567 33.0587 43.0785 33.5003C43.5837 33.9368 43.7503 34.3201 43.7503 34.6534V37.5003H31.2503V33.7503C31.2503 33.0212 31.0055 32.3493 30.5764 31.7399ZM40.6253 21.3545C40.6253 24.5201 38.0618 27.0837 34.8962 27.0837C33.3767 27.0837 31.9195 26.4801 30.845 25.4056C29.7706 24.3312 29.167 22.874 29.167 21.3545C29.167 18.1889 31.7305 15.6253 34.8962 15.6253C38.0618 15.6253 40.6253 18.1889 40.6253 21.3545ZM34.8962 25.0003C36.9107 25.0003 38.542 23.3691 38.542 21.3545C38.542 19.3399 36.9107 17.7087 34.8962 17.7087C33.9292 17.7087 33.0019 18.0928 32.3182 18.7765C31.6344 19.4602 31.2503 20.3876 31.2503 21.3545C31.2503 23.3691 32.8816 25.0003 34.8962 25.0003Z" 
        fill="#36427C"
      />
    </svg>
  );

  const CalendarIcon = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M36.125 12.2H31.475V9.8C31.475 9.58783 31.3933 9.38434 31.248 9.23431C31.1027 9.08429 30.9055 9 30.7 9C30.4945 9 30.2973 9.08429 30.152 9.23431C30.0067 9.38434 29.925 9.58783 29.925 9.8V12.2H19.075V9.8C19.075 9.58783 18.9933 9.38434 18.848 9.23431C18.7027 9.08429 18.5055 9 18.3 9C18.0945 9 17.8973 9.08429 17.752 9.23431C17.6067 9.38434 17.525 9.58783 17.525 9.8V12.2H12.875C11.8477 12.2013 10.8628 12.6231 10.1363 13.373C9.40988 14.1228 9.00123 15.1395 9 16.2V37C9.00123 38.0605 9.40988 39.0772 10.1363 39.827C10.8628 40.5769 11.8477 40.9987 12.875 41H36.125C37.1527 41 38.1383 40.5786 38.865 39.8284C39.5917 39.0783 40 38.0609 40 37V16.2C40 15.1391 39.5917 14.1217 38.865 13.3716C38.1383 12.6214 37.1527 12.2 36.125 12.2ZM38.45 37C38.45 37.6365 38.205 38.247 37.769 38.6971C37.333 39.1471 36.7416 39.4 36.125 39.4H12.875C12.2584 39.4 11.667 39.1471 11.231 38.6971C10.795 38.247 10.55 37.6365 10.55 37V23.4H38.45V37ZM38.45 21.8H10.55V16.2C10.55 14.8752 11.5885 13.8 12.875 13.8H17.525V16.2C17.525 16.4122 17.6067 16.6157 17.752 16.7657C17.8973 16.9157 18.0945 17 18.3 17C18.5055 17 18.7027 16.9157 18.848 16.7657C18.9933 16.6157 19.075 16.4122 19.075 16.2V13.8H29.925V16.2C29.925 16.4122 30.0067 16.6157 30.152 16.7657C30.2973 16.9157 30.4945 17 30.7 17C30.9055 17 31.1027 16.9157 31.248 16.7657C31.3933 16.6157 31.475 16.4122 31.475 16.2V13.8H36.125C36.7416 13.8 37.333 14.0529 37.769 14.5029C38.205 14.953 38.45 15.5635 38.45 16.2V21.8Z" 
        fill="#36427C"
      />
    </svg>
  );

  const ShipIcon = () => (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M15.7502 4.28433C15.4717 4.28433 15.2046 4.39495 15.0077 4.59186C14.8108 4.78878 14.7002 5.05585 14.7002 5.33433V10.5003H9.4502C9.17172 10.5003 8.90465 10.611 8.70773 10.8079C8.51082 11.0048 8.4002 11.2718 8.4002 11.5503V20.0826L4.9688 21.0402C4.82183 21.0813 4.6856 21.1539 4.56956 21.253C4.45353 21.3521 4.36049 21.4753 4.29692 21.6141C4.23336 21.7528 4.20079 21.9037 4.2015 22.0563C4.2022 22.2089 4.23615 22.3595 4.301 22.4976L8.08519 30.5406C8.54729 29.9832 9.1873 29.6021 9.89749 29.4612L6.7286 22.7286L19.8662 19.0683C20.6039 18.8627 21.3839 18.8627 22.1216 19.0683L35.2613 22.7286L32.0273 29.4465C32.7388 29.5647 33.3881 29.9235 33.8669 30.4629L37.6994 22.5081C37.7658 22.3697 37.801 22.2185 37.8026 22.065C37.8042 21.9115 37.7722 21.7596 37.7087 21.6198C37.6452 21.4801 37.5519 21.356 37.4353 21.2562C37.3187 21.1564 37.1816 21.0834 37.0337 21.0423L33.6002 20.0847V11.5503C33.6002 11.2718 33.4896 11.0048 33.2927 10.8079C33.0957 10.611 32.8287 10.5003 32.5502 10.5003H27.3002V5.33223C27.3002 5.05375 27.1896 4.78668 26.9927 4.58976C26.7957 4.39285 26.5287 4.28223 26.2502 4.28223L15.7502 4.28433ZM25.2002 10.5003H16.8002V6.38433H25.2002V10.5003ZM31.5002 12.6003V19.4988L22.6823 17.0418C21.5763 16.7338 20.4072 16.7338 19.3013 17.0418L10.5002 19.5009V12.6003H31.5002ZM32.525 32.3193L32.5187 32.2983C32.4644 32.0812 32.3422 31.8871 32.1698 31.7443C31.9975 31.6015 31.784 31.5175 31.5605 31.5046C31.3371 31.4917 31.1153 31.5506 30.9277 31.6726C30.74 31.7946 30.5963 31.9734 30.5174 32.1828L30.5069 32.2038L30.4649 32.3109C30.198 32.9132 29.8534 33.478 29.4401 33.9909C28.6883 34.9149 27.6446 35.7003 26.2502 35.7003C24.8558 35.7003 23.81 34.9128 23.054 33.9867C22.6149 33.4442 22.2531 32.8435 21.9788 32.2017L21.9683 32.1786C21.8921 31.9797 21.7572 31.8086 21.5814 31.6881C21.4057 31.5676 21.1974 31.5035 20.9844 31.5042C20.7713 31.5048 20.5635 31.5703 20.3885 31.6919C20.2135 31.8135 20.0797 31.9855 20.0048 32.1849L19.9943 32.2059L19.9523 32.313C19.9103 32.4124 19.8445 32.5496 19.7549 32.7246C19.5235 33.1732 19.2477 33.5974 18.9317 33.9909C18.1841 34.9149 17.1446 35.7003 15.7502 35.7003C14.3558 35.7003 13.3142 34.9128 12.5624 33.9888C12.1248 33.4461 11.7644 32.8454 11.4914 32.2038L11.483 32.1828C11.4041 31.9734 11.2604 31.7925 11.0727 31.6705C10.8851 31.5485 10.6633 31.4896 10.4399 31.5025C10.2164 31.5154 10.0029 31.5994 9.83056 31.7422C9.65819 31.885 9.53596 32.0791 9.48169 32.2962L9.4775 32.313L9.4481 32.4096C9.25713 32.988 8.9742 33.5319 8.61019 34.0203C7.96549 34.8813 6.9386 35.7003 5.2502 35.7003C4.97172 35.7003 4.70465 35.811 4.50773 36.0079C4.31082 36.2048 4.2002 36.4719 4.2002 36.7503C4.2002 37.0288 4.31082 37.2959 4.50773 37.4928C4.70465 37.6897 4.97172 37.8003 5.2502 37.8003C7.7618 37.8003 9.3599 36.5235 10.2902 35.2803C10.3966 35.1389 10.4946 34.9982 10.5842 34.8582C10.6906 35.008 10.8068 35.1599 10.9328 35.3139C11.8862 36.4899 13.4696 37.8003 15.7502 37.8003C18.0308 37.8003 19.61 36.4857 20.5634 35.3097C20.7202 35.1137 20.863 34.9219 20.9918 34.7343C21.1248 34.9247 21.2697 35.1179 21.4265 35.3139C22.3862 36.492 23.9696 37.8003 26.2502 37.8003C28.5308 37.8003 30.1142 36.4899 31.0676 35.3139C31.1894 35.1641 31.3028 35.0157 31.4078 34.8687C31.4988 35.0101 31.5968 35.1529 31.7018 35.2971C32.6342 36.5487 34.2365 37.8318 36.7628 37.8003C36.9007 37.7987 37.0369 37.7699 37.1637 37.7156C37.2904 37.6613 37.4052 37.5826 37.5016 37.4839C37.5979 37.3852 37.6739 37.2685 37.7251 37.1405C37.7763 37.0125 37.8018 36.8756 37.8002 36.7377C37.7985 36.5998 37.7697 36.4636 37.7154 36.3369C37.6612 36.2101 37.5824 36.0953 37.4837 35.999C37.3851 35.9026 37.2684 35.8267 37.1404 35.7754C37.0123 35.7242 36.8755 35.6987 36.7376 35.7003C35.0513 35.7213 34.0286 34.9044 33.3881 34.0434C33.0242 33.5503 32.7426 33.0013 32.5544 32.418L32.525 32.3193Z" 
        fill="#36427C"
      />
    </svg>
  );

  // Statistics item
  type StatisticItemProps = {
    icon: React.ReactNode;
    value: React.ReactNode;
    label: string;
  };

  function StatisticItem({ icon, value, label }: StatisticItemProps) {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="w-[60px] h-[60px] bg-light-blue rounded-full flex items-center justify-center mb-[15px]">
          {icon}
        </div>
        <div className="text-primary-blue font-poppins text-[20px] font-semibold mb-[5px]">
          {value}
        </div>
        <div className="text-primary-blue text-center font-poppins text-[15px] font-normal">
          {label}
        </div>
      </div>
    );
  }

  // ...existing code...
  const IndexPage: React.FC = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          {/* Hero Section */}
          <div className="w-full h-[205px] bg-hero-blue relative">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center gap-[10px] w-[606px] max-w-[90vw]">
                <div className="flex flex-col justify-center items-center px-[10px] py-[10px] h-[123px] w-full">
                  <h1 className="text-white text-center font-poppins text-[45px] font-semibold leading-[55px] md:text-[45px] sm:text-[32px]">
                    Agency Services
                  </h1>
                  <div className="w-[208px] h-[23px] flex-shrink-0 relative">
                    <div className="w-[397px] h-[23px] flex-shrink-0 text-white font-inter text-[12px] font-normal leading-normal">
                      <div className="flex items-center gap-2">
                        <span>Home</span>
                        <BreadcrumbArrow />
                        <span>Services</span>
                        <BreadcrumbArrow />
                        <span>Agency Services</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="w-full py-[60px] bg-white">
            <div className="max-w-[1200px] mx-auto px-5">
              <div className="flex justify-between items-center gap-8 lg:gap-4">
                <StatisticItem
                  icon={<WorldIcon />}
                  value="6.5%"
                  label="Global Market Share"
                />
                <StatisticItem
                  icon={<PeopleIcon />}
                  value="300 +"
                  label="Monthly Customers"
                />
                <StatisticItem
                  icon={<CalendarIcon />}
                  value="4 +"
                  label="Years of Service"
                />
                <StatisticItem
                  icon={<ShipIcon />}
                  value={<span>6<span className="text-[12px]">th</span></span>}
                  label="Largest Shipping Line"
                />
              </div>
            </div>
          </div>

          {/* MainContent Section */}
          <div className="max-w-[1200px] mx-auto px-5 py-[60px]">
            {/* Trusted Partnership Section */}
            <div className="flex flex-col lg:flex-row items-start gap-[60px] mb-[80px]">
              <div className="flex-1">
                <h2 className="text-primary-blue font-inter text-[20px] font-bold leading-[40px] mb-[30px]">
                  Trusted Partnership with ONE Shipping
                </h2>
                <div className="text-text-gray text-justify font-poppins text-[15px] font-normal leading-[30px]">
                  <p className="mb-4">
                    ONE Shipping, world's 6th largest shipping line with 6.5% global market share, has entrusted the 
                    shipping agency operations of Nepal to Allcargo Logistics Limited. Through our joint venture 
                    TransNepal Freight Services Pvt Ltd, we have been successfully managing agency operations since 
                    September 2019.
                  </p>
                  <p>
                    For over four years, we have been successfully loading import containers to Nepal from Kolkata and 
                    Vizag. The day-by-day growth in ONE volume proves that our services are second to none in the 
                    logistics domain.
                  </p>
                </div>
              </div>
              <div className="flex-none w-full lg:w-[395px]">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b9447ce768cc0ba9673657a7a81c3175a7877959?width=790"
                  alt="ONE Shipping Partnership"
                  className="w-full lg:w-[395px] h-[300px] object-cover rounded-[15px]"
                />
              </div>
            </div>

            {/* Growth Journey Section */}
            <div className="flex flex-col lg:flex-row items-start gap-[60px]">
              <div className="flex-1">
                <h2 className="text-primary-blue text-justify font-poppins text-[25px] font-bold leading-[30px] mb-[30px]">
                  Growth Journey
                </h2>
                <div className="text-text-gray text-justify font-poppins text-[15px] font-normal leading-[30px]">
                  It is now more than a year we are successfully loading the import containers to Nepal from Kolkata 
                  and Vizag. Day by day the growth in ONE volume proves the fact that the services which we are levying 
                  are second to none in the logistics domain. We are serving more than 300 customers a month and helping 
                  Nepal EXIM trade to grow their business. With the increase in global trade and also the faith being 
                  reposed by the Global trade community in the Nepal ONE and TranNepal are poised for phenomenal growth 
                  in this trade route. We are also working on the Biratnagar and Bhairawaha route going forward to serve 
                  the Nepal EXIM trade
                </div>
              </div>
              <div className="flex-none w-full lg:w-[400px] relative">
                {/* Growth Chart */}
                <div className="flex items-end justify-center gap-[10px] h-[300px] mb-[20px]">
                  <div className="w-[33px] h-[79px] bg-primary-blue/50"></div>
                  <div className="w-[33px] h-[123px] bg-primary-blue/50"></div>
                  <div className="w-[33px] h-[156px] bg-primary-blue/50"></div>
                  <div className="w-[33px] h-[197px] bg-primary-blue/50"></div>
                  <div className="w-[33px] h-[231px] bg-primary-blue/50"></div>
                  <div className="w-[33px] h-[274px] bg-primary-blue/50"></div>
                </div>
                {/* Chart Labels */}
                <div className="flex justify-center gap-[10px]">
                  {["2019", "2020", "2021", "2022", "2023", "2024"].map((year) => (
                    <div 
                      key={year}
                      className="w-[42px] text-primary-blue text-center font-inter text-[13px] font-normal leading-[30px]"
                    >
                      {year}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  };

  export default IndexPage;