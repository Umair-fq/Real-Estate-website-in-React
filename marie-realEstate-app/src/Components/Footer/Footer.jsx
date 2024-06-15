import React from 'react';
import './Footer.css'; // Ensure the path to your CSS file is correct
import { FaGithub, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const githubLink = 'https://github.com/umair-fq';
  const emailLink = 'mailto:farooqumair.islu@gmail.com';
  const linkedinLink = 'https://www.linkedin.com/in/farooq-umair-dev';
  const instagramLink = 'https://www.instagram.com/umair_fq/';

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <img src="/path/to/marie-real-estate-logo.png" alt="Marie Real Estate Logo" className="footer-logo" />
          <p className="about-text">
            Providing the best real estate services. Connect with us for top-notch properties.
          </p>
          <div className="socials">
            <a href={emailLink} className="social-icon"><FaEnvelope /></a>
            <a href={githubLink} className="social-icon"><FaGithub /></a>
            <a href={linkedinLink} className="social-icon"><FaLinkedinIn /></a>
            <a href={instagramLink} className="social-icon"><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p><strong>Email:</strong> <a href={emailLink}>farooqumair.islu@gmail.com</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Marie Real Estate | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
