import React from 'react'
import "./Homepage.css"
import SocialMediaLinks from './social'
import Carousel from './Mainhomepage'
import Mainhomepage from './Mainhomepage'
import Effect from './Effect'

import ImageWithText from './Lasthomepage'
import Footer from './footer'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div>
        <SocialMediaLinks/>
      <ul className="nav nav-pills">

      <Link to="/">
  <img  className='logo'
    src="./logo.png"
    alt="company logo"
    width="100"
    height="80"
    style={{ marginRight: '130px' }}
    
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
<Mainhomepage/>
<div>                                                                      
<h2 className="innovationsHeader" style={{textTransform:"capitalize"}}>our innovations </h2>
  {/* <h2 style={{
    fontSize: '40px',
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '20px',
    backgroundImage: 'linear-gradient(to right, red, yellow)',
    padding: '5px',
    display: 'block',
    textAlign: 'center'
  }}>OUR INNOVATIONS</h2> */}
  <h1 className="innovationsSecret" style={{textTransform:"capitalize"}}>The secret to our success is our ability to provide unparalleled exposure in extremely competitive markets.</h1>

  {/* <h1 style={{
    fontSize: '40px',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '20px',
    fontWeight: 'bold',
    marginBottom: '30px',
    textAlign: 'center'
  }}>The secret to our success is our ability to provide unparalleled exposure in extremely competitive markets.</h1>
   */}
  <Effect />
</div>
<ImageWithText/>
< Footer/>
    </div>
  )
}

export default Homepage
