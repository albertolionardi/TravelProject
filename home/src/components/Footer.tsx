import React from 'react';
import '../../static/css/footer.css';


const Footer = () => {
    const handleRateUsClick = () => {
        window.location.href = '/rateus';
      };
      const handleAboutUsClick = () => {
        window.location.href ='/aboutus'
      }
      const handleExploreClick = () => {
        window.location.href = '/';
      };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-partner">
          <img src="/media/jelajahi_logo.png" alt="Company Logo" className="footer-logo" onClick={()=> handleExploreClick()}/>
          <div className="partner-section">
            <button className="partner-button">Partner with Us</button>
            <div className="payment-partners">
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>About Us</h4>
            <ul>
              <li><a href="#">How to Book</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a onClick={() => handleRateUsClick()}>Rate Us</a></li>
              <li><a onClick={() => handleAboutUsClick()}>About Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Products</h4>
            <ul>
              <li><a href="#">Hiking Activity</a></li>
              <li><a href="#">Snorkeling Activity</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Others</h4>
            <ul>
              <li><a href="#">Affiliate</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Privacy Notice</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Register Your Accommodation</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <h4>Follow us on</h4>
          <div className="social-icons">
          </div>
          <div className="app-download">
            <h4>Download Our App</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;