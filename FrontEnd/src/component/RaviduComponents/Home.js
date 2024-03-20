import axios from "axios";
import React, { useState } from 'react'
import './Home.css'
import '../image/im1.jpg'
export default function Home() {
    const [msg, setMsg] = useState(' ')
    const [name, setName] = useState(' ')
    const [pwd, setPwd] = useState(' ')
    const [email, setMail] = useState(' ')
    const [data, setData] = useState([])
    let submit = async (e) => {
        e.preventDefault()
        if (name == ' ' || pwd == ' ' || email == ' ') {
            alert('Please fill the details !!')
        }
        else {
            try {
                alert("Submitted")
                await axios.post("http://localhost:8000/", {
                    msg,
                    name,
                    email,
                    pwd
                })
            }
            catch {
                console.log(e);
            }
        }

    }
    let show = async (e) => {
        e.preventDefault()
        try {
            await axios.get("http://localhost:8000/").then(res => {
                if (res.data === "fail") {
                    alert("Failed")
                }
                else {
                    setData(res.data)
                }
            })
                .catch(e => {

                })
        }
        catch {
            console.log(e);
        }
    }
    function reset() {
        setName(' ');
        setPwd(' ');
        setMsg(' ');
        setMail(' ');
    }
    return (
        <body>
            <div className="cont">
                <h2>Registration Form</h2>
                <form action="POST">
                    <label>Full Name : </label>
                    <input type="text" name='name1' required onChange={(e) => { setName(e.target.value) }} placeholder="Enter Your Name"></input><br></br>
                    <label>E mail :</label>
                    <input type="email" placeholder="Enter Your email" name="email" onChange={(e) => { setMail(e.target.value) }}></input><br></br>
                    <label>PassWord :</label>
                    <input type="passWord" placeholder="Enter Your PassWord" name="psw" onChange={(e) => { setPwd(e.target.value) }}></input><br></br>
                    <label>Free Text : </label>
                    <textarea name="text" onChange={(e) => { setMsg(e.target.value) }} cols='30' rows='3'></textarea><br></br>


                    <input type='submit' onClick={submit} value='Submit'></input>
                    <input type='reset' onClick={reset} value='Reset'></input>


                </form>
                <input type='submit' onClick={show} value='Show data'></input>
                <div className="outer">
                    <div className="tablew">
                        <table border='1' cellSpacing='0'>
                            <tr>
                                <th>Name </th>
                                <th>Message</th>
                                <th>E mail</th>
                                <th>PassWord</th>
                            </tr>
                            {
                                data.map((e) => (
                                    <tr>
                                        <td>{e.name}</td>
                                        <td>{e.msg}</td>
                                        <td>{e.email}</td>
                                        <td>{e.pwd}</td>

                                    </tr>

                                ))
                            }
                        </table>

                    </div>

                </div>



            </div>

        </body>
    );

}