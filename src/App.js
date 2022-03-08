
import './App.css';
import { auth } from './firebase-config';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'

import { useState } from 'react';

function App() {
  const [useremail,setuseremail]=useState('')
  const [userpassword,setuserpassword]=useState('')

  const [loginuseremail,setloginuseremail]=useState('')
  const [loginuserpassword,setloginuserpassword]=useState('')

  
 
  const signup=async()=>{
    try{
      const user = await createUserWithEmailAndPassword(auth,useremail,userpassword)
      console.log(user)
      alert("registered sucessfully..")
    }catch(error){
      console.log(error)
      alert(error.message)
    }
  }
  
 
  const login=async()=>{
    try{
      const loginuser = await signInWithEmailAndPassword(auth,loginuseremail,loginuserpassword)
      console.log(loginuser)
    }catch(error){
      console.log(error)
      alert(error.message)
    }
  }
  return (
     <div className='App'>
       <h1>sign up</h1>
       <div>
         <label>useremail </label>
         <input type="text" value={useremail} onChange={(e)=>{setuseremail(e.target.value)}}/>
       </div>
       <div>
         <label>password </label>
         <input type="text"  value={userpassword} onChange={(e)=>{setuserpassword(e.target.value)}}/>
       </div>
       <button onClick={signup}>register</button>
       <div>
       <h1>login</h1>
       <div>
         <label>useremail  </label>
         <input type="text" value={loginuseremail} onChange={(e)=>{setloginuseremail(e.target.value)}}/>
       </div>
       <div>
         <label>password </label>
         <input type="text"  value={loginuserpassword} onChange={(e)=>{setloginuserpassword(e.target.value)}} />
       </div>
       <button onClick={login}>login</button>
       </div>
      
       </div>
  );
}

export default App;
