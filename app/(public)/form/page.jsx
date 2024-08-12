'use client'
import { CreateForm } from '@/app/component/CreateForm'
import React, { useState } from 'react'

const Formpage = () => {



  return (
    <div>
        <h1 className='m-auto w-[250px] pt-5 font-bold text-xl'>ACHIEVEMENT BONUSES</h1>
        <form className='mt-5'>
            <CreateForm title={'+10 conquered city'} input={'hidden'} checkbox={''}/>
            <CreateForm title={'+15 if all cities were conquered'} input={'hidden'} checkbox={''}/>
            <CreateForm title={'+30 for each unplayed Round'} input='w-[70px]' checkbox={'hidden'}/>
            <CreateForm title={'+1 per card remaining in Dummy player deck'} input='w-[70px]' checkbox={'hidden'}/>
            <CreateForm title={'+5 if End of the Round was not announced on last Round'} input='w-[70px]' checkbox={'hidden'}/>
            <CreateForm title={'The Greatest Knowledge'} input={'w-[70px]'} checkbox={'hidden'}/>
            <CreateForm title={'The Greatest Knowledge'} input={'w-[70px]'} checkbox={'hidden'}/>
            <CreateForm title={'The Greatest Loot' } input={'w-[70px]'} checkbox={'hidden'}/>
            <CreateForm title={'The Greatest Leader'} input={'w-[70px]'} checkbox={'hidden'}/>
            <CreateForm title={'The Greatest Conqueror'} input={'w-[70px]'} checkbox={'hidden'}/>
            <CreateForm title={'The Greatest Adventurer'} input={'w-[70px]'} checkbox={'hidden'}/>
            <CreateForm title={'The Greatest Beating'} input={'w-[70px]'} checkbox={'hidden'}/>
        </form>
    </div>
  )
}

export default Formpage