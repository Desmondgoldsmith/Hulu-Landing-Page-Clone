import React from 'react'
import './header.css';

function Header() {
  return (
    <div className = 'Header' style={{
        backgroundImage: `linear-gradient(rgba(2.9, 0.5, 0.5, 0.5),
                       rgba(0.8, 0.5, 0, 0.5)), url("https://raw.githubusercontent.com/bradtraversy/hulu-webpage-clone/main/img/header.jpg")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
    }} >
      <div className='header_logo'>
        <img src='https://raw.githubusercontent.com/bradtraversy/hulu-webpage-clone/main/img/logo.png' alt='hulu logo'/>
        <button>LOG IN</button>
      </div>
    </div>
  )
}

export default Header