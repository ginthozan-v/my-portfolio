import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div className="py-5 flex items-center justify-between uppercase">
      <Link href={'#'}>
        <EnvelopeIcon />
        gmail
      </Link>
      <div className="flex items-center divide-x">
        <Link href={'#'} className="px-2">
          linkedin
        </Link>
        <Link href={'#'} className="px-2">
          github
        </Link>
        <Link href={'#'} className="px-2">
          whatsapp
        </Link>
        <Link href={'#'} className="px-2">
          phone
        </Link>
      </div>
    </div>
  );
}

export default Header;
