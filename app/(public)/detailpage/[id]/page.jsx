'use client'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from '@/firebase.config';
import { CreateForm } from '@/app/component/CreateForm';
import { Button } from '@/app/component/Button';
import Link from 'next/link';

const DetailPage = () => {
  const inputClass = 'appearance-none w-[70px] text-center border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
    const router = useRouter()
  const { id } = useParams()
  const [getSingleDoc, setGetSingleDoc] = useState(null)

  useEffect(() => {
    async function getData() {
      const docRef = doc(db, "mageknight", `${id}`);
      const docSnap = await getDoc(docRef);
      setGetSingleDoc(docSnap.data())
    }
    getData()

  }, [id])

  async function handleDelete(e) {
    e.preventDefault()
        await deleteDoc(doc(db,'mageknight',`${id}`))
        router.push('/')
  }

  return (
    <div>
      <div className=''>
        <h1 className='m-auto w-[250px] pt-5 font-bold text-xl'>ACHIEVEMENT BONUSES</h1>
        {getSingleDoc &&
          <form onSubmit={handleDelete} className='mt-5'>
            <CreateForm title={'+15 if all cities were conquered'} name='checkbox1' input={'hidden'} checkbox={''} checked={getSingleDoc.responseData.checkbox1 ? true : ''} />
            <CreateForm title={'+5 if End of the Round was not announced on last Round'} name='checkbox2' input={'hidden'} checkbox={''} checked={getSingleDoc.responseData.checkbox2 ? true : ''} />
            <CreateForm title={'+10 per conquered city'} name='input3' input={inputClass} defaultValue={getSingleDoc.responseData.input3} checkbox={'hidden'} type={'number'} />
            <CreateForm title={'+30 for each unplayed Round'} name='input4' input={inputClass} defaultValue={getSingleDoc.responseData.input4} checkbox={'hidden'} type={'number'} />
            <CreateForm title={'+1 per card remaining in Dummy player deck'} name='input5' defaultValue={getSingleDoc.responseData.input5} input={inputClass} checkbox={'hidden'} type={'number'} />
            <CreateForm title={'The Greatest Knowledge'} name='input6' input={inputClass} defaultValue={getSingleDoc.responseData.input6} checkbox={'hidden'} type={'number'} />
            <CreateForm title={'The Greatest Loot'} name='input7' input={inputClass} defaultValue={getSingleDoc.responseData.input7} checkbox={'hidden'} type={'number'} />
            <CreateForm title={'The Greatest Leader'} name='input8' input={inputClass} defaultValue={getSingleDoc.responseData.input8} checkbox={'hidden'} type={'number'} />
            <CreateForm title={'The Greatest Conqueror'} name='input9' input={inputClass} defaultValue={getSingleDoc.responseData.input9} checkbox={'hidden'} type={'number'} />
            <CreateForm title={'The Greatest Beating'} name='input11' input={inputClass} defaultValue={getSingleDoc.responseData.input11} checkbox={'hidden'} type={'number'} />
            <CreateForm title={'Current score in play'} name='input10' input={inputClass} defaultValue={getSingleDoc.responseData.input10}  checkbox={'hidden'} type={'number'}/>
            <CreateForm title={'Player'} name='name' defaultValue={getSingleDoc.responseData.name}
              input={'appearance-none w-[150px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'}
              checkbox={'hidden'} type={'text'} />
            <div className='flex justify-center items-center mt-10'>
              <Button title={'Delete'} color={'bg-red-500'} />
            </div>
            <div className='flex justify-center py-5'>
              <Link href={'/'}>
                <button className='bg-blue-900 text-white py-10 px-12 text-3xl font-semibold rounded-full'>Back</button>
              </Link>
            </div>
          </form>
        }
      </div>
    </div>
  )
}

export default DetailPage
