import { header } from '@/constants/data';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
const LinkedIn = '/assets/icons/linkedin.svg';

function Header() {
  return (
    <div className="flex items-center justify-between w-full mt-8 lg:mt-10">
      <div className="flex items-center gap-1">
        <div className="flex border-gray-300 dark:border-neutral-800 border rounded-full backdrop-blur-2xl p-0.5">
          <div className="hidden md:flex items-center gap-2 p-4">
            <EnvelopeIcon className="w-4 h-4" />
            <Link href="mailto:ginthozanv@gmail.com" className="m-0 text-xs">
              ginthozanv@gmail.com
            </Link>
          </div>
          <button className="md:hidden border-gray-300 rounded-full backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 border bg-gray-200 py-3 text-xs md:text-sm px-2 w-20 md:w-24 md:ml-4">
            Email
          </button>
        </div>

        <div className="p-0.5 border-gray-300 border rounded-full dark:border-neutral-800">
          <button className="border-gray-300 rounded-full backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 border bg-gray-200 py-3 text-xs md:text-sm px-2 w-20 md:w-24">
            CV
          </button>
        </div>
      </div>

      <div className="flex items-center gap-1 md:gap-3">
        {header.map((value, index) => (
          <Link key={value.id} href={value.link} className="text-xs">
            <>
              <p className="hidden md:block">
                {value.title}{' '}
                {index !== header.length - 1 && <span className="ml-2">/</span>}
              </p>
              <div className='md:hidden p-1 border-gray-300 border rounded-full'>
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
  );
}

export default Header;
