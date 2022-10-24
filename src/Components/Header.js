import React from 'react'
import './header.css';

function Header() {
  return (
    <div className = 'Header' >
      <div className='header_logo'>
        <img src='https://raw.githubusercontent.com/bradtraversy/hulu-webpage-clone/main/img/logo.png' alt='hulu logo'/>
        <button>LOG IN</button>
      </div>
    </div>
  )
}

export default Header