"use client";

import Spline from "@splinetool/react-spline/next";
import { TypeAnimation } from "react-type-animation";

export function SimpleSplineScene() {
  return (
    <section className="relative h-screen pt-20 bg-[#E3E3E3] font-['Orbitron'] overflow-hidden">
      {/* Text Overlay */}
      <div className="absolute top-8 left-8 w-[800px] z-10 mt-16">
        <h1 className="text-7xl font-bold text-black p-10">
          <TypeAnimation
            sequence={[
              "Digital Innovation",
              2000,
              "Digital Solutions",
              2000,
              "Digital Future",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        
        <div className="flex gap-4 px-10">
          <button className="px-8 py-4 bg-emerald-600 text-white rounded-lg text-xl font-bold 
            transition-all hover:bg-emerald-500 hover:scale-105 hover:shadow-lg 
            hover:shadow-emerald-500/50 active:scale-95">
            Get Started
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-emerald-600 text-emerald-500 
            rounded-lg text-xl font-bold transition-all hover:bg-emerald-600/10 
            hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 active:scale-95">
            Learn More
          </button>
        </div>
      </div>

      {/* Spline Container - Now fullscreen */}
      <div className="absolute inset-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/6ItPVFD1VZBNfMVp/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
