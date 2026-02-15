import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Nav.css"
function Nav1() {
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
            <div className="b">
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Features</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className="c">
                <h3>Sign in</h3>
                <button>Register</button>
            </div>
        </div>
    )
}
export default Nav1