"use client";

import { useState } from "react";
import Navigation from "../../components/Navigation"; // Changed from Header to Navigation
import Footer from "../../components/Footer";

// Define types for calendar day
type CalendarDay = {
  date: number | null;
  isHoliday?: boolean;
  holidayName?: string;
  hasConfetti?: boolean;
  hasIcon?: boolean;
  isToday?: boolean;
};

export default function Calendar() {
  const [currentMonth] = useState("Baisakh");

  const calendarData: { weeks: CalendarDay[][] } = {
    weeks: [
      [
        { date: 1, isHoliday: true, holidayName: "New Year", hasConfetti: true },
        { date: 2 },
        { date: 3 },
        { date: 4 },
        { date: 5 },
        { date: 6 },
        { date: null }
      ],
      [
        { date: 7 },
        { date: 8 },
        { date: 9 },
        { date: 10 },
        { date: 11 },
        { date: 12 },
        { date: 13 }
      ],
      [
        { date: 14 },
        { date: 15 },
        { date: 16 },
        { date: 17 },
        { date: 18 },
        { date: 19, isHoliday: true, holidayName: "Labor day", hasIcon: true },
        { date: 20 }
      ],
      [
        { date: 21 },
        { date: 22 },
        { date: 23, isToday: true },
        { date: 24 },
        { date: 25 },
        { date: 26 },
        { date: 27 }
      ],
      [
        { date: 28 },
        { date: 29 },
        { date: 30 },
        { date: 31 },
        { date: null },
        { date: null },
        { date: null }
      ]
    ]
  };

  const upcomingHolidays = [
    { date: "3rd Ashoj", name: "Constitution Day" },
    { date: "24th Kartik", name: "Fulpati" },
    { date: "25th Kartik", name: "Maha Astami" },
    { date: "26th Kartik", name: "Constitution Day" }
  ];

  const ConfettiIcon = () => (
    <div className="absolute top-2 right-2 flex flex-col gap-1">
      <svg width="14" height="28" viewBox="0 0 14 28" fill="none">
        <path d="M12.7763 17.7326C13.71 15.4227 12.8706 13.9915 12.2561 12.9473C11.6685 11.9455 11.2439 11.2239 11.7655 9.3937C13.0275 4.98054 10.4299 0.328262 10.3178 0.132295L8.17161 1.58118C8.19157 1.62009 10.2613 5.39865 9.35581 8.57446C8.48194 11.63 9.43357 13.2508 10.1285 14.4337C10.6556 15.3286 10.8517 15.6625 10.4643 16.619C9.11498 19.9505 10.0989 21.6441 10.8166 22.8801C11.4428 23.9576 11.857 24.6707 10.9646 26.8942L13.2779 28C14.7105 24.433 13.6935 22.6827 12.9497 21.4057C12.3407 20.353 11.9712 19.7184 12.7763 17.7326ZM3.6199 14.2929C4.28666 13.0902 5.19907 11.4432 4.25294 8.41387C3.26416 5.24938 5.23416 1.45313 5.26788 1.38875L5.26925 1.38592L4.35203 0.805801L3.08526 0C2.97792 0.200212 0.493916 4.92607 1.86252 9.30173C2.42951 11.115 2.02216 11.8514 1.4593 12.8666C0.870989 13.9293 0.0645481 15.3845 1.05608 17.6668C1.90794 19.6272 1.55495 20.2731 0.968698 21.3414C0.257902 22.6403 -0.715056 24.4195 0.80218 27.9441L3.08801 26.7725C2.13914 24.5745 2.53685 23.85 3.13755 22.7549C3.82427 21.4984 4.76764 19.7779 3.33779 16.4867C2.92837 15.543 3.11485 15.2027 3.6199 14.2929Z" fill="#171F45"/>
      </svg>
      <svg width="44" height="37" viewBox="0 0 44 37" fill="none">
        <path d="M39.1776 27.3595C39.5861 24.9466 38.3658 23.7817 37.4748 22.9322C36.6227 22.1186 36.0067 21.5306 36.1027 19.6691C36.1526 18.7055 36.0089 17.7771 35.7617 16.9048C37.5288 17.5187 39.372 17.916 41.2463 18.087C42.9587 16.168 44 13.6362 44 10.8594C44 4.86176 39.1417 0 33.1511 0C30.6607 0 28.3697 0.844651 26.5393 2.25655C25.1656 1.50541 23.6054 1.11087 22.0176 1.11306C20.3999 1.11306 18.8503 1.5129 17.4746 2.26693C15.642 0.848801 13.3467 0 10.8489 0C4.8598 0 0 4.86176 0 10.8594C0 13.6362 1.04133 16.168 2.7544 18.0863C5.01074 17.8799 7.2197 17.3458 9.30307 16.5029C8.98113 17.4866 8.78827 18.5567 8.8462 19.6684C8.94373 21.5293 8.32627 22.118 7.47413 22.9315C6.58313 23.7817 5.36287 24.9459 5.77133 27.3588C6.12333 29.4341 5.58653 29.9509 4.697 30.808C3.61533 31.8498 2.13767 33.2762 2.7522 37L5.4208 36.4888C5.0358 34.1658 5.6386 33.5847 6.55087 32.7062C7.59513 31.6983 9.02733 30.3189 8.43847 26.8386C8.2698 25.8404 8.55287 25.5678 9.31627 24.8401C10.3261 23.8764 11.7062 22.5586 11.5456 19.4505C11.4393 17.4298 12.5825 15.477 13.4713 14.2767C16.6217 12.1143 19.0711 9.18255 20.449 5.7915C19.9925 4.9256 19.4153 4.12111 18.733 3.39936C19.7544 2.92199 20.8785 2.67252 22.0183 2.67023C23.1836 2.67023 24.288 2.93172 25.2802 3.38621C24.5934 4.11187 24.0123 4.92078 23.5525 5.7915C25.1577 9.7415 28.2179 13.0661 32.1493 15.277C32.8482 16.4323 33.484 17.9196 33.4055 19.4498C33.2435 22.5579 34.6243 23.8757 35.6334 24.8394C36.3968 25.5671 36.6806 25.839 36.5127 26.8379C35.9223 30.3182 37.356 31.6976 38.3988 32.7055C39.3111 33.584 39.9139 34.1644 39.5289 36.4881L42.1975 36.9993C42.8135 33.2755 41.3336 31.8491 40.2541 30.8073C39.3624 29.9516 38.8263 29.4348 39.1776 27.3595ZM2.57767 15.3324C1.84294 13.9434 1.46249 12.4117 1.46667 10.8594C1.46667 5.63446 5.676 1.38354 10.8489 1.38354C13.6539 1.38354 16.2639 2.6391 18.0268 4.75453C9.2092 6.46113 4.5606 12.1205 2.57767 15.3324ZM25.9732 4.75523C27.7361 2.6391 30.3461 1.38354 33.1511 1.38354C38.324 1.38354 42.5333 5.63446 42.5333 10.8594C42.5333 12.4353 42.1476 13.9682 41.4223 15.3324C39.4394 12.1212 34.7908 6.46113 25.9732 4.75523Z" fill="#171F45"/>
      </svg>
      <svg width="29" height="23" viewBox="0 0 29 23" fill="none">
        <path d="M6.10881 4.48685L8.20207 6.4684L6.10733 8.44855L4.01332 6.467L6.10881 4.48685ZM26.9067 23L24.8135 21.0198L26.906 19.0397L29 21.0205L26.9067 23ZM4.18727 15.3378L2.09474 13.3562L4.18949 11.3761L6.28201 13.3576L4.18727 15.3378ZM16.5514 1.98015L14.4582 3.961L12.3649 1.98015L14.4582 0L16.5514 1.98015ZM2.094 23L0 21.0198L2.09326 19.0397L4.18653 21.0205L2.094 23ZM25.1266 11.7402L27.2191 13.7217L25.1244 15.7019L23.0318 13.7203L25.1266 11.7402ZM14.4582 22.6954L12.3642 20.7153L14.4582 18.7344L16.5514 20.7153L14.4582 22.6954ZM23.034 4.77673L25.1273 6.75688L23.0333 8.73703L20.94 6.75618L23.034 4.77673ZM14.9815 13.9759L12.8882 11.995L14.9815 10.0149L17.0748 11.995L14.9815 13.9759Z" fill="#171F45"/>
      </svg>
    </div>
  );

  const LaborIcon = () => (
    <svg 
      width="43" 
      height="43" 
      viewBox="0 0 43 43" 
      fill="none" 
      className="absolute top-[50px] right-[10px]"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M21.4656 1.11523C22.5817 1.11567 23.6928 1.2651 24.7694 1.55957V8.05973C24.7694 8.41683 24.9113 8.7593 25.1638 9.01181C25.4163 9.26431 25.7587 9.40617 26.1158 9.40617C26.4729 9.40617 26.8154 9.26431 27.0679 9.01181C27.3204 8.7593 27.4623 8.41683 27.4623 8.05973V2.64532C29.351 3.67708 30.9415 5.1788 32.0799 7.00522C33.2183 8.83164 33.8661 10.9209 33.9606 13.071H8.97048C9.06501 10.9209 9.71282 8.83164 10.8512 7.00522C11.9896 5.1788 13.5801 3.67708 15.4689 2.64532V8.06153C15.4689 8.41862 15.6107 8.76109 15.8632 9.0136C16.1157 9.26611 16.4582 9.40796 16.8153 9.40796C17.1724 9.40796 17.5149 9.26611 17.7674 9.0136C18.0199 8.76109 18.1617 8.41862 18.1617 8.06153V1.55778C19.2378 1.26408 20.3483 1.11525 21.4638 1.11523M33.9427 15.7639H35.4155C35.7723 15.7639 36.1146 15.9057 36.3669 16.158C36.6193 16.4103 36.761 16.7526 36.761 17.1094C36.761 17.4663 36.6193 17.8085 36.3669 18.0609C36.1146 18.3132 35.7723 18.455 35.4155 18.455H32.5721L31.5974 20.8522C31.4973 21.101 31.3251 21.3141 31.1029 21.4642C30.8806 21.6143 30.6186 21.6944 30.3504 21.6943H12.5789C12.3107 21.6944 12.0487 21.6143 11.8265 21.4642C11.6043 21.3141 11.432 21.101 11.3319 20.8522L10.359 18.455H7.51386C7.157 18.455 6.81475 18.3132 6.56242 18.0609C6.31008 17.8085 6.16831 17.4663 6.16831 17.1094C6.16831 16.7526 6.31008 16.4103 6.56242 16.158C6.81475 15.9057 7.157 15.7639 7.51386 15.7639H33.9427ZM6.1504 41.8828L2.33773 37.0776C1.11223 35.5594 0.439362 33.6697 0.429607 31.7187V21.8574C0.420054 21.4757 0.486976 21.096 0.62643 20.7406C0.765884 20.3852 0.975051 20.0613 1.24161 19.788C1.50817 19.5147 1.82672 19.2975 2.17852 19.1492C2.53031 19.0009 2.90823 18.9245 3.29 18.9245C3.67178 18.9245 4.04969 19.0009 4.40149 19.1492C4.75328 19.2975 5.07184 19.5147 5.3384 19.788C5.60495 20.0613 5.81412 20.3852 5.95358 20.7406C6.09303 21.096 6.15995 21.4757 6.1504 21.8574L6.1719 24.5807L6.07336 24.6398C5.19206 25.2332 4.56233 26.1324 4.30613 27.1635C4.04994 28.1946 4.18552 29.284 4.68661 30.2209L7.56761 34.9509C7.75316 35.2559 8.05231 35.4748 8.39923 35.5593C8.74615 35.6438 9.11244 35.587 9.4175 35.4015C9.72257 35.2159 9.94143 34.9168 10.0259 34.5698C10.1104 34.2229 10.0537 33.8566 9.86811 33.5516L7.01936 28.8753C6.85052 28.5168 6.82122 28.1083 6.93714 27.7294C7.05307 27.3505 7.30593 27.0283 7.64644 26.8256C8.08117 26.6176 8.56385 26.5303 9.04393 26.5728C9.524 26.6154 9.98379 26.7862 10.3751 27.0675C10.6716 27.2806 10.9216 27.5519 11.1097 27.8648L13.2848 31.1454C14.2326 32.5482 14.7361 34.2019 14.7343 35.8933V41.8828H6.1504ZM36.847 41.8828L40.6633 37.0776C41.8881 35.5592 42.5604 33.6695 42.5696 31.7187V21.8574C42.5696 21.0985 42.2682 20.3707 41.7316 19.8341C41.195 19.2975 40.4672 18.9961 39.7083 18.9961C38.9495 18.9961 38.2217 19.2975 37.6851 19.8341C37.1485 20.3707 36.847 21.0985 36.847 21.8574L36.8273 24.5807C36.8596 24.5986 36.8924 24.6183 36.9259 24.6398C37.8072 25.2332 38.4369 26.1324 38.6931 27.1635C38.9493 28.1946 38.8137 29.284 38.3126 30.2209L35.4316 34.9509C35.3397 35.1019 35.219 35.2334 35.0763 35.3378C34.9336 35.4422 34.7718 35.5174 34.6 35.5593C34.4282 35.6011 34.2499 35.6087 34.0751 35.5816C33.9004 35.5546 33.7328 35.4933 33.5817 35.4015C33.4307 35.3096 33.2992 35.1889 33.1948 35.0462C33.0904 34.9035 33.0151 34.7416 32.9733 34.5698C32.9314 34.3981 32.9238 34.2197 32.9509 34.045C32.978 33.8703 33.0392 33.7026 33.1311 33.5516L35.9799 28.8753C36.1487 28.5168 36.178 28.1083 36.0621 27.7294C35.9461 27.3505 35.6933 27.0283 35.3528 26.8256C34.7497 26.537 34.0606 26.4836 33.4202 26.6757C32.7798 26.8679 32.2341 27.2918 31.8895 27.8648L29.7144 31.1454C28.7651 32.5464 28.26 34.2009 28.2649 35.8933V41.8828H36.847Z" fill="#171F45"/>
    </svg>
  );

  const navigateMonth = (direction: 'prev' | 'next') => {
    // Here you would implement month navigation logic
    console.log(`Navigate ${direction} from ${currentMonth}`);
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation /> {/* Changed from Header to Navigation */}
      
      <main className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[117px] pt-8 md:pt-[150px]">
        {/* Page Title */}
        <h1 className="text-brand-blue text-center text-3xl md:text-[55px] font-bold md:font-extrabold mb-8 font-poppins">
          Holiday Calendar
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 justify-center mb-8 md:mb-[140px]">
          <span className="text-brand-blue text-xs font-normal">Home</span>
          <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.77162 8.47377L3.00028 12.2451L2.05762 11.3024L5.35762 8.00243L2.05762 4.70243L3.00028 3.75977L6.77162 7.5311C6.8966 7.65612 6.96681 7.82566 6.96681 8.00243C6.96681 8.17921 6.8966 8.34875 6.77162 8.47377Z" fill="#283B9A"/>
          </svg>
          <span className="text-brand-blue text-xs font-normal">About Us</span>
          <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.77162 8.47377L3.00028 12.2451L2.05762 11.3024L5.35762 8.00243L2.05762 4.70243L3.00028 3.75977L6.77162 7.5311C6.8966 7.65612 6.96681 7.82566 6.96681 8.00243C6.96681 8.17921 6.8966 8.34875 6.77162 8.47377Z" fill="#283B9A"/>
          </svg>
          <span className="text-brand-blue text-xs font-normal">Holiday</span>
        </div>

        {/* Statistics Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-[218px] mb-8 md:mb-[108px]">
          <div className="w-full md:w-[315px] h-[108px] rounded-[15px] border-l-[30px] border-brand-red bg-red-100 bg-opacity-38 flex flex-col justify-center items-center gap-[10px] relative">
            <div className="text-brand-red text-xl md:text-[25px] font-bold">Total days</div>
            <div className="text-brand-red text-3xl md:text-[40px] font-bold">15</div>
          </div>
          <div className="w-full md:w-[315px] h-[108px] rounded-[15px] border-l-[30px] border-brand-red bg-red-100 bg-opacity-38 flex flex-col justify-center items-center gap-[10px] relative">
            <div className="text-brand-red text-xl md:text-[25px] font-bold">Total holidays</div>
            <div className="text-brand-red text-3xl md:text-[40px] font-bold">9</div>
          </div>
        </div>

        {/* Calendar */}
        <div className="mb-8 md:mb-[150px]">
          {/* Calendar Header */}
          <div className="bg-brand-blue rounded-t-[40px] border-[3px] border-brand-blue h-[96px] flex items-center justify-center gap-4 md:gap-[99px] relative">
            <button 
              onClick={() => navigateMonth('prev')}
              className="w-[54px] h-[54px] rounded-full bg-white bg-opacity-25 flex items-center justify-center cursor-pointer"
            >
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
                <rect width="54" height="54" rx="27" fill="white" fillOpacity="0.25"/>
                <path d="M34 14.7106L32.1285 13L15 26.5L32.1285 40L34 38.2894L19.0422 26.5L34 14.7106Z" fill="white"/>
              </svg>
            </button>
            <h2 className="text-white text-2xl md:text-[40px] font-bold font-poppins">{currentMonth}</h2>
            <button 
              onClick={() => navigateMonth('next')}
              className="w-[54px] h-[54px] rounded-full bg-white bg-opacity-25 flex items-center justify-center cursor-pointer"
            >
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
                <rect width="54" height="54" rx="27" fill="white" fillOpacity="0.25"/>
                <path d="M19 14.7106L20.8715 13L38 26.5L20.8715 40L19 38.2894L33.9578 26.5L19 14.7106Z" fill="white"/>
              </svg>
            </button>
          </div>

          {/* Calendar Body */}
          <div className="border-[3px] border-brand-blue border-t-0 rounded-b-[50px] overflow-hidden">
            {/* Day Headers */}
            <div className="grid grid-cols-7 bg-brand-blue h-[90px]">
              {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, index) => (
                <div key={day} className={`bg-white text-brand-blue text-lg md:text-[35px] font-bold flex items-center justify-center ${index < 6 ? 'border-r border-brand-blue' : ''}`}>
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="flex flex-col">
              {calendarData.weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-cols-7 border-b border-brand-blue">
                  {week.map((day, dayIndex) => (
                    <div 
                      key={dayIndex} 
                      className={`h-[100px] md:h-[162px] ${dayIndex < 6 ? 'border-r border-brand-blue' : ''} flex flex-col items-center justify-center relative ${
                        day?.isHoliday ? 'bg-red-300 bg-opacity-50' : 
                        day?.isToday ? 'bg-brand-blue bg-opacity-70' : 'bg-white'
                      }`}
                    >
                      {day?.date && (
                        <>
                          <div className={`text-lg md:text-[35px] font-bold text-center ${
                            day.isToday ? 'text-white drop-shadow-sm' : 'text-brand-blue'
                          }`}>
                            {day.date}
                          </div>
                          {day.isHoliday && day.hasConfetti && <ConfettiIcon />}
                          {day.isHoliday && day.hasIcon && <LaborIcon />}
                          {day.holidayName && (
                            <div className="text-brand-blue text-xs md:text-[20px] font-semibold text-center absolute bottom-[10px] w-full px-1">
                              {day.holidayName}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Holidays */}
        <div className="mb-[100px]">
          <h2 className="text-brand-red text-2xl md:text-[35px] font-bold mb-8 md:mb-[52px] font-poppins">Upcoming Holidays</h2>
          <div className="flex flex-col gap-4 md:gap-[52px]">
            {upcomingHolidays.map((holiday, index) => (
              <div key={index} className="h-[80px] md:h-[129px] rounded-[15px] border-l-[30px] border-brand-blue bg-blue-50 px-4 md:px-[50px] flex items-center justify-between">
                <div className="text-brand-blue text-lg md:text-[35px] font-bold font-inter">{holiday.date}</div>
                <div className="text-brand-blue text-lg md:text-[35px] font-medium font-inter">{holiday.name}</div>
              </div>
            ))}
          </div>
          <button className="flex items-center justify-center gap-2 w-[143px] h-[54px] bg-brand-blue bg-opacity-30 rounded-[45.5px] text-white text-xl font-medium ml-auto mt-8 cursor-pointer font-inter">
            Next
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
