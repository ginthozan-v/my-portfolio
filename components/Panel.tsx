import React, { useEffect, useRef } from 'react';
import About from './About';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Panel = () => {
  const panelsRef = useRef<any[]>([]);

  useEffect(() => {
    const panels = panelsRef.current;
    const lastIndex = panels.length - 1;

    panels.forEach((panel, i) => {
      if (panel) {
        // Create an animation for pinning the panel
        const tween = gsap.fromTo(panel, 
          { opacity: 0 }, 
          { opacity: 1, duration: 1, ease: "power2.inOut" }
        );

        // Create the ScrollTrigger instance
        ScrollTrigger.create({
          trigger: panel,
          start: "top center", // Adjust start position as needed
          end: "bottom center", // Adjust end position as needed
          onEnter: () => tween.play(),
          onLeave: () => tween.reverse(),
          onEnterBack: () => tween.play(),
          onLeaveBack: () => tween.reverse(),
          pin: true,
          pinSpacing: false,
          scrub: 1
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="absolute -z-10 top-0 left-0 w-full">
      <div className="max-w-screen-xl xl:mx-auto lg:mx-10 mx-5">
        <div
          ref={(el: any) => (panelsRef.current[0] = el)}
          className="max-w-md h-screen pt-40 bg-transparent"
        >
         <h2 className="text-3xl font-bold mb-1">About me</h2>
        </div>
        <div
          ref={(el: any) => (panelsRef.current[1] = el)}
          className="max-w-md h-screen pt-40 bg-transparent"
        >
          <h2 className="text-3xl font-bold mb-1">About me 2</h2>
        </div>
        <div
          ref={(el: any) => (panelsRef.current[2] = el)}
          className="max-w-md h-screen pt-40 bg-transparent"
        >
     <h2 className="text-3xl font-bold mb-1">About me 3</h2>
        </div>
      </div>
    </div>
  );
};

export default Panel;
