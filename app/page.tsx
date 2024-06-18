'use client';

import Banner from '@/components/Banner';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Modal from '@/components/Modal';
import { useState } from 'react';

export default function Home() {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <main className="layout h-full">
      <Header />
      <Banner />
      <button onClick={() => setIsOpen(true)}>Open</button>
      <Education/>
      <Experience/>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </main>
  );
}
