'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const MageknightStats = () => {

const [statList, setStatList] = useState(null)
const oldScores = ['108','117','141','107','183','189','221','221','222','184']
const oldScoresWithNames = [{
  name:'Goldyx',
  score:'189'
},
{
  name:'Wolfhawk',
  score:'224'
},
{
  name:'Arythea',
  score:'187'
},
{
  name:'Krang',
  score:'243'
}]
    useEffect(() => {
      const getData = async () =>{
          try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/score`)

            const data = await res.json()
            console.log(data)
            const filterArray = data.responseData.map((item) =>(
              item.scores
            ))
            setStatList(filterArray)
          } catch (error) {
            console.log(error)
          }
        }
        
        getData()
      }, [])


    return (
      <div className='flex flex-col justify-between min-h-screen pt-10'>
      <div className='flex flex-col justify-center gap-5 items-center'>
        <h1 className='text-3xl'>Summering av spelen</h1>
        <div className='flex justify-center items-center'>
        <Link href={'/mageknight/stats/chart'}><button className='py-4 px-6 w-[200px] text-2xl container bg-slate-600 text-white rounded-full
        font-semibold'>Chart</button></Link>
      </div>      
           {
            oldScores.map((item,index)=>(
              <div key={index} className='flex items-center gap-5 bg-black w-[200px] text-center justify-center p-3 rounded-xl cursor-pointer'>
              <span className='text-white font-semibold text-xl'>{item}</span>
            </div>          
            ))
           }
           {
            oldScoresWithNames.map((item,index)=>(
              <div key={index} className='flex items-center gap-5 bg-black w-[200px] text-center justify-center p-3 rounded-xl cursor-pointer'>
              <span className='bg-emerald-600 p-2 rounded-full container text-white font-semibold'>{item.name}</span>
              <span className='text-white font-semibold text-xl'>{item.score}</span>
            </div>     
            ))
           }
      {
          statList && statList.map((array) => (
            array.map((item,index)=>((       
            <Link href={`/detailpage/${item._id}`} key={index}>
              <div className='flex items-center gap-5 bg-slate-500 w-[200px] text-center justify-center p-3 rounded-xl cursor-pointer'>
                <span className='bg-emerald-600 p-2 rounded-full container text-white font-semibold'>{item.name}</span>
                <span className='text-white font-semibold text-xl'>{item.result}</span>
              </div>            
            </Link>)))
          ))
        } 
      </div>

      <div className='flex justify-center py-5'>
        <Link href={'/'}>
          <button className='bg-blue-900 text-white px-8 py-2 text-3xl font-semibold rounded-full'>Back</button>
        </Link>
      </div>
    </div>
  )
}
  export default MageknightStats