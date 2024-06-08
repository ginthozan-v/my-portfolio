'use client';

import Banner from '@/components/Banner';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Header from '@/components/Header';

export default function Home() {

  return (
    <main className="layout h-full">
      <Header />
      <Banner />
      <Education/>
      <Experience/>
    </main>
  );
}
