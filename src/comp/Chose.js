import React, { useRef, useEffect } from 'react';
import Footer from './footer';
import About from "../video/About.mp4"
import { Link } from 'react-router-dom'
import "./About.css"
import SocialMediaLinks from './social';

const Chous = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div className="iot-page">
      <SocialMediaLinks />
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
            <Link className="dropdown-item" to="/Iot">IoT</Link>
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
          <source src={About} type="video/mp4" />

        </video>
      </header>

      <main>
        <section className="iot-section">




          <ul className="dot">
            <h2>Why Us?</h2>
            <p >The Primestar Technologies Methodology not only provides structure, but it also provides guidelines for tailoring alternatives for standard approach, to suit different client requirements and processes. The core strength of our methodology is that after tailoring and blending with client's processes, it is zero learning for the client as processes remain same for them.</p>
            <p>
              The framework of our methodology allows us to adopt a variety of techniques and tools for carrying out the defined tasks. It also allows us to change techniques and/or tools as new products come onto the market without changing the methodology..
              By re-utilizing clearly defined processes and tasks, our methodology simplifies the development process.</p>
            <p>  The sequencing of those tasks and the completeness of those deliverables have been previously proven, thereby ensuring clarity and certainty to the process. Our methodology's proven experience ensures that there are no holes to be overlooked or tasks to be duplicated.
              Our decision to document our software development methodology stems from the belief that before you can improve a process, you must document it. This document demonstrates that we have a documented process for building software. </p>
             <p>Our intention is to identify and improve the software development life cycle we use to build software

            It is important to note that our methodology is an evolving methodology that is revised on an ongoing basis. It is not to be considered etched in stone, but is to act as a guideline and is to be used in accordance with the needs of the current project.
              Primestar Technologies has an excellent pool of human resources. The human resource pool includes software professionals right from Senior Project Managers to young Software Engineers. </p>

              <p>These professionals have expertise ranging from operating systems to the latest web based and emerging technologies.
             Primestar Technologies also has software professionals with strong database design and administration skills.

            Primestar Technologies Board of Directors bring in a vast amount of experience with the aim of providing the long-term vision and direction to Primestar Technologies </p>
            <p>  Primestar Technologies is an organization with an international executive and management team that brings a wealth of experience in major aspects of running a world class IT services company. This management team complements the strengths of the board, and has the necessary skills and experience to execute the strategy and business plan of the company.</p>

            <p>Primestar Technologies is sensitive to the cross cultural and social skills required to work effectively in the global IT industry, realizing this team Primestar Technologies is equipped with the necessary skills and training to meet these demands.
              Every great idea has a simple inner meaning. It is unique by its existence. The motive behind the idea is to make a task achievable.Primestar Technologies it is all about how best we get you there. A fail-safe approach to success is in unifying ideas and providing the space for its implementation.
            </p>
          </ul>

          {/* <p>Quality Assurance workers typically work closely with the people who develop hardware and software, and often program exhaustive scripts to automate checking and identify problems.</p> */}


          <div class="right">

            <ul class="link-list">
              <h2>About US</h2>
              {/* <Link to="/iot" state={{ point: '' }} className="custom-link">- IoT</Link> */}
              <li> <Link to="/aboutus" state={{ point: '' }} className="custom-link">About us</Link></li>
              <li><Link to="/why_we" state={{ point: '' }} className="custom-link">Why Choose Us</Link></li>
              <li><Link to="/lineof_business" state={{ point: '' }} className="custom-link">Contact Us</Link></li>

            </ul>

          </div>




          {/* <h2>WinRunner</h2> */}

          <ul class="list">
            <h2>About US</h2>

            {/* <Link to="/iot" state={{ point: '' }} className="custom-link">- IoT</Link> */}
            <li> <Link to="/aboutus" state={{ point: '' }} className="custom-link">About us</Link></li>
            <li><Link to="/why_we" state={{ point: '' }} className="custom-link">Why Choose Us</Link></li>
            <li><Link to="/lineof_business" state={{ point: '' }} className="custom-link">Contact Us</Link></li>

          </ul>

        </section>


      </main>


      <Footer />
    </div>
  );
};

export default Chous;
