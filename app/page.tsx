'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, Calendar, MapPin, Send, ArrowLeft, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './carousel-animations.css';

// Data for your hero slides with updated image paths
const heroSlides = [
  {
    imagePath: '/home/hero-bg.png',
    title: "Nepal's Leading<br />Dry Port Operations"
  },
  {
    imagePath: '/home/hero-bg-1.png',
    title: "Nepal's Leading<br />Dry Port Operations"
  },
  {
    imagePath: '/home/hero-bg-2.png',
    title: "Nepal's Leading<br />Dry Port Operations"
  },
];

const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.66667 14.667L8.66667 8.66699H23.3333L25.3333 14.667M23.3333 21.3337C22.8029 21.3337 22.2942 21.1229 21.9191 20.7479C21.544 20.3728 21.3333 19.8641 21.3333 19.3337C21.3333 18.8032 21.544 18.2945 21.9191 17.9194C22.2942 17.5444 22.8029 17.3337 23.3333 17.3337C23.8638 17.3337 24.3725 17.5444 24.7475 17.9194C25.1226 18.2945 25.3333 18.8032 25.3333 19.3337C25.3333 19.8641 25.1226 20.3728 24.7475 20.7479C24.3725 21.1229 23.8638 21.3337 23.3333 21.3337ZM8.66667 21.3337C8.13623 21.3337 7.62753 21.1229 7.25245 20.7479C6.87738 20.3728 6.66667 19.8641 6.66667 19.3337C6.66667 18.8032 6.87738 18.2945 7.25245 17.9194C7.62753 17.5444 8.13623 17.3337 8.66667 17.3337C9.1971 17.3337 9.70581 17.5444 10.0809 17.9194C10.456 18.2945 10.6667 18.8032 10.6667 19.3337C10.6667 19.8641 10.456 20.3728 10.0809 20.7479C9.70581 21.1229 9.1971 21.3337 8.66667 21.3337ZM25.2267 8.00033C24.96 7.22699 24.2133 6.66699 23.3333 6.66699H8.66667C7.78667 6.66699 7.04 7.22699 6.77333 8.00033L4 16.0003V26.667C4 27.0206 4.14048 27.3598 4.39052 27.6098C4.64057 27.8599 4.97971 28.0003 5.33333 28.0003H6.66667C7.02029 28.0003 7.35943 27.8599 7.60948 27.6098C7.85952 27.3598 8 27.0206 8 26.667V25.3337H24V26.667C24 27.0206 24.1405 27.3598 24.3905 27.6098C24.6406 27.8599 24.9797 28.0003 25.3333 28.0003H26.6667C27.0203 28.0003 27.3594 27.8599 27.6095 27.6098C27.8595 27.3598 28 27.0206 28 26.667V16.0003L25.2267 8.00033Z" fill="#5664B2" fillOpacity="0.7"/>
        </svg>
      ),
      title: "PARKING",
      description: "Both terminals have parking facilities for vehicles. Biratnagar ICP has the capacity to accommodate more than 150 vehicles, and Bhairahawa ICD has more than 250 vehicles at a time.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.66797 28V9.33333L16.0013 4L29.3346 9.33333V28H21.3346V17.3333H10.668V28H2.66797ZM12.0013 28V25.3333H14.668V28H12.0013ZM14.668 24V21.3333H17.3346V24H14.668ZM17.3346 28V25.3333H20.0013V28H17.3346Z" fill="#8993CA"/>
        </svg>
      ),
      title: "WAREHOUSE & STORAGE",
      description: "Covered warehouse of 55x25 meters with a 1.2-meter high-level platform at both terminals. Additional fully covered warehouse of similar size in ICP Biratnagar.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.6654 10.667H26.6654L30.6654 16.075V24.0003H27.952C27.7915 25.1111 27.2361 26.1269 26.3876 26.8616C25.5392 27.5962 24.4544 28.0006 23.332 28.0006C22.2097 28.0006 21.1249 27.5962 20.2764 26.8616C19.4279 26.1269 18.8726 25.1111 18.712 24.0003H11.952C11.7935 25.1127 11.239 26.1306 10.3903 26.8669C9.54156 27.6033 8.45566 28.0087 7.33203 28.0087C6.20841 28.0087 5.12251 27.6033 4.27379 26.8669C3.42508 26.1306 2.87054 25.1127 2.71203 24.0003H1.33203V8.00033C1.33203 7.6467 1.47251 7.30757 1.72256 7.05752C1.9726 6.80747 2.31174 6.66699 2.66536 6.66699H21.332C21.6857 6.66699 22.0248 6.80747 22.2748 7.05752C22.5249 7.30757 22.6654 7.6467 22.6654 8.00033V10.667ZM22.6654 13.3337V17.3337H27.9987V16.9537L25.3214 13.3337H22.6654Z" fill="#8993CA"/>
        </svg>
      ),
      title: "WEIGHTMENT",
      description: "When the company took charge of our terminal in the year 2002, there were no weighing facilities. To facilitate this activity, the company installed a 100-ton capacity Digital Weighbridge.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.33333 7.99967H26.6667V21.333H5.33333M26.6667 23.9997C27.3739 23.9997 28.0522 23.7187 28.5523 23.2186C29.0524 22.7185 29.3333 22.0403 29.3333 21.333V7.99967C29.3333 7.29243 29.0524 6.61415 28.5523 6.11406C28.0522 5.61396 27.3739 5.33301 26.6667 5.33301H5.33333C3.85333 5.33301 2.66667 6.51967 2.66667 7.99967V21.333C2.66667 22.0403 2.94762 22.7185 3.44772 23.2186C3.94781 23.7187 4.62609 23.9997 5.33333 23.9997H0V26.6663H32V23.9997H26.6667Z" fill="#8993CA"/>
        </svg>
      ),
      title: "AUTOMATED BILLING",
      description: "TransNepal provides system of Automated Billing in Order to predetermine date to pay a recurring bill.Speed up billing operations without losing attention to detail. Group customers together and set up automated billing schedules and rules for each group",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.515 2.14256C28.3669 2.05371 28.1984 2.0047 28.0258 2.00032C27.8532 1.99594 27.6824 2.03633 27.53 2.11756L12.75 10.0001H4C3.46957 10.0001 2.96086 10.2108 2.58579 10.5858C2.21071 10.9609 2 11.4696 2 12.0001V25.0001C2 25.5305 2.21071 26.0392 2.58579 26.4143C2.96086 26.7893 3.46957 27.0001 4 27.0001H15C15.5304 27.0001 16.0391 26.7893 16.4142 26.4143C16.7893 26.0392 17 25.5305 17 25.0001V21.0001C17 20.9561 16.9966 20.9122 16.99 20.8688V20.8388C16.983 20.7967 16.9738 20.755 16.9625 20.7138C16.963 20.7118 16.963 20.7096 16.9625 20.7076V20.6988L14.1925 11.5001L27 4.66631V20.0001H25V19.0001C25 18.7348 24.8946 18.4805 24.7071 18.2929C24.5196 18.1054 24.2652 18.0001 24 18.0001C23.7348 18.0001 23.4804 18.1054 23.2929 18.2929C23.1054 18.4805 23 18.7348 23 19.0001V20.0001C23 20.5305 23.2107 21.0392 23.5858 21.4143C23.9609 21.7893 24.4696 22.0001 25 22.0001H27C27.5304 22.0001 28.0391 21.7893 28.4142 21.4143C28.7893 21.0392 29 20.5305 29 20.0001V3.00006C29.0001 2.82742 28.9554 2.65771 28.8704 2.50744C28.7854 2.35717 28.663 2.23147 28.515 2.14256ZM6 12.0001V20.0001H4V12.0001H6ZM4 25.0001V22.0001H15V25.0001H4Z" fill="#8993CA"/>
        </svg>
      ),
      title: "CRANE & FORKLIFT FACILITY",
      description: "In the current situation, the company is pleased to introduce Escorts F-15 pick & carry crane in Biratnagar, one Forklift-3000kgs HYUNDAI make in Biratnagar, and one Forklift-3000kgs Ace Make in Bhairahawa.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21C11.3 21 10.7083 20.7583 10.225 20.275C9.74167 19.7917 9.5 19.2 9.5 18.5C9.5 17.8 9.74167 17.2083 10.225 16.725C10.7083 16.2417 11.3 16 12 16C12.7 16 13.2917 16.2417 13.775 16.725C14.2583 17.2083 14.5 17.8 14.5 18.5C14.5 19.2 14.2583 19.7917 13.775 20.275C13.2917 20.7583 12.7 21 12 21ZM6.35 15.35L4.25 13.2C5.23333 12.2167 6.38767 11.4377 7.713 10.863C9.03833 10.2883 10.4673 10.0007 12 10C13.5327 9.99933 14.962 10.291 16.288 10.875C17.614 11.459 18.768 12.2507 19.75 13.25L17.65 15.35C16.9167 14.6167 16.0667 14.0417 15.1 13.625C14.1333 13.2083 13.1 13 12 13C10.9 13 9.86667 13.2083 8.9 13.625C7.93333 14.0417 7.08333 14.6167 6.35 15.35ZM2.1 11.1L0 9C1.53333 7.43333 3.325 6.20833 5.375 5.325C7.425 4.44167 9.63333 4 12 4C14.3667 4 16.575 4.44167 18.625 5.325C20.675 6.20833 22.4667 7.43333 24 9L21.9 11.1C20.6167 9.81667 19.1293 8.81267 17.438 8.088C15.7467 7.36333 13.934 7.00067 12 7C10.066 6.99933 8.25367 7.362 6.563 8.088C4.87233 8.814 3.38467 9.818 2.1 11.1Z" fill="#8993CA"/>
        </svg>
      ),
      title: "FREE WI-FI ZONE",
      description: "In order to build sound connectivity and easier information sharing which ultimately lead to facilitating trade and commerce, the company has provided wi-fi facility at administrative block of both the ICDs at free of cost w.e.f.i.e 13th April, 2016.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.8253 9.94911L8.53863 2.77977C8.37741 2.70853 8.20366 2.66997 8.02744 2.6663C7.85121 2.66264 7.67601 2.69396 7.51197 2.75844C7.34805 2.82322 7.19861 2.91985 7.07228 3.04275C6.94595 3.16565 6.84524 3.31237 6.77597 3.47444L2.77597 12.8078C2.63668 13.1328 2.63217 13.4998 2.76345 13.8281C2.89472 14.1564 3.15101 14.4191 3.47597 14.5584L12.752 18.5331L11.0986 22.6664H5.33464V18.6664H2.66797V29.3331H5.33464V25.3331H11.0986C12.196 25.3331 13.168 24.6744 13.5733 23.6558L15.2026 19.5838L19.7613 21.5371C20.0848 21.6761 20.4502 21.6815 20.7777 21.5521C21.1052 21.4227 21.3682 21.1691 21.5093 20.8464L25.5093 11.7038C25.6508 11.3803 25.6583 11.014 25.5301 10.685C25.4018 10.3561 25.1484 10.0914 24.8253 9.94911ZM26.5746 21.8291L24.0973 20.8398L26.7613 14.1731L29.2386 15.1611L26.5746 21.8291Z" fill="#8993CA"/>
        </svg>
      ),
      title: "CCTV",
      description: "In order to build strict watch and surveillance system that allows you to keep an eye on what's going on in and around your business. Cameras and monitors enable you to view events live, and recorders archive footage for later reference.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.0013 26.667C18.8303 26.667 21.5434 25.5432 23.5438 23.5428C25.5442 21.5424 26.668 18.8293 26.668 16.0003C26.668 13.1713 25.5442 10.4582 23.5438 8.45785C21.5434 6.45747 18.8303 5.33366 16.0013 5.33366C13.1723 5.33366 10.4592 6.45747 8.45883 8.45785C6.45844 10.4582 5.33464 13.1713 5.33464 16.0003C5.33464 18.8293 6.45844 21.5424 8.45883 23.5428C10.4592 25.5432 13.1723 26.667 16.0013 26.667ZM16.0013 2.66699C17.7523 2.66699 19.4861 3.01187 21.1037 3.68193C22.7214 4.35199 24.1913 5.33412 25.4294 6.57223C26.6675 7.81035 27.6496 9.2802 28.3197 10.8979C28.9898 12.5156 29.3346 14.2494 29.3346 16.0003C29.3346 19.5365 27.9299 22.9279 25.4294 25.4284C22.9289 27.9289 19.5375 29.3337 16.0013 29.3337C8.62797 29.3337 2.66797 23.3337 2.66797 16.0003C2.66797 12.4641 4.07273 9.07272 6.57321 6.57223C9.0737 4.07175 12.4651 2.66699 16.0013 2.66699ZM16.668 9.33366V16.3337L22.668 19.8937L21.668 21.5337L14.668 17.3337V9.33366H16.668Z" fill="#616FB3"/>
        </svg>
      ),
      title: "ROUND THE CLOCK SECURITY",
      description: "In order to protect persons and prevent damage or destruction to property, TransNepal provides round-the-clock security in the parking area. A batch of 16 security personnel, which include a security incharge and supervisor, remains deployed around the clock in the parking area.",
    },
    {
      icon: (
        <img
          src="/home/bank.png"
          alt="Banking"
          className="w-8 h-8 object-contain"
        />
      ),
      title: "BANKING",
      description: "In order to make transactions easy and secure, TransNepal provides banking facilities including all types of secured and unsecured banking facilities, loans, advances, credit facilities, and financial arrangements.",
    }
  ];

  

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Parallax effect
  useEffect(() => {
    const sectionEl = parallaxRef.current;
    if (!sectionEl) return;

    // Respect reduced motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    let latestY = window.scrollY;
    let rafId: number | null = null;

    const onScroll = () => {
      latestY = window.scrollY;
      // Kick the RAF loop if it's not already running
      if (rafId === null) rafId = requestAnimationFrame(update);
    };

    const update = () => {
      rafId = null; // allow next frame to be scheduled

      // Measure once per frame
      const rect = sectionEl.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // Only do work if the section is on screen
      const isVisible = rect.top < viewportH && rect.bottom > 0;
      if (!isVisible) return;

      // Progress of the viewport through the section (0..1, unclamped for smoothness)
      const progress = (viewportH - rect.top) / (viewportH + rect.height);

      // Tweak this for “depth” (0.2–0.6 feels nice)
      const PARALLAX_SPEED = 0.45;

      // Translate background element
      const bg = sectionEl.querySelector(".parallax-bg") as HTMLElement | null;
      if (bg) {
        const y = -(progress * rect.height) * PARALLAX_SPEED;
        // translate3d triggers GPU without changing layout/paint much
        bg.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
      }

      // If the user is still scrolling, schedule the next frame
      // (This keeps animation in sync with scroll velocity)
      if (Math.abs(window.scrollY - latestY) > 0.5) {
        rafId = requestAnimationFrame(update);
      }
    };

    // Passive scroll listener keeps main thread freer
    window.addEventListener("scroll", onScroll, { passive: true });

    // Run once to position correctly on load
    rafId = requestAnimationFrame(update);

    // Keep measurements fresh on resize/rotate
    const onResize = () => {
      // Re-run update next frame after resize
      if (rafId === null) rafId = requestAnimationFrame(update);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  // Memoize functions to prevent re-creation on every render
  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? heroSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === heroSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);
  
  // useEffect hook for the automatic carousel timer
  useEffect(() => {
    const slideInterval = setInterval(goToNext, 5000); // Change slide every 5 seconds
    
    // Clear the interval when the component unmounts or dependencies change
    return () => clearInterval(slideInterval);
  }, [goToNext]);

  const testimonials = [
    {
      name: "Mr Mukesh Rathi",
      position: "Managing Director, Rathi Group",
      image: "/home/testimonial.png",
      text: "TransNepal's solutions are user-friendly, innovative and low cost. We wish them success in all their endeavors",
    },
    {
      name: "Mr Suresh Kumar R",
      position: "CEO, ALl Cargo Logistic Limited",
      image: "/home/testimonial-2.png", // Add this image to public/home/
      text: "TransNepal's proactive efforts have helped use to maintain strong relationships with our customers. Thank you for your marvelous efforts.",
    },
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  
  // (The form state and handlers remain unchanged)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    details: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Banner */}
      <div className="relative w-full h-[633px] bg-white">
        <img 
          src={heroSlides[currentIndex].imagePath} 
          alt="Hero Banner" 
          className="w-full h-full object-cover"
        />

        {/* Navigation Arrows - only show on md and up */}
        <button
          onClick={goToPrevious}
          className="hidden md:flex absolute left-48 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full border border-white bg-white/5 backdrop-blur-sm items-center justify-center"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={goToNext}
          className="hidden md:flex absolute right-48 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full border border-white bg-white/5 backdrop-blur-sm items-center justify-center"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Mobile swipe support */}
        <div
          className="md:hidden absolute inset-0 z-10"
          onTouchStart={e => {
            const touchStartX = e.touches[0].clientX;
            let touchEndX = touchStartX;
            const handleTouchMove = (moveEvent: TouchEvent) => {
              touchEndX = moveEvent.touches[0].clientX;
            };
            const handleTouchEnd = () => {
              if (touchStartX - touchEndX > 50) goToNext();
              if (touchEndX - touchStartX > 50) goToPrevious();
              window.removeEventListener('touchmove', handleTouchMove);
              window.removeEventListener('touchend', handleTouchEnd);
            };
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleTouchEnd);
          }}
        />

        {/* Slide Indicators */}
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-20 h-1 rounded-full transition-colors ${
                currentIndex === index
                  ? 'bg-white'
                  : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Welcome Section */}
      <section className="w-full px-1 md:px-2 lg:px-3 space-y-3 md:space-y-4 pt-24 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-trans-blue text-center font-poppins">
          Welcome to TransNepal
        </h1>
        <p className="text-xs md:text-sm text-transnepal-text-gray leading-5 md:leading-6 font-poppins mx-auto max-w-7xl text-justify">
          TransNepal Freight Services Pvt. Ltd., was incorporated in the year 2002 under the Nepalese Company Act and started operation from 17th April 2002 by taking over the operation and management of the two ICDs' at Biratnagar and Bhairahawa on lease for a period of ten years from Nepal Intermodal Transport Development Board, a body constituted by the Government of Nepal to regulate terminals in Nepal. The lease agreement for both the ICDs' has been renewed for a further period of ten years up to 15th April 2022. Meanwhile, Biratnagar ICP comes into existence and TransNepal has awarded the contract of operation & management of Biratnagar ICP for the period of 5 years under International Competitive Bidding, and the operation commenced from 17th August 2020. Further in an International Competitive Bidding, TransNepal has been awarded the contract of operation and management of Kakarbhitta ICD for 5 years and the operation commenced from 13th Feb 2021. In the year 2022, the company has registered its presence in the northern part of Nepal by winning the bid of Tatopani ICD at the Nepal-China border in the name of TransSilk Terminals Pvt. Ltd.. Recently, in 2023, the company has signed a contract with NITDB and commenced operation of Chobhar ICD at Kirtipur, Kathmandu, in the name of TranNepal T.R.S. Logipark Pvt.Ltd.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-trans-blue text-center mb-16">
            Our Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Cargo Handling */}
            <div className="bg-trans-blue rounded-2xl overflow-hidden shadow-lg h-[450px]">
              <div className="relative h-64">
                <img 
                  src="/services/cargo-handling.png" 
                  alt="Cargo Handling" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 pt-8 text-white">
                <h3 className="text-center text-2xl font-semibold mb-3">Cargo Handling</h3>
                <p className="text-center text-m leading-normal">
                  Earlier cargoes were being totally handled manually. In the current situation where handling activities difficult
                </p>
              </div>
            </div>

            {/* Storage */}
            <div className="bg-trans-blue rounded-2xl overflow-hidden shadow-lg h-[450px]">
              <div className="relative h-64">
                <img 
                  src="/services/storage.png" 
                  alt="Storage" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 pt-8 text-white">
                <h3 className="text-center text-2xl font-semibold mb-3">Storage</h3>
                <p className="text-center text-m leading-normal">
                  Covered Warehouse of 55 x 25 meter with 1.2 meter high level platform in both Biratnagar and Bhairahawa.
                </p>
              </div>
            </div>

            {/* Weighment */}
            <div className="bg-trans-blue rounded-2xl overflow-hidden shadow-lg h-[450px]">
              <div className="relative h-64">
                <img 
                  src="/services/weighment.png" 
                  alt="Weighment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 pt-8 text-white">
                <h3 className="text-center text-2xl font-semibold mb-3">Weighment</h3>
                <p className="text-center text-m leading-normal">
                  Weighing activities were being carried out at remote locations making it costs ineffective and time consuming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl shadow-md bg-[#dbdeef] flex flex-col lg:flex-row items-center lg:items-start p-6 md:p-10 gap-6 lg:gap-8">
            {/* Image - left side, smaller and close to text */}
            <div className="flex-shrink-0 flex justify-center lg:justify-start w-full lg:w-auto">
              <img 
                src="/home/gtku.png" 
                alt="TransNepal Building" 
                className="w-64 md:w-64 lg:w-72 h-48 md:h-62 lg:h-96 rounded-2xl shadow-lg"
              />
            </div>
            {/* About Us Content - right side */}
            <div className="flex-1 flex flex-col justify-center space-y-4">
              <h2 className="text-l md:text-xl lg:text-3xl font-bold text-trans-blue text-left mb-2 font-poppins">
                About Us
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify">
                TransNepal Freight Services Pvt. Ltd., was incorporated in the year 2002 under the Nepalese Company Act and started operation from 17th April 2002 by taking over the operation and management of the two ICDs’ at Biratnagar and Bhairahawa on lease for a period of ten years from Nepal Intermodal Transport Development Board, a body constituted by the Government of Nepal to regulate terminals in Nepal. The lease agreement for both the ICDs’ has been renewed for a further period of ten years up to 15th April 2022. Meanwhile, Biratnagar ICP comes into existence and TransNepal has awarded the contract of operation & management of Biratnagar ICP for the period of 5 years under International Competitive Bidding, and the operation commenced from 17th August 2020. Further in an International Competitive Bidding, TransNepal has been awarded the contract of operation and management of Kakarbhitta ICD for 5 years and the operation commenced from 13th Feb 2021. In the year 2022, the company has registered its presence in the northern part of Nepal by winning the bid of Tatopani ICD at the Nepal-China border in the name of TransSilk Terminals Pvt. Ltd.. Recently, in 2023, the company has signed a contract with NITDB and commenced operation of Chobhar ICD at Kirtipur, Kathmandu, in the name of TranNepal T.R.S. Logipark Pvt.Ltd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
       <div className="w-full mb-24 relative overflow-hidden h-[300px] md:h-[400px] lg:h-[500px]">
        {/* Parallax background image */}
        <div
          className="w-full mb-24 relative overflow-hidden h-[300px] md:h-[400px] lg:h-[500px]"
          style={{
            backgroundImage: 'url(/home/parallexx.jpeg)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', 
          }}
        >
        {/* Highlight Texts */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="flex gap-8 md:gap-16 lg:gap-24">
            {/* Each stat */}
            <div className="flex flex-col items-center">
              <span className="text-white text-3xl md:text-6xl lg:text-7xl font-extrabold font-poppins leading-none">7</span>
              <span className="text-white text-base md:text-2xl lg:text-3xl font-semibold font-poppins mt-2">Offices</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white text-3xl md:text-6xl lg:text-7xl font-extrabold font-poppins leading-none">3</span>
              <span className="text-white text-base md:text-2xl lg:text-3xl font-semibold font-poppins mt-2">Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white text-3xl md:text-6xl lg:text-7xl font-extrabold font-poppins leading-none">35,000</span>
              <span className="text-white text-base md:text-2xl lg:text-3xl font-semibold font-poppins mt-2">Traffics</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white text-3xl md:text-6xl lg:text-7xl font-extrabold font-poppins leading-none">100</span>
              <span className="text-white text-base md:text-2xl lg:text-3xl font-semibold font-poppins mt-2">Staffs</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white text-3xl md:text-6xl lg:text-7xl font-extrabold font-poppins leading-none">19</span>
              <span className="text-white text-base md:text-2xl lg:text-3xl font-semibold font-poppins mt-2">Years</span>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 gap-y-16 justify-items-center mb-16">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col gap-6 max-w-[331px] items-left">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-transnepal-blue font-poppins flex-shrink-0">
                {feature.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 text-justify font-poppins leading-normal">
              {feature.description}
            </p>
          </div>
        ))}
      </section>


      {/* Testimonials Section */}
      <section className="w-full flex justify-center bg-[#dbdeef] py-8 md:py-14">
        <div className="max-w-7xl w-full px-2 md:px-4">
          <div className="text-center space-y-3 mb-12 md:mb-24">
            <h2 className="text-lg md:text-xl font-bold text-[#283B9A] font-poppins">TESTIMONIAL</h2>
            <p className="text-xs md:text-sm text-gray-600/68 max-w-3xl mx-auto font-poppins">
              We understand that in order to maximize customer satisfaction, the flow of your supply chain from product to information to finance needs to be responsive towards demand.
            </p>
          </div>
          {/* Card */}
          <div className="relative bg-white w-full max-w-4xl mx-auto rounded-lg flex flex-col md:flex-row items-center h-auto md:h-60 shadow-md transition-all duration-300">
            {/* Image on the left */}
            <div className="flex-shrink-0 flex items-center justify-center pt-6 md:pt-0 pl-0 md:pl-8">
              <img
                src={testimonials[testimonialIndex].image}
                alt={testimonials[testimonialIndex].name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-gray-200"
              />
            </div>
            {/* Content */}
            <div className="flex-1 px-4 md:pl-8 md:pr-8 space-y-2 relative text-center md:text-left">
              <h3 className="text-base md:text-lg font-bold text-[#283B9A] font-poppins">{testimonials[testimonialIndex].name}</h3>
              <p className="text-xs text-[#283B9A] font-poppins">{testimonials[testimonialIndex].position}</p>
              <div className="flex gap-1 justify-center md:justify-start mt-2 md:mt-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs md:text-sm text-gray-800 italic font-inter mt-4 md:mt-8 max-w-xl leading-6">
                "{testimonials[testimonialIndex].text}"
              </p>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                    testimonialIndex === idx ? "bg-black" : "bg-gray-400"
                  }`}
                  onClick={() => setTestimonialIndex(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Contact Form Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-3xl md:max-w-5xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Contact Info */}
              <div className="bg-gradient-to-br from-trans-blue-600 to-trans-blue flex flex-col justify-center items-center p-6 lg:p-10 text-white">
                <div className="flex items-center justify-center mb-6 mt-2">
                  <Send className="w-12 h-12" />
                </div>
                <h3 className="text-2xl lg:text-3xl text-center font-bold mb-4">Get a quote</h3>
                <p className="text-base text-white/80 text-center">
                  Fill out the form below and we'll provide you with a personalized quote tailored to your needs
                </p>
              </div>

              {/* Right Side - Form */}
              <div className="p-6 lg:p-10 bg-gray-100">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-trans-blue text-base font-medium mb-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 bg-white rounded-xl border-0 focus:ring-2 focus:ring-trans-blue text-gray-800 text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-trans-blue text-base font-medium mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 bg-white rounded-xl border-0 focus:ring-2 focus:ring-trans-blue text-gray-800 text-sm"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-trans-blue text-base font-medium mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 bg-white rounded-xl border-0 focus:ring-2 focus:ring-trans-blue text-gray-800 text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-trans-blue text-base font-medium mb-1">dd/mm/yy</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 bg-white rounded-xl border-0 focus:ring-2 focus:ring-trans-blue text-gray-800 text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-trans-blue text-base font-medium mb-1">Other Details</label>
                      <input
                        type="text"
                        name="details"
                        value={formData.details}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 bg-white rounded-xl border-0 focus:ring-2 focus:ring-trans-blue text-gray-800 text-sm"
                      />
                    </div>
                    <div className="flex items-end">
                      <button
                        type="submit"
                        className="w-full h-12 bg-trans-blue-700 text-white rounded-xl font-bold text-base hover:bg-trans-blue-800 transition-colors flex items-center justify-center gap-2"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
