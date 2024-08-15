'use client'
import { Button } from '@/app/component/Button'
import { CreateForm } from '@/app/component/CreateForm'
import React, { useRef, useState } from 'react'
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import { db } from '@/firebase.config';
import { useRouter } from 'next/navigation';



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

const router = useRouter()

const [checkboxes, setCheckboxes] = useState({
  checkbox1:false,
  checkbox2:false,
})
const inputClass = 'w-[70px] text-center'

const handleChange = (e) =>{
  setForm(data => {
    return {
      ...data,
      [e.target.name]:e.target.value
    }
  })
}
const handleCheckboxChange = (checked,name) => {
  setCheckboxes(data => ({
    ...data,
    [name]:checked
  }));
};


const handleSubmit = async (e) =>{
  e.preventDefault()

  console.log(checkboxes)
  const sendData = await addDoc(collection(db,'mageknight',),{
    checkbox1:checkboxes.checkbox1,
    checkbox2:checkboxes.checkbox2,
    input3:form.input3,
    input4:form.input4,
    input5:form.input5,
    input6:form.input6,
    input7:form.input7,
    input8:form.input8,
    input9:form.input9,
    input10:form.input10,
    input11:form.input11,
    input12:form.input12,
  })
  console.log(sendData)
  router.push('mageknight/stats')
  
}
  return (
    <div>
        <h1 className='m-auto w-[250px] pt-5 font-bold text-xl'>ACHIEVEMENT BONUSES</h1>
        <form className='mt-5' onSubmit={handleSubmit}>
            <CreateForm title={'+10 conquered city'} name='checkbox1' input={'hidden'} checked={checkboxes.checkbox1} handleCheckboxChange={(checked) => handleCheckboxChange(checked,'checkbox1')} checkbox={''}/>
            <CreateForm title={'+15 if all cities were conquered'} name='checkbox2' input={'hidden'} checked={checkboxes.checkbox2} handleCheckboxChange={(checked) => handleCheckboxChange(checked,'checkbox2')} checkbox={''}/>
            <CreateForm title={'+30 for each unplayed Round'} name='input3' input={inputClass} handleChange={handleChange} checkbox={'hidden'}/>
            <CreateForm title={'+1 per card remaining in Dummy player deck'} name='input4' input={inputClass} handleChange={handleChange} checkbox={'hidden'}/>
            <CreateForm title={'+5 if End of the Round was not announced on last Round'} name='input5' input={inputClass} handleChange={handleChange} checkbox={'hidden'}/>
            <CreateForm title={'The Greatest Knowledge'} name='input6' input={inputClass} handleChange={handleChange} checkbox={'hidden'}/>
            <CreateForm title={'The Greatest Knowledge'} name='input7' input={inputClass} handleChange={handleChange} checkbox={'hidden'}/>
            <CreateForm title={'The Greatest Loot' } name='input8' input={inputClass} handleChange={handleChange} checkbox={'hidden'}/>
            <CreateForm title={'The Greatest Leader'} name='input9' input={inputClass} handleChange={handleChange} checkbox={'hidden'}/>
            <CreateForm title={'The Greatest Conqueror'} name='input10' input={inputClass} handleChange={handleChange} checkbox={'hidden'}/>
            <CreateForm title={'The Greatest Adventurer'} name='input11' input={inputClass} handleChange={handleChange} checkbox={'hidden'}/>
            <CreateForm title={'The Greatest Beating'} name='input12' value={form.input12} handleChange={handleChange} input={inputClass} checkbox={'hidden'}/>
            <div className='flex justify-center items-center mt-10'>
              <Button title={'Submit'} color={'bg-emerald-500'}/>
            </div>
        </form>
        <p>{form.input12}</p>
    </div>
  )
}

export default Formpage