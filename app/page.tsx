'use client';

import About from '@/components/About';
import Banner from '@/components/Banner';
import Education from '@/components/Education';
import Header from '@/components/Header';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import TechStack from '@/components/TechStack';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const panelsRef = useRef([]);

  useEffect(() => {
    const panels = panelsRef.current;

    panels.forEach((panel, i) => {
      if (panel) {
        const trigger = ScrollTrigger.create({
          trigger: panel,
          start: 'top top',
          pin: true,
          pinSpacing: false,
        });
      }
    });
  }, []);

  return (
    <main className="max-w-screen-xl lg:mx-auto flex flex-col min-h-screen mx-5">
      <Header />
      <Banner />
      <div className="grid grid-cols-3 gap-2 my-10 h-screen items-start max-w-5xl mx-auto">
        <About />
        <Education />
        <TechStack/>
      </div>
    </main>
  );
}
