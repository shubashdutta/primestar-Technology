import React, { useRef, useEffect } from 'react';
import Footer from './footer';
import mobile from "../video/Mobile.mp4"
import { Link } from 'react-router-dom'
import "./iot.css"
import SocialMediaLinks from './social';

const Mobile = () => {
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
        <source src={mobile} type="video/mp4" />
      
      </video>
      </header>

      <main>
        <section className="iot-section">

       
  
    <h2>Mobile Application Development</h2>
  <ul className="dot-list">
          <p >We have extensive experience in mobile application development spanning all major mobile platforms. We have helped our clients generate new revenue streams by building pioneering solutions that have become benchmarks in the industry.</p>
          <p>The mobile application development landscape has undergone a sea change. Mobile platforms are becoming more mature and powerful mobile devices are being launched at an increasing frequency. With the proliferation and ubiquity of mobile devices, consumers are demanding advanced mobile applications and services.</p>
          <p>With 10+ years of experience in mobile application development, we help you overcome the challenges of increasing customer demands, ever-changing technology trends and aggressive release deadlines. Leveraging our industry intelligence and technological background, we design and build mobile applications that are customer-friendly and facilitate easy and quick data processing. With our nuanced understanding of the mobile space, we have helped our ISV and enterprise customers adopt and implement cutting-edge mobile technologies successfully.</p>
          <p>Whether you are a telecom operator, content aggregator / content provider or independent software vendor (ISV), we offer solutions that encompass mobile technologies, mobile data services enablement and interactive TV technologies.</p>
   
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

       
<h2>DEVELOPMENT EXPERTISE IN:</h2>

    
  <ul className="dot-list">
      <li>Mobile application development</li>
      <li>Mobile application porting</li>
      <li>Third-party integration</li>
      <li>Testing and certification</li>
      <li>Maintenance and support</li>
           </ul>


<h2>WE HAVE PROVEN EXPERTISE IN:</h2>
           <ul className="dot-list">
      <li>Mobile portals – HTTP, OIS, SMPP, UCP, WAP, XML</li>
      <li>Mobile Networks – 2G, 2.5G, 3G</li>
      <li>Mobile network gateway – SMS, MMS, WAP</li>
      <li>Mobile enabling enterprise applications</li>
      <li>Maintenance and support</li>
      <p >We offer custom application development services to suit specific requirements of the respective businesses. Considering the inherent complexities and specifications of different businesses, we provide the organizations and businesses with application development services tailor made to meet their specific business needs.</p>
      <p style={{fontWeight:"bold"}}>We support SMEs via offering conceptualization, integration and maintenance solutions in various areas including but not limited to:</p>
      <p>Speed: We have a highly efficient application development process that distributes work among our expert teams around the globe - giving you state-of-the art applications in warp speed.</p>
      <p>Quality: Our unique development model and service infrastructure is not only more efficient, it gives you better, high-quality solutions at the lowest possible cost.</p>
      <p>Creativity: Our experienced developers work hard to understand your requirements, contribute ideas and develop innovative solutions to your needs.</p>
           </ul>
<h2>Our Mobile & Tablet Application Development Services</h2>
           <ul className="dot-list">
            <p>The platforms that we cater in mobile application development, wireless application development, business applications for mission critical needs.</p>
            <li>iPhone Application Development</li>
            <li>BlackBerry Application Development</li>
            <li>Android Phone Application Development</li>
            <li>iPad Application Development</li>
            <li>Windows Mobile 7 Application Development</li>
            <li>BlackBerry PlayBook Application Development</li>
            <li>Android Tablet Application Development</li>
            <p>Our mobile application development team is equipped with the knowledge of the latest tools and technologies that prove vital in devising solutions corresponding to different genre of mobile apps development.</p>
            <p>Tablet application development using WAP/WSP, WTLS, WTP, Wi-Fi WP-HTTP</p>
            <p>PDA programming for Pocket PC, Window Mobile, C, WinCE, J2ME</p>
            <p>Equipped with the knowledge of the latest tools and technologies that prove vital in devising solutions corresponding to different genre of mobile game design and mobile apps development.</p>
            <p>Expert designers and developers for developing applications for iPhone, blackberry, android tablets & phones, iPad & windows 7 phone.</p>
            <p>Skilled professionals for designing mobile phone applications who adept at devising innovative solutions with precision and at inimitable pace.</p>
            </ul>

          {/* <h2>WinRunner</h2> */}
         
    <ul class="list">
    <h2>Our Work</h2>
    

<li> <Link to="/Devops" state={{ point: '' }} className="custom-link">DevOps</Link></li>
      <li><Link to="/Microsoft_Solutions" state={{ point: '' }} className="custom-link">Microsoft Solutions</Link></li>
      <li><Link to="/lineof_business" state={{ point: '' }} className="custom-link">Line of Business Areas</Link></li>
      <li><Link to="/iot" state={{ point: '' }} className="custom-link">Technology Expertise</Link></li>
      <li><Link to="/webdevelop" state={{ point: '' }} className="custom-link">Web Apps Development</Link></li>
      <li><Link to="/iot" state={{ point: '' }} className="custom-link">Mobile Development</Link></li>

    </ul>
         
        </section>

        
      </main>
     

      <Footer/>
    </div>
  );
};

export default Mobile;
