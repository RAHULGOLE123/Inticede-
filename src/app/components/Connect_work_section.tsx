import Image from 'next/image';


export default function TwoImageSection() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto mt-10">
      
   
      <div className="relative w-full md:w-1/2 aspect-[4/3]">
        <Image
          src="/assets/Connect.png"
          alt="Connect"
          fill
          className="object-cover grayscale"
          sizes="(max-width: 760px) 100vw, 50vw"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#1f3a93] text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
            Connect
          </span>
        </div>
      </div>

    
      <div className="relative w-full md:w-1/2 aspect-[4/3]">
        <Image
          src="/assets/work.png"
          alt="Work"
          fill
          className="object-cover grayscale "
          sizes="(max-width: 760px) 100vw, 50vw"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#1f3a93] text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
            WORK
          </span>
        </div>
      </div>
    </div>
  );
}
