'use client'
import { Button } from '@/app/component/Button'
import { CreateForm } from '@/app/component/CreateForm'
import React, { useRef, useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';



const Formpage = () => {
const [form, setForm] = useState({
  input3:0,
  input4:0,
  input5:0,
  input6:0,
  input7:0,
  input8:0,
  input9:0,
  input10:0,
  input11:0,
  name:''
})

const router = useRouter()

const [checkboxes, setCheckboxes] = useState({
  checkbox1:false,
  checkbox2:false,
})
const inputClass = 'appearance-none w-[70px] text-center border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'

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
 
async function calculateForm(){
 
    checkboxes.checkbox1
    checkboxes.checkbox2
   let in3 = Number(form.input3)
   let in4 = Number(form.input4)
   let in5 = Number(form.input5)
   let in6 = Number(form.input6)
   let in7 = Number(form.input7)
   let in8 = Number(form.input8)
   let in9 = Number(form.input9)
   let in10 = Number(form.input10)
   let in11 =Number(form.input11)

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
    input3:Number(form.input3),
    input4:Number(form.input4),
    input5:Number(form.input5),
    input6:Number(form.input6),
    input7:Number(form.input7),
    input8:Number(form.input8),
    input9:Number(form.input9),
    input10:Number(form.input10),
    input11:Number(form.input11),
    result:result,
    name:form.name
  }

}

const handleSubmit = async (e) =>{
  e.preventDefault()
  
  const responseData = await calculateForm()
  console.log(responseData)
if(responseData){
  try {
    const res = await fetch('http://localhost:3000/api/score',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(responseData)
    })

    const data = await res.json()
    console.log(data)

    if(res.status === 201){
      router.push('mageknight/stats')
    }

  } catch (error) {
    console.log(error)
  }
  
}



  
}
  return (
    <div className=''>
        <h1 className='m-auto w-[250px] pt-5 font-bold text-xl'>ACHIEVEMENT BONUSES</h1>
        <form className='mt-5' onSubmit={handleSubmit}>
            <CreateForm title={'+15 if all cities were conquered'} name='checkbox1' input={'hidden'} checked={checkboxes.checkbox1} handleCheckboxChange={(checked) => handleCheckboxChange(checked,'checkbox1')} checkbox={''}/>
            <CreateForm title={'+5 if End of the Round was not announced on last Round'} name='checkbox2' input={'hidden'} checked={checkboxes.checkbox2} handleCheckboxChange={(checked) => handleCheckboxChange(checked,'checkbox2')} checkbox={''}/>
            <CreateForm title={'+10 per conquered city'} name='input3' input={inputClass} handleChange={handleChange} checkbox={'hidden'} type={'number'}/>
            <CreateForm title={'+30 for each unplayed Round'} name='input4' input={inputClass} handleChange={handleChange} checkbox={'hidden'} type={'number'}/>
            <CreateForm title={'+1 per card remaining in Dummy player deck'} name='input5' input={inputClass} handleChange={handleChange} checkbox={'hidden'} type={'number'}/>
            <CreateForm title={'The Greatest Knowledge'} name='input6' input={inputClass} handleChange={handleChange} checkbox={'hidden'} type={'number'}/>
            <CreateForm title={'The Greatest Loot' } name='input7' input={inputClass} handleChange={handleChange} checkbox={'hidden'} type={'number'}/>
            <CreateForm title={'The Greatest Leader'} name='input8' input={inputClass} handleChange={handleChange} checkbox={'hidden'} type={'number'}/>
            <CreateForm title={'The Greatest Conqueror'} name='input9' input={inputClass} handleChange={handleChange} checkbox={'hidden'} type={'number'}/>
            <CreateForm title={'The Greatest Beating'} name='input11' handleChange={handleChange} input={inputClass} checkbox={'hidden'} type={'number'}/>
            <CreateForm title={'Current score in play'} name='input10' handleChange={handleChange} input={inputClass} checkbox={'hidden'} type={'number'}/>
            <CreateForm title={'Player'} name='name' handleChange={handleChange}
             input={'appearance-none w-[150px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'}
             checkbox={'hidden'} type={'text'}/>
            <div className='flex justify-center items-center mt-10'>
              <Button title={'Submit'} color={'bg-emerald-500'}/>
            </div>
        <div className='flex justify-center py-5'>
        <Link href={'/'}>
          <button className='bg-blue-900 text-white px-8 py-2 text-3xl font-semibold rounded-full'>Back</button>
        </Link>
      </div>
        </form>
    </div>
  )
}

export default Formpage