import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Detail/Detail.scss'
const Detail = () => {
  const {id}=useParams()
  const[item,setData]=useState({})
  useEffect(()=>{
    axios.get(`http://localhost:8085/${id}`).then((res)=>{
      setData(res.data)
    })
  })
  return (
    <div className="card">
    <div className="card__img">
        <img src="https://preview.colorlib.com/theme/robotics/img/p1.png" alt="" />
    </div>
    <h2>{item.title}</h2>
    <p>{item.price}Azn</p>
    <p>{item.desc}</p>
    

</div>
  )
}

export default Detail
