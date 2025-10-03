"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-20">
      {/* Left Side: Intro */}
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I’m <span className="text-blue-500">Adib</span>
        </h1>
        <p className="text-gray-400 max-w-xl">
          CSE graduate from ULAB • Python Developer Intern at HRSoft BD • 
          Co-founder & CEO of Trinity Property Ventures Bangladesh.
        </p>

        <div className="flex gap-4">
          <Link
            href="https://github.com/AdibAhasan007"
            target="_blank"
            className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            GitHub
          </Link>
          <Link
            href="#contact"
            className="px-4 py-2 rounded-md border border-gray-400 text-white hover:bg-gray-800 transition"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Right Side: Profile Image */}
      <div className="flex-1 flex justify-center">
        <div className="w-72 h-72 md:w-96 md:h-96 relative rounded-2xl overflow-hidden shadow-lg border border-gray-700">
          <Image
            src="/adib.jpg"
            alt="Adib Ahasan Chowdhury"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
