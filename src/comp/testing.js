import React, { useRef, useEffect } from 'react';
import Footer from './footer';
import testing from "../video/Dev.mp4"
import { Link } from 'react-router-dom'
import "./iot.css"
import SocialMediaLinks from './social';

const Testing = () => {
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
        <source src={testing} type="video/mp4" />
      
      </video>
      </header>

      <main>
        <section className="iot-section">

      
  
    <h1>Testing</h1>
    <p>The Quality Assurance is the practice of checking hardware, software, or systems for defects, identifying such defects, and then checking to make sure that such defects are corrected when future revisions of software or hardware are ready for testing:</p>

<p>Software Quality Assurance involves the entire software development process - monitoring and improving the process, making sure that any agreed-upon standards and procedures are followed, and ensuring that problems are found and dealt with. It is oriented to 'prevention'.</p>
<p>Quality Assurance workers typically work closely with the people who develop hardware and software, and often program exhaustive scripts to automate checking and identify problems.</p>


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

       
          

          <h2>WinRunner</h2>
          <ul className="dot-list">
<p>WinRunner is a functional/regression test tool from Primestar Technologies . WinRunner is a powerful tool for enterprise wide functional and regression testing. Vyza Solutions WinRunner captures, verifies, and replays user interactions automatically, so you can identify defects and ensure that business processes work flawlessly upon deployment and remain reliable. It includes support for testing Web, Java, ERP, etc. Web Functional/ Regression Test Tools..</p>
<p>With Vyza Solutions , the organization reduces testing time by automating repetitive tasks, optimizes testing efforts by covering diverse environments with a single testing tool and maximizes return on investment through modifying and reusing test scripts as the application evolves.</p>
           
            {/* <li>Analytical Application Development like web log analysis or social media analysis using Hadoop</li> */}
          </ul>

          <h2>LodRunner</h2>
          <ul className="dot-list">
            <p>LoadRunner is a performance-testing tool that prevents costly performance problems in production by detecting bottlenecks before a new system or upgrade is deployed. LoadRunner helps to verify that new or upgraded applications will deliver intended business outcomes before go-live, prevent over-spending on hardware and infrastructure. It is the industry-standard load testing solution for predicting system behavior and performance, and the only integrated load testing, tuning, and diagnostics solution in the market today.</p>
            <p>With LoadRunner web testing software, you can measure end-to-end performance, diagnose application and system bottlenecks, and tune for better performance—all from a single point of control. It supports a wide range of enterprise environments, including Web Services, J2EE, and .NET.</p>
           
           
          </ul>

          <h2>QTP</h2>
          <ul className="dot-list">
            <p>QuickTest Professional is functional test and regression test automation solution that address every major software application and environment. It deploys the concept of Keyword-driven testing to radically simplify test creation and maintenance. Unique to QuickTest Professional's Keyword-driven approach, test automation experts have full access to the underlying test and object properties, via an integrated scripting and debugging environment that is round-trip synchronized with the Keyword View..</p>
            <p>It enables you to deploy higher-quality applications faster, cheaper, and with less risk. It works hand-in-hand with Primestar Technologies Business Process Testing to bring non-technical subject matter experts into the quality process in a meaningful way. Plus, it empowers the entire testing team to create sophisticated test suites with minimal training.</p>
           
          
           
          </ul>

          <h2>Primestar Technologies Test Director</h2>
          <ul className="dot-list">
            <p>TestDirector allows you to deploy high-quality applications quickly and effectively by providing a consistent, repeatable process for gathering requirements, planning and scheduling tests, analyzing results, and managing defects and issues. TestDirector is a single, Web-based application for all essential aspects of test management — Requirements Management, Test Plan, Test Lab, and Defects Management. You can leverage these core modules either as a standalone solution or integrated within a global Quality Center of Excellence environment.</p>
            <p>TestDirector supports high levels of communication and collaboration among IT teams. Whether you are coordinating the work of many disparate Quality Assurance teams, or working with a large, distributed Center of Excellence, this test management tool helps facilitate information access across geographical and organization boundaries.</p>
           
           
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

export default Testing;
