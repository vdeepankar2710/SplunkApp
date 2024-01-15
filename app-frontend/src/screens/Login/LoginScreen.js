import React, { useState } from 'react'
import splunkBg from '../../img/splunk_bg.jpg'
import './LoginScreen.scss'
import { ROLE } from '../../constants/common-constants'
import { useNavigate } from 'react-router-dom';
import { PAGE_ROUTES } from '../../constants/route-constants';


export default function LoginScreen(props) {

    const [role, setRole] = useState(ROLE.USER);
    const navigate = useNavigate();
    const handleRoleChange = (role) => {
        setRole(role)
    }
    // console.log("role", role);

    const handleSigninClick = () => {
        navigate(PAGE_ROUTES.DASHBOARD)
        
    }

    return ( 
        <div className='login-screen'>
            <img src={splunkBg} className='bg-img' alt='bg-img-splunk'/>
            {/* <div>LoginScreen</div> */}
            <div className='input-box'>
                <label>
                    <input type='radio' value="option-user" defaultChecked={true} name='role' onChange={()=>handleRoleChange(ROLE.USER)}/>
                        User
                </label>
                <label>
                    <input type='radio' value="option-admin" name='role' onChange={()=>handleRoleChange(ROLE.ADMIN)}/>
                        Admin
                </label>
                <div className='signin-btn' onClick={handleSigninClick}>Sign In</div>
                
            </div>
        </div>
    )
}
