import React from 'react';
import "./Client.css"
import { Link } from 'react-router-dom';
import Footer from './footer';
function ClientsSection() {
  return (
    <div>
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
    <section id="clients" className="section-bg">
      <div className="container">
        <div className="section-header">
          <h3>Our Clients</h3>
          <p>One of the defining characteristics of a happy client is their unwavering loyalty. These individuals transcend mere transactions; they forge enduring relationships built on trust and satisfaction. Their allegiance is not merely to the brand or the product, but to the experience and the care extended to them. In the age of ever-evolving markets and choices, retaining the loyalty of such clients stands as a testament to a company's prowess.</p>
        </div>
        <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img
                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460149/abof.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img
                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460224/cropped-cropped-20170720-lucuLogo-squ2-e1500543540803.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img
                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460269/104840a62d46c05d285762857fecb61a.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img
                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460358/client-4.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img
                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460379/client-5.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img
                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460398/client-6.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img
                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460418/client-7.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
         
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}

export default ClientsSection;
