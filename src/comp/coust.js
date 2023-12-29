import React, { useRef, useEffect } from 'react';
import Footer from './footer';
import Cos from "../video/Cous.mp4"
import { Link } from 'react-router-dom'
import "./iot.css"
import SocialMediaLinks from './social';

const Coust = () => {
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
        <source src={Cos} type="video/mp4" />
      
      </video>
      </header>

      <main>
        <section className="iot-section">

     
  
    <h2>Customized Services</h2>
  <ul className="dot-list">
          <p>prime has assisted companies within the travel and hospitality industry to successfully solve both business and technology challenges by leveraging innovative use of technology. Internet has increased the pressure on companies to provide direct connectivity into their latest offers, reservation systems to provide real time availability and booking, and to cut costs through operation efficiency and raise top line revenues in the competitive industry. Globalization has increased travel across borders and travelers are beginning to take buying decisions in their own hands and decreasing dependence on travel agents. When consumers plan trips and vacations, they use a wide variety of internet resources to research and book travel, hospitality and entertainment options. And since they sometimes make decisions on impulse, the quality and timing of offers is critical in reaching them.</p>
   
          </ul>

{/* <p>Quality Assurance workers typically work closely with the people who develop hardware and software, and often program exhaustive scripts to automate checking and identify problems.</p> */}

 
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

       
<h2>software development & maintenance outsourcing</h2>
    
  <ul className="dot-list">
         <li>Dynamic Packaging</li>
         <li>Reservation Systems</li>
         <li>Integration with GDS (Amadeus, Pegasus, Sabre, Galileo)</li>
         <li>Payment Systems Integration</li>
         <li>Inventory & Procurement Management</li>
         <li>Customer Relationship Management (CRM)</li>
         <li>Internet Marketing Solutions (Search Marketing, Social Media, Email Marketing)</li>
         <li>Self Serving Solutions (Kiosks, Touch Screen, Mobile/PDA, Web)</li>
         <li>Marketing and Analytics Solutions</li>
         <li>Digital Signage Solutions</li>
         <li>Customer Loyalty Solutions/Rewards Programs</li>
         <li>Content Management Solutions (CMS)</li>
         <li>Financial solutions</li>
         <li>Service Request Management/Material Order Management</li>
         <li>Preventive Maintenance</li>
         <li>Property Management Systems (PMS)</li>
         <li>Point-of-Sales (POS)</li>
         <li>Document Management</li>
          </ul>

          {/* <h2>WinRunner</h2> */}
         
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

export default Coust;
