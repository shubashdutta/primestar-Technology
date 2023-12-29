import React, { useRef, useEffect } from 'react';
import Footer from './footer';
import business from "../video/Business.mp4"
import { Link } from 'react-router-dom'
import "./iot.css"
import SocialMediaLinks from './social';

const Business = () => {
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
        <source src={business} type="video/mp4" />
      
      </video>
      </header>

      <main>
        <section className="iot-section">

        
  
  
    <h1>Business Intelligence Tools</h1>
    <p>Optimize performance of your organization through flexible and intuitive BI applications developed using our extensive BI services.</p>

<p>Extract the real meaning from your data using sophisticated business intelligence tools and Primestar Technologies BI expertise. Primestar Technologies has domain specific work experience in business intelligence field. It has worked on following BI platforms and tools..</p> 


  
  <div className="right">
  
    <ul className="link-list">
    <h2>Innovations</h2>
    {/* <Link to="/iot" state={{ point: '' }} className="custom-link">- IoT</Link> */}
      <li><Link to="/analytics_bigdata" state={{ point: '' }} className="custom-link">Analytics & Big Data</Link></li>
      <li><Link to="/iot" state={{ point: '' }} className="custom-link">Artificial Intelligence</Link></li>
      <li><Link to="/Cloud Computing" state={{ point: '' }} className="custom-link">Cloud Computing</Link></li>
      <li><Link to="/business_intelligence" state={{ point: '' }} className="custom-link">Robotics Process Automation</Link></li>
      <li><Link to="/bi_analytics_data" state={{ point: '' }} className="custom-link">Business Intelligence Tools</Link></li>
    </ul>
  
</div>

          <h2>MicroStrategy</h2>
          <ul className="dot-list">
          <p>MicroStrategy’s software enables leading organizations worldwide to analyze the vast amounts of data stored across their enterprises to make strategic business decisions. The platform delivers actionable information to business users via the web and mobile devices, including the iPad, iPhone, Android smartphones, and BlackBerry. MicroStrategy provides a platform with technologies to capitalize on the big data, mobile, cloud, and social media trends.’</p>
          

  
</ul>


          <h2>QlikView:</h2>
          <ul className="dot-list">
           <p>The QlikView Business Discovery platform delivers true self-service business intelligence that empowers business users and drives innovative decision making. QlikView is the most flexible Business Intelligence platform for turning data into knowledge. More than 18,000 organizations worldwide have enabled their users to easily consolidate, search, and visually analyze all their data for unprecedented business insight using QlikView’s simplicity.</p>
            {/* <li>Analytical Application Development like web log analysis or social media analysis using Hadoop</li> */}
          </ul>

          <h2>Microsoft Business Intelligence</h2>
          <ul className="dot-list">
           
            <p>Microsoft Business Intelligence is delivered as part of the world’s most popular business productivity suite and most widely deployed information platform. Being the product from the Microsoft family it integrates well with other Microsoft products such as SharePoint, Exchange etc.</p>
            
          </ul>
          <h2>Pentaho</h2>
          <ul className="dot-list">
  <p>Primestar Technologies Cloud Build Services enables organizations to successfully build cloud that is integrated into the overall business process - transforming their existing infrastructure for delivery of an agile IT-as-a-service model.</p>
 
 
</ul>
<h2>Choreographer</h2>
          <ul className="dot-list">
  
<p>The Pentaho BI Suite is open source Business Intelligence suite with integrated reporting, dashboard, data mining, workflow and ETL capabilities. It is one of the popular open source BI suite. Pentaho Reporting is a suite of tools for creating pixel perfect reports. With Pentaho Reporting you are able to transform data into meaningful information tailored to your audience. You can create HTML, Excel, PDF, Text or printed reports. If you are a developer, you can also produce CSV and XML reports to feed other systems..</p>
 
 
</ul>


    <ul className="list">
<h2>Innovations</h2>
    
<li> <Link to="/analytics_bigdata" state={{ point: '' }} className="custom-link">Analytics & Big Data</Link></li>
      <li><Link to="/iot" state={{ point: '' }} className="custom-link">Artificial Intelligence</Link></li>
      <li><Link to="/Cloud Computing" state={{ point: '' }} className="custom-link">Cloud Computing</Link></li>
      <li><Link to="/business_intelligence" state={{ point: '' }} className="custom-link">Robotics Process Automation</Link></li>
      <li><Link to="/bi_analytics_data" state={{ point: '' }} className="custom-link">Business Intelligence Tools</Link></li>
    </ul>
         
        </section>

        
      </main>
     

      <Footer/>
    </div>
  );
};

export default Business;
