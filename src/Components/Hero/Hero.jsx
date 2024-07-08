import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_img from '../Assets/hero_img.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left" >
        <h2>NEW ARRIVALS ONLY</h2>
        <div className='hero-hand-icon'>
          <p>new</p>
          <img src={hand_icon} alt="Hand icon" />
        </div>
        <p>Collections</p>
        <p>are here</p>
        <div className="hero-latest-btn">
          <div>latest collection</div>
          <img src={arrow_icon} alt="Arrow icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
