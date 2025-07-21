"use client";

import Image from "next/image";

const expertiseData = [
  {
    title: "Buying Sourcing and Vendor Management",
    image: "/assets/home/Expertise1.png",
  },
  {
    title: "Design and Product Development",
    image: "/assets/home/Expertise2.png",
  },
  {
    title: "Quality Assurance and Compliance",
    image: "/assets/home/Expertise3.png",
  },
  {
    title: "Product Execution and Logistics",
    image: "/assets/home/Expertise4.png",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1f3a93]">Our Expertise</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          With deep industry knowledge and a global supply network, we specialize in sourcing, product development, and quality assurance.
          <br />
          Our expertise lies in delivering tailored, end-to-end solutions for intimate and lifestyle apparel brands.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {expertiseData.map((item, idx) => (
          <div key={idx} className="group bg-[#D3D2D0] overflow-hidden text-center p-4">
            <div className="relative w-full aspect-[3/6]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover brightness-83 group-hover:brightness-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                quality={100}
              />
              <div className="absolute inset-0 bg-[#EDEDED] mix-blend-multiply group-hover:opacity-0 transition-all duration-300"></div>
            </div>
            <div className="p-4">
              <h3 className="text-sm text-black font-bold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}