"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollPos = window.scrollY;
          const isScrollingDown = lastScrollY < currentScrollPos;
          const isScrolledToTop = currentScrollPos < 10;
          const scrollDifference = Math.abs(currentScrollPos - lastScrollY);

          if (scrollDifference > 20) {
            setVisible(!isScrollingDown || isScrolledToTop);
            lastScrollY = currentScrollPos;
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 bg-[#E3E3E3]/80 backdrop-blur-sm font-['Orbitron'] 
      transition-transform duration-200 ease-out
      ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Thicker Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl text-emerald-500 font-bold tracking-wider hover:text-emerald-400 transition-colors"
          >
            DIGITAL.
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-14">
            {[
              { name: "HOME", href: "/" },
              { name: "ABOUT", href: "/about" },
              { name: "SERVICES", href: "/services" },
              { name: "PORTFOLIO", href: "/portfolio" },
              { name: "CONTACT", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group"
                onMouseEnter={() => setIsHovered(item.name)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <span className="text-base text-emerald-600 hover:text-emerald-400 transition-colors font-medium">
                  {item.name}
                </span>
                <span
                  className={`absolute -bottom-2 left-0 w-full h-0.5 bg-emerald-500 transform origin-left transition-transform duration-300
                    ${isHovered === item.name ? 'scale-x-100' : 'scale-x-0'}`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button className="px-8 py-3 bg-emerald-600 text-white text-base rounded-lg font-bold 
            transition-all hover:bg-emerald-500 hover:scale-105 hover:shadow-lg 
            hover:shadow-emerald-500/50 active:scale-95">
            GET STARTED
          </button>
        </div>
      </div>
    </nav>
  );
} 