import React from 'react'
import { FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { GrInstagram } from 'react-icons/gr'

export default function ContactUs() {
  return (
    <div className='contactus'>
    <div className="wrapper">
        <span>BE IN TOUCH WITH US</span>
        <div className="email">
            <input type="text" placeholder='Enter Your Email...'/>
            <button>JOIN US</button>
        </div>
        <div className="icons">
        <FaFacebook/>
        <GrInstagram/>
        <FcGoogle/>
        <FaTwitter />
        <FaPinterest />
        </div>
    </div>
</div>
  )
}
