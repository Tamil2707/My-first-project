import React, { useState } from 'react'
import "./User.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {

    const navicate=useNavigate()
    const [focus, setFocus] = useState({
        Name: false,
        Email: false,
        Password: false
    })

    const cus = (a) => {
        setFocus((pre) => {
            return {
                ...pre,
                [a]: true
            }
        })
    }

    const blr = (a) => {
        setFocus((pre) => {
            return {
                ...pre,
                [a]: false
            }
        })
    }


    const [data, setData] = useState({
        Name: "",
        Email: "",
        Password: ""
    })


    const enter = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
        if (value !== "") {
            setFocus(true)
        }
        else {
            setFocus(false)
        }
    }

    const submit = async() => {

        const check=await axios.get(`http://localhost:3000/information?Email=${data.Email}`)
        if(check.data.length>0){
            alert("Alredy Register")
            return;
        }

        const insert={
            Name:data.Name,
            Email:data.Email,
            Password:data.Password
        }
        const add=await axios.post("http://localhost:3000/information",insert)
        console.log("Add Userdata",add.data);
        alert("Register Sucssesfully")
        return;
    }

    return (
        <div className='R-disply'>
            <div className='container R-m'>
                <div className='R-box1'>
                <div className='R-box2'>
                <div className='R-box'>
                    <div className='R-h1'>
                        <h1>REGISTER</h1>
                    </div>

                    <div className={`R-in ${data.Name || focus.Name ? "active" : ""}`}>
                        <input type="text" name='Name' value={data.Name} onChange={enter} onFocus={() => cus("Name")} onBlur={() => blr("Name")} />
                        <label><i class="fa-solid fa-user"></i> Name</label>
                        <br/>
                    </div>

                    <div className={`R-in ${data.Email || focus.Email ? "active1" : ""}`}>
                        <input type="text" name='Email' value={data.Email} onChange={enter} onFocus={() => cus("Email")} onBlur={() => blr("Email")} />
                        <label><i class="fa-solid fa-envelope"></i> Email</label>
                        <br/>
                    </div>

                    <div className={`R-in ${data.Password || focus.Password ? "active2" : ""}`}>
                        <input type="text" name='Password' value={data.Password} onChange={enter} onFocus={() => cus("Password")} onBlur={() => blr("Password")} />
                        <label><i class="fa-solid fa-lock"></i> Password</label>
                        <br/>
                    </div>

                    <div className='R-but'>
                        <button onClick={submit}>Sign Up</button>
                    </div>

                    <div className='R-account'>
                        <h6>Already have an account?<span onClick={()=>navicate("/Login")}>login</span></h6>
                    </div>

                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Register
