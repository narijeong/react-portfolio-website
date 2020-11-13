import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container' id="hero-section">
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      <h1>Hi! This is Nari</h1>
      <p>I'm a <b>full-stack developer</b> enthusiastic </p>
      <p>about <b>technology</b> and I love building <b>epic stuff</b></p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path="resume"
        >
          Resume
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          path="portfolio"
        >
          See what i worked on<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;