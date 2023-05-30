import React from 'react'
import {Formik,Form,Field} from 'formik'
import { useState } from 'react'
import axios from 'axios'
import "../Add/Add.scss"

import toast, { Toaster } from 'react-hot-toast';
const Add = () => {
    const [title,setTitle]=useState('')
    const [price,setPirce]=useState('')
    const [desc,setDesc]=useState('')
    const item={
        title,
        price,
        desc
    }
  return (
    <div>
        <div className="forms">
      <Formik onSubmit={()=>{
        axios.post('http://localhost:8085/',item).then((res)=>{

        })
      }} initialValues={{title:"",price:"",desc:""}}>
        <Form>
            <label htmlFor="">Name:</label> <br />
            <Field id='form' onChange={(e)=>{
                setTitle(e.target.value)
            }} value={title} type="text"/> <br />


            <label htmlFor="">Price:</label> <br />
            <Field id="form" onChange={(e)=>{
                setPirce(e.target.value)
            }} value={price}  type="Number"/>   <br /> 

<label htmlFor="">Desc:</label> <br />
            <Field id="form" onChange={(e)=>{
                setDesc(e.target.valye)
            }} value={desc} type="text"/> <br />
            <button onClick={()=>{
              toast.success('Product elave olundu')

            }} type='submit'>submit</button>
        </Form>
      </Formik>
      </div>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </div>
  )
}

export default Add
