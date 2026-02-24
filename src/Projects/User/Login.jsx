import React, { useState } from 'react'
import "./User.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
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


    const [logdata, setLogdata] = useState({
        Email: "",
        Password: ""
    })


    const enter = (e) => {
        const { name, value } = e.target
        setLogdata({ ...logdata, [name]: value })
    }

    const submit = async () => {

        const check = await axios.get(`http://localhost:3000/information?Email=${logdata.Email}`)
        if (check.data.length > 0) {

            if (logdata.Email == check.data[0].Email) {
                if (logdata.Password == check.data[0].Password) {
                    alert("page")
                }
                else {
                    alert("Incorrect password")
                    console.log(check.data)
                }
            }
            else {
                alert("Invalid Email")
            }

        }
        else {
            alert("This account not exits")
        }
    }

    return (
        <div>
            <div className='container R-m'>
                <div className='R-box1'>
                    <div className='R-box2'>
                        <div className='R-box'>
                            <div className='R-h1'>
                                <h1>LoG in</h1>
                            </div>

                            <div className={`R-in ${logdata.Email || focus.Email ? "active1" : ""}`}>
                                <input type="text" name='Email' value={logdata.Email} onChange={enter} onFocus={() => cus("Email")} onBlur={() => blr("Email")} />
                                <label><i class="fa-solid fa-envelope"></i> Email</label>
                                <br />
                            </div>

                            <div className={`R-in ${logdata.Password || focus.Password ? "active2" : ""}`}>
                                <input type="password" name='Password' value={logdata.Password} onChange={enter} onFocus={() => cus("Password")} onBlur={() => blr("Password")} />
                                <label><i class="fa-solid fa-lock"></i> Password</label>
                                <br />
                            </div>

                            <div className='R-but'>
                                <button onClick={submit}>Login</button>
                            </div>

                            <div className='R-but'>
                                <button onClick={()=>navicate("/Register")}>Register</button>
                            </div>
                            <div className='R-check'>
                                <div className='R-c'>
                                    <input type="checkbox" required />
                                    <p>Remember Me</p>
                                </div>

                                <div className='R-ch'>
                                    <p>Forget Password</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
