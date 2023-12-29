import React, { useRef, useEffect } from 'react';
import Footer from './footer';
import M from "../video/Ms.mp4"
import { Link } from 'react-router-dom'
import "./iot.css"
import SocialMediaLinks from './social';

const Ms = () => {
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
        <source src={M} type="video/mp4" />
      
      </video>
      </header>

      <main>
        <section className="iot-section">

        
  
    <h2>Microsoft Technology</h2>
  <ul className="dot-list">
          <p>Primestar Technologies Certified Microsoft teams provides advisory, implementation, integration, and managed support services across Microsoft's powerful product suite:</p>
   <li>Data Center / Infrastructure - Server, Desktop, Azure, Office Suite, and more</li>
   <li>Custom Application Development - .Net, Azure and more</li>
   <li>Business Intelligence & Analytics - Microsoft BI</li>
   <li>Collaboration - SharePoint and Yammer</li>
   <li>Enterprise Resource Planning (ERP) - Dynamics GP</li>
   <li>Customer Relationship Management (CRM) - Dynamics CRM</li>
          </ul>

{/* <p>Quality Assurance workers typically work closely with the people who develop hardware and software, and often program exhaustive scripts to automate checking and identify problems.</p> */}

  
  <div class="right">
  
    <h2>Our Work</h2>
    <ul class="link-list">
    {/* <Link to="/iot" state={{ point: '' }} className="custom-link">- IoT</Link> */}
    <li> <Link to="/Devops" state={{ point: '' }} className="custom-link">DevOps</Link></li>
      <li><Link to="/Microsoft_Solutions" state={{ point: '' }} className="custom-link">Microsoft Solutions</Link></li>
      <li><Link to="/lineof_business" state={{ point: '' }} className="custom-link">Line of Business Areas</Link></li>
      <li><Link to="/iot" state={{ point: '' }} className="custom-link">Technology Expertise</Link></li>
      <li><Link to="/webdevelop" state={{ point: '' }} className="custom-link">Web Apps Development</Link></li>
      <li><Link to="/Mobiledevelopment" state={{ point: '' }} className="custom-link">Mobile Development</Link></li>

    </ul>
 
</div>

       
<h2>SAMPLE TECHNOLOGIES WE SUPPORT</h2>
    
  <ul className="dot-list">
         <li>Microsoft Dynamics GP</li>
         <li>Microsoft Dynamics CRM</li>
         <li>Microsoft SharePoint</li>
         <li>Microsoft Yammer</li>
         <li>Microsoft Power BI</li>
         <li>Cortana Analytics</li>
         <li>Microsoft Azure</li>
         <li>.Net Custom Development</li>
         <li>Microsoft SQL Server (SSMS, SSIS, SSRS, SSAS)</li>
         <li>Microsoft System Center Configuration Manager (SSCM)</li>
         <li>Microsoft System Center Operations Manager (SCOM)</li>
         <li>Microsoft Windows Server</li>
         <li>Microsoft Office 365</li>
        
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

export default Ms;
