import React from 'react'
import splunkBg from '../img/splunk_bg.jpg'
import './LoginScreen.scss'



export default function LoginScreen() {
  return (
      <div className='login-screen'>
          <img src={splunkBg} className='bg-img' alt='bg-img-splunk'/>
          {/* <div>LoginScreen</div> */}
          <div className='input-box'>
              <label>
                <input type='radio' value="option1" checked={true}></input>
                User
                </label>
              
              
          </div>
    </div>
  )
}
