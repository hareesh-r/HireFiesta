import React, { useState,useEffect } from 'react'
import $ from 'jquery';
import Home from './Home'
import '../css/Login.css'
import '../scripts/Login'

const API = require("../../API.json")

export default function Login() {

const [showSignUp,setShowSignUp] = useState(false)
const [showSignIn,setShowSignIn] = useState(true)
const [showSignUpAsUser,setShowSignUpAsUser] = useState(true)
const [showSignUpAsCompany,setshowSignUpAsCompany] = useState(false)
const [userName,setUserName]  = useState("")
const [userEmail,setUserEmail]  = useState("")
const [userPassWord,setUserPassWord]  = useState("")
const [isCompany,setisCompany]  = useState(false)
const [url,setUrl] = useState(API.Main)
 
  useEffect(() => {
    window.catalyst.auth.signIn("login")
}, [showSignIn]);

const signup = () =>{

  if(userName==""||userPassWord==""||userEmail==""){
    console.log("repeating")
  }
  else{
    POST_TO_DB()
  }


}

const POST_TO_DB = ()=>{
  console.log("proceedig")
  const requestoptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body : JSON.stringify({
      "userName" : userName,
      "userEmail" : userEmail,
      "userPassword" : userPassWord,
      "isCompany" : isCompany
    }),
  }
    fetch(url+"addUser",requestoptions)
    .then((response)=>{
      alert("please confirm your same password in your mail")
      setShowSignIn(true)
      setShowSignUp(false)
    })
    .catch((e)=>{
      console.log(e)
    })
}

return (
    <>
    <div class= "login-container">
        <button onClick={()=>{
          setShowSignIn(false)
          setShowSignUp(true)
        }}>SignUp</button>
        <button onClick={()=>{
          setShowSignIn(true)
          setShowSignUp(false)
        }}>SignIn</button>
    </div>

    {
      showSignIn?<div id ="login" className='login' > </div>:<></>
    }
  {
    showSignUp?<div className='signup'>

      <div>
        <button onClick={()=>{
          setShowSignUpAsUser(true)
          setshowSignUpAsCompany(false)
        }}>sign up as user</button>
        <button onClick={()=>{
          setShowSignUpAsUser(false)
          setshowSignUpAsCompany(true)
        }}>sign up as coompany</button>
      </div>

      {
        showSignUpAsUser?<div className='normal-user' id="normal-user">
       
          <p>Sign Up as User to view Jobs</p>
        <label>
          Name:
          <input type="text" 
          name="name" 
          value={userName}
          onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="Email" name="Email" value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input type="text" name="Password" value={userPassWord}
            onChange={(e) => {
              setUserPassWord(e.target.value)
              setisCompany(false)}} />
        </label>
        <input value="false" name="isCompany" hidden={true}/>
        
      </div>:<></>
      }
    

      {showSignUpAsCompany?<div className='company-user' id='company-user'>
    
    <p>Sign Up as Company to Post Jobs</p>
      <label>
        Name:
        <input type="text" 
        name="name" 
        value={userName}
        onChange={(e) => setUserName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="Email" name="Email" value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)} />
      </label>
      <label>
        Password
        <input type="text" name="Password" value={userPassWord}
          onChange={(e) => {
            setUserPassWord(e.target.value)
            setisCompany(true)}} />
      </label>
      <input value="true" name="isCompany" hidden={true}/>
      
    </div>:<></>}
    <button onClick={()=>{signup()}}>SignUp</button>
    
      
  </div>:
  <></>
  }

    
    </>
    
);
}
