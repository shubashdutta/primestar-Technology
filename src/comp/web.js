import React, { useRef, useEffect } from 'react';
import Footer from './footer';
import web from "../video/web.mp4"
import { Link } from 'react-router-dom'
import "./iot.css"
import SocialMediaLinks from './social';

const Webdevelop = () => {
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
        <source src={web} type="video/mp4" />
      
      </video>
      </header>

      <main>
        <section className="iot-section">

        
  
    <h2>Web Apps Development</h2>
  <ul className="dot-list">
          <p style={{fontWeight:"bold"}}>"Primestar Technologies prides itself in providing exceptional services to a wide range of clientele around the Globe."</p>
          <p>Primestar Technologies's widespread range of services ensures effective performance of business operations which helps in improving the business processes and minimizing overheads. Our services are based on keen industry insight and analysis keeping customer requirements into perspective, thus ensuring a seamless flow of information and operations.</p>
          <p>Our service philosophy centers on one thing personal attention. As a client of Primestar Technologies , you are given a single point of contact within our organization. This means that no matter what type of problem you might be having, your dedicated account representative will make sure it is resolved quickly and efficiently..</p>
          <p>Primestar Technologies offers an array of products and services. But there are two areas where Primestar Technologies clearly separates itself from the pack: value and service.</p>
   
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
      <li><Link to="/iot" state={{ point: '' }} className="custom-link">Mobile Development</Link></li>

    </ul>
  
</div>

       
<h2>Technology services</h2>

    
  <ul className="dot-list">
       <p>Our expertise includes development of web-applications, consumer portals, mobile applications and rich internet applications.</p>
        <p>We specialize in developing web based solutions and designing end to-end solutions that are tailored to the needs of business and customers. We take pride in delivering solutions with the utmost reliability, creativity, and integrity. We have so far built numerous applications – portals, web ERP, knowledge management applications, and document management applications, to name a few.</p>
        <p>We have project execution experience in working on the technology of our client choice – be it PHP, ASP.NET, J2EE or others. All our applications are integrated with backend database of our client choice, MySQL, SQL Server, and Oracle.</p>
         
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

export default Webdevelop;
