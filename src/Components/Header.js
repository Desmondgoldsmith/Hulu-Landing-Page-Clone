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
   <div className='header_content'>
            <h2 className='content_1'>“The best value for your</h2>
            <h2 className='content_1'>money”</h2>
            <h3 className='content_2'>- CNET</h3>
            <h4 className='content_3'>From current episodes and original series, to kids shows and hit movies,</h4>
            <h4 className='content_4'>and hit movies, Hulu has something for everyone.</h4>
        </div>
         </div>
  )
}

export default Header