import React, { useRef, useEffect } from 'react';
import Footer from './footer';
import bigdata from "../video/bigdata.mp4"
import { Link } from 'react-router-dom'
import "./iot.css"
import SocialMediaLinks from './social';

const Bigdata = () => {
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
    <a className="nav-link dropdown-toggle " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">PrimeStar</a>
    <ul className="dropdown-menu">
     <Link className="dropdown-item" to="/aboutus">About US</Link>
<Link className="dropdown-item" to="/why_we">Why Choose Us</Link>
<Link className="dropdown-item" to="/aboutus">what we do?</Link>
      {/* <li><hr className="dropdown-divider"></li> */}
      {/* <li><a className="dropdown-item" href="#">Separated link</a></li> */}
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
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Servers</a>
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
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Our Work</a>
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
        <source src={bigdata} type="video/mp4" />
      
      </video>
      </header>

      <main>
        <section className="iot-section">

     

  
    <h1>Big Data Consulting Services</h1>
    <p>Now more than ever, organizations of all sizes must make data-driven decisions to stay competitive. Such large volumes of data, including those generated through user or client interactions, social media, devices, and connected hardware, can provide amazing insights and actionable intelligence when analyzed properly. These insights can help organizations improve profitability, business growth and service quality, as well as tweak product offerings and make smarter business decisions:</p>




  
  <div class="right">
  
    <ul class="link-list">
    <h2>Our Services</h2>
    {/* <Link to="/iot" state={{ point: '' }} className="custom-link">- IoT</Link> */}
    <li> <Link to="/bi_analytics" state={{ point: '' }} className="custom-link">BI & Analytics</Link></li>
      <li><Link to="/bi_analytics_data" state={{ point: '' }} className="custom-link">Big Data Consulting Services</Link></li>
      <li><Link to="/testing" state={{ point: '' }} className="custom-link">Testing</Link></li>
      <li><Link to="/eai" state={{ point: '' }} className="custom-link">EAI Tools</Link></li>
      <li><Link to="/Delivery" state={{ point: '' }} className="custom-link">Delivery Model</Link></li>
      <li><Link to="/Customized Services" state={{ point: '' }} className="custom-link">Customized Services</Link></li>

    </ul>

</div>

       
          <ul className="dot-list">
          <li>Data Analysis and Assessments</li>
          <li>Data Integration</li>
          <li>Data Mining</li>
          <li>Data Architecture</li>
          <li>Enterprise Data Warehousing</li>
          <li>Big Data Platform Support</li>

  
</ul>

          <h2>PLATFORM AND IMPLEMENTATION SERVICES</h2>
          <ul className="dot-list">
<p>Utilization and analysis of available data to solve business problems calls for expertise in implementation of platforms and tools. Primestar Technologies works as a partner with clients for end-to-end implementations of selected big data and analytics solutions.</p>
           <li>Hadoop Ecosystem</li>
           <li>Cloud Ecosystem</li>
           <li>MapR Platform</li>
           <li>Business Intelligence - Power BI, Tableau, Oracle BDD, etc.</li>
           <li>Streaming and Event Analytics</li>
            {/* <li>Analytical Application Development like web log analysis or social media analysis using Hadoop</li> */}
          </ul>

          <h2>BIG DATA CONSULTING AND ASSESSMENTS</h2>
          <ul className="dot-list">
            <p>Although organizations today have a huge amount of data at their disposal, they seldom have the capabilities to evangelize an approach to utilize and analyze that data for gaining business insights and intelligence. Vyza Solutions Big Data Consulting Services can help such organizations initiate and execute their big data strategy.</p>
           <li>Architecture Assessment</li>
           <li>Infrastructure Planning and Administration</li>
           <li>Data Analysis</li>
           <li>Platform Standardization</li>
           
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

export default Bigdata;
