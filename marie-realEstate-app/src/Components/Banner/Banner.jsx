import React from 'react';
import './Banner.css';
import bannerImage from '../assets/img/banner.png'; // Update with the actual path
import Search from '../Search/Search';
const Banner = () => {
  return (
    <>
      <div className="banner">
      <img src={bannerImage} alt="Marie Real Estate" className="banner-image" />
      <div className="banner-overlay">
        <div className="banner-text">
          <h1>Welcome to Marie Real Estate</h1>
          <p>Find your dream home with us</p>
        </div>
      </div>
      </div>
      <div>
      <Search />
      </div>
    </>
  );
};

export default Banner;
