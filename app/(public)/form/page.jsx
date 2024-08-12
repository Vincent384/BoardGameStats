'use client'
import { CreateForm } from '@/app/component/CreateForm'
import React, { useState } from 'react'

const Formpage = () => {



  return (
    <div>
        <h1 className='m-auto w-[250px] pt-5 font-bold text-xl'>ACHIEVEMENT BONUSES</h1>
        <form className='mt-5'>
            <CreateForm title={'The Greatest Knowledge'}/>
            <CreateForm title={'The Greatest Loot'}/>
            <CreateForm title={'The Greatest Leader'}/>
            <CreateForm title={'The Greatest Conqueror'}/>
            <CreateForm title={'The Greatest Adventurer'}/>
            <CreateForm title={'The Greatest Beating'}/>
        </form>
    </div>
  )
}

export default Formpage