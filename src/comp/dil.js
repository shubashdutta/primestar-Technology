import React, { useRef, useEffect } from 'react';
import Footer from './footer';
import dily from "../video/Cous.mp4"
import { Link } from 'react-router-dom'
import "./iot.css"
import SocialMediaLinks from './social';

const Delivery = () => {
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
        <source src={dily} type="video/mp4" />
      
      </video>
      </header>

      <main>
        <section className="iot-section">

      
  
    <h2>Delivery Model</h2>
  <ul className="dot-list">
          <p>We assist our clients to achieve their business objectives by successfully outsourcing their non-core business processes and functions in the areas of technology and digital marketing.</p>
    <p>We have been part of the outsourcing industry since 2012 and have successfully implemented strategic offshore programs in the areas of custom software development, software product development, casino game development and outsourced digital marketing production services to India. Primestar Technologies has been servicing clients thousands of miles away, maturing into a core dependable extension of a client's internal team.</p>   
            {/* <li>Analytical Application Development like web log analysis or social media analysis using Hadoop</li> */}
           
            <p>We leverage our people, processes and effective use of technology to catapult our clients to achieve their business potential.</p>
            <p>peime star has extensive experience in providing outsourcing non-core business processes - IT functions (software development, product development, sharepoint consulting and development, mobile app development, software testing, managed IT services, cloud computing solutions), Interactive (web design and development, game development), Internet Marketing (search engine optimization, paid search, display and social media marketing services), setting up Built Operate Transfer (BOT), specialized R&D facilities, and non-IT functions (data entry, research, customer support, finance).</p>
            <p>We have vast experience in offshore outsourcing and have matured into a dependable outsourcing partner providing substantial value and savings to our clients, often exceeding up to 65 percent.</p>
            
          </ul>

{/* <p>Quality Assurance workers typically work closely with the people who develop hardware and software, and often program exhaustive scripts to automate checking and identify problems.</p> */}


  <div class="right">
  
    <ul class="link-list">
    <h2>Our Services</h2>
    {/* <Link to="/iot" state={{ point: '' }} className="custom-link">- IoT</Link> */}
   
    {/* <Link to="/iot" state={{ point: '' }} className="custom-link">- IoT</Link> */}
      <li> <Link to="/bi_analytics" state={{ point: '' }} className="custom-link">BI & Analytics</Link></li>
      <li><Link to="/bi_analytics_data" state={{ point: '' }} className="custom-link">Big Data Consulting Services</Link></li>
      <li><Link to="/testing" state={{ point: '' }} className="custom-link">Testing</Link></li>
      <li><Link to="/eai" state={{ point: '' }} className="custom-link">EAI Tools</Link></li>
      <li><Link to="/Delivery" state={{ point: '' }} className="custom-link">Delivery Model</Link></li>
      <li><Link to="/Customized Services" state={{ point: '' }} className="custom-link">Customized Services</Link></li>

   
    </ul>
  </div>


       
<h2>Our Mission Statement</h2>
  <ul className="dot-list">
          <p>"At Primestar Technologies, we will work together to far exceed client expectation by consistently delivering service excellence through continuous improvement in quality. We will also work towards achieving consistent growth for each of Primestar Technologies family members as well as the entire organization with the support of an empowered team."</p>
   
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

export default Delivery;
