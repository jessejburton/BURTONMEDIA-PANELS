import React from 'react';
import Navigation from './Navigation';

const Header = () => (
  <div className="header">
    <Navigation />
    <div className="header__container panel">
      <video
        autoPlay
        muted
        loop
        className="header__video"
        poster="images/poster.png"
      >
        <source src="videos/bg-video.mp4" type="video/mp4" />
      </video>
      <div className="header__content content-container">
        <div>
          <h1 className="header__title">Building a Website</h1>
          <h2 className="header__sub-title">
            Learn to build your very own website, great for personal use or a
            small business. Join us on February 20
            <sup>th</sup> @ The Koffee Kabin in Carstairs. Cost $20.
          </h2>
          <button className="header__button button">Register</button>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
