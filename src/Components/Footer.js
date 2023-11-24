import React from "react";
import "./Footer.css"; // Import your CSS for styling

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li>
              <a href="#">Mobiles</a>
            </li>
            <li>
              <a href="#">Fashion</a>
            </li>
            <li>
              <a href="#">Electronics</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Policy</h3>
          <ul>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Social</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
