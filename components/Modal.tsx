import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';

export default function Modal({ isOpen, setIsOpen }: any) {
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const sites = [
    'https://images.unsplash.com/photo-1557101817-f080b952905d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1557101817-f080b952905d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1557101817-f080b952905d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1557101817-f080b952905d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1557101817-f080b952905d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1557101817-f080b952905d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1557101817-f080b952905d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1557101817-f080b952905d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1557101817-f080b952905d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none h-screen"
          onClose={close}
          __demoMode
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex h-full items-end justify-center">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform translate-y-96"
                enterTo="opacity-100 transform -translate-y-0"
                leave="ease-in duration-300"
                leaveFrom="opacity-100 transform -translate-y-0"
                leaveTo="opacity-0 transform translate-y-96"
              >
                <DialogPanel className="w-screen h-[35vh] md:h-[65vh] rounded-t-3xl border-t-2 border-white bg-white/5 p-6 backdrop-blur-xl">
                  <DialogTitle
                    as="h3"
                    className="text-xl tracking-[10px] text-center font-thin  text-gray-400"
                  >
                    WORKS
                  </DialogTitle>

                  <div className="mt-10 md:mt-20 flex items-center gap-0.5 overflow-scroll scroll-smooth snap-x">
                    {sites.map((site, i) => (
                      <div
                        key={i}
                        className="group snap-center h-full min-w-[20rem] md:min-w-[40rem] max-w-[20rem] md:max-w-[40rem] aspect-video rounded-lg border border-black/20 overflow-hidden relative"
                      >
                        <div className='hover:bg-black/60 absolute top-0 left-0 w-full h-full' />
                        <Image
                          src="https://images.unsplash.com/photo-1557101817-f080b952905d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          width="1080"
                          height="1080"
                          alt="project"
                          className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-all ease-out "
                          placeholder="blur"
                          blurDataURL="https://images.unsplash.com/photo-1557101817-f080b952905d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                      </div>
                    ))}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
