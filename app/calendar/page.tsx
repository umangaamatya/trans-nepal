// full updated version with styling untouched and added month-switch logic

"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "../../components/Navigation";
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

const nepaliMonths = [
  { name: "Baisakh", days: 31 },
  { name: "Jestha", days: 31 },
  { name: "Ashad", days: 32 },
  { name: "Shrawan", days: 31 },
  { name: "Bhadra", days: 31 },
  { name: "Ashwin", days: 30 },
  { name: "Kartik", days: 30 },
  { name: "Mangsir", days: 30 },
  { name: "Poush", days: 29 },
  { name: "Magh", days: 29 },
  { name: "Falgun", days: 30 },
  { name: "Chaitra", days: 30 }
];

function generateCalendarData(monthIndex: number): { weeks: CalendarDay[][] } {
  const totalDays = nepaliMonths[monthIndex].days;
  const weeks: CalendarDay[][] = [];
  let currentDay = 1;

  while (currentDay <= totalDays) {
    const week: CalendarDay[] = [];
    for (let i = 0; i < 7; i++) {
      if (currentDay <= totalDays) {
        let day: CalendarDay = { date: currentDay };

        if (monthIndex === 0 && currentDay === 1) {
          day = {
            ...day,
            isHoliday: true,
            holidayName: "New Year",
            hasConfetti: true,
          };
        }
        if (monthIndex === 0 && currentDay === 19) {
          day = {
            ...day,
            isHoliday: true,
            holidayName: "Labor day",
            hasIcon: true,
          };
        }

        // For demonstration, highlight 23rd as today
        if (currentDay === 23) {
          day = {
            ...day,
            isToday: true,
          };
        }

        week.push(day);
        currentDay++;
      } else {
        week.push({ date: null });
      }
    }
    weeks.push(week);
  }

  return { weeks };
}

export default function Calendar() {
  const [monthIndex, setMonthIndex] = useState(0);

  const calendarData = generateCalendarData(monthIndex);
  const currentMonth = nepaliMonths[monthIndex].name;

  const ConfettiIcon = () => (
    <div className="absolute top-2 right-2">
      <Image 
        src="/about/calendar/celebration.png"
        alt="Celebration"
        width={44}
        height={37}
        className="object-contain"
      />
    </div>
  );

  const LaborIcon = () => (
    <div className="absolute top-2 right-2">
      <Image 
        src="/about/calendar/labor.png"
        alt="Labor Day"
        width={43}
        height={43}
        className="object-contain"
      />
    </div>
  );

  const upcomingHolidays = [
    { date: "3rd Ashoj", name: "Constitution Day" },
    { date: "24th Kartik", name: "Fulpati" },
    { date: "25th Kartik", name: "Maha Astami" },
    { date: "26th Kartik", name: "Constitution Day" }
  ];

  const navigateMonth = (direction: 'prev' | 'next') => {
    setMonthIndex(prev => {
      if (direction === 'next') {
        return (prev + 1) % nepaliMonths.length;
      } else {
        return (prev - 1 + nepaliMonths.length) % nepaliMonths.length;
      }
    });
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation /> {/* Changed from Header to Navigation */}
      
      <main className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[117px] pt-8 md:pt-[150px]">
        {/* Page Title */}
        <h1 className="text-[#1e3a8a] text-center text-3xl md:text-[55px] font-bold md:font-extrabold mb-8 font-poppins">
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
          <div className="bg-[#1e3a8a] rounded-t-[40px] border-[3px] border-[#1e3a8a] h-[96px] flex items-center justify-center gap-4 md:gap-[99px] relative">
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
          <div className="border-[3px] border-[#1e3a8a] border-t-0 rounded-b-[50px] overflow-hidden">
            {/* Day Headers */}
            <div className="grid grid-cols-7 bg-[#1e3a8a] h-[90px]">
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day, index) => (
                <div key={day} className={`bg-white text-[#1e3a8a] text-lg md:text-[35px] font-bold flex items-center justify-center ${index < 6 ? 'border-r border-[#1e3a8a]' : ''}`}>
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="flex flex-col">
              {calendarData.weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-cols-7 border-b border-[#1e3a8a]">
                  {week.map((day, dayIndex) => (
                    <div 
                      key={dayIndex} 
                      className={`h-[100px] md:h-[162px] ${dayIndex < 6 ? 'border-r border-[#1e3a8a]' : ''} flex flex-col items-center justify-center relative ${
                        day?.isHoliday ? 'bg-red-300 bg-opacity-50' : 
                        day?.isToday ? 'bg-[#1e3a8a] bg-opacity-70' : 'bg-white'
                      }`}
                    >
                      {day?.date && (
                        <>
                          <div className={`text-lg md:text-[35px] font-bold text-center ${
                            day.isToday ? 'text-white drop-shadow-sm' : 'text-[#1e3a8a]'
                          }`}>
                            {day.date}
                          </div>
                          {day.isHoliday && day.hasConfetti && <ConfettiIcon />}
                          {day.isHoliday && day.hasIcon && <LaborIcon />}
                          {day.holidayName && (
                            <div className="text-[#1e3a8a] text-xs md:text-[20px] font-semibold text-center absolute bottom-[10px] w-full px-1">
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
              <div key={index} className="h-[80px] md:h-[129px] rounded-[15px] border-l-[30px] border-[#1e3a8a] bg-blue-50 px-4 md:px-[50px] flex items-center justify-between">
                <div className="text-[#1e3a8a] text-lg md:text-[35px] font-bold font-inter">{holiday.date}</div>
                <div className="text-[#1e3a8a] text-lg md:text-[35px] font-medium font-inter">{holiday.name}</div>
              </div>
            ))}
          </div>
          <button className="flex items-center justify-center gap-2 w-[143px] h-[54px] bg-brand-blue bg-opacity-30 rounded-[45.5px] text-[#1e3a8a] text-xl font-medium ml-auto mt-8 cursor-pointer font-inter">
            Next
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
