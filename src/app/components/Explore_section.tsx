import Image from "next/image";
import Link from "next/link";

const Explore_section = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1f3a93] leading-tight mb-6">
            Explore our premium raw <br /> material collection
          </h2>
          <p className="text-gray-700 mb-4">
            Discover the essence of our craftsmanship with an extensive
            selection of raw material. From premium and functional fabrics to
            trims, we provide everything you need to create exceptional
            products.
          </p>
          <ul className="text-gray-800 list-disc list-inside space-y-1 mb-6">
            <li>Premium fabrics for every design need.</li>
            <li>Versatile trims and finishes to elevate your creations.</li>
            <li>Add on intimate wear products</li>
          </ul>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="#contact"
              className="px-4 py-2 border border-gray-400 text-gray-800 rounded-md text-sm transition hover:bg-black hover:text-white"
            >
              Learn more
            </Link>
            <Link
              href="#contact" 
              className="px-4 py-2 text-sm text-white bg-black border border-transparent rounded-md transition hover:text-black hover:bg-white hover:border-black"
            >
              Sign up →
            </Link>
          </div>
        </div>

        <div className="group relative w-full h-[400px] sm:h-[500px]">
          <Image
            src="/assets/home/Explore.png"
            alt="Explore"
            fill
            className="object-cover brightness-83 group-hover:brightness-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            quality={100}
          />
          <div className="absolute inset-0 bg-[#EDEDED] mix-blend-multiply group-hover:opacity-0 transition-all duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Explore_section;