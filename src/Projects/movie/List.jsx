import React, { useEffect, useRef, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import your from "./image/yourname.mp4";
import onepiece from "./image/One piece.mp4";
import demon from "./image/DEmon Slayer.mp4";
import solo from "./image/Solo leveling.mp4";
import vinland from "./image/Vinland Saga.mp4";

function List() {
  const media = [your, onepiece, demon, solo, vinland];
  const [number, setNumber] = useState(0);
  const[play,setPlay]=useState(true)
  const [sadow, setSadow] = useState("")
  const [color, setcolor] = useState("")
  const [head, sethead] = useState("")
  const[title,settitle]=useState("")


  const mouseRef = useRef(null)

  const next = () => {
    setNumber(prev => (prev + 1) % media.length);
  };

  const previous = () => {
    setNumber(prev => (prev - 1 + media.length) % media.length);
  };

  const on=()=>{
    if(!play){
      mouseRef.current.play();
    }
    else{
      mouseRef.current.pause();
    }
    setPlay(!play)
  }

 
  useEffect(() => {
    switch (number) {
      case 0:
        setSadow(" rgba(94, 94, 255, 1)")
        setcolor("white")
        sethead("YOUR NAME")
        settitle("Your Name is a beautiful anime film about two strangers mysteriously swapping bodies and forming a deep connection across time and distance.")
        break;

      case 1:
        setSadow("rgb(255, 50, 85)")
         setcolor("black")
        sethead("ONE piece")
        settitle("One Piece is a legendary anime and manga about a young pirate, Monkey D. Luffy, who sails the seas with his crew in search of the ultimate treasure to become the King of the Pirates.")
        
        break;

      case 2:
        setSadow("brown")
         setcolor("red")
        sethead("Demon Slayer")
        settitle("Demon Slayer is an action anime about Tanjiro Kamado, a kind-hearted boy who fights demons to save his sister and avenge his family.")
        break;

      case 3:
        setSadow("black")
         setcolor("white")
        sethead("Solo Leveling")
        settitle("Solo Leveling is a fantasy action story about Sung Jin-Woo, the weakest hunter who gains the power to level up alone and becomes the strongest.")
        break;

      case 4:
        setSadow(" rgb(78, 78, 109)")
        setcolor("blue")
        sethead("Vinland Saga")
        settitle("Vinland Saga is a historical anime about Thorfinn, a young warrior seeking revenge while discovering the true meaning of peace and a land without war.")
        break;

      default:
        break;
    }
  }, [number])

  return (
    <div className="container-fluit list">
      <button onClick={previous} style={{backgroundColor:`${sadow}`}}><i class="fa-solid fa-angle-left"></i></button>

      <video
        key={number}
        ref={mouseRef}
        src={media[number]}
        muted
        autoPlay
        onEnded={next}        
      />
      <button className="on" onClick={on} style={play?{backgroundColor:"White",paddingRight:"50px"}:{backgroundColor:"black",paddingLeft:"35px"}}>{play?<i class="fa-solid fa-circle-pause"></i>:<i class="fa-solid fa-circle-play"></i>}</button>
      <div className="text">
        <h2 style={{color:`${color}`}}>{head}</h2>
        <p style={{color:`${color}`}}>{title}</p>
      </div>
      <button onClick={next} style={{backgroundColor:`${sadow}`}}><i class="fa-solid fa-angle-right"></i></button>
    </div>
  );
}

export default List;
