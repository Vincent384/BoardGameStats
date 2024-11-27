'use client'
import { storage } from '@/firebase.config'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CreateForm } from '../component/CreateForm'
import { Button } from '../component/Button'

const Home = () => {
  const [image, setImage] = useState([])

  useEffect(() => {
    const getImages = async () => {
      try {
        const imageRef = ref(storage, 'MainImages')
        const result = await listAll(imageRef)
        const urlPromises = result.items.map((itemRef) => getDownloadURL(itemRef))
        const downloadUrls = await Promise.all(urlPromises)
        setImage(downloadUrls)
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }
    getImages()
  }, [])
  

  return (
    <div className=''>
      <div className='flex justify-center items-center w-[200px] m-auto pt-10'>
        { image && 
          <Link href={'mageknight/stats'}>
              <Image
                src={image[0]}
                width={320}
                height={320}
                alt='Mage knight'
              />
          </Link>
        }
      </div>
      <div className='flex justify-center items-center mt-2'>
        <Link href={'form'}><Button title={'Create Form'} color={'bg-slate-400'}/></Link>
      </div>
    </div>
  )
}

export default Home