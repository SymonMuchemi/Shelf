import React, { useState } from 'react';
import bookShelfLogo from './shelf-logo.png';

const OtpComponent = () => {
  const [otp, setOtp] = useState(Array(5).fill(''));

  const handleChange = (elementIndex, event) => {
    const newOtp = [...otp];
    newOtp[elementIndex] = event.target.value;
    setOtp(newOtp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('OTP:', otp.join(''));
  };

  return (
    <div className='box'>
        <div className='imageContainer'>
            <img src={bookShelfLogo} alt="logo" className='image'/>		
        </div>
        <h2>Verification</h2>
        <p className="message">Check your email for OTP</p>

        <p className='message_dark'>Enter OTP here</p>
				
        <form onSubmit={handleSubmit} id='otp-form'>
            <div className='otp-inputs'>
                {otp.map((value, index) => (
                    <input
                    key={index}
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(index, e)}
                    maxLength="1"
                    className='otp-input'
                    />
                    ))}
            </div>
        <button type="submit" className='button'>Submit</button>
        </form>
    </div>
  );
};

export default OtpComponent;
