import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Nav.css"
import img1 from "../image/tamil4.jpg"
function Nav6() {
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
            </div>

            <div>
                  <div className="inpt6">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search..."/>
                </div>
            </div>
            <div className="d">
                 
                    <i class="fa-regular fa-comment"></i>
                    <i className="fa-regular fa-bell bell"></i>
                        <img src={img1} alt="" />
            </div>
        </div>
    )
}
export default Nav6