import React, { useRef, useEffect } from 'react';
import Footer from './footer';
import Data from "../video/bigdata.mp4"
import { Link } from 'react-router-dom'
import "./iot.css"
import SocialMediaLinks from './social';

const Alit = () => {
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
        <source src={Data} type="video/mp4" />
      
      </video>
      </header>

      <main>
        <section className="iot-section">

      
 
  
    <h1>Analytics & Big Data</h1>
    <p>Big data represents next generation in data analytics and visualization.</p>

<p>Every day we create huge volume of data – much of it coming from new sources including financial and retail transactions, web logs, RFID, sensor networks, social media, call detail records, ecommerce, medical records and more.</p> 
<p> This “Big Data” has 3 dimensions:</p>
<ul className="dot-list">
  <li>Very Large Data Volumes – Measured in terabytes or petabytes</li>
  <li>Variety – Structured and Unstructured Data</li>
  <li>High Velocity – Rapidly Changing Data</li>
  <li>Covers critical control point checks</li>
 
</ul>
<p>Until now there was no technology available to get meaningful information out of these varied data sources. Big Data Analytics provides us an opportunity to find insights into new emerging data. It can help you answer key business questions in real-time.</p>
<p>Primestar Technologies offers consulting, implementation, and support services in Big Data Analytics. Primestar Technologies Big Data Service Offerings include:</p>
 
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


          <h2>Big Data Consulting Services</h2>
          <ul className="dot-list">
  <li>Evaluation of technology and opting the right platform</li>
  <li>Architecture Assessment and Definition</li>
  <li>Prototyping & Benchmarking</li>
  
</ul>


          <h2>Big Data Implementation Services</h2>
          <ul className="dot-list">
            <li>Installing and Configuring Hadoop on new environment</li>
            <li>Developing applications using MapReduce Programming</li>
            {/* <li>Analytical Application Development like web log analysis or social media analysis using Hadoop</li> */}
          </ul>

          <h2>Big Data Support Services</h2>
          <ul className="dot-list">
            <li>Hadoop Cluster Monitoring</li>
            <li>Configure Hadoop for performance optimization</li>
            <li>Load data into Hadoop’s Distributed File System (HDFS)</li>
            
          </ul>
          <h2>Technical Evaluation</h2>
          <ul className="dot-list">
  <li>Architecture review</li>
  <li>ETL and Data Warehouse review</li>
  <li>Reports and Dashboards evaluation</li>
  <li>Security review</li>
  <li>Performance evaluation</li>
 
 
</ul>
<h2>Functional Evaluation</h2>
          <ul className="dot-list">
  <li>Data consumption</li>
  <li>Business reporting requirements alignment</li>
<p>We provide the complete spectrum of Business Intelligence (BI) and data warehousing services to clients on a global platform. We help you choose the appropriate BI tools and build high-quality BI and data warehousing solutions to unlock key trends and make better business decisions.</p>
 <p>Companies are recognizing the need for accurate and timely information at all times – from business strategy and execution, to support. It has become mandatory for companies to take a robust approach towards design, implementation and management of BI solutions to successfully unlock the hidden value in their corporate data. However, to address all facets of their BI needs, companies require people with the right combination of technical skills and domain knowledge.</p>
 <p>With nearly a decade long practice in developing complex BI and data warehousing solutions, we offer the complete spectrum of services including consulting, design and architecture, implementation and management services. We have hands-on experience and certified professionals across leading BI products such as Cognos, Informatica, Microsoft technologies (SSAS, SSIS, SSRS), Data Stage, Pervasive Business Integrator, and more. Our experience spans leading ISV and enterprise clients in different industry verticals worldwide. We have successfully executed complex projects with large data warehouses (30TB), multiple databases / data sets (from multiple locations) and real-time reporting. Our ability to deliver value year-on-year has helped us maintain long-term relationships (6+ years) with our clients.</p>
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

export default Alit;
