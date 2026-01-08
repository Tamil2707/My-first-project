import React from "react";
import MovNav from "./MovNav";
import List from "./List";
import Movcard from "./Movcard";
import Movapi from "./Movapi";
import Footer from "./Footer";

function Home(){
    return(
        <div className="box">
            <MovNav/>
            <List/>
            <Movapi/>
            <Footer/>
        </div>
    )
}

export default Home