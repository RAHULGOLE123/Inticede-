"use client";

import Image from "next/image";
import { motion, useAnimation, useInView, useMotionValue, useSpring, useTransform,} from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";

// Hero Section
const HeroSection = () => {
  return (
    <div className="relative w-full min-w-[362px] max-w-[1700px] mx-auto h-screen overflow-hidden">
      <Image
        src="/assets/clients-section1.png"
        alt="Background"
        fill
        className="object-contains"
        priority
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-[#D9D9D9]/70 px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 rounded-sm text-center w-[90%] xs:w-[85%] sm:w-[80%] md:max-w-2xl"
        >
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#1f3a93] leading-snug sm:leading-9 font-Grown">
            Trusted by Industry Leaders. <br />
            Built for Scalable Growth
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

// List of image URLs
const images = [
  "/assets/clients/crousal1.png",
  "/assets/clients/crousal2.png",
  "/assets/clients/crousal3.png",
  "/assets/clients/crousal4.png",
];

// ✅ Counter Component
type CounterProps = {
  target: number;
  suffix?: string;
  prefix?: string;
};

const Counter = ({ target, suffix = "+", prefix }: CounterProps) => {
  const ref = useRef(null);
  // Remove once: true to trigger animation every time section comes into view
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px" });

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { 
    duration: 2000,
    bounce: 0
  });
  const rounded = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(0); // Reset to 0 first
      motionValue.set(target);
    } else {
      motionValue.set(0); // Reset when out of view
    }
  }, [isInView, motionValue, target]);

  return (
    <span ref={ref}>
      {prefix && <span>{prefix}</span>}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

// Impact Section
const ImpactSection = () => {
  return (
    <section className="w-full bg-[#F6F6F6] px-4 sm:px-6 md:px-16 py-8 sm:py-16 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
      {/* Left Content */}
      <div className="md:w-1/2 ml-0 sm:ml-4 md:ml-10 xl:mt-45 lg:ml-20 xl:ml-40">
        <span className="inline-block bg-[#D9D9D9] text-[#000000] text-xs sm:text-sm font-semibold font-Montserrat px-3 py-1 rounded-full mb-3 sm:mb-4">
          Impact since 2016
        </span>
        <h2 className="text-[#1F3A93] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Grown leading-tight sm:leading-11 mb-4 sm:mb-6">
          <span className="block sm:inline">Our collaboration have launched</span>{' '}
          <span className="block sm:inline">products, shaped industries and <br></br></span>{' '}
          <span className="block sm:inline">sparked millions of<br></br></span>{' '}
          <span className="block sm:inline">conversations</span>
        </h2>

        {/* Stats */}
        <div className="mt-8 sm:mt-16 md:mt-20 lg:mt-30 mr-0 sm:mr-15 grid grid-cols-1 font-Montserrat sm:grid-cols-3 gap-10 sm:gap-6 text-[#1F3A93]">
          <div className="text-center relative px-2 sm:px-0">
            <div className="absolute -top-4 sm:-top-6 ml-15 lg:ml-0 left-6 transform -translate-x-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#1F3A93]"></div>
            <div className="text-xs sm:text-sm md:text-base mb-1">
              <span className="block sm:inline mr-3">We have helped over a<br></br></span>
              <span className="block sm:inline">hundred ideas take flight</span>
            </div>
            <div className="text-3xl sm:text-4xl md:text-4xl font-Grown">
              <Counter target={9} suffix="M+" />
            </div>
          </div>
          <div className="text-center relative px-2 sm:px-0">
            <div className="absolute -top-4 sm:-top-6 ml-19 lg:ml-0 left-3 transform -translate-x-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#1F3A93]"></div>
            <div className="text-xs sm:text-sm md:text-base mb-1">
              <span className="block sm:inline ml-3 lg:ml-0">We have collaborated with</span>{' '}
              <span className="block sm:inline lg:mr-3">brands around the world</span>
            </div>
            <div className="text-3xl sm:text-4xl md:text-4xl font-Grown">
              <Counter target={1000} suffix="+" />
            </div>
          </div>
          <div className="text-center relative px-2 sm:px-0">
            <div className="absolute -top-4 sm:-top-6 ml-19 lg:ml-0 left-5 transform -translate-x-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#1F3A93]"></div>
            <div className="text-xs sm:text-sm md:text-base mb-1">
              <span className="block sm:inline">Every product build is a</span>{' '}
              <span className="block sm:inline mr-4 lg:ml-[-26]">dream come true</span>
            </div>
            <div className="text-3xl sm:text-4xl md:text-4xl font-Grown">
              <Counter target={10} suffix="M+" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Swiper Image Slider */}
      <div className="md:w-1/2 w-full max-w-md mr-0 sm:mr-4 md:mr-8 xl:mb-30 lg:mr-29 mt-6 sm:mt-8 md:mt-11">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, reverseDirection: false }}
          loop={true}
          className="w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[480px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] relative overflow-hidden">
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-contain brightness-83 group-hover:brightness-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                      quality={100}
                    />
                    <div className="absolute inset-0 bg-[#EDEDED] mix-blend-multiply group-hover:opacity-0 transition-all duration-300"></div>
                  </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="text-xs sm:text-sm font-extrabold font-Montserrat text-[#000000] mt-2 text-center sm:text-left px-2 sm:px-0">
          Mr. Rahul Sharma, Vice President Nykaa at Inticede office
        </p>
      </div>
    </section>
  );
};


const logos = [
  "/assets/logo/pepe-gema.png","/assets/logo/puma-logo.png",
  "/assets/logo/nayka.png","/assets/logo/van-heusen.png",
  "/assets/logo/john-players.png","/assets/logo/lango.png",
  "/assets/logo/paris-beauty.png","/assets/logo/abhinandan.png",
  "/assets/logo/intimacy.png","/assets/logo/L&C.png",
  "/assets/logo/mysthelle.png","/assets/logo/clovia.png",
  "/assets/logo/mas.png","/assets/logo/sukanya.png",
  "/assets/logo/feeling.png","/assets/logo/bodyline.png",
  "/assets/logo/little-lacy.png","/assets/logo/suman-nathwani.png",
  "/assets/logo/neva.png","/assets/logo/bonjour.png",
  "/assets/logo/snari.png","/assets/logo/sweet-heart.png",
  "/assets/logo/Jockey-Logo.png","/assets/logo/bodycare.png",
  "/assets/logo/nandu-hall.png","/assets/logo/readrose.png",
  "/assets/logo/Bodycare-kids.png","/assets/logo/zivame.png",
  "/assets/logo/zivira.png","/assets/logo/zivame.png",
  "/assets/logo/lady-care.png","/assets/logo/liona.png",
  "/assets/logo/floret.png","/assets/logo/jinal.png",
  "/assets/logo/piccion.png","/assets/logo/enamor.png",
  "/assets/logo/yoke.png","/assets/logo/scan.png",
  "/assets/logo/hot-lips.png","/assets/logo/nest.png",
  "/assets/logo/vstar.png","/assets/logo/frenchie.png",
  "/assets/logo/blossom.png","/assets/logo/lobster.png",
  "/assets/logo/saloni.png","/assets/logo/nest.png",
  "/assets/logo/calibra.png","/assets/logo/Skkinvalue.png",
  
  
  // ⬆️ Add all your logos here from the screenshot (save them individually in `/public/logos/`)
];

const LogoSlider = () => {
  const swiperRef = useRef<any>(null);
  
  // Split logos into 8 rows with 6 logos each (keeping your original structure)
  const logoRows = [];
  for (let i = 0; i < 9; i++) {
    logoRows.push(logos.slice(i * 8, (i + 1) * 8)); // ✅ exact 8 per row (as in your code)
  }

  return (
    <div className="w-full py-6 sm:py-8 md:py-12 h-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {logoRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="mb-4 sm:mb-6 md:mb-8 px-4 sm:px-8 md:px-[66px] max-w-10/12 mx-auto"
          >
            <Swiper
              ref={swiperRef}
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: false, // Alternate row direction
              }}
              speed={4000}
              breakpoints={{
                362: { 
                  slidesPerView: 3,
                  spaceBetween: 15
                },
                480: { 
                  slidesPerView: 4,
                  spaceBetween: 20
                },
                640: { 
                  slidesPerView: 5,
                  spaceBetween: 25
                },
                768: { 
                  slidesPerView: 6,
                  spaceBetween: 30
                },
                1024: { 
                  slidesPerView: 6,
                  spaceBetween: 35,
                },
                1280: { 
                  slidesPerView: 6,
                  spaceBetween: 40
                }
              }}
              className="w-full"
            >
              {row.map((logo, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center h-16 sm:h-20 md:h-24 px-1 sm:px-2"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={logo}
                        alt={`Logo ${index}`}
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, 150px"
                      />
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const CARD_WIDTH = 280;
const CARD_GAP = 24;
const TOTAL_SHIFT = CARD_WIDTH + CARD_GAP;

const Testimonies = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [offset, setOffset] = useState(TOTAL_SHIFT);
  const [isMobile, setIsMobile] = useState(false);
  const maxOffset = 2 * TOTAL_SHIFT;
  const minOffset = 0;
  const scrollStep = 20;

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < lastScrollPos;

      const rect = sectionRef.current?.getBoundingClientRect();
      const isInSection =
        rect && rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (!isInSection) return;

      setLastScrollPos(currentScrollPos);

      setOffset((prev) => {
        let nextOffset = prev;

        if (isScrollingUp) {
          nextOffset = Math.min(maxOffset, prev + scrollStep);
        } else {
          nextOffset = Math.max(minOffset, prev - scrollStep);
        }

        controls.start({
          x: nextOffset,
          transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
        });

        return nextOffset;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos, controls]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOffset(TOTAL_SHIFT);
          controls.start({
            x: isMobile ? 0 : TOTAL_SHIFT, // Don't shift on mobile
            transition: { duration: 0.5 },
          });
        }
      },
      { threshold: 1.0 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls, isMobile]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 mt-[-150px] px-4 md:px-8 flex flex-col md:flex-row gap-8 items-start overflow-hidden"
    >
      {/* Title */}
      <div className="w-full md:w-1/3 pl-2 md:pl-49">
        <h2 className="text-3xl md:text-4xl font-Grown text-[#1F3A93]">Testimonies...</h2>
      </div>

      {/* Cards */}
      <div
        ref={containerRef}
        className="w-full md:w-3/4 overflow-x-auto md:overflow-hidden py-4 relative pl-2 md:pl-4"
      >
        <motion.div
          animate={controls}
          initial={{ x: isMobile ? 0 : TOTAL_SHIFT }}
          className="flex gap-4 md:gap-6 pr-4"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ y: isMobile ? 0 : -5 }} // Disable hover effect on mobile
              className="bg-[#D9D9D9] rounded-2xl h-[400px] md:h-[380px] p-6 md:p-14 w-[160px] md:w-[280px] flex-shrink-0 shadow"
            >
              <p className="text-[#1F3A93] text-xs md:text-sm leading-snug font-Montserrat mb-4">
                {i === 0
                  ? "Inticede's design team truly understands how to merge creativity with market relevance. Their ability to interpret trends and translate them into commercially viable collections has made them an essential part of our development process."
                  : "From sourcing specialty fabrics to managing complex production timelines, Inticede handles it all with precision and professionalism. We trust them implicitly to deliver on time and without compromising on quality."}
              </p>
              <p className="text-[#1F3A93] text-xs md:text-sm font-Montserrat mt-4">
                — {i === 0
                  ? "Creative Head, Global Intimatewear Brand"
                  : "Head of Sourcing, Leading Comfortwear Retailer"}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ✅ Main Component
export default function ClientsPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <ImpactSection />
      <LogoSlider />
      <Testimonies />
    </main>
  );
};