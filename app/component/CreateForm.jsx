import React from 'react'

export const CreateForm = ({title}) => {
  return (
    <div className='flex justify-between items-center m-3'>
                <label className=''>{title}</label>
                <input className='w-[70px]' type="number" />
    </div>
  )
}
