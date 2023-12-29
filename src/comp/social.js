import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './social.css'; // You can create a CSS file for styles

function SocialMediaLinks() {


  return (
    <ul className="social-links">
      
      <li style={{color:"blue"}}><a href="#"><FaFacebook /></a></li>
      <li style={{color:"#1DA1F2"}}><a href="#"><FaTwitter /></a></li>
      <li style={{color:"#5851DB"}}><a href="#"><FaInstagram /></a></li>
      {/* Add more social media links and icons */}
    </ul>
  );
}

export default SocialMediaLinks;
