import React from 'react'
import headerimage from "../images/comp.jpeg";

function Header() {
  return (
    <div className='container-fluid header'>
      
        <h1> Software Development Students Motivation</h1>
        <div className='header-image'>
          kk
          {/* <div className='headerimage-container'>kkkkkk</div> */}
           <img src={headerimage} alt=''/>

        </div>


    </div>


  )
}

export default Header

