import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-4">
        <div className="relative w-full aspect-[16/8]">
          <Image
            src="/assets/Home_image.png"
            alt="Banner"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="text-center mt-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-4xl font-semibold leading-snug text-[#1f3a93]">
          We help intimate wear brands around the world
          <br />
          bring quality products to life
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-800">
          With over a decade of experience, Inticede is a one stop solution to
          all your
          <br />
          worries
        </p>
      </div>
    </div>
  );
}
