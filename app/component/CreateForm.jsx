import { Checkbox } from '@/components/ui/checkbox'
import React, { useState } from 'react'

export const CreateForm = ({title,input,checkbox}) => {
    const [form, setForm] = useState({
    
    })

  return (
    <div className='flex justify-between items-center m-3'>
                <label className=''>{title}</label>
                <input className={input} type="number" />
                <Checkbox className={checkbox}/>
    </div>
  )
}
