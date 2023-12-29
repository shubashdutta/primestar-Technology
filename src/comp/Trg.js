import React, { useRef, useEffect } from 'react';
import Footer from './footer';
import IT from "../video/IT.mp4"
import { Link } from 'react-router-dom'
import "./iot.css"
import SocialMediaLinks from './social';

const TRAINING = () => {
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
        <source src={IT} type="video/mp4" />
      
      </video>
      </header>

      <main>
        <section className="iot-section">

       
    <h1>Primestar Technologies is an E-Verified Company.</h1>
    <p>With multiple offices and service locations overseas, our customers include some of the biggest organizations in North America and US: Nationwide Insurance, StateFarm Insurance, EBAY, Verizon, Wal-Mart , Goldman Sachs, JPMC, Bank Of America, to name a few.
:</p>

<p>We offer training programs for our consultants who are willing to upgrade their skills with latest technologies that are available.</p>
<p>We also offer training programs for recent graduates. We will train the right candidates with the right aptitude and absorb them in-house for our projects or place them on projects at our client locations.</p>
<p>We provide internships and train as per our client’s needs. We have highly qualified industry certified instructors on our board, who work patiently with all interns during the training. Most internship will last between 30-90 days of extensive training on Information Technology verticals. Please feel free to contact our office to discuss our internship program and the other perks we offer.</p>
  
  <div class="right">
  
    <h2>Our Services</h2>
    <ul class="link-list">
    {/* <Link to="/iot" state={{ point: '' }} className="custom-link">- IoT</Link> */}
      <li> <Link to="/iot" state={{ point: '' }} className="custom-link">BI & Analytics</Link></li>
      <li><Link to="/iot" state={{ point: '' }} className="custom-link">Big Data Consulting Services</Link></li>
      <li><Link to="/iot" state={{ point: '' }} className="custom-link">Testing</Link></li>
      <li><Link to="/iot" state={{ point: '' }} className="custom-link">EAI Tools</Link></li>
      <li><Link to="/iot" state={{ point: '' }} className="custom-link">Delivery Model</Link></li>
      <li><Link to="/iot" state={{ point: '' }} className="custom-link">Customized Services</Link></li>

    </ul>
 
</div>

       
          

          <h2>Training Programs:</h2>
          <ul className="dot-list">
<li>JAVA / J2EE Technologies</li>   
<li>SAS, BPM, SQL BI</li> 
<li>Oracle 11g, PL/SQL</li>
<li>OBIEE</li>
<li>.NET, ASP, VB</li>
<li>REST and SOAP services</li>
<li>Business Analyst/Quality Analyst - BPM</li>
<li>Sharepoint</li>
<li>Embedded Systems</li>
<li>Oracle Manufacturing</li>
<li>WebSphere, Weblogic, JBoss</li>
<li>SAP MM & WM, FICO,SAP FICO - COPA, COPC & Tax, ABAP, SD</li>
<li>Oracle R12 E-Business Distributions Training</li>
{/* <li>Analytical Application Development like web log analysis or social media analysis using Hadoop</li> */}
          </ul>

          <h2>We Provide:</h2>
          <ul className="dot-list">
            <li>Free training and placement</li>
            <li>Free H1B Processing</li>
            <li>Free accommodation in our Guest House</li>
            <li>All other standard benefits</li>
           
          </ul>

          <h2>To be considered for our training, please submit via email:</h2>
          <ul className="dot-list">
           <li>Resume</li>
           <li>Graduate Transcripts from your University</li>
           <li>Prior Work Experience</li>
          </ul>

          
          
    <ul class="list">
    <h2>Our Services</h2>
   
    {/* <Link to="/iot" state={{ point: '' }} className="custom-link">- IoT</Link> */}
      <li> <Link to="/bi_analytics" state={{ point: '' }} className="custom-link">BI & Analytics</Link></li>
      <li><Link to="/bi_analytics_data" state={{ point: '' }} className="custom-link">Big Data Consulting Services</Link></li>
      <li><Link to="/testing" state={{ point: '' }} className="custom-link">Testing</Link></li>
      <li><Link to="/eai" state={{ point: '' }} className="custom-link">EAI Tools</Link></li>
      <li><Link to="/Delivery" state={{ point: '' }} className="custom-link">Delivery Model</Link></li>
      <li><Link to="/Customized Services" state={{ point: '' }} className="custom-link">Customized Services</Link></li>

    </ul>
         
        </section>

        
      </main>
     

      <Footer/>
    </div>
  );
};

export default TRAINING;
