import React, { useContext } from 'react'
import './style.css'
import { Login } from './Usecontext'


function Footer() {
    const{userlogin,setuserlogin} =useContext(Login)
  return (
    <div className='app'>
        <h1>footer component</h1>
        {
            userlogin?<h3>login</h3>:<h3>not login</h3>
        }
    </div>
  )
}

export default Footer