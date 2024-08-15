'use client'
import { db } from '@/firebase.config'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

const MageknightStats = () => {

const [statList, setStatList] = useState([])

    useEffect(() => {
      const getData = async () =>{
        try {
            const querySnapshot = await getDocs(collection(db,'mageknight'))
            const projectData = querySnapshot.docs.map(doc => ({
                id:doc.id,
                ...doc.data()
            }))
            setStatList(projectData)
        } catch (error) {
            console.error(error.message)
        }
      }
    
      getData()
    }, [])
    

  return (
    <div>{statList.map((item,index)=>(
        <p key={index}>{item}</p>
    ))}</div>
  )
}

export default MageknightStats