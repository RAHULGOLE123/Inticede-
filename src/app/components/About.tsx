import Image from "next/image";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="grid md:grid-cols-2 items-center gap-8">
        <div className="group relative w-full aspect-[4/3] sm:aspect-[5/3] md:aspect-[16/9]">
          <Image
            src="/assets/home/About_us_section.png"
            alt="About Us"
            fill
            className="object-cover brightness-83 group-hover:brightness-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-[#EDEDED] mix-blend-multiply group-hover:opacity-0 transition-all duration-300"></div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1f3a93] mb-4">
            About us
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            The name Inticede BSD is inspired by the word "intercede," meaning
            to act or advocate on someone's behalf — a role that perfectly
            reflects the function of a buying and sourcing agency. The latter
            part of the name pays tribute to the intimate apparel industry,
            which Inticede BSD is committed to supporting and elevating through
            expert sourcing solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;