'use client';

import Banner from '@/components/Banner';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Modal from '@/components/Modal';
import { useState } from 'react';

export default function Home() {
  let [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState([]);

  const handleOpenModel = (data: any) => {
    setIsOpen(true);
    setModalData(data);
    console.log(data)
  };

  return (
    <main className="layout h-full">
      <Header />
      <Banner />
      <Education />
      <Experience handleOpenModel={handleOpenModel} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalData={modalData} setModalData={setModalData} />
    </main>
  );
}
