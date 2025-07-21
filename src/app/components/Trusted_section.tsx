import Image from "next/image";

const TrustedBySection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-end">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1f3a93]">
            Trusted by
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            We're proud to be trusted by industry leaders like amanté, Nykaa,
            Jockey, Zivame, and Enamor. These collaborations reflect our
            commitment to quality, reliability, and long-term partnerships in
            the intimate apparel space.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="group relative h-80 sm:h-96 w-full">
            <Image
              src="/assets/home/Trusted_section1.png"
              alt="Jockey Store Display"
              fill
              className="object-cover brightness-83 group-hover:brightness-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              quality={100}
            />
            <div className="absolute inset-0 bg-[#EDEDED] mix-blend-multiply group-hover:opacity-0 transition-all duration-300"></div>
          </div>
          <div className="group relative h-80 sm:h-96 w-full">
            <Image
              src="/assets/home/Trusted_section2.png"
              alt="Product Promo"
              fill
              className="object-cover brightness-83 group-hover:brightness-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              quality={100}
            />
            <div className="absolute inset-0 bg-[#EDEDED] mix-blend-multiply group-hover:opacity-0 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;