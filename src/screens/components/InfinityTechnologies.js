import React from 'react';
import './InfinityTechnologies.css';
import CreativeImage1 from '../../assets/creativeImage.jpg';
import CreativeImage2 from '../../assets/creativeImage2.jpg';
import ReDesignWebImage from '../../assets/ReDesignImage.jpg';
import WebDevplomentImage from '../../assets/webDevelopmentImage.jpg';
import AppDevelopemntImage from '../../assets/appDevImage.png.webp';




function TechContent() {
  return (
  
        <div className="tab-content-full">
        
        <div className="section-header">
  <h2 className="section-title">Infinity Technologies</h2>
</div>

<div className="section-divider" />

<div >
  <h2 className="section-content"> Crafting Digital Success Stories </h2>
  <h2 className='section-description'>
  Welcome to Infinity Technologies, your partner in creating top-notch websites<br />
  and mobile apps. Let's embark on a journey to elevate your digital presence.
</h2>
</div>

<div className="image-row">
  <img src={CreativeImage1} alt="Creative 1" className="creative-img" />
  <img src={CreativeImage2} alt="Creative 2" className="creative-img" />
</div>

<div className='service-div'>
<h2 className="Services-title">Services</h2>

<div className="section-divider" />

<div className="service-item">
  <div className="left-section">
    <img src={ReDesignWebImage} alt="Service" className="service-icon" />
    <span className="service-title">Website ReDesign </span>
  </div>

  <div className="center-section">
    ₹10000
  </div>

  <div className="right-section">
    <button className="book-button">Book Now</button>
  </div>
</div>

<div className="section-divider" />

<div className="service-item">
  <div className="left-section">
    <img src={AppDevelopemntImage} alt="Service" className="service-icon" />
    <span className="service-title">Mobile App Design </span>
  </div>

  <div className="center-section">
    ₹10000
  </div>

  <div className="right-section">
    <button className="book-button">Book Now</button>
  </div>
</div>
<div className="section-divider" />

<div className="service-item">
  <div className="left-section">
    <img src={WebDevplomentImage} alt="Service" className="service-icon" />
    <span className="service-title">Web Development </span>
  </div>

  <div className="center-section">
    ₹10000
  </div>

  <div className="right-section">
    <button className="book-button">Book Now</button>
  </div>
</div>



</div>

<div className='article-div'>
<h1 className='articlesTitle'> Latest Articles</h1> 
<div className="card-container">
  {/* Card 1 */}
  <div className="card">
    <img src={CreativeImage1} alt="Service 1" className="card-image" />
    <p className="card-title">Guna sai krishna</p>
    <p className="card-description">Increase Online Visibility with Professional Web Development Solutions.</p>
  </div>

  {/* Card 2 */}
  <div className="card">
    <img src={CreativeImage1} alt="Service 2" className="card-image" />
    <p className="card-title">Guna sai krishna</p>
    <p className="card-description">Crafting High-Performance Mobile Apps for Business Growth.</p>
  </div>

  {/* Card 3 */}
  <div className="card">
    <img src={CreativeImage1} alt="Service 3" className="card-image" />
    <p className="card-title">Guna sai krishna</p>
    <p className="card-description">Boost Conversations with Our Expert Website Redesign Services.</p>
  </div>
</div>

</div>


      </div>
  );
}

export default TechContent;
