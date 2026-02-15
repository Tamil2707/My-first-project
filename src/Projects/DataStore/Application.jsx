import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import StutentDetail from './StutentDetail'
import { addData } from './DataSlice'

function Application() {
    const[degree,setDegree]=useState("")
    const[name,setName]=useState("")
    const[birth,setBirth]=useState("")
    const[phone,setPhone]=useState("")
    const dispatch=useDispatch()

    const Submit=()=>{
      dispatch(addData({name,birth,phone,degree}))
      console.log("SUBMIT CLICKED", { name, birth, phone, degree });
      setName("")
      setBirth("")
      setDegree("")
      setPhone("")
    }



let major={
        Bsc:["Biology","Mathematics","Pure Science","Computer Science","Bio-Maths"],
        Bcom:["General Commerce","Computer Application","Commerce with Mathematics","Commerce with Economics"],
        BA:["History","Geography","Political Science","Psychology"]
}
  return (
    <div>
      <h1>Application</h1>
      <label htmlFor="">Name</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <br />
      <label htmlFor="">DOB</label>
      <input type="date" value={birth} onChange={(e)=>setBirth(e.target.value)} />
      <br />
      <label htmlFor="">Gender</label>
      <label htmlFor="">Male</label>
      <input type="radio" name='gender'/>
      <label htmlFor="">FeMale</label>
      <input type="radio" name='gender'/>
      <br />
      <label htmlFor="">Phone</label>
      <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} />
      <br />
      <label htmlFor="">Email</label>
      <input type="email" />
      <br />
      <label htmlFor="">Degree</label>
      <select name="" id="" onChange={(e)=>setDegree(e.target.value)}>
        <option value="">select</option>
        <option value="Bsc">Bsc</option>
        <option value="Bcom">Bcom</option>
        <option value="BA">BA</option>
      </select>
      <label htmlFor="" >Major</label>
      <select name="" id="">
        <option value="">select</option>
        {degree && major[degree].map((a)=>(<option key={a}>{a}</option>))}
      </select>
      <br />
      <label htmlFor="">Address</label>
      <textarea name="" id=""></textarea>
      <br />
      <input type="checkbox" />
      <label htmlFor="">I'am Not a robot</label>
       <button onClick={Submit}>Submit</button>
       <StutentDetail/>
    </div>
  )
}

export default Application
