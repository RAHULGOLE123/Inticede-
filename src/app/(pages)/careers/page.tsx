"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const IntimateApparel = [
  { image: "/assets/careers/carousel3.png" },
  { image: "/assets/careers/carousel4.png" },
  { image: "/assets/careers/carousel5.png" },
  { image: "/assets/careers/carousel6.png" },
  { image: "/assets/careers/carousel1.png" },
  { image: "/assets/careers/carousel2.png" },
  { image: "/assets/careers/carousel1.png" },
  { image: "/assets/careers/carousel2.png" },
];

const advantages = [
  {
    title: "Creative culture",
    description: "We foster an environment where fresh thinking thrives. At Inticede, every voice is valued, and your ideas shape real products.",
    icon: "/assets/creative-culture.png",
    active: true,
  },
  {
    title: "Room to Grow",
    description: "We're a growing company, and we want you to grow with us. From mentorship to responsibility, we support your career trajectory.",
    icon: "/assets/Room-Grow.png",
  },
  {
    title: "Global Exposure",
    description: "Collaborate with international brands and suppliers across India and Asia. Learn, adapt, and make your mark on a global stage.",
    icon: "/assets/Global-Exposure.png",
  },
  {
    title: "Purpose Driven",
    description: "We are committed to ethics and planet-first values. Build meaningful solutions that make a difference.",
    icon: "/assets/Global-Exposure.png",
  },
];

export default function CareersPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollTriggerRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const scrollTrack = scrollTrackRef.current;
    if (!container || !scrollTrack) return;

    scrollTriggerRef.current.forEach(st => st.kill());
    scrollTriggerRef.current = [];

    const initialOffset = window.innerWidth * 0.6;
    const totalScroll = scrollTrack.scrollWidth - window.innerWidth + initialOffset + 150;

    const ctx = gsap.context(() => {
      const animation = gsap.fromTo(
        scrollTrack,
        { x: initialOffset },
        {
          x: -totalScroll + initialOffset,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${scrollTrack.scrollWidth + 150}`,
            scrub: 1.5,
            pin: true,
            anticipatePin: 2,
            invalidateOnRefresh: true,
          }
        }
      );

      advantages.forEach((_, i) => {
        const card = cardsRef.current[i];
        if (!card) return;

        gsap.set(card, {
          backgroundColor: "#A8A8A8",
          color: "#1F3A93"
        });

        const st = ScrollTrigger.create({
          trigger: card,
          start: "left 80%",
          end: "left 20%",
          scrub: 1,
          containerAnimation: animation,
          onEnter: () => {
            gsap.to(card, {
              backgroundColor: "#D9D9D9",
              color: "#1F3A93",
              duration: 0.5
            });
          },
          onLeaveBack: () => {
            gsap.to(card, {
              backgroundColor: "#A8A8A8",
              color: "#1F3A93",
              duration: 0.5
            });
          },
        });

        scrollTriggerRef.current.push(st);
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* Slider Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-[1480px] mx-auto text-center">
          <p className="text-sm font-Montserrat text-[#484948] mb-1">Our careers</p>
          <h2 className="text-3xl md:text-5xl font-Grown text-[#1F3A93] mb-2 leading-11">
            Shape the Future of Intimate<br />Apparel
          </h2>
          <button className="mt-3 text-sm bg-[#D9D9D9] text-[#484948] font-Montserrat rounded-full px-4 py-1 hover:bg-gray-300 transition">
            Join us today
          </button>
        </div>

        <div className="mt-12 relative max-w-full mx-auto overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={9}
            slidesPerView={4}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              360: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2.2, spaceBetween: 25 },
              1024: { slidesPerView: 4.5, spaceBetween: 30 },
            }}
          >
            {IntimateApparel.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden shadow-md group"
                >
                  <div className="relative w-full h-90 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`Careers ${index + 1}`}
                      fill
                      className="object-cover brightness-83 group-hover:brightness-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                      quality={100}
                    />
                    <div className="absolute bg-[#EDEDED] mix-blend-multiply group-hover:opacity-0 transition-all duration-300"></div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Advantages Section with Horizontal Scroll */}
<section ref={containerRef} className="relative h-[120vh] bg-white overflow-hidden">
  {/* Sticky Heading */}
  <div className="sticky top-0 z-10 ml-3 bg-white pt-12 px-4 md:px-16">
    <p className="text-sm font-Montserrat text-[#484948] mb-1">Our advantages</p>
    <h2 className="text-3xl md:text-5xl font-Grown text-[#1F3A93]">
      Why work with us?
    </h2>
  </div>

  {/* Scrollable Card Track */}
  <div
    ref={scrollTrackRef}
    className="flex w-max gap-6 py-20 mt-[-55] pl-[120px] pr-[40px] min-h-[300px]"
  >
    {advantages.map((item, i) => {
      const [isHovered, setIsHovered] = useState(false);

      return (
        <motion.div
          key={i}
          ref={(el) => {
            if (el) cardsRef.current[i] = el;
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            backgroundColor: isHovered ? "#1F3A93" : "#E3E3E3",
          }}
          className={`group relative flex-shrink-0 w-[260px] min-h-[260px] p-6 text-center rounded-md transition-all duration-300 ${
            item.active ? "border-white" : "border-transparent"
          }`}
        >
          {item.active && (
            <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 h-[20px] w-[1px] bg-white before:content-[''] before:w-[40px] before:border-t-2 before:border-dotted before:border-white before:absolute before:top-[-10px] before:left-[-40px]" />
          )}
          <div className="flex justify-center items-center mb-4 h-12">
            <div className="relative w-12 h-12 mb-4 mx-auto">
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className={`object-contain transition-all duration-300 ${
                  isHovered ? 'brightness-0 invert' : ''
                }`}
              />
            </div>
          </div>
          <h3
            className={`text-lg font-Grown mb-2 transition-colors duration-300 ${
              isHovered ? "text-white" : "text-[#1F3A93]"
            }`}
          >
            {item.title}
          </h3>
          <div className="h-[90px] font-Montserrat flex items-center justify-center">
            <p
              className={`text-sm w-[230px] mx-auto transition-colors duration-300 ${
                isHovered ? "text-white" : "text-[#484948]"
              }`}
            >
              {item.description}
            </p>
          </div>
        </motion.div>
      );
    })}
  </div>

        {/* Bottom Content Box */}
        <div className="bg-[#E5E5E5] rounded-[30px] lg:rounded-[55px] mx-4 lg:mx-10 px-4 md:px-6 lg:px-10 py-8 md:py-10 max-w-7xl text-center mt-[35px] lg:mt-[-5px] mb-10 lg:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1F3A93] leading-tight font-serif">
            Lead the Change in Comfortwear <br className="hidden md:block" />
            Innovation
          </h2>
          <p className="mt-2 md:mt-4 max-w-[85%] md:max-w-[55ch] mx-auto font-Montserrat text-gray-700 text-xs md:text-sm lg:text-base leading-snug">
            At Inticede, we don't follow trends we set them. Join a team where your
            creativity, curiosity, and craftsmanship drive products that redefine
            fit, function, and fashion across global markets.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full min-h-screen bg-white flex flex-col lg:flex-row items-start justify-between px-4 md:px-8 lg:px-24 py-12 md:py-16 lg:py-20 gap-6 md:gap-10">
        <div className="w-full lg:w-1/2">
          <h2 className="text-[40px] md:text-5xl lg:text-6xl xl:text-5xl lg:mt-[-35] text-[#1F3A93] font-Grown leading-tight mb-4 md:mb-6">
            GET IN TOUCH <br /> WITH US
          </h2>
          <p className="text-[#484948] text-sm md:text-base lg:mt-35 lg:text-lg font-Montserrat max-w-md">
            Fill out the form and our Team <br />will contact you as soon as<br /> possible
          </p>
        </div>

        <form className="w-full max-w-5xl bg-[#E0E0E0] rounded-xl lg:rounded-3xl mt-4 lg:mt-10 mx-auto p-4 md:p-6 lg:p-8 xl:p-12 space-y-6 md:space-y-8 lg:space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <div className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-[#1F3A93] font-Montserrat text-sm md:text-base mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Type your name"
                  className="w-full px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base font-Montserrat rounded-full bg-[#A8A8A8] text-white placeholder-white"
                />
              </div>

              <div>
                <label className="block text-[#1F3A93] font-Montserrat text-sm md:text-base mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base font-Montserrat rounded-full bg-[#A8A8A8] text-white placeholder-white"
                />
              </div>

              <div>
                <label className="block text-[#1F3A93] font-Montserrat text-sm md:text-base mb-1">
                  Why should we hire you?
                </label>
                <textarea
                  rows={4}
                  placeholder="In 500 words"
                  className="w-full p-3 md:p-4 text-sm md:text-base font-Montserrat rounded-lg md:rounded-xl bg-[#A8A8A8] text-white placeholder-white resize-none"
                ></textarea>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-[#1F3A93] font-Montserrat text-sm md:text-base mb-1">Phone no.</label>
                <input
                  type="text"
                  placeholder="Your phone number"
                  className="w-full px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base font-Montserrat rounded-full bg-[#A8A8A8] text-white placeholder-white"
                />
              </div>

              <div>
                <label className="block text-[#1F3A93] font-Montserrat text-sm md:text-base mb-1">Expertise</label>
                <input
                  type="text"
                  placeholder="Your area of expertise"
                  className="w-full px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base font-Montserrat rounded-full bg-[#A8A8A8] text-white placeholder-white"
                />
              </div>

              <div>
                <label className="block text-[#1F3A93] font-Montserrat text-sm md:text-base mb-1">Resume</label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume-upload"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".pdf,.doc,.docx"
                  />
                  <div className="w-full p-3 md:p-4 text-sm md:text-base font-Montserrat rounded-lg md:rounded-xl bg-[#A8A8A8] text-white min-h-[120px] md:min-h-[150px] flex items-center justify-center border border-white/30">
                    <label htmlFor="resume-upload" className="text-center cursor-pointer">
                      <div className="flex flex-col items-center">
                        <svg className="w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                        </svg>
                        <span className="text-xs md:text-sm">Attach your resume</span>
                        <span className="text-[10px] md:text-xs mt-1">PDF, DOC, DOCX (Max 15MB)</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center mt-4 md:mt-6 lg:mt-8">
            <button
              type="submit"
              className="relative overflow-hidden bg-black text-white font-Montserrat font-semibold text-sm md:text-base px-6 md:px-8 py-1.5 md:py-2 rounded-full transition-all duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Submit</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#8C8C8B] to-[#8C8C8B] opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            </button>
          </div>
        </form>
      </section>
    </>
  );
}