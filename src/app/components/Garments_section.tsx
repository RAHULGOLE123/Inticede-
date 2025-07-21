import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Intimate wear", image: "/assets/home/Intimate-wear1.png" },
  { name: "Menswear", image: "/assets/home/Menswear2.png" },
  { name: "Loungewear", image: "/assets/home/Loungewear3.png" },
  { name: "Thermal Wear", image: "/assets/home/Thermal-Wear4.png" },
  { name: "Shapewear", image: "/assets/home/Shapewear5.png" },
  { name: "Athleisure wear", image: "/assets/home/Athleisure-wear6.png" },
];

const Garments_section = () => {
  return (
    <section className="max-w-7xl mx-auto text-center px-4 sm:px-6 py-12">
      <p className="text-sm text-gray-600">Explore</p>
      <h2 className="text-2xl sm:text-4xl font-semibold text-[#1f3a93] mt-2 leading-snug">
        A curated range of finished garments <br className="hidden md:block" />
        for comfort function and modern style
      </h2>
      <p className="text-gray-700 mt-3 max-w-xl mx-auto text-sm sm:text-base">
        Discover our diverse collection of finished products, thoughtfully
        crafted to suit every need.
      </p>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 justify-center gap-4">
        {categories.slice(0, 4).map((cat, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="w-[209px] h-[209px] relative overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover brightness-83 group-hover:brightness-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                quality={100}
              />
              <div className="absolute inset-0 bg-[#EDEDED] mix-blend-multiply group-hover:opacity-0 transition-all duration-300"></div>
            </div>
            <p className="mt-2 text-[#1f3a93] font-medium text-sm sm:text-base">
              {cat.name}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-4 justify-center gap-4">
        <div></div>
        {categories.slice(4).map((cat, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="w-[209px] h-[209px] relative overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover brightness-83 group-hover:brightness-85 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                quality={100}
              />
              <div className="absolute inset-0 bg-[#EDEDED] mix-blend-multiply group-hover:opacity-0 transition-all duration-300"></div>
            </div>
            <p className="mt-2 text-[#1f3a93] font-medium text-sm sm:text-base">
              {cat.name}
            </p>
          </div>
        ))}
        <div></div>
      </div>

      <div className="mt-10">
        <Link
          href="#contact"
          className="inline-block px-6 py-3 border border-gray-400 text-gray-800 rounded-md text-sm transition hover:bg-black hover:text-white"
        >
          Learn more
        </Link>
      </div>
    </section>
  );
};

export default Garments_section;