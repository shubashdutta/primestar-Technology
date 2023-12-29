import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Innovations</h3>
        <ul>
        <li>
              <Link to="/Iot" state={{ point: '' }} className="custom-link">- IoT</Link>
            </li>
            <li>
              <Link to="/analytics_bigdata" state={{ point: '' }} className="custom-link">- Analytics & Big Data</Link>
            </li>
            
            <li>
              <Link to="/Cloud Computing" state={{ point: '' }} className="custom-link">- Cloud Computing</Link>
            </li>
           
            <li>
              <Link to="/business_intelligence" state={{ point: '' }} className="custom-link">- Business Intelligence Tools</Link>
            </li>
        </ul>
        <h6>© Copyright 2023, All Rights Reserved</h6>
      </div>

      <div className="footer-section">
        <h3>Solutions</h3>
        <ul>
          <li> <Link to="/Devops" state={{ point: '' }} className="custom-link">- DevOps</Link></li>
          <li><Link to="/Microsoft_Solutions" state={{ point: '' }} className="custom-link">- Microsoft Solutions</Link>;</li>
          <li><Link to="/lineof_business" state={{ point: '' }} className="custom-link">- Line of Business Areas</Link></li>
         
          <li><Link to="/webdevelop" state={{ point: '' }} className="custom-link">-Web Apps Development</Link></li>
          <li><Link to="/Mobiledevelopment" state={{ point: '' }} className="custom-link">-Mobile Development</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Our Services</h3>
        <ul>
          <li><Link to="/bi_analytics" state={{ point: '' }} className="custom-link">-BI & Analytics</Link></li>
          <li><Link to="/bi_analytics_data" state={{ point: '' }} className="custom-link">-Big Data Consulting Services</Link></li>
          <li><Link to="/testing" state={{ point: '' }} className="custom-link">-Testing</Link></li>
          <li><Link to="/eai" state={{ point: '' }} className="custom-link">-EAI Tools</Link></li>
          <li><Link to="/Delivery" state={{ point: '' }} className="custom-link">-Delivery Model</Link></li>
          <li><Link to="/Customized Services" state={{ point: '' }} className="custom-link">-Customized Services</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Technologies</h3>
        <ul>
          <li><Link to="/" state={{ point: '' }} className="custom-link">-Microsoft Technology</Link></li>
          <li><Link to="/" state={{ point: '' }} className="custom-link">-Java Excellence</Link></li>
          <li><Link to="/" state={{ point: '' }} className="custom-link">-LAMP</Link></li>
          <li><Link to="/" state={{ point: '' }} className="custom-link">-Oracle Applications</Link></li>
          <li><Link to="/" state={{ point: '' }} className="custom-link">-Data Warehousing</Link></li>
        </ul>
        <p>© Copyright 2023, All Rights Reserved</p>
        
      </div>
    </footer>
  );
};

export default Footer;
