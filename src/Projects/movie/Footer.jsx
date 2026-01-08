import React from "react";
import bg from "./image/footimg.jpg"
function Footer(){
    return(
        <div className="foot">
            <img src={bg} alt="" />
            <hr/>
            <div className="container explore row g-3 ">
                <div className="col lg-6 md-12 sm-12 d-flex hell">
                <ul>
                    <li><h3>EXPLORE</h3></li>
                    <li>Help Center</li>
                    <li>Account</li>
                    <li>Way to Watch</li>
                </ul>

                <ul>
                    <li><h3>LEGAL</h3></li>
                    <li>Only on Netflix</li>
                    <li>Cookie Preferences</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>Gift Card Terms</li>
                    <li>Legal Notices</li>
                    <li>Corporate Information</li>
                </ul>

                <ul>
                    <li><h3>SUPPORT</h3></li>
                    <li>FAQ</li>
                    <li>Speed Test</li>
                    <li>Contact Us</li>
                    <li>Jobs</li>
                    <li>Media Center</li>
                    <li>Investor Relations</li>
                </ul>
                </div>

                <div className="col lg-6 subscribe">        
                    <div>
                    <h2>Subscribe To Newsletters</h2>
                    <input type="text" name="" id="" />
                    <button>Subscribe</button>
                    <ul>
                    <li><i class="fa-brands fa-square-instagram"></i></li>
                    <li><i class="fa-brands fa-facebook"></i></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                    </ul>
                    </div>
                </div>

            </div>

            <div className="contact">
                    <ul>
                    <li><i class="fa-solid fa-phone"></i> +91 7695833108</li>
                    <li><i class="fa-solid fa-envelope"></i> tk644162@gmail.com</li>     
                    </ul>
                </div>

=        </div>
    )
}

 export default Footer