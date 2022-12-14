import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaFacebook, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const [ showLinks ,setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  /* important */
  useEffect (() => {
 const linksHeight = linksRef.current.getBoundingClientRect().height

if(showLinks) {
  linksContainerRef.current.style.height = `${linksHeight}px`
}
else{
  linksContainerRef.current.style.height = "0px";
}
  } , [showLinks])

  /* important  */
return <nav>
  <div className="nav-center">
    <div className="nav-header">
      <img src={logo} alt="logo" />
      <button className='nav-toggle' 
      onClick={ () => setShowLinks(!showLinks)}>
        <FaBars />
      </button>
    </div>


   {/*  //IMPORTANT LINE// */}

 {/*    <div className= {`${showLinks ? "links-container show-container" : "links-container"}`}>  */}

    <div className= "links-container" ref={linksContainerRef}> 
      <ul className='links' ref={linksRef}>
        {links.map((link) => {
          return    <li>
          <a href={link.url} key={link.id}>{link.text}</a>
        </li>
        })}
      </ul>
    </div>

    <ul className="social-icons">
      {social.map((social) => {
        return <li>
        <a href={social.url} key = {social.id}>{social.icon}</a>
      </li>
      })}
    </ul>
  </div>
</nav>
}

export default Navbar