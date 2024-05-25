import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='flex-1 h-full flex flex-col items-center justify-center'>
        <Image src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={320} height={320} alt='profile' className='w-20 h-20 object-cover rounded-full' />
        <h1 className='mt-2'>Hi! I'm Ginthozan</h1>
        <h2 className='mt-4 text-3xl md:text-7xl font-bold'>Frontend Developer</h2>
        <p className='text-sm mt-1'>React / Next.js / Javascript / Typescript</p>
    </div>
  )
}

export default Banner