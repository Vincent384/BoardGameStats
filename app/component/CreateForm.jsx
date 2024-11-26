import { Checkbox } from '@/components/ui/checkbox'
import React, { useRef, useState } from 'react'

export const CreateForm = ({title,input,checkbox,value,name,handleChange,checked,handleCheckboxChange}) => {


  
  return (
    <div className='flex justify-between items-center m-3'>
                <label className=''>{title}</label>
                <input className={input} value={value} autoComplete="off" name={name} onChange={handleChange} type="number" />
                <Checkbox className={checkbox} checked={checked} onCheckedChange={handleCheckboxChange} name={name}/>
    </div>
  )
}
