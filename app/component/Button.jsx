import React from 'react'

export const Button = ({title,color}) => {
  return (
    <div>
        <button className={`py-2 px-4 ${color} rounded-full text-white font-bold`}>{title}</button>
    </div>
  )
}
