import React, { useRef, useEffect } from 'react';
import Footer from './footer';
import bigdata from "../video/bigdata.mp4"
import { Link } from 'react-router-dom'
import "./iot.css"
import SocialMediaLinks from './social';

const Eai = () => {
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
        <source src={bigdata} type="video/mp4" />
      
      </video>
      </header>

      <main>
        <section className="iot-section">

       
  
    <h2>EAI Tools</h2>
  <ul className="dot-list">
          <p>Within the increasingly complex environment of the eBusiness world, it is imperative that state-of-the-art business processes are cohesively enabled by a seamless underlying IT infrastructure. Further, the Internet phenomenon is forcing companies to transform and exploit their IT systems, re-design their processes to be more responsive and flexible in order to better co-ordinate among customers, suppliers, trading partners and other business entities. This transformation demands application and process integration both inside and outside the enterprise. Enterprise application integration (EAI) tools and technologies address the unique challenges that this integration poses.</p>
    <p>The value that extended enterprise applications like CRM, SCM and PRM bring to the table is tremendous. But their full potential can never be realized without the technological “glue” that integrates them to one another and to your existing legacy systems and business processes. Organizations, across the board, have a maze of applications built across technology horizons that have been running for decades. The integration challenges faced so far have led to these disconnected applications residing either as "stovepipes", "islands of automation", or "vertical application silos".</p>   
            {/* <li>Analytical Application Development like web log analysis or social media analysis using Hadoop</li> */}
           
            <p>Today’s competitive scenario dictates unified view of the customers, channel partners, suppliers, employees and your internal business processes. Enterprise Application Integration (EAI) offers to seamlessly put together these heterogeneous applications and processes to bring synergy to your business operations.</p>
            <p>Our end-to-end EAI consulting and implementation services cover the entire spectrum of issues associated with the integration of your enterprise. Our expertise across BEA, Tibco, Vitria, WebMethods, IBM MQ Series, SeeBeyond and Standards including EDI, XML, S.W.I.F.T. and HIPAA lends itself for smooth EAI implementation. Our mature business centric EAI implementation methodology follows a four-step model given below:</p>
            <p>Assessment of EAI needs in terms of your current applications, business processes and existing system architecture.</p>
            <p>Recommendation of EAI strategy and implementation plan in terms of business processes to be reengineered, expected system architecture and potential benefits.</p>
            <p>Selection of EAI tools & components and their implementation.

Post implementation support.</p>
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

export default Eai;
