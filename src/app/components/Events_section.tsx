// components/EventsSection.tsx

import Image from "next/image";

const events = [
  { src: "/assets/Events1.png", label: "Intimasia Kochi 2018" },
  { src: "/assets/Events2.png", label: "Intimasia Mumbai 2023" },
  { src: "/assets/Events3.png", label: "SIUF 2025" },
  { src: "/assets/Events4.png", label: "Intimasia Chennai 2016" },
  { src: "/assets/Events5.png", label: "Intimasia Kochi 2018" },
  { src: "/assets/Events6.png", label: "SIUF 2025" },
];

const EventsSection = () => {
  return (
    <section className="bg-[#e5e5e5] mt-10 py-10">
     {/* <div className="hidden lg:block absolute left-60 top-12/2 -translate-y-1/2 z-0">
        <div className="w-[150px] h-[150px] border-2 border-[#1f3a93] rounded-full border-r-0"></div>
      </div>

     
      <div className="hidden lg:block absolute right-60 top-12/2 -translate-y-1/2 z-0">
        <div className="w-[150px] h-[150px] border-2 border-[#1f3a93] rounded-full border-l-0"></div>
      </div> */}

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#1f3a93] mb-10">
          Events
        </h2>
        <div className="grid  justify-center sm:grid-cols-2 lg:grid-cols-3 bg-white p-4">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-[280px] h-[260px] relative overflow-hidden ">
                <Image
                  src={event.src}
                  alt={event.label}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-sm text-gray-700 mt-2">
                {event.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
