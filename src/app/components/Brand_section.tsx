import Image from 'next/image';

const BrandLogos = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {/* Brand Logos */}
          {[
            { src: '/assets/Brand1.png', alt: 'Nykd' },
            { src: '/assets/Brand2.png', alt: 'Clovia' },
            { src: '/assets/Brand3.png', alt: 'Enamor' },
            { src: '/assets/Brand4.png', alt: 'Jockey' },
            { src: '/assets/Brand5.png', alt: 'Zivame' },
          ].map((brand, index) => (
            <div
              key={index}
              className="relative w-[140px] h-[60px] sm:w-[160px] sm:h-[70px] md:w-[180px] md:h-[80px]"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
