"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const fabrics = [
   
    {name: "Lycra Blend", image: "/assets/products/Lycra-blend.png",},
    {name: "Bamboo Fabric", image: "/assets/products/Bamboo-fabric.png"},
    {name: "Polyamide Fabric", image: "/assets/products/Polyamide-fabric.png"},
    {name: "Ivory Silk", image: "/assets/products/Ivory-Silk.png"},
    {name: "Italian Lyocell", image: "/assets/products/Italian-Lyocell.png"},
    {name: "Wool Blend",image: "/assets/products/Polyamide-fabric.png",},
    {name: "Cotton Spandex", image: "/assets/products/Cotton-Spandex.png"},
    {name: "3 Yards Solid", image: "/assets/products/3yards-Solid.png"},
    {name: "Power Mesh", image: "/assets/products/Power-Mesh.png"},
];

const Trimsandfinishes = [

    {name: "Hook and eye", image: "/assets/products/hook-eye.png",},
    {name: "Bows", image: "/assets/products/Bows.png"},
    {name: "Ring sliders", image: "/assets/products/Ring-Sliders.png"},
    {name: "img4", image: "/assets/products/img4.png"},
    {name: "img5", image: "/assets/products/img5.png"},
    {name: "img6",image: "/assets/products/img6.png",},

];

const LingerieAccessories = [
   
    {name: "Stick on bras", image: "/assets/products/Stick-bras.png",},
    {name: "Nipple pasties", image: "/assets/products/Nipple-pasties.png"},
    {name: "Disposable bras", image: "/assets/products/Disposable-bras.png"},
    {name: "imgs4", image: "/assets/products/imgs4.png"},
    {name: "imgs5", image: "/assets/products/imgs5.png"},
    {name: "imgs6",image: "/assets/products/imgs6.png",},

];

const Menswear = [
   
    {name: "Men’s Brief", image: "/assets/products/Mens-Brief.png",},
    {name: "Mens vests", image: "/assets/products/Mens-vests.png"},
    {name: "Mens boxers", image: "/assets/products/Mens-boxers.png"},
    {name: "Men’s Brief", image: "/assets/products/Mens-Brief.png",},
    {name: "Mens vests", image: "/assets/products/Mens-vests.png"},
    {name: "Mens boxers", image: "/assets/products/Mens-boxers.png"},
    


];

const Intimatewear = [

    {name: "Bras", image: "/assets/products/Bras.png",},
    {name: "Panties", image: "/assets/products/Panties.png"},
    {name: "Lingerie sets", image: "/assets/products/Lingerie-sets.png"},
    {name: "Bras", image: "/assets/products/Bras.png",},
    {name: "Panties", image: "/assets/products/Panties.png"},
    {name: "Lingerie sets", image: "/assets/products/Lingerie-sets.png"},
   
    

];

const Loungewear = [
   
    {name: "Nightwear sets", image: "/assets/products/Nightwear-sets.png",},
    {name: "Pajamas", image: "/assets/products/Pajamas.png"},
    {name: "Polyamide fabric", image: "/assets/products/Polyamide.png"},
    {name: "Nightwear sets", image: "/assets/products/Nightwear-sets.png",},
    {name: "Pajamas", image: "/assets/products/Pajamas.png"},
    {name: "Polyamide fabric", image: "/assets/products/Polyamide.png"},

];

const Shapewear = [
   
    {name: "Waist clinchers", image: "/assets/products/Waist-clinchers.png",},
    {name: "Bodysuits", image: "/assets/products/Bodysuits.png"},
    {name: "Panty-shapers", image: "/assets/products/Panty-shapers.png"},
    {name: "Waist clinchers", image: "/assets/products/Waist-clinchers.png",},
    {name: "Bodysuits", image: "/assets/products/Bodysuits.png"},
    {name: "Panty-shapers", image: "/assets/products/Panty-shapers.png"},

];

const Athleisurewear = [
   
    {name: "Sports sets", image: "/assets/products/Sports-sets.png",},
    {name: "Leggings/ Yoga pants", image: "/assets/products/Leggings-Yoga-pants.png"},
    {name: "Sportsbra", image: "/assets/products/Sportsbra.png"},
    {name: "Sports sets", image: "/assets/products/Sports-sets.png",},
    {name: "Leggings/ Yoga pants", image: "/assets/products/Leggings-Yoga-pants.png"},
    {name: "Sportsbra", image: "/assets/products/Sportsbra.png"},
];

const Thermalwear  = [
   
    {name: "Thermal leggings", image: "/assets/products/Thermal-leggings.png",},
    {name: "Thermal-vests", image: "/assets/products/Thermal-vests.png"},
    {name: "Bodywarmers", image: "/assets/products/Bodywarmers.png"},
    {name: "Thermal leggings", image: "/assets/products/Thermal-leggings.png",},
    {name: "Thermal-vests", image: "/assets/products/Thermal-vests.png"},
    {name: "Bodywarmers", image: "/assets/products/Bodywarmers.png"},
    
];

export default function FabricsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [activeIndex3, setActiveIndex3] = useState(0);
  const [activeIndex4, setActiveIndex4] = useState(0);
  const [activeIndex5, setActiveIndex5] = useState(0);
  const [activeIndex6, setActiveIndex6] = useState(0);

  

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
       <div className="max-w-[1480px] mx-auto">
        {/* First Slider - Fabrics */}
        <h2 className="text-3xl md:text-5xl font-Grown text-center text-[#1F3A93] mb-8 md:mb-12">
          Fabrics
        </h2>
        <p className="text-lg text-center lg:mt-[-25] font-Montserrat font-extrabold text-[#000000] max-w-3xl mx-auto mb-8 md:mb-12 px-4">
          From concept to creation, we provide all kinds of fabrics required for your production needs sourced with precision and reliability.
        </p>

        <div className="relative px-7 md:px-12 lg:px-22">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1.2}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 25
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1480: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
            navigation={{
              nextEl: '.swiper-button-next-1',
              prevEl: '.swiper-button-prev-1',
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full"
          >
            {fabrics.map((fabric, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center p-4 h-full"
                >
                  <div className="relative w-full h-56 gap-5 sm:h-64 md:h-72 lg:h-80 overflow-hidden mb-3 md:mb-4">
                    <Image
                      src={fabric.image}
                      alt={fabric.name}
                      fill
                      
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-Montserrat font-medium text-[#000000] mb-2 text-center">
                    {fabric.name}
                  </h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="text-center mt-8 md:mt-12 lg:mt-16">
            <Link 
              href="/connect" 
              className="inline-block px-4 py-2 md:px-6 md:py-3 font-Montserrat bg-[#D9D9D9] text-[#000000] rounded-2xl hover:bg-gray-200 transition-colors text-sm md:text-base"
            >
              Learn More
            </Link>
          </div>

          {/* Navigation Arrows */}
          <div className="swiper-button-next-1 after:hidden absolute left-1 md:left-6 top-1/2 -translate-y-20 z-10 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#00000040] rounded-full flex items-center justify-center shadow-md transition-all hover:bg-[#00000060]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </div>
          <div className="swiper-button-prev-1 after:hidden absolute right-1 md:right-6 top-1/2 -translate-y-20 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#00000040] rounded-full flex items-center justify-center shadow-md transition-all hover:bg-[#00000060]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>

        {/* Second Slider - Collection */}
        <h2 className="text-3xl md:text-5xl font-Grown text-center text-[#1F3A93] mb-8 md:mb-12 mt-20">
          Trims and finishes
        </h2>
        <p className="text-lg text-center lg:mt-[-25] font-Montserrat font-extrabold text-[#000000] max-w-3xl mx-auto mb-8 md:mb-12 px-4">
          From detailing to durability, we offer a complete range of trims and finishes—sourced with care to enhance both function and aesthetics in every garment
        </p>

        <div className="relative px-8 md:px-12 lg:px-22">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1.2}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 25
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1480: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
            navigation={{
              nextEl: '.swiper-button-next-2',
              prevEl: '.swiper-button-prev-2',
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex2(swiper.realIndex)}
            className="w-full"
          >
            {Trimsandfinishes.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center p-4 h-full"
                >
                  <div className="relative w-full h-56 gap-5 sm:h-64 md:h-72 lg:h-80 overflow-hidden mb-3 md:mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-Montserrat font-medium text-[#000000] mb-2 text-center">
                    {item.name}
                  </h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="text-center mt-8 md:mt-12 lg:mt-16">
            <Link 
              href="/connect" 
              className="inline-block px-4 py-2 md:px-6 md:py-3 font-Montserrat bg-[#D9D9D9] text-[#000000] rounded-2xl hover:bg-gray-200 transition-colors text-sm md:text-base"
            >
              Learn More
            </Link>
          </div>

          {/* Navigation Arrows */}
          <div className="swiper-button-next-1 after:hidden absolute left-1 md:left-6 top-1/2 -translate-y-20 z-10 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#00000040] rounded-full flex items-center justify-center shadow-md transition-all hover:bg-[#00000060]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </div>
          <div className="swiper-button-prev-1 after:hidden absolute right-1 md:right-6 top-1/2 -translate-y-20 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#00000040] rounded-full flex items-center justify-center shadow-md transition-all hover:bg-[#00000060]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>

        {/* Third Slider - Patterns */}
        <h2 className="text-3xl md:text-5xl font-Grown text-center text-[#1F3A93] mb-8 md:mb-12 mt-20">
          Lingerie Accessories
        </h2>
        <p className="text-lg text-center lg:mt-[-25] font-Montserrat font-extrabold text-[#000000] max-w-3xl mx-auto mb-8 md:mb-12 px-4">
          Subtle yet essential, our lingerie accessories are carefully selected to enhance comfort, support, and confidence in every intimate piece
        </p>

        <div className="relative px-8 md:px-12 lg:px-22">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1.2}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 25
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1480: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
            navigation={{
              nextEl: '.swiper-button-next-3',
              prevEl: '.swiper-button-prev-3',
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex3(swiper.realIndex)}
            className="w-full"
          >
            {LingerieAccessories.map((pattern, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center p-4 h-full"
                >
                  <div className="relative w-full h-56 gap-5 sm:h-64 md:h-72 lg:h-80 overflow-hidden mb-3 md:mb-4">
                    <Image
                      src={pattern.image}
                      alt={pattern.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-Montserrat font-medium text-[#000000] mb-2 text-center">
                    {pattern.name}
                  </h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="text-center mt-8 md:mt-12 lg:mt-16">
            <Link 
              href="/connect" 
              className="inline-block px-4 py-2 md:px-6 md:py-3 font-Montserrat bg-[#D9D9D9] text-[#000000] rounded-2xl hover:bg-gray-200 transition-colors text-sm md:text-base"
            >
              Learn More
            </Link>
          </div>

          {/* Navigation Arrows */}
          <div className="swiper-button-next-1 after:hidden absolute left-1 md:left-6 top-1/2 -translate-y-20 z-10 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#00000040] rounded-full flex items-center justify-center shadow-md transition-all hover:bg-[#00000060]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </div>
          <div className="swiper-button-prev-1 after:hidden absolute right-1 md:right-6 top-1/2 -translate-y-20 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#00000040] rounded-full flex items-center justify-center shadow-md transition-all hover:bg-[#00000060]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>

        {/* four Slider - Patterns */}
        <h2 className="text-3xl md:text-5xl font-Grown text-center text-[#1F3A93] mb-8 md:mb-12 mt-20">
          Menswear
        </h2>
        <p className="text-lg text-center lg:mt-[-25] font-Montserrat font-extrabold text-[#000000] max-w-3xl mx-auto mb-8 md:mb-12 px-4">
        Designed to move with you, our men's essentials combine fit, function, and a focus on all-day ease
        </p>

        <div className="relative px-8 md:px-12 lg:px-22">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1.2}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 25
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40
              },
              1280: {
                slidesPerView: 2,
                spaceBetween: 40
              },
              1480: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex4(swiper.realIndex)}
            className="w-full"
          >
            {Menswear.map((pattern, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center p-4 h-full"
                >
                  <div className="relative w-full h-56 gap-5 sm:h-64 md:h-72 lg:h-80 overflow-hidden mb-3 md:mb-4">
                    <Image
                      src={pattern.image}
                      alt={pattern.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-Montserrat font-medium text-[#000000] mb-2 text-center">
                    {pattern.name}
                  </h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="text-center mt-8 md:mt-12 lg:mt-16">
            <Link 
              href="/connect" 
              className="inline-block px-4 py-2 md:px-6 md:py-3 font-Montserrat bg-[#D9D9D9] text-[#000000] rounded-2xl hover:bg-gray-200 transition-colors text-sm md:text-base"
            >
              Learn More
            </Link>
          </div>  
      </div>
      {/* five Slider - Patterns */}
        <h2 className="text-3xl md:text-5xl font-Grown text-center text-[#1F3A93] mb-8 md:mb-12 mt-20">
          Intimate wear
        </h2>
        <p className="text-lg text-center lg:mt-[-25] font-Montserrat font-extrabold text-[#000000] max-w-3xl mx-auto mb-8 md:mb-12 px-4">
          From fabric to fit, our intimate wear can be custom-designed to align perfectly with your vision and requirements
        </p>

        <div className="relative px-8 md:px-12 lg:px-22">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1.2}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 25
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1480: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
            navigation={{
              nextEl: '.swiper-button-next-3',
              prevEl: '.swiper-button-prev-3',
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex5(swiper.realIndex)}
            className="w-full"
          >
            {Intimatewear.map((pattern, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center p-4 h-full"
                >
                  <div className="relative w-full h-56 gap-5 sm:h-64 md:h-72 lg:h-80 overflow-hidden mb-3 md:mb-4">
                    <Image
                      src={pattern.image}
                      alt={pattern.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-Montserrat font-medium text-[#000000] mb-2 text-center">
                    {pattern.name}
                  </h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="text-center mt-8 md:mt-12 lg:mt-16">
            <Link 
              href="/connect" 
              className="inline-block px-4 py-2 md:px-6 md:py-3 font-Montserrat bg-[#D9D9D9] text-[#000000] rounded-2xl hover:bg-gray-200 transition-colors text-sm md:text-base"
            >
              Learn More
            </Link>
          </div> 
        </div>
        {/* six Slider - Patterns */}
        <h2 className="text-3xl md:text-5xl font-Grown text-center text-[#1F3A93] mb-8 md:mb-12 mt-20">
          Loungewear
        </h2>
        <p className="text-lg text-center lg:mt-[-25] font-Montserrat font-extrabold text-[#000000] max-w-3xl mx-auto mb-8 md:mb-12 px-4">
          Whether you're after laid-back luxury or functional comfort, our loungewear can be custom-crafted to reflect your exact vision
        </p>

        <div className="relative px-1 md:px-12 lg:px-22">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1.2}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 25
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1480: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
            navigation={{
              nextEl: '.swiper-button-next-3',
              prevEl: '.swiper-button-prev-3',
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex6(swiper.realIndex)}
            className="w-full"
          >
            {Loungewear.map((pattern, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center p-4 h-full"
                >
                  <div className="relative w-full h-56 gap-5 sm:h-64 md:h-72 lg:h-80 overflow-hidden mb-3 md:mb-4">
                    <Image
                      src={pattern.image}
                      alt={pattern.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-Montserrat font-medium text-[#000000] mb-2 text-center">
                    {pattern.name}
                  </h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="text-center mt-8 md:mt-12 lg:mt-16">
            <Link 
              href="/connect" 
              className="inline-block px-4 py-2 md:px-6 md:py-3 font-Montserrat bg-[#D9D9D9] text-[#000000] rounded-2xl hover:bg-gray-200 transition-colors text-sm md:text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
        {/* seven Slider - Patterns */}
        <h2 className="text-3xl md:text-5xl font-Grown text-center text-[#1F3A93] mb-8 md:mb-12 mt-20">
          Shapewear
        </h2>
        <p className="text-lg text-center lg:mt-[-25] font-Montserrat font-extrabold text-[#000000] max-w-3xl mx-auto mb-8 md:mb-12 px-4">
          Designed to smooth, shape, and support, our shapewear can be custom-crafted to meet your specific fit, function, and fabric requirements.
        </p>

        <div className="relative px-1 md:px-12 lg:px-22">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1.2}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 25
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1480: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
            navigation={{
              nextEl: '.swiper-button-next-3',
              prevEl: '.swiper-button-prev-3',
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex6(swiper.realIndex)}
            className="w-full"
          >
            {Shapewear.map((pattern, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center p-4 h-full"
                >
                  <div className="relative w-full h-56 gap-5 sm:h-64 md:h-72 lg:h-80 overflow-hidden mb-3 md:mb-4">
                    <Image
                      src={pattern.image}
                      alt={pattern.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-Montserrat font-medium text-[#000000] mb-2 text-center">
                    {pattern.name}
                  </h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="text-center mt-8 md:mt-12 lg:mt-16">
            <Link 
              href="/connect" 
              className="inline-block px-4 py-2 md:px-6 md:py-3 font-Montserrat bg-[#D9D9D9] text-[#000000] rounded-2xl hover:bg-gray-200 transition-colors text-sm md:text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
        {/* eight Slider - Patterns */}
        <h2 className="text-3xl md:text-5xl font-Grown text-center text-[#1F3A93] mb-8 md:mb-12 mt-20">
          Athleisure wear
        </h2>
        <p className="text-lg text-center lg:mt-[-25] font-Montserrat font-extrabold text-[#000000] max-w-3xl mx-auto mb-8 md:mb-12 px-4">
           Our athleisure wear merges function with fashion, offering custom design options to suit your lifestyle and brand identity.
        </p>

        <div className="relative px-1 md:px-12 lg:px-22">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1.2}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 25
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1480: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
            navigation={{
              nextEl: '.swiper-button-next-3',
              prevEl: '.swiper-button-prev-3',
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex6(swiper.realIndex)}
            className="w-full"
          >
            {Athleisurewear.map((pattern, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center p-4 h-full"
                >
                  <div className="relative w-full h-56 gap-5 sm:h-64 md:h-72 lg:h-80 overflow-hidden mb-3 md:mb-4">
                    <Image
                      src={pattern.image}
                      alt={pattern.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-Montserrat font-medium text-[#000000] mb-2 text-center">
                    {pattern.name}
                  </h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="text-center mt-8 md:mt-12 lg:mt-16">
            <Link 
              href="/connect" 
              className="inline-block px-4 py-2 md:px-6 md:py-3 font-Montserrat bg-[#D9D9D9] text-[#000000] rounded-2xl hover:bg-gray-200 transition-colors text-sm md:text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
         {/* eight Slider - Patterns */}
        <h2 className="text-3xl md:text-5xl font-Grown text-center text-[#1F3A93] mb-8 md:mb-12 mt-20">
          Thermal wear 
        </h2>
        <p className="text-lg text-center lg:mt-[-25] font-Montserrat font-extrabold text-[#000000] max-w-3xl mx-auto mb-8 md:mb-12 px-4">
           Crafted to retain heat without bulk, our thermal wear is fully customizable to support your specific product vision and use-case demands 
        </p>

        <div className="relative px-1 md:px-12 lg:px-22">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1.2}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 25
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1480: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
            navigation={{
              nextEl: '.swiper-button-next-3',
              prevEl: '.swiper-button-prev-3',
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex6(swiper.realIndex)}
            className="w-full"
          >
            {Thermalwear.map((pattern, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center p-4 h-full"
                >
                  <div className="relative w-full h-56 gap-5 sm:h-64 md:h-72 lg:h-80 overflow-hidden mb-3 md:mb-4">
                    <Image
                      src={pattern.image}
                      alt={pattern.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-Montserrat font-medium text-[#000000] mb-2 text-center">
                    {pattern.name}
                  </h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="text-center mt-8 md:mt-12 lg:mt-16">
            <Link 
              href="/connect" 
              className="inline-block px-4 py-2 md:px-6 md:py-3 font-Montserrat bg-[#D9D9D9] text-[#000000] rounded-2xl hover:bg-gray-200 transition-colors text-sm md:text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
    </div>  
    </section>

  );
}