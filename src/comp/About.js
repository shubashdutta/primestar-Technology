import React, { useRef, useEffect } from 'react';
import Footer from './footer';
import About from "../video/About.mp4"
import { Link } from 'react-router-dom'
import "./iot.css"
import SocialMediaLinks from './social';
import "./About.css"

const AboutCompany = () => {
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
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Innovaions</a>
    <ul className="dropdown-menu">
      <Link className="dropdown-item" to ="/Iot">IoT</Link>
      <a className="dropdown-item" href="/analytics_bigdata">Analytics & Big Data</a>
      <a className="dropdown-item" href="/Cloud Computing">Cloud Computing</a>
      {/* <li><hr className="dropdown-divider"></li> */}
      <a className="dropdown-item" href="/business_intelligence">Business Intelligence Tools</a>
    </ul>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Servers</a>
    <ul className="dropdown-menu">
      <a className="dropdown-item" href="/bi_analytics">BI Analytics</a>
      <a className="dropdown-item" href="/bi_analytics_data">Big Data Consulting Services</a>
      <a className="dropdown-item" href="/testing">Testing</a>
      <a className="dropdown-item" href="/eai">EAI Tools</a>
      <a className="dropdown-item" href="/Delivery">Delivery Model</a>
      <a className="dropdown-item" href="/Customized Services">Customized Services</a>

      {/* <li><hr className="dropdown-divider"></li> */}
     
    </ul>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Our Work</a>
    <ul className="dropdown-menu">
      <a className="dropdown-item" href="/Devops">DevOps</a>
      <a className="dropdown-item" href="/Microsoft_Solutions">Microsoft Solutions</a>
      <a className="dropdown-item" href="/lineof_business">Line of Business Areas</a>
     
      <a className="dropdown-item" href="/webdevelop"> Web Apps Development</a>
      <a className="dropdown-item" href="/Mobiledevelopment">Mobile Development</a>

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
        <source src={About} type="video/mp4" />
      
      </video>
      </header>

      <main>
        <section className="iot-section">

        
  
  <ul className="dot">
    <h2>About Company</h2>
          <p>Primestar Technologies offers Software Product Development, Application Development, Web Development, Outsourced IT Managed & Infrastructure services, IT Staffing and Technology Consulting services to its clients across the globe.</p>
          
         <p> We are a team of innovative and cutting-edge technology enablers, who provide solutions to assist our clients to manage their businesses better and help them in remain competitive by adapting to the rapid technology.
          Primestar Technologies, a leading IT consulting and offshore outsourcing company, offering a wide array of customized solutions for a range of key verticals and horizontals.</p>
          <p>From IT strategy-consulting right through to implementing IT solutions for customers.primestartechnologies has excellent domain competencies in verticals such as Banking & Financial Service, Insurance, Manufacturing, Logistics, Tele Communications and Health Care sectors.
          Today, businesses demand global vision, an in-depth understanding of customers and suppliers, demonstrated thought leadership and a consultative partnership approach to offer the highest possible returns on IT investment.</p>
          <p> We help businesses achieve these ends. Working closely with our customers as transformation partners, we deliver, implement and maintain innovative software solutions across a number of technology platforms. Primestar Technologies leaders in the field of offshore services has cultivated a professional approach to project management to ensure the implementation of top quality solutions. Primestar Technologies has a formal approach to quality assurance, follows standard development methodologies, has internal standards covering all phases of the project life cycle and uses productivity and project monitoring tools extensively.
   </p>
          </ul>

{/* <p>Quality Assurance workers typically work closely with the people who develop hardware and software, and often program exhaustive scripts to automate checking and identify problems.</p> */}


  <div className="right">
  
    <ul className="link-list">
    <h2>About US</h2>
    {/* <Link to="/iot" state={{ point: '' }} className="custom-link">- IoT</Link> */}
      <li> <Link to="/Devops" state={{ point: '' }} className="custom-link">About us</Link></li>
      <li><Link to="/Microsoft_Solutions" state={{ point: '' }} className="custom-link">Why Choose Us</Link></li>
      <li><Link to="/lineof_business" state={{ point: '' }} className="custom-link">Contact Us</Link></li>
      
    </ul>
  
</div>

       

    
  <ul className="doty">
<h2>Values & Culture</h2>
       <p>In an increasingly connected global environment, it will become easier for customers to choose between similar suppliers, thus increasing the pressure of profit margins on even the most successful companies.
        </p>
        <p> In order to address this more and more companies have moved from a pure "product sale" to incorporating services into their product offerings. Doing so allowed those companies to differentiate themselves, as service offerings are more difficult to compare.</p>
        <p>
        However, with increasing globalization customers have access to information on companies world-wide, and are not restricted by physical presence. In order to compete in such an environment, companies need to provide not only excellent products and services, but what we at Primestar call "Your Vision, Our Mission" to their customers.</p>
        <p>
         In order to achieve this, not only the product side has to be addressed (by delivering the right product at the right time to the right place at the right price), but also the personal relationship to the customer. Those companies that can form relationships with their customers by addressing their unique needs and individual requirements while cost-effectively managing the product delivery to such customers will be able to compete successfully in a global environment.</p>
        
        <p>  To this extent the combination of an effective customer relationship process with a cost-competitive supply chain will become key to succeed in the 21st centuries' global economy. For medium and large-sized companies, this requires incorporation of automated SAP strategies into their business model, and to support the processes with the right IT tools to achieve global excellence..
        Classify your customers along family structures, financial status, lifestyles and risk profiles.</p>
        <p> We focus on strong process and customer centric approach Clear, prompt & focused communication process High quality software. We are committed to providing quality, security and privacy to all our customers and development teams.</p>
         
           </ul>

          {/* <h2>WinRunner</h2> */}
         
    <ul className="list">
    <h2>About US</h2>
   
    {/* <Link to="/iot" state={{ point: '' }} className="custom-link">- IoT</Link> */}
      <li> <Link to="/Devops" state={{ point: '' }} className="custom-link">About us</Link></li>
      <li><Link to="/Microsoft_Solutions" state={{ point: '' }} className="custom-link">Why Choose Us</Link></li>
      <li><Link to="/lineof_business" state={{ point: '' }} className="custom-link">Contact Us</Link></li>
      
    </ul>
         
        </section>

        
      </main>
     

      <Footer/>
    </div>
  );
};

export default AboutCompany;
