'use client'
import { Button } from '@/app/component/Button'
import { CreateForm } from '@/app/component/CreateForm'
import React, { useRef, useState } from 'react'

const Formpage = () => {
const [form, setForm] = useState({
  input1:'',
  input2:'',
  input3:'',
  input4:'',
  input5:'',
  input6:'',
  input7:'',
  input8:'',
  input9:'',
  input10:'',
  input11:'',
  input12:'',
})
const title12Ref = useRef()
const inputClass = 'w-[70px] text-center'

const handleChange = (e) =>{
  setForm(data => {
    return {
      ...data,
      [e.target.name]:e.target.value
    }
  })
}

const handleSubmit = (e) =>{
  e.preventDefault()
  console.log(form.input12)
}
  return (
    <div>
        <h1 className='m-auto w-[250px] pt-5 font-bold text-xl'>ACHIEVEMENT BONUSES</h1>
        <form className='mt-5' onSubmit={handleSubmit}>
            <CreateForm title={'+10 conquered city'} input={'hidden'} checkbox={''}/>
            <CreateForm title={'+15 if all cities were conquered'} input={'hidden'} checkbox={''}/>
            <CreateForm title={'+30 for each unplayed Round'} input={inputClass} checkbox={'hidden'}/>
            <CreateForm title={'+1 per card remaining in Dummy player deck'} input={inputClass} checkbox={'hidden'}/>
            <CreateForm title={'+5 if End of the Round was not announced on last Round'} input={inputClass} checkbox={'hidden'}/>
            <CreateForm title={'The Greatest Knowledge'} input={inputClass} checkbox={'hidden'}/>
            <CreateForm title={'The Greatest Knowledge'} input={inputClass} checkbox={'hidden'}/>
            <CreateForm title={'The Greatest Loot' } input={inputClass} checkbox={'hidden'}/>
            <CreateForm title={'The Greatest Leader'} input={inputClass} checkbox={'hidden'}/>
            <CreateForm title={'The Greatest Conqueror'} input={inputClass} checkbox={'hidden'}/>
            <CreateForm title={'The Greatest Adventurer'} input={inputClass} checkbox={'hidden'}/>
            <CreateForm title={'The Greatest Beating'} name={form.input12} value={form.input12} handleChange={handleChange} input={inputClass} checkbox={'hidden'}/>
            <div className='flex justify-center items-center mt-10'>
              <Button title={'Submit'} color={'bg-emerald-500'}/>
            </div>
        </form>
        <p>{form.input12}</p>
    </div>
  )
}

export default Formpage