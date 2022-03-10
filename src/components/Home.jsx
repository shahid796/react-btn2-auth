import React, { useContext } from 'react'
import './style.css'
import { Login } from './Usecontext'

function Home() {
    const{userlogin,setuserlogin} =useContext(Login)
  return (
    <div className='app'>
        <h1>home component</h1>
        <button onClick={()=>{setuserlogin(!userlogin)}}>click to login</button>
        {
            userlogin?<h3>login</h3>:<h3>not login</h3>
        }
    </div>
  )
}

export default Home