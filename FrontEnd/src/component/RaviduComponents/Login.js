import axios from "axios";
import React, { useState } from 'react';
import Routeinfo from "./Routeinfo";
export default function Login(){
    const [data, setData] = useState([])
    const [ttmail, setTmail] = useState('')
    const [tpwd, setTpwd] = useState('')
    const [check, setCheck] = useState('false')
    const [logvis, setLogvis] = useState('false')
    
   let pwdt,mailt=false
 
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
       {
        data.map((e)=>{
            if(e.email===ttmail)
            {
                if(e.pwd===tpwd)
                {
                    pwdt=true
                    mailt=true
                }
                else
                {
                    mailt=true
                    pwdt=false
                }   
            }
           
        })
        }
        if(pwdt==true&&(mailt==true))
       {
        alert('Login Completed!!!')
        setCheck('true')
       }
       else if(pwdt===false&&(mailt===true))
       {
        alert('Invalid Password !!!')
       }
       else
       {
        alert('Invalid Email!!')
       }

    }
    return(
        <>
            {check=='true'?<Routeinfo/>:
            <>
            <h2>Login Page</h2>
            <form action="POST">
                <label>Enter Email : </label>
                <input type="email" placeholder="Enter Your Email" required onChange={(e) => { setTmail(e.target.value) }}></input><br></br>
                <label>Enter Password : </label>
                <input type="password" placeholder="Enter Your Password" required onChange={(e) => { setTpwd(e.target.value) }}></input><br></br>
                <input type="submit" value='Login' onClick={show}></input>
            </form>
            </>
            }
        </>
    );
}