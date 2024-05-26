'use client';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div
    //   animate={{ y: -50, opacity: 1 }}
    //   transition={{ ease: 'easeIn', duration: 1, delay: 1 }}
      id="about"
      className="border border-gray-300 p-0.5 rounded-3xl"
    >
      <div className="bg-gray-200 p-3 rounded-[1.4rem]">
        <h2 className="text-3xl font-bold mb-1">About me</h2>
        <p>
          BSc graduate and skilled front-end developer with a strong focus on
          React/Next JS. I bring over 5 years of experience in web application
          development, delivering user-friendly interfaces and staying
          up-to-date with emerging technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
