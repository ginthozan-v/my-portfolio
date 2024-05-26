import React, { useEffect, useRef } from 'react';
import About from './About';
import gsap from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Panel = () => {
  const panelsRef = useRef<any[]>([]);

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
    <div className="absolute -z-10 top-0 left-0 w-full">
      <div className="max-w-screen-xl lg:mx-auto mx-5">
        <div
          ref={(el: any) => (panelsRef.current[0] = el)}
          className="max-w-md h-screen pt-40 bg-transparent"
        >
          <About />
        </div>
        <div
          ref={(el: any) => (panelsRef.current[1] = el)}
          className="max-w-md h-screen pt-40 bg-transparent"
        >
          <About />
        </div>
      </div>
    </div>
  );
};

export default Panel;
