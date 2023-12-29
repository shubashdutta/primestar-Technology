import React, { useRef, useEffect } from 'react';
import Footer from './footer';
import Devs from "../video/Dev.mp4"
import { Link } from 'react-router-dom'
import "./iot.css"
import SocialMediaLinks from './social';

const Dev = () => {
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
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Innovations</a>
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
        <source src={Devs} type="video/mp4" />
      
      </video>
      </header>

      <main>
        <section className="iot-section">

       
    <h2>DevOps</h2>
  <ul className="dot-list">
          <p>DevOps is a “garage of Tools”, it is not a product or technology but rather a methodology that acts as the glue or unites software development, production and operations into an integrated continuous process. The DevOps methodology is about dissolving the barriers between Development and Operations. It leverages people processes and technology for collaboration across the entire software development and releases process</p>
   <p>Primestar Technologies has extensive experience in DevOps and leverages this expertise to provide customers with comprehensive DevOps services spanning strategy, planning, execution and managed services. Leveraging our DevOps Assessment Framework,Primestar Technologies delivers strategies and solutions that help clients maximize the ROI.</p>
          </ul>

{/* <p>Quality Assurance workers typically work closely with the people who develop hardware and software, and often program exhaustive scripts to automate checking and identify problems.</p> */}


  <div className="right">
  
    <ul className="link-list">
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


       
<h2>Signs you are dealing with a dysfunctional Process</h2>
    
  <ul className="dot-list">
         <li>Software Defects are discovered late in the process</li>
         <li>Development gains lost once the software goes into production</li>
         <li>Developers and Testers are consistently waiting on resources and tools </li>
         <li>Problems pinpointing issues across development, testing, and production </li>
         <li>Simple human errors causing problems during development and deployment</li>
         <li>Development views their job as complete once the application in is production</li>
         <li>Pointing fingers every time there is a problem</li>
         <li>DevOps Transformation; Where do I start?</li>
         <li>DevOps will provide stability but realizing there is a problem is the first step</li>
        
          </ul>

          {/* <h2>WinRunner</h2> */}
         
    <ul className="list">
    <h2>Our Work</h2>
    

 <li>
   <Link to="/Devops" state={{ point: '' }} className="custom-link">DevOps</Link></li>
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

export default Dev;
