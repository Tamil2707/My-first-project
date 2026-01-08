import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";
import Movcard from "./Movcard";

function Movapi(){

    const[all,setAll]=useState([])
    async function  api(){
        let data=await fetch("https://api.jikan.moe/v4/top/anime?type=movie");
        let org=await data.json()
        setAll(org.data)
    }

    useEffect(()=>{
        api()
    },[])

    return(
        <div className="container box2">
        <h1>COLLECTION</h1><hr/>
        <div className="car">
            {all.slice(0,8).map((anime)=>(<Movcard key={anime.ma_id} share={anime}/>))}
        </div>
        </div>
    )
}

export default Movapi