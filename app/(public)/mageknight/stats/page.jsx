'use client'
import { db } from '@/firebase.config'
import { collection, getDocs } from 'firebase/firestore'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const MageknightStats = () => {

const [statList, setStatList] = useState([])

    useEffect(() => {
      const getData = async () =>{
        try {
            const querySnapshot = await getDocs(collection(db,'mageknight'))
            const projectData = querySnapshot.docs.map(doc => ({
                id:doc.id,
                ...doc.data()
            }))
            setStatList(projectData)
        } catch (error) {
            console.error(error.message)
        }
      }
    
      getData()
    }, [])
    

    return (
      <div className='flex flex-col justify-between min-h-screen pt-10'>
      <div className='flex flex-col justify-center gap-5 items-center'>
        <h1 className='text-3xl'>Summering av spelen</h1>
        
        {
          statList && statList.map((item, index) => (
            <Link href={`/detailpage/${item.id}`} key={index}>
              <div className='flex items-center gap-5 bg-slate-500 p-3 rounded-xl cursor-pointer'>
                <span className='bg-emerald-600 p-2 rounded-full text-white font-semibold'>{item.responseData.name}</span>
                <span className='text-white font-semibold text-xl'>{item.responseData.result}</span>
              </div>            
            </Link>
          ))
        }
      </div>

      <div className='flex justify-center py-5'>
        <Link href={'/'}>
          <button className='bg-blue-900 text-white py-10 px-12 text-3xl font-semibold rounded-full'>Back</button>
        </Link>
      </div>
    </div>
  )
}
  export default MageknightStats