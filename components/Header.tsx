import Link from 'next/link';
import Image from 'next/image';

import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { header } from '@/constants/data';

function Header() {
  return (
    <div className="fixed top-0 left-0 w-full pt-8 lg:pt-10 z-10 pb-2 backdrop-blur-sm">
      <div className="max-w-screen-xl mx-5 lg:mx-auto flex items-center justify-between">
        <div className="flex items-center gap-1 flex-1">
          <Link href="mailto:ginthozanv@gmail.com" className="m-0 text-xs">
            <div className="flex border-gray-300 border rounded-full backdrop-blur-2xl p-0.5 button-animation">
              <div className="hidden md:flex items-center gap-2 p-4 relative z-10">
                <EnvelopeIcon className="w-4 h-4" />
                ginthozanv@gmail.com
              </div>
              <button className="md:hidden border-gray-300 rounded-full backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 border bg-gray-200 py-3 text-xs md:text-sm px-2 w-20 md:w-24 md:ml-4">
                Email
              </button>
            </div>
          </Link>

        <Link href="https://drive.google.com/file/d/1Wf6GhEKCCTwFROTWZMZKfVZ8uG8ASSr6/view">
        <div className="p-0.5 border-gray-300 border rounded-full dark:border-neutral-800">
            <button className="border-gray-300 rounded-full backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 border bg-gray-200 py-3 text-xs md:text-sm px-2 w-20 md:w-24">
              CV
            </button>
          </div>
        </Link>
        </div>

        {/* <div className='hidden lg:block text-center flex-1'>
          <Link href="#" className='font-bold underline'>ginthozan.dev</Link>
        </div> */}

        <div className="flex items-center gap-1 md:gap-3 flex-1 justify-end">
          {header.map((value, index) => (
            <Link key={value.id} href={value.link} className="text-xs">
              <>
                <p className="hidden md:block group">
                  {value.title}{' '}
                  {index !== header.length - 1 && (
                    <span className="ml-2">/</span>
                  )}
                  <span className="block max-w-0 group-hover:max-w-[50%] transition-all duration-500 h-0.5 bg-gray-900"></span>
                </p>
                <div className="md:hidden p-1 border-gray-300 bg-white border rounded-full">
                  <Image
                    src={value.icon}
                    width={320}
                    height={320}
                    alt="icon"
                    className="w-5 h-5"
                  />
                </div>
              </>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
