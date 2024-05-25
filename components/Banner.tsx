import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className="flex-1 h-full flex flex-col items-center justify-center">
      <div className="relative border-gray-300 dark:border-neutral-800 border rounded-full p-0.5 w-28 h-28 lg:w-32 lg:h-32">
        <Image
          src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={320}
          height={320}
          alt="profile"
          className="w-full h-full object-cover rounded-full"
        />
        <div className='bg-black w-32 h-32 absolute -top-20 -left-20 -z-10 rounded-full flex items-center text-center justify-center text-white font-bold'>
          3+ Years of Experience
        </div>
      </div>
      <h1 className="mt-2">Hi! I&apos;m Ginthozan</h1>
      <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
        Frontend Developer
      </h2>
      <p className="text-sm mt-1">React / Next.js / Javascript / Typescript</p>
    </div>
  );
};

export default Banner;
