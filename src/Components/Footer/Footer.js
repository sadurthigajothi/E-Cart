import React from 'react'
import '../Navbar/Navbar.css';
import logo from '../assets/logo-nav.jpg'

const Footer = () => {
   return (
      <div className='footer'>
         <div className="footer-logo">
            <img src={logo} alt="" />
            <p>
               E-Cart
            </p>
         </div>
         <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offers</li>
            <li>About</li>
            <li>Contact</li>
         </ul>
         <div className="footer-social-icon">
            <i className='fa-brands fa-instagram'></i>
            <i class="fa-brands fa-pinterest"></i>
            <i class="fa-brands fa-whatsapp"></i>
         </div>
         <div className="footer-copyright">
            <hr />
            <p>&copy;Copyright @ 2025 - All Right Reserved.</p>
         </div>
      </div>
   )
}

export default Footer