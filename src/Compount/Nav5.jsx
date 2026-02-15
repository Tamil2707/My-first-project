import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Nav.css"
import img1 from "../image/tamil4.jpg"
function Nav5() {
    return (
        <div className="box">
            <div className="a">
                <div className="icon">
                    <div className="a1">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <i class="fa-solid fa-bolt"></i>
                </div>
                <h2>clever</h2>

                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Features</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className="e">  
                <div className="inpt5">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search..."/>
                </div>
                        <img src={img1} alt="" />
                        <p>Tamil</p>
                        <i class="fa-solid fa-angle-down"></i>
            </div>
        </div>
    )
}
export default Nav5