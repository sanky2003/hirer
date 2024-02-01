import { useState } from "react"
import React from 'react'
// import {swiggy , zomato , airtel , ambarsky , daikin , jpg , mahindra , moneylink , paytm , policybazaar , rapido } from './Hirers/airtel.png'
import airtelImage from './Hirers/airtel.png';
import ambarsky from './Hirers/ambarsky.png';
import daikin from './Hirers/daikin.png';
import jpg from './Hirers/jpg.png';
import mahindra from './Hirers/mahindra.png';
import moneylink from './Hirers/moneylink.png';
import paytm from './Hirers/paytm.png';
import policyBazaar from './Hirers/policyBazaar.png';
import rapido from './Hirers/rapido.png';
import samsung from './Hirers/samsung.png';
import swiggy from './Hirers/swiggy.png';
import teleperformer from './Hirers/teleperformer.png';
import webvio from './Hirers/webvio.png';
import zomato from './Hirers/zomato.png';

const Login = () => {

    const [number, setNumber] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        // Allow only numeric characters
        const numericValue = value.replace(/\D/g, '');
        setNumber(numericValue);
      };
    
  return (

    <>
    <div>
    <div>
        <div className="login-container">
          <div className="Desc">
        <h1>Powering Your Hiring Success!!</h1>
        <p>Log in now and experience the future of hiring with Hirers.</p>
      
        <div className='register'>
            <p>Looking for a Job? <span> Click Here </span></p>
</div>
</div>

    <div className='login'>
      <div className="Login">
        <h3>Employer LogIn/SignUp</h3>
        <div className="Number">
        <input
        type="text"
        value="+91" 
        style={{ marginRight: '20px' , borderRadius : '10px' , width: '50px' ,
        height: '40px',
        textAlign: 'center'}} 
      />
        <input
        type="tel"
        onChange={handleInputChange}
        placeholder="    Mobile number"
        style={{borderRadius : '10px' , width: '20vw' ,
        height: '40px',
        textAlign: 'center'}}
      />
      </div>
         <button>LogIn</button>
         <p>Click here to login using Google/FB account</p>
         </div>
    </div>
    </div>
    </div>

    <div className="companies">
        <p style={{ textAlign : 'center' }}>Companies that hire from us</p>
        <div className="company">
        <img src= {airtelImage}/>
        <img src= {ambarsky}/>
        <img src= {daikin}/>
        <img src= {jpg}/>
        <img src= {mahindra}/>
        <img src= {moneylink}/>
        <img src= {paytm}/>
        <img src= {policyBazaar}/>
        <img src= {rapido}/>
        <img src= {samsung}/>
        <img src= {swiggy}/>
        <img src= {teleperformer}/>
        <img src= {webvio}/>
        <img src= {zomato}/>
    </div>
    </div>
 </div>
    </>
  )
}

export default Login;