import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <footer class="footer">
        <div class="footer__nav-section">
          <div class="footer__nav-section__list">
            <span class="footer-header-text">Help & Information</span>
            <ul class="footer-list">
              <li class="footer-list__item"><a class="footer__nav__item" href="#">Opening Hours & Locations</a></li>
              <li><a class="footer__nav__item" href="#">Donate</a></li>
              <li><a class="footer__nav__item" href="#">FAQs</a></li>
            </ul>
          </div>
          <div class="footer__nav-section__list">
            <span class="footer-header-text">About The Capstone Museum Group</span>
            <ul class="footer-list">
              <li><a class="footer__nav__item" href="AboutUs">About Us</a></li>
              <li><a class="footer__nav__item" href="#">Corporate Responsibility</a></li>
              <li><a class="footer__nav__item" href="EntityRelationshipDiagram">ERD</a></li>
            </ul>
          </div>
        </div>
        <section class="footer__copyright-section">
          <p class="copyright-text">&#169; 2024 The Capstone Museum Group</p>
        </section>
      </footer>
    )
}

export default Header;
