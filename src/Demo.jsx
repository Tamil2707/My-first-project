import React, { useState, useEffect } from "react";

function Demo() {
  // const [session, setSession] = useState("")
  // const[flter,setFilter]=useState([])
  // const name = ["Arun", "Tamil", "Bala", "Mani"]
  // useEffect(()=>{
  //   const result=name.filter(ans=>ans.toLocaleLowerCase().includes(session.toLocaleLowerCase()));
  //   setFilter(result)
  // },[session])

  
//   const[name,setName]=useState([])
//   const[check,setCheck]=useState(false)

//   async function fun(){ 
//   let data=await fetch("https://jsonplaceholder.typicode.com/users")
//   let result=await data.json()
//   setName(result)
// }

// useEffect(()=>{
//   if(check){
//     fun()
//   }
//   else{
//     setName([])
//   }
  
//   return()=>{
//     console.log("finished");
//   }
// },[check])

//   return (
//     <div>
//       <button onClick={()=>setCheck(!check)}>{check?"hide":"show"}</button>
//       {name.map((a)=>(<p key={a.id}>{a.name}</p>))}
//     </div>

const[count,setCount]=useState(0)
const[start,setStart]=useState(false)

useEffect(()=>{
  let time;
  if(start){
      time=setInterval(()=>{
        setCount(p=>p+1)
      },100)
  }
  return()=>{
    clearInterval(time) 
  }
},[start])


return(
  <div>
    <p>{count}</p>
    <button onClick={()=>{setStart(!start)}}>{start?"stop":"Start"}</button>
  </div>
)

  
}

export default Demo;
