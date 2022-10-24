import React from 'react'
import './header.css';

function Header() {
  return (
    <div className = 'Header' style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),
                       rgba(0, 0, 0, 0.1)), url("https://raw.githubusercontent.com/bradtraversy/hulu-webpage-clone/main/img/header.jpg")`,
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
            <button className='free_button'>TRY UP TO ONE MONTH FREE</button>
            <p className='trial'>Free trial offer valid for new and eligible returning subscribers only.</p>
        </div>
     <div className='alert_info'>
    <img src='https://www.hulu.com/static/hitch/s3/attachments/ckdthb9le0phf19ym5bdn91yq-dplus-logo-0-1-2.png' alt='alert'/>
      <div className='alert_text'>
      <h3>BUNDLE WITH ANY HULU PLAN & SAVE</h3>
     <h2>Get Hulu, Disney+, and ESPN+.</h2>
      </div>
     </div>   
         </div>
  )
}

export default Header