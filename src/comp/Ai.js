import React, { useRef, useEffect } from 'react';
import Footer from './footer';
import cloud from "../video/colud.mp4"
import { Link } from 'react-router-dom'
import "./iot.css"
import SocialMediaLinks from './social';

const AI = () => {
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
    height="80"
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
        <source src={cloud} type="video/mp4" />
      
      </video>
      </header>

      <main>
        <section className="iot-section">

       
  
  
    <h1>Cloud Computing</h1>
    <p>With expertise in all aspects of the Cloud, we can provide support from migrating existing applications to building entirely new ones. We rely upon the best cloud providers like Amazon and Azure to manage the infrastructure and platforms on which the applications run..</p>

<p>The growth of cloud computing is being driven by the rapid penetration of virtualization management, the increase in cloud computing offerings and enormous pressure to deliver IT faster and cheaper. For current day businesses, taking to the cloud technology is the key to sure shot success. All you require is to hire managed cloud services along with professional work force that can drive your business to heights you have never imagined before.</p> 

<h6>Using the ‘best-in-class’ industry leading cloud solutions, Primestar Technologies can help organizations with following cloud services:</h6>
<ul className="dot-list">
  <li>Cloud Advisory - Cloud readiness evaluation, Cloud Business case.</li>
  <li>Build 'Application platform as a service' Cloud migration .</li>
  <li>Cloud Integration - Integrating enterprise applications with the Cloud.</li>
  
</ul>
  
  <div class="right">
  
    <ul class="link-list">
    <h2>Innovations</h2>
    {/* <Link to="/iot" state={{ point: '' }} className="custom-link">- IoT</Link> */}
      <li> <Link to="/analytics_bigdata" state={{ point: '' }} className="custom-link">Analytics & Big Data</Link></li>
      <li><Link to="/iot" state={{ point: '' }} className="custom-link">Artificial Intelligence</Link></li>
      <li><Link to="/Cloud Computing" state={{ point: '' }} className="custom-link">Cloud Computing</Link></li>
      <li><Link to="/business_intelligence" state={{ point: '' }} className="custom-link">Robotics Process Automation</Link></li>
      <li><Link to="/bi_analytics_data" state={{ point: '' }} className="custom-link">Business Intelligence Tools</Link></li>
    </ul>
  </div>


          <h2>Cloud Solutions</h2>
          <ul className="dot-list">
          <p>Cloud computing is part of almost every IT conversation, from strategic planning to tactical implementations. Organizations are mesmerized by the cloud’s promises of significantly improved business and IT agility and lower IT costs. All organizations now have a cloud strategy. The key question now is ‘are they executing their strategy to get most out of their cloud investments?’</p>
          
  <li>Select applications and align cloud opportunities with business strategies</li>
  <li>Secure workloads by giving them zero visibility</li>
  <li>Manage IT environments with a single view</li>
  
</ul>


          <h2>Primestar Technologies Cloud Solutions provides organizations:</h2>
          <ul className="dot-list">
            <li>Speed that moves applications with minimal risk up to 60% faster.</li>
            <li>Security that isolates endpoint environments using communities of Interest</li>
            
            <li>Cost-savings through a single dashboard to manage infrastructure </li>
            {/* <li>Analytical Application Development like web log analysis or social media analysis using Hadoop</li> */}
          </ul>

          <h2>All Cloud Solutions</h2>
          <ul className="dot-list">
            <h2>Private Cloud Services</h2>
            <p>Primestar Technologies Private Cloud Services provides a flexible computing environment consisting of both virtual and physical servers in either a shared or non-shared (private) cloud for customers who require server capacity on a subscription basis.</p>
            
          </ul>
          <h2>CloudBuild Services</h2>
          <ul className="dot-list">
  <p>Primestar Technologies Cloud Build Services enables organizations to successfully build cloud that is integrated into the overall business process - transforming their existing infrastructure for delivery of an agile IT-as-a-service model.</p>
 
 
</ul>
<h2>Choreographer</h2>
          <ul className="dot-list">
  
<p>Choreographer™ is a fully-featured Cloud Management Platform (CMP) that automates the management of infrastructure that hosts development and test and production workloads. Choreographer establishes an elastic, scalable, highly-secure environment using private, public and hybrid cloud deployments.</p>
 
 <h2>Cloud Advisory Services</h2>
 <p>Cloud Advisory Services provide strategic and financial guidance on aligning IT to business objectives, assess the transformation and delivery options like enhancements to existing data centers, private cloud or public cloud, and develop a roadmap to achieve a real time enterprise.</p>
</ul>


    <ul class="list">
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

export default AI;
