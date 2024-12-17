'use client'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { CreateForm } from '@/app/component/CreateForm';
import { Button } from '@/app/component/Button';
import Link from 'next/link';

const DetailPage = () => {
  const inputClass = 'appearance-none w-[70px] text-center border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
    const router = useRouter()
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [getSingleDoc, setGetSingleDoc] = useState({
    input3:0,
    input4:0,
    input5:0,
    input6:0,
    input7:0,
    input8:0,
    input9:0,
    input10:0,
    input11:0,
    name:'',
    result:0
  })

  const [checkboxes, setCheckboxes] = useState({
    checkbox1:false,
    checkbox2:false,
  })

  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`https://board-game-stats.vercel.app/api/id-score/?id=${id}`)

        const data = await res.json()
        const newBody = await data.responseData
        setGetSingleDoc(newBody)
        setCheckboxes({checkbox1:newBody.checkbox1,checkbox2:newBody.checkbox2})
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    getData()

  }, [id])

  async function handleDelete(e) {
    e.preventDefault()
    const bodyData = {
      id:id
    }
      try {
        const res = await fetch('https://board-game-stats.vercel.app/api/score',{
          method:'DELETE',
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify(bodyData)
        })

        const data = await res.json()
        console.log(data)
        if(res.status === 200){
          router.push('/')
        }

      } catch (error) {
        console.log(error)
      }

  }

  const handleCheckboxChange = (checked,name) => {
    setCheckboxes(data => ({
      ...data,
      [name]:checked
    }));
  };

  const handleChange = (e) =>{
    setGetSingleDoc(data => {
      return {
        ...data,
        [e.target.name]:e.target.value
      }
    })
  }

  async function calculateForm(){
 
    checkboxes.checkbox1
    checkboxes.checkbox2
   let in3 = Number(getSingleDoc.input3)
   let in4 = Number(getSingleDoc.input4)
   let in5 = Number(getSingleDoc.input5)
   let in6 = Number(getSingleDoc.input6)
   let in7 = Number(getSingleDoc.input7)
   let in8 = Number(getSingleDoc.input8)
   let in9 = Number(getSingleDoc.input9)
   let in10 = Number(getSingleDoc.input10)
   let in11 =Number(getSingleDoc.input11)

  let checkbox1Result = 0
  let checkbox2Result = 0
  let sum = 0
  let result = 0
  if(checkboxes.checkbox1 === true){
    checkbox1Result = 15
    console.log('checkbox1 15')
  }else{
    checkbox1Result = 0
    console.log('checkbox1 0')
  }

  if(checkboxes.checkbox2 === true){
    checkbox2Result = 5
    console.log('checkbox2 5')
  }else{
    console.log('checkbox2 0')
    checkbox2Result = 0
  }

  sum = in3 + in4 + in5 + in6 + in7 + in8 + in9 + in10 + checkbox1Result + checkbox2Result
  console.log(sum)
  result = sum + in11
  console.log(result)
  return {
    checkbox1:checkboxes.checkbox1,
    checkbox2:checkboxes.checkbox2,
    input3:Number(getSingleDoc.input3),
    input4:Number(getSingleDoc.input4),
    input5:Number(getSingleDoc.input5),
    input6:Number(getSingleDoc.input6),
    input7:Number(getSingleDoc.input7),
    input8:Number(getSingleDoc.input8),
    input9:Number(getSingleDoc.input9),
    input10:Number(getSingleDoc.input10),
    input11:Number(getSingleDoc.input11),
    result:result,
    name:getSingleDoc.name,
    id:id
  }

}

  async function handleUpdate(e){
    e.preventDefault()
    setSuccessMessage('')
    const responseData = await calculateForm()
    console.log(responseData)

    try {
      const res = await fetch('https://board-game-stats.vercel.app/api/score',{
        method:'PUT',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(responseData)
      })

      const data = await res.json()
      console.log(data)

      if(res.status === 200){
        setSuccessMessage('Lyckades uppdatera')
      }

      setTimeout(() => {
        router.push('/mageknight/stats')
      }, 1000);

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {
        isLoading ? <p className='text-center text-xl'>Laddar...</p>  :  <div className=''>
        <h1 className='m-auto w-[250px] pt-5 font-bold text-xl'>ACHIEVEMENT BONUSES</h1>
        {getSingleDoc &&
          <form className='mt-5'>
            <CreateForm title={'+15 if all cities were conquered'} name='checkbox1' input={'hidden'} handleCheckboxChange={(checked) => handleCheckboxChange(checked,'checkbox1')} checked={checkboxes.checkbox1} />
            <CreateForm title={'+5 if End of the Round was not announced on last Round'} name='checkbox2' input={'hidden'} checkbox={''} handleCheckboxChange={(checked) => handleCheckboxChange(checked,'checkbox2')} checked={checkboxes.checkbox2}  />
            <CreateForm title={'+10 per conquered city'} name='input3' input={inputClass} defaultValue={getSingleDoc.input3} handleChange={handleChange} checkbox={'hidden'} type={'number'} />
            <CreateForm title={'+30 for each unplayed Round'} name='input4' input={inputClass} defaultValue={getSingleDoc.input4} handleChange={handleChange} checkbox={'hidden'} type={'number'} />
            <CreateForm title={'+1 per card remaining in Dummy player deck'} name='input5' defaultValue={getSingleDoc.input5} handleChange={handleChange} input={inputClass} checkbox={'hidden'} type={'number'} />
            <CreateForm title={'The Greatest Knowledge'} name='input6' input={inputClass} defaultValue={getSingleDoc.input6} handleChange={handleChange} checkbox={'hidden'} type={'number'} />
            <CreateForm title={'The Greatest Loot'} name='input7' input={inputClass} defaultValue={getSingleDoc.input7} handleChange={handleChange} checkbox={'hidden'} type={'number'} />
            <CreateForm title={'The Greatest Leader'} name='input8' input={inputClass} defaultValue={getSingleDoc.input8} handleChange={handleChange} checkbox={'hidden'} type={'number'} />
            <CreateForm title={'The Greatest Conqueror'} name='input9' input={inputClass} defaultValue={getSingleDoc.input9} handleChange={handleChange} checkbox={'hidden'} type={'number'} />
            <CreateForm title={'The Greatest Beating'} name='input11' input={inputClass} defaultValue={getSingleDoc.input11} handleChange={handleChange} checkbox={'hidden'} type={'number'} />
            <CreateForm title={'Current score in play'} name='input10' input={inputClass} defaultValue={getSingleDoc.input10} handleChange={handleChange} checkbox={'hidden'} type={'number'}/>
            <CreateForm title={'Player'} name='name' defaultValue={getSingleDoc.name} handleChange={handleChange}
              input={'appearance-none w-[150px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'}
              checkbox={'hidden'} type={'text'} />
            <div className='flex justify-around relative items-center mt-10 mb-5'>
            {
                successMessage !== '' ? 
                <p className='absolute top-[60px] left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 px-4 rounded-full bg-green-700 text-white font-bold'>{successMessage}</p> : ''
              }
              <button onClick={handleDelete} className='py-2 px-4 bg-red-500 rounded-full text-white font-semibold text-xl'>Delete</button>
              <button onClick={handleUpdate} className='py-2 px-4 bg-orange-500 rounded-full text-white font-semibold text-xl' >Update</button>
            </div>
            <div className='flex justify-center py-5'>
 
              <Link href={'/mageknight/stats'}>
                <button className='bg-blue-900 text-white px-8 py-2 text-3xl font-semibold rounded-full'>Back</button>
              </Link>
            </div>
          </form>
        }
      </div>
      }
    
    </div>
  )
}

export default DetailPage
