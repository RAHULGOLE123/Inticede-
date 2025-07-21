"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const [form, setForm] = useState({ firstName: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="max-w-7xl mx-auto w-full px-6 py-12 md:py-16 lg:py-20 bg-white flex flex-col lg:flex-row gap-10 items-start justify-between">
      <div className="lg:w-1/2 space-y-4">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/inticedelogo.png"
              alt="Logo"
              width={64}
              height={64}
              className="h-16 w-auto"
            />
          </Link>
        </div>
        <p className="text-gray-700 leading-relaxed">
          From innovative sourcing to seamless product development, Inticede
          offers end-to-end solutions tailored for intimate and lifestyle
          apparel brands. With a strong network of suppliers and a commitment to
          quality, we help our partners bring their collections to life with
          precision, speed and transparency. Empowering brands to build better,
          smarter and faster.
        </p>
      </div>

      <div className="lg:w-1/2 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-black">
          Partner Enquiry Form
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email ID
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Type your email"
              className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col gap-4 mt-6 lg:mt-0 items-end ">
        <a
          href="https://www.facebook.com/inticede/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <FontAwesomeIcon icon={faFacebook} className="text-black text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/company/inticede/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-black text-2xl" />
        </a>
        <a
          href="https://www.instagram.com/inticede/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-black text-2xl" />
        </a>
      </div>
    </section>
  );
}