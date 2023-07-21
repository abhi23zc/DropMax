import React, { useEffect, useState } from 'react'
import Nav from '../Navabr/Nav'
import { flushSync } from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'
import "./Css/Signup.css"
import {signInWithEmailAndPassword} from "@firebase/auth"
import { auth } from '../../config'

function Login() {

  const [user, setuser] = useState("")
  const [password, setpassword] = useState("")
  const [name, setname] = useState("")

  const navigate  = useNavigate()

  useEffect(() => {

    const myuid = localStorage.getItem('uid');
    if(!myuid){
      console.log("login failed")
      
      navigate("/login")
      
      
    }
    else{
      navigate("/")
      console.log(myuid)
      
    }
  }, [])
  


  const signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, user, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        localStorage.setItem('uid', user.uid);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }

  return (
    <>
      <Nav login={true} signup={true} />
      <div class="wrapper">
        <div class="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrBtXpPLxLdMoIBy5loVZRKzO67nKSSBdv5UCbNjoxdkURk9GNZdOY90VYs3JR4YMDfwE&usqp=CAU" alt="" />
        </div>
        <div class="text-center mt-4 name">
          Login
        </div>
        <form class="p-3 mt-3">

          <div class="form-field d-flex align-items-center">
            <span class="far fa-user"></span>
            <input type="text" name="userName" id="userName" placeholder="Email" onChange={(e) => {
                            setuser(e.target.value)}} />
          </div>
          <div class="form-field d-flex align-items-center">
            <span class="fas fa-key"></span>
            <input type="password" name="password" id="pwd" placeholder="Password" onChange={(e) => {
                            setpassword(e.target.value)}} />
          </div>
          <button class="btn mt-3" onClick={(e)=>{
            signin(e);
          }}>Login</button>
        </form>
        <div class="text-center fs-6">
          <a href="#">Forget password?</a> or <Link to="/signup">SignUp</Link>
        </div>
      </div>
    </>
  )
}

export default Login