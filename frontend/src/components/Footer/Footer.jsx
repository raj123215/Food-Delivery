import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Bite-Buddy – Your trusted partner for quick, delicious, and reliable
            food delivery. Satisfy your cravings with a wide variety of cuisines
            from your favorite restaurants, delivered fresh to your doorstep.
            Order now and enjoy the taste of convenience!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Bite Buddy Contact</h2>
          <ul>
            <li>+91-6203985602</li>
            <li>rajkumar@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Bitebuddy.com - All Right Reserved.
      </p>
    </div>
  );
}

export default Footer
