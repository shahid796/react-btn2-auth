import React, { useState } from 'react'
import Footer from './Footer'
import Head from './Head'
import Home from './Home'
import { Login } from './Usecontext'


function Main() {
   const[userlogin,setuserlogin] =useState(false)
  return (
    <div>
        <Login.Provider value={{userlogin,setuserlogin}}>
       <Head/>
       <Home/>
       <Footer/>
         
        </Login.Provider>
    </div>
  )
}

export default Main