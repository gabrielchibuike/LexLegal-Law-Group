// "use client";
// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const Testimonials = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const testimonials = [
//     [
//       {
//         id: 1,
//         name: "Douglas Quinn",
//         company: "Lexi Co.",
//         image:
//           "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
//         text: "I have no words to describe the excellent work of this law firm! You have managed to deal with the most critical legal issue in my life! I am very impressed with your quick response and the final result.",
//         date: "October 15, 2022",
//       },
//       {
//         id: 2,
//         name: "Alice Gordons",
//         company: "Tilmans & Partners",
//         image:
//           "https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=150&h=150&fit=crop&crop=face",
//         text: "From the very first (and note, free) initial consultation, I understood that Clarberg & Mutson law firm was the right place for me. The fantastic work of their highly experienced attorneys proved that. Thanks a lot!",
//         date: "August 28, 2022",
//       },
//       {
//         id: 3,
//         name: "Tomas Smith",
//         company: "Daily Review",
//         image:
//           "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
//         text: "Clarberg & Mutson is our family's choice for over 10 years. They have never let us down. They are highly trained to successfully deal with legal matters of any complexity. We are totally satisfied.",
//         date: "March 08, 2022",
//       },
//     ],
//     [
//       {
//         id: 4,
//         name: "Michael Johnson",
//         company: "Tech Solutions Inc.",
//         image:
//           "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
//         text: "Outstanding legal representation! The team went above and beyond to ensure our case was handled professionally. Their attention to detail and commitment to excellence is unmatched.",
//         date: "December 12, 2022",
//       },
//       {
//         id: 5,
//         name: "Sarah Wilson",
//         company: "Creative Agency",
//         image:
//           "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
//         text: "Professional, knowledgeable, and compassionate. They made a stressful situation manageable and achieved results beyond our expectations. Highly recommend their services!",
//         date: "November 22, 2022",
//       },
//       {
//         id: 6,
//         name: "David Brown",
//         company: "Brown Enterprises",
//         image:
//           "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
//         text: "Exceptional service from start to finish. The legal team demonstrated expertise, integrity, and dedication throughout our entire case. Couldn't be happier with the outcome.",
//         date: "October 30, 2022",
//       },
//     ],
//     [
//       {
//         id: 7,
//         name: "Emma Davis",
//         company: "Davis Consulting",
//         image:
//           "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
//         text: "The most reliable law firm I've ever worked with. Their strategic approach and clear communication made all the difference in achieving a favorable outcome for our business.",
//         date: "September 15, 2022",
//       },
//       {
//         id: 8,
//         name: "James Miller",
//         company: "Miller & Associates",
//         image:
//           "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=150&fit=crop&crop=face",
//         text: "Truly exceptional legal expertise combined with genuine care for their clients. They transformed a complex legal challenge into a success story. Forever grateful!",
//         date: "August 05, 2022",
//       },
//       {
//         id: 9,
//         name: "Lisa Anderson",
//         company: "Anderson Group",
//         image:
//           "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
//         text: "From consultation to resolution, every step was handled with professionalism and expertise. Their commitment to client satisfaction is evident in everything they do.",
//         date: "July 18, 2022",
//       },
//     ],
//   ];

//   const totalSlides = testimonials.length;

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   const goToSlide = (slideIndex: React.SetStateAction<number>) => {
//     setCurrentSlide(slideIndex);
//   };

//   // Auto-slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 10000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center p-5">
//       <div className="max-w-7xl w-full bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/20">
//         {/* Testimonials Container */}
//         <div className="relative overflow-hidden rounded-2xl">
//           <div
//             className="flex transition-transform duration-700 ease-in-out"
//             style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//           >
//             {testimonials.map((slideTestimonials, slideIndex) => (
//               <div key={slideIndex} className="w-full flex-shrink-0 px-5">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
//                   {slideTestimonials.map((testimonial) => (
//                     <div className="group bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 relative overflow-hidden">
//                       {/* Top gradient line */}
//                       <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-teal-400 to-blue-400"></div>

//                       <div className="text-center">
//                         <div className="relative mb-6">
//                           <img
//                             src={testimonial.image}
//                             alt={testimonial.name}
//                             className="w-20 h-20 rounded-full mx-auto border-4 border-yellow-400 object-cover transition-transform duration-300 group-hover:scale-110"
//                           />
//                         </div>

//                         <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                           {testimonial.name}
//                         </h3>

//                         <p className="text-orange-500 italic font-medium mb-5">
//                           {testimonial.company}
//                         </p>

//                         <div className="relative mb-5">
//                           <span className="absolute -top-2 -left-2 text-4xl text-gray-200 font-serif">
//                             "
//                           </span>
//                           <p className="text-gray-600 leading-relaxed text-sm px-2">
//                             {testimonial.text}
//                           </p>
//                         </div>

//                         <p className="text-gray-500 text-sm font-medium">
//                           {testimonial.date}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Controls */}
//         <div className="flex items-center justify-center gap-6 mt-8">
//           {/* Previous Button */}
//           <button
//             onClick={prevSlide}
//             className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
//             aria-label="Previous testimonials"
//           >
//             <ChevronLeft size={20} />
//           </button>

//           {/* Slide Indicators */}
//           <div className="flex gap-3">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentSlide
//                     ? "bg-primary scale-125 shadow-md"
//                     : "bg-white/50 hover:bg-white/70"
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* Next Button */}
//           <button
//             onClick={nextSlide}
//             className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 "
//             aria-label="Next testimonials"
//           >
//             <ChevronRight size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      text: "Outstanding service! The team exceeded our expectations and delivered exceptional results that transformed our business operations.",
      date: "March 2024",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Innovation Labs",
      text: "Professional, reliable, and incredibly talented. They brought our vision to life with remarkable attention to detail.",
      date: "February 2024",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Digital Solutions",
      text: "A game-changing partnership! Their expertise and dedication helped us achieve goals we thought were impossible.",
      date: "January 2024",
    },
    {
      id: 4,
      name: "David Thompson",
      company: "Future Dynamics",
      text: "Incredible work ethic and innovative solutions. They consistently deliver high-quality results on time and within budget.",
      date: "December 2023",
    },
    {
      id: 5,
      name: "Lisa Wang",
      company: "Creative Studio",
      text: "Their creative approach and technical skills are unmatched. Every project becomes a masterpiece in their hands.",
      date: "November 2023",
    },
    {
      id: 6,
      name: "Robert Martinez",
      company: "Global Enterprises",
      text: "Exceptional communication and flawless execution. They make complex projects seem effortless and enjoyable.",
      date: "October 2023",
    },
  ];

  // Group testimonials into slides for desktop (3 cards per slide)
  const getGroupedTestimonials = () => {
    const groups = [];
    for (let i = 0; i < testimonials.length; i += 3) {
      groups.push(testimonials.slice(i, i + 3));
    }
    return groups;
  };

  const groupedTestimonials = getGroupedTestimonials();
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    if (isMobile) {
      // Mobile: move to next single testimonial
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    } else {
      // Desktop: move to next group of 3
      setCurrentSlide((prev) => {
        const nextGroup = Math.floor(prev / 3) + 1;
        return nextGroup >= groupedTestimonials.length ? 0 : nextGroup * 3;
      });
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      // Mobile: move to previous single testimonial
      setCurrentSlide(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
    } else {
      // Desktop: move to previous group of 3
      setCurrentSlide((prev) => {
        const currentGroup = Math.floor(prev / 3);
        const prevGroup = currentGroup - 1;
        return prevGroup < 0
          ? (groupedTestimonials.length - 1) * 3
          : prevGroup * 3;
      });
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  type Testimonial = {
    id: number;
    name: string;
    company: string;
    text: string;
    date: string;
  };

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="group bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 border border-white/20 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-teal-400 to-blue-400"></div>

      <div className="text-center">
        {/* Profile Image */}
        <div className="relative mb-4 sm:mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto border-4 border-yellow-400 overflow-hidden transition-transform duration-300 group-hover:scale-110 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg sm:text-xl">
              {testimonial.name.charAt(0)}
            </span>
          </div>
        </div>

        {/* Name */}
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
          {testimonial.name}
        </h3>

        {/* Company */}
        <p className="text-orange-500 italic font-medium mb-4 sm:mb-5 text-sm sm:text-base">
          {testimonial.company}
        </p>

        {/* Quote */}
        <div className="relative mb-4 sm:mb-5">
          <span className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 text-2xl sm:text-4xl text-gray-200 font-serif">
            "
          </span>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base px-1 sm:px-2 min-h-[4rem] sm:min-h-[5rem] flex items-center">
            {testimonial.text}
          </p>
          <span className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 text-2xl sm:text-4xl text-gray-200 font-serif rotate-180">
            "
          </span>
        </div>

        {/* Date */}
        <p className="text-gray-500 text-xs sm:text-sm font-medium">
          {testimonial.date}
        </p>

        {/* Rating Stars */}
        <div className="flex justify-center mt-3 sm:mt-4 gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-3 sm:p-5 ">
      <div className="max-w-7xl w-full bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-2xl border border-white/20">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold  mb-2 sm:mb-4">
            What Our Clients Say
          </h2>
          <p className=" text-lg text-center">
            Hear from those who experienced excellence
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
          {/* Mobile View: Single card carousel */}
          <div className="block lg:hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop View: 3 cards grid with group sliding */}
          <div className="hidden lg:block">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${
                  Math.floor(currentSlide / 3) * 100
                }%)`,
              }}
            >
              {groupedTestimonials.map((group, groupIndex) => (
                <div key={groupIndex} className="w-full flex-shrink-0 px-2">
                  <div className="grid grid-cols-3 gap-6 lg:gap-8 py-5">
                    {group.map((testimonial) => (
                      <TestimonialCard
                        key={testimonial.id}
                        testimonial={testimonial}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between sm:justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-2 sm:gap-3 max-w-xs overflow-x-auto px-2">
            {isMobile
              ? // Mobile: Show individual indicators
                testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 flex-shrink-0 ${
                      index === currentSlide
                        ? "bg-primary scale-125 shadow-md"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))
              : // Desktop: Show group indicators
                groupedTestimonials.map((_, groupIndex) => (
                  <button
                    key={groupIndex}
                    onClick={() => goToSlide(groupIndex * 3)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 flex-shrink-0 ${
                      Math.floor(currentSlide / 3) === groupIndex
                        ? "bg-primary scale-125 shadow-md"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                    aria-label={`Go to group ${groupIndex + 1}`}
                  />
                ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 sm:mt-6">
          <div className="w-full bg-white/20 rounded-full h-1 sm:h-2">
            <div
              className="bg-primary h-1 sm:h-2 rounded-full transition-all duration-700 ease-in-out"
              style={{
                width: isMobile
                  ? `${((currentSlide + 1) / testimonials.length) * 100}%`
                  : `${
                      ((Math.floor(currentSlide / 3) + 1) /
                        groupedTestimonials.length) *
                      100
                    }%`,
              }}
            ></div>
          </div>
          <p className="text-center text-white/60 text-xs sm:text-sm mt-2">
            {isMobile
              ? `${currentSlide + 1} of ${testimonials.length}`
              : `${Math.floor(currentSlide / 3) + 1} of ${
                  groupedTestimonials.length
                }`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
