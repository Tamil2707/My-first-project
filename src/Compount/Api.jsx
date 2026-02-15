import React, { useState,useEffect } from "react";
import Card from "./Card";
import "./Api.css"
import Nav3 from "./Nav3";
 function  Api(){
    const[res,setres]=useState([])

    let file=async ()=>{
        let apilink=await fetch("https://dummyjson.com/products");
        let data=await apilink.json();
        setres(data.products)
}

    let fun=()=>{
        setres(false)
    }
    useEffect(()=>
    {
        file()
    }
    )
        
    return(
        <>
        <Nav3/>
        <div className="full">
            {res.map((ans)=>(
                <div className="full1"><Card share={ans}/></div>
            ))
            }
        </div>

        </>
    )
}

export default Api