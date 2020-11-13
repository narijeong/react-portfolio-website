import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container' id="footer">
        <section className="footer-email">
            <i class='far fa-envelope' />
            <a href = "mailto: narijeong@icloud.com">narijeong@icloud.com</a>
        </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <a class="social-icon-link" href="https://www.github.com/narijeong" target="_blank"><i class='fab fa-github' /></a>
            <a class="social-icon-link" href="https://www.linkedin.com/in/nari-jeong-a9720a91" target="_blank"><i class='fab fa-linkedin' /></a>
            <a class="social-icon-link" href="#" target="_blank"><i class='fab fa-twitter' /></a>
          </div>
        </div>
      </section>
      <small class='website-rights'>Copyright © 2020 All rights reserved | Nari Jeong</small>
    </div>
  );
}

export default Footer;