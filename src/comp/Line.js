import React, { useRef, useEffect } from 'react';
import Footer from './footer';
import lin from "../video/Line.mp4"
import { Link } from 'react-router-dom'
import "./iot.css"
import SocialMediaLinks from './social';

const Line = () => {
    const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
        videoRef.current.play();
      }
    }, []);
  return (
    <div className="iot-page">
        <SocialMediaLinks/>
           <ul className="nav nav-pills">
           <Link to="/">
           <img
    src="./logo.png"
    alt="company logo"
    width="100"
    height="60"
    style={{ marginRight: '100px' }}
  />
</Link>

<li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle " data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">PrimeStar</a>
    <ul className="dropdown-menu">
     <Link className="dropdown-item" to="/aboutus">About US</Link>
<Link className="dropdown-item" to="/why_we">Why Choose Us</Link>
<Link className="dropdown-item" to="/aboutus">what we do?</Link>
      {/* <li><hr className="dropdown-divider"></li> */}
      {/* <li><a className="dropdown-item" to="#">Separated link</a></li> */}
    </ul>
  </li>

  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Innovaions</a>
    <ul className="dropdown-menu">
      <Link className="dropdown-item" to ="/Iot">IoT</Link>
      <Link className="dropdown-item" to="/analytics_bigdata">Analytics & Big Data</Link>
      <Link className="dropdown-item" to="/Cloud Computing">Cloud Computing</Link>
      {/* <li><hr className="dropdown-divider"></li> */}
      <Link className="dropdown-item" to="/business_intelligence">Business Intelligence Tools</Link>
    </ul>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">Servers</a>
    <ul className="dropdown-menu">
      <Link className="dropdown-item" to="/bi_analytics">BI Analytics</Link>
      <Link className="dropdown-item" to="/bi_analytics_data">Big Data Consulting Services</Link>
      <Link className="dropdown-item" to="/testing">Testing</Link>
      <Link className="dropdown-item" to="/eai">EAI Tools</Link>
      <Link className="dropdown-item" to="/Delivery">Delivery Model</Link>
      <Link className="dropdown-item" to="/Customized Services">Customized Services</Link>

      {/* <li><hr className="dropdown-divider"></li> */}
     
    </ul>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">Our Work</a>
    <ul className="dropdown-menu">
      <Link className="dropdown-item" to="/Devops">DevOps</Link>
      <Link className="dropdown-item" to="/Microsoft_Solutions">Microsoft Solutions</Link>
      <Link className="dropdown-item" to="/lineof_business">Line of Business Areas</Link>
     
      <Link className="dropdown-item" to="/webdevelop"> Web Apps Development</Link>
      <Link className="dropdown-item" to="/Mobiledevelopment">Mobile Development</Link>

      {/* <li><hr className="dropdown-divider"></li> */}
     
    </ul>
  </li>
  <li className="nav-item">                
  <Link className="nav-link " to='/Client'>Clients</Link>
  </li>
  <li className="nav-item">                  
  <Link className="nav-link " to='/TRAINING'>Training</Link>
</li>
<li className="nav-item">
<Link className="nav-link " to='/contact'>Contact Us</Link>

</li>
</ul>
      <header>
      <video ref={videoRef} autoPlay loop muted>
        <source src={lin} type="video/mp4" />
      
      </video>
      </header>

      <main>
        <section className="iot-section">

      
  
    <h2>Line of Business Areas</h2>
  <ul className="dot-list">
          <p>These lines of businesses are keys to Prime star strength and forte in securing turn key projects and delivery of technologically innovative end-to-end solutions</p>
          <p>We offer a wide range of Software Services, customized solutions that best meet your requirements.</p>
          <p>SEO has got focus in internet marketing as it is the most cost effective and efficient method of making the online business visible to huge masses of potential visitors searching through search engines.</p>
          <p>It takes your website from nowhere to top pages so that it can beat the competitors and earn the real advantage of being online and reach millions of visitors online.</p>
   
          </ul>

{/* <p>Quality Assurance workers typically work closely with the people who develop hardware and software, and often program exhaustive scripts to automate checking and identify problems.</p> */}

  
  <div class="right">
  
    <ul class="link-list">
    <h2>Our Work</h2>
    {/* <Link to="/iot" state={{ point: '' }} className="custom-link">- IoT</Link> */}
    <li> <Link to="/Devops" state={{ point: '' }} className="custom-link">DevOps</Link></li>
      <li><Link to="/Microsoft_Solutions" state={{ point: '' }} className="custom-link">Microsoft Solutions</Link></li>
      <li><Link to="/lineof_business" state={{ point: '' }} className="custom-link">Line of Business Areas</Link></li>
      <li><Link to="/iot" state={{ point: '' }} className="custom-link">Technology Expertise</Link></li>
      <li><Link to="/webdevelop" state={{ point: '' }} className="custom-link">Web Apps Development</Link></li>
      <li><Link to="/Mobiledevelopment" state={{ point: '' }} className="custom-link">Mobile Development</Link></li>

    </ul>
  
</div>

       
<h2>Software consulting</h2>
<h2>Web Services</h2>
    
  <ul className="dot-list">
         <li>Web Design</li>
         <li>Web Development</li>
         <li>Web Redesign and enhancement</li>
         <li>Ecommerce</li>
         <li>Custom Web Applications</li>
         <li>Open source Solutions</li>
         <h3>Hosting Solutions</h3>
        <li>Domain Registration</li>
        <li>Web Hosting</li>
          </ul>
    
  <ul className="dot-list">
          <h2>SEO Services</h2>
         <li>Keyword Research & Analysis</li>
         <li>Competitive Analysis</li>
         <li>On page optimization</li>
         <li>Making Websites SEO Friendly</li>
         <li>Link Building</li>
         <li>Social Media Marketing</li>
         <li>Blog, Classified ad, Forum postings</li>
         <li>Article / Press Release promotion</li>
         <li>Multi lingual Website Optimization</li>
        
        
          </ul>
          <h2>4. Mobile Based Solutions and .MOBI Sites</h2>
          <h2>5. SMS, Short Code Integration</h2>
          <h2>6. Enterprise Solutions</h2>
          <ul className="dot-list">
            <li>RFID Application Development</li>
            <li>Smart card Application Development</li>
           </ul>

          {/* <h2>WinRunner</h2> */}
         
    <ul class="list">
    <h2>Our Work</h2>
    

<li> <Link to="/Devops" state={{ point: '' }} className="custom-link">DevOps</Link></li>
      <li><Link to="/Microsoft_Solutions" state={{ point: '' }} className="custom-link">Microsoft Solutions</Link></li>
      <li><Link to="/lineof_business" state={{ point: '' }} className="custom-link">Line of Business Areas</Link></li>
      <li><Link to="/iot" state={{ point: '' }} className="custom-link">Technology Expertise</Link></li>
      <li><Link to="/webdevelop" state={{ point: '' }} className="custom-link">Web Apps Development</Link></li>
      <li><Link to="/Mobiledevelopment" state={{ point: '' }} className="custom-link">Mobile Development</Link></li>

    </ul>
         
        </section>

        
      </main>
     

      <Footer/>
    </div>
  );
};

export default Line;
