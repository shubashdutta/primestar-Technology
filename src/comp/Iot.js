import React, { useRef, useEffect } from 'react';
import Footer from './footer';
import video from "../video/iot.mp4"
import { Link } from 'react-router-dom'
import "./iot.css"
import SocialMediaLinks from './social';

const IoTPage = () => {
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
        <source src={video} type="video/mp4" />
      
      </video>
      </header>

      <main>
        <section className="iot-section">

        {/* <div class="container"> */}

  
    <h1>Internet of Things (IoT)</h1>
    <p>Primestar Technologies has developed an online health and safety management solution, which is embedded with sensors to monitor food temperature in real-time. It comes with fully customizable modules that reduce operational costs and increase efficiency. Automated temperature monitoring also results in optimal resource utilization.</p>
  
 
{/* </div> */}

          <h2>Benefits</h2>
          <ul className="dot-list">
  <li>Monitor and record temperatures</li>
  <li>Automatic alerts to detect changes in temperature or system failures</li>
  <li>Perform core temperature food checks</li>
  <li>Covers critical control point checks</li>
  <li>Audit management and tracking</li>
  <li>Secure documentation</li>
  <li>Keep all of your checklists and incident reports safe</li>
</ul>


          <h2>Our Solution Stack</h2>
          <ul className="dot-list">
            <li>Flume for integrating data from multiple data sources</li>
            <li>Hive, MapReduce, and Oozie for transformation</li>
            <li>IBM Big Insights and Hue for user reporting</li>
          </ul>

          <h2>We Offer End-To-End Internet Of Things Solutions:</h2>
          <ul className="dot-list">
            <li>Integration</li>
            <li>Device management</li>
            <li>Information security</li>
            <li>Protocols of data collection</li>
            <li>Analytical tools</li>
          </ul>
          <h2>Enabling Hardware</h2>
          <ul className="dot-list">
  <li>SMARTPHONE</li>
  <li>SENSORS</li>
  <li>PBEACONS</li>
  <li>TABLET</li>
  <li>SMART WEARABLE DEVICES</li>
  <li>OTHER SMART DEVICES</li>
 
</ul>
<h2>Monitor Operations, Gather Big Data</h2>
          <ul className="dot-list">
<p>Use IoT devices and sensors to make real-time measurements on every step of your manufacturing process. Track your patients’ well-being around-the-clock with remote IoT monitoring. More so, IoT devices will gather Big Data and present you with insightful analytics, ensuring every employee makes informed decisions.</p>
  <li>Real-time monitoring</li>
  <li>Remote monitoring and management</li>
  <li>Data collection</li>
  <li>Rich actionable analytics</li>
  <li>Mobility management systems</li>
  <li>IoT applications</li>
 
</ul>

<h2>Optimise Operations</h2>
          <ul className="dot-list">
<p>Employ an IoT platform to optimize your logistics and customer experience in retail. Use IoT sensors for accurate stock monitoring. Install smart shelves with digital price labelling and sensors in your stores. You will be able to constantly track item depletion, save time on changing prices, and monitor your customers’ behaviour and suspicious activity. Furthermore, you may leverage sensors and RFID tags in your in-store marketing to monitor customer behaviour and trigger ads when customers pick up products from shelves.</p>
  <li>Real-time monitoring</li>
  <li>Remote monitoring and management</li>
  <li>Data collection</li>
  <li>Rich actionable analytics</li>
  <li>Mobility management systems</li>
  <li>IoT applications</li>
 
</ul>

<h2>Ensure IoT Security</h2>
          <ul className="dot-list">
<p>Strong security is essential to the successful operation of your IoT initiatives. Safeguard your network with intrusion prevention and detection systems and traditional security means like endpoint protection. Secure your IoT devices with two-factor authentication, digital certificates, and biometrics. Strengthen the security further with cryptographic algorithms. Use cryptography and public key management systems for a reliable public key infrastructure.</p>
  <li>Anti-intrusion systems</li>
  <li>Endpoint and firewall protection</li>
  <li>Diversified device protection</li>
  <li>Crypto algorithms</li>
  <li>Public crypto keys</li>
  <li>Full PKI management</li>
 
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

export default IoTPage;
