// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import CarouselItem from './Slider';

// const Carousel = (props) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);
//   const intervalRef = useRef(null);
//   const { posts } = props;
//   const items = posts;

//   const nextSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
//   };

//   const prevSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
//   };

//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (touchStart - touchEnd > 50) {
//       nextSlide();
//     }
//     if (touchStart - touchEnd < -50) {
//       prevSlide();
//     }
//   };

//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   return (
//     <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
//       <div
//         className="flex transition-transform duration-300 ease-in-out"
//         style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         {items.map((item, index) => (
//           <CarouselItem key={item.id} item={item} isActive={index === activeIndex} />
//         ))}
//       </div>
//       <button
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         onClick={prevSlide}
//         aria-label="Previous slide"
//       >
//         <FaChevronLeft className="text-black text-2xl" />
//       </button>
//       <button
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         onClick={nextSlide}
//         aria-label="Next slide"
//       >
//         <FaChevronRight className="text-black text-2xl" />
//       </button>
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {items.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full focus:outline-none ${index === activeIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
//             onClick={() => setActiveIndex(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
