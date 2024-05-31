'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

import { techStack } from '@/constants/data';

const Banner = () => {
  const { scrollY } = useScroll();

  const opacity1 = useTransform(scrollY, [0, 100], [0, 1]);
  const opacity2 = useTransform(scrollY, [0, 100], [1, 0]);
  const translateY1 = useTransform(scrollY, [0, 100], [0, 150]);
  const translateY2 = useTransform(scrollY, [0, 100], [0, 150]);

  return (
    <section
      id="banner"
      className="relative w-full left-0 flex-1 min-h-screen h-full flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="border-gray-300 dark:border-neutral-800 border rounded-full p-0.5 w-28 h-28 lg:w-32 lg:h-32">
        <Image
          src="/assets/profile.jpeg"
          width={320}
          height={320}
          alt="profile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="relative">
        <motion.div
          style={{
            opacity: opacity2,
            transform: translateY2,
          }}
          className="text-center"
        >
          <h1 className="mt-2">Hi! I&apos;m Ginthozan</h1>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            Frontend Developer
          </h2>
          <p className="text-sm mt-1">React / Next.js</p>
        </motion.div>
        <motion.div
          style={{ opacity: opacity1, transform: translateY1 }}
          className="text-center absolute top-0 left-0 mx-auto"
        >
          <h1 className="mt-2 text-lg">Ginthozan Varnakulasingam</h1>

          <p className="text-sm mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit amet
            eligendi beatae tempora? Inventore adipisci cumque officiis porro
            enim, deleniti, alias perferendis veniam quod possimus, dignissimos
            excepturi quas vero dolore?
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
                tech.title === 'next-js' && 'dark:invert w-8 h-8'
              }`}
            />
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default Banner;
