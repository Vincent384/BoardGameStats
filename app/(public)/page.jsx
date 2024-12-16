'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import icon from './icon-512x512.png'
const Home = () => {



  return (
    <div className='pt-12'>
      <div className='flex justify-center  items-center w-[200px] m-auto pt-12'>
          <Link href={'mageknight/stats'}>
              <Image
                src={icon}
                width={320}
                height={320}
                alt='Mage knight'
              />
          </Link>
        
      </div>

      <div className='flex justify-center items-center mt-10'>
        <Link href={'form'}><button className='py-4 px-6 text-2xl bg-slate-600 text-white rounded-full
        font-semibold'>Create Form</button></Link>
      </div>
    </div>
  )
}

export default Home