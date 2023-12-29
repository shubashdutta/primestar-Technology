import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Cont.css'; // Assuming you have a CSS file for styling
import Footer from './footer';
import { Link } from 'react-router-dom';

function Contact() {
  const backgroundStyle = {
    backgroundImage: `url('https://img.freepik.com/free-vector/hand-drawn-texas-state-outline-map_23-2149377610.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };
  return (
    
    <div className="background-image" style={backgroundStyle} >
      
     
    <section id="section-wrapper">
      <div className="box-wrapper">
        <div className="info-wrap">
          <h2 className="info-title">PrimestarTechnology </h2>
          <h3 className="info-sub-title">
            Fill up the form and our Team will get back to you within 24 hours
          </h3>
          <ul className="info-details">
            <li>
              <i className="fas fa-phone-alt"></i>
              <span>Phone:</span> <a to="tel:+1 (214) 868-1515">+1 (214) 868-1515</a>
            </li>
            <li>
              <i className="fa fa-paper-plane"></i>
              <span>Email:</span>{' '}
              <a to="mailto:info@primestartechnologies.com" style={{fontSize:"16px"}}>info@primestartechnologies.com</a>


            </li>
            <li>
              <i className="fas fa-globe"></i>
              <span>Website:</span>{' '}
              <a to="#">primestartechnologies.com</a>
            </li>
          </ul>
          <ul className="social-icons">
          <li><a to="#"><FaFacebook /></a></li>
      <li><a to="#"><FaTwitter /></a></li>
      <li><a to="#"><FaInstagram /></a></li>
          </ul>
        </div>
        <div className="form-wrap">
          <form action="https://formsubmit.co/info@primestartechnologies.com" method="/">
            <h2 className="form-title">Send us a message</h2>
            <div className="form-fields">
              <div className="form-group">
                <input type="text" className="fname" name='name' required placeholder="First Name" />
              </div>
              <div className="form-group">
                <input type="text" className="lname" name='lastname' placeholder="Last Name" />
              </div>
              <div className="form-group">
                <input type="email" className="email" name='email'required placeholder="Mail" />
              </div>
              <div className="form-group">
                <input type="number" className="phone" name='phone' required placeholder="Phone" />
              </div>
              <div className="form-group">
                <textarea name="message" id=""  required placeholder="Write your message"></textarea>
              </div>
            </div>
            <input type="submit" value="Send Message" className="submit-button" />
          </form>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}

export default Contact;
