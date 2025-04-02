"use client";

import NavbarSection from "@/components/Navbar";
import Image from "next/image";
import dynamic from 'next/dynamic';
import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <Image
        src="/gradientbg.png"
        alt="Background Gradient"
        layout="fill"
        objectFit="cover"
        className="bg-white"
        style={{ zIndex: -1 }}
      />
      <NavbarSection />
      <HeroSection />
    </div>
  );
}