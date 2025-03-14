'use client';
import Image from 'next/image';
import gsap from 'gsap';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import { experience, techStack } from '@/constants/data';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const { scrollY } = useScroll();

  const opacity1 = useTransform(scrollY, [0, 100], [0, 1]);
  const opacity2 = useTransform(scrollY, [0, 100], [1, 0]);

  useGSAP(() => {
    gsap.to('.g_grow', {
      scale: 1.5,
      y: -100,
      ease: 'power1',
      scrollTrigger: {
        trigger: '.g_grow',
        toggleActions: 'restart reverse restart reverse',
        start: 'top 30%',
        scrub: 5.5,
     
      },
    });
  }, []);

  return (
    <section
      id="banner"
      className="relative w-full left-0 flex-1 min-h-screen h-full flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="border-gray-300 border rounded-full p-0.5 w-28 h-28 lg:w-32 lg:h-32 g_grow transform translate-y-0 scale-100">
        <Image
          src="/assets/profile.jpeg"
          width={320}
          height={320}
          alt="profile"
          className="w-full h-full object-cover rounded-full "
        />
      </div>
      <div className="relative">
        <motion.div
          style={{
            opacity: opacity2,
          }}
          className="text-center"
        >
          <h1 className="mt-2 text-gray-400  uppercase font-thin tracking-wider">
            Ginthozan Varnakulasingam
          </h1>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 uppercase">
            Frontend Developer
          </h2>
          <div className="flex items-center gap-2 justify-center text-xs italic text-gray-500 font-thin">
            <p>@{ experience.slice(-1)[0].company }</p>
            <p>• 2021 - Present</p>
            <p>• Next.js</p>
            <p>• Shopify</p>
            <p>• Shopify Headless</p>
          </div>
        </motion.div>
        <motion.div
          style={{ opacity: opacity1 }}
          className="text-center absolute top-0 left-0 mx-auto"
        >
          <h1 className="mt-2 uppercase text-gray-300 tracking-[10px] font-thin">
            About me
          </h1>

          <p className="text-2xl mt-2">
            Hi, I&apos;m Ginthozan. I&apos;m passionate about frontend development and love creating engaging user interfaces.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
        }}
        className="flex items-center gap-4 absolute bottom-5"
      >
        {techStack.map((tech) => (
          <span key={tech.id}>
            <Image
              src={tech.icon}
              alt={tech.title}
              width={720}
              height={720}
              className={`w-5 h-5 ${
                tech.title === 'next-js' && 'w-8 h-8'
              }`}
            />
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default Banner;
