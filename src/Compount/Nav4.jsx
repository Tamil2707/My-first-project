import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Nav.css"
import img1 from "../image/tamil4.jpg"
function Nav4() {
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
            <div className="d">
                 
                <div className="inpt">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search..."/>
                </div>
                    <i class="fa-regular fa-comment"></i>
                    <i className="fa-regular fa-bell bell"></i>
                        <img src={img1} alt="" />
            </div>
        </div>
    )
}
export default Nav4