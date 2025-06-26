import React from "react";
import "./InfinityTechnologies.css";
import CreativeImage1 from "../../assets/creativeImage.jpg";
import CreativeImage2 from "../../assets/creativeImage2.jpg";
import ReDesignWebImage from "../../assets/ReDesignImage.jpg";
import WebDevplomentImage from "../../assets/webDevelopmentImage.jpg";
import AppDevelopemntImage from "../../assets/appDevImage.png.webp";

import Article1 from "../../assets/article1.jpeg";
import Article2 from "../../assets/article2.jpg";
import Article3 from "../../assets/article3.png";

import ServiceImage1 from "../../assets/serviceImage1.jpg";
import ServiceImage2 from "../../assets/servicesImage2.jpeg";
import ServiceImage3 from "../../assets/serviceImage3.jpg";
import ChatWidget from '../ChatWidget/ChatWidget'; 




function TechContent() {
  return (
    <div className="tab-content-full">
      <div className="section-header">
        <h2 className="section-title">Infinity Technologies</h2>
      </div>

      <div className="section-divider" />

      <div>
        <h2 className="section-content"> Crafting Digital Success Stories </h2>
        <h2 className="section-description">
          Welcome to Infinity Technologies, your partner in creating top-notch
          websites
          <br />
          and mobile apps. Let's embark on a journey to elevate your digital
          presence.
        </h2>
      </div>

      <div className="image-row">
        <img src={CreativeImage1} alt="Creative 1" className="creative-img" />
        <img src={CreativeImage2} alt="Creative 2" className="creative-img" />
      </div>

      <div className="service-div">
        <h2 className="Services-title">Services</h2>

        <div className="section-divider" />

        <div className="service-item">
          <div className="left-section">
            <img
              src={ReDesignWebImage}
              alt="Service"
              className="service-icon"
            />
            <span className="service-title">Website ReDesign </span>
          </div>

          <div className="center-section">₹10000</div>

          <div className="right-section">
            <button className="book-button">Book Now</button>
          </div>
        </div>

        <div className="section-divider" />

        <div className="service-item">
          <div className="left-section">
            <img
              src={AppDevelopemntImage}
              alt="Service"
              className="service-icon"
            />
            <span className="service-title">Mobile App Design </span>
          </div>

          <div className="center-section">₹10000</div>

          <div className="right-section">
            <button className="book-button">Book Now</button>
          </div>
        </div>
        <div className="section-divider" />

        <div className="service-item">
          <div className="left-section">
            <img
              src={WebDevplomentImage}
              alt="Service"
              className="service-icon"
            />
            <span className="service-title">Web Development </span>
          </div>

          <div className="center-section">₹10000</div>

          <div className="right-section">
            <button className="book-button">Book Now</button>
          </div>
        </div>
      </div>

      <div className="article-div">
        <h1 className="articlesTitle"> Latest Articles</h1>
        <div className="card-container">
          {/* Card 1 */}
          <div className="card">
            <img src={Article1} alt="Service 1" className="card-image" />
            <p className="card-title">Guna sai krishna</p>
            <p className="card-description">
              Increase Online Visibility with Professional Web Development
              Solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src={Article3} alt="Service 2" className="card-image" />
            <p className="card-title">Guna sai krishna</p>
            <p className="card-description">
              Crafting High-Performance Mobile Apps for Business Growth.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img src={Article2} alt="Service 3" className="card-image" />
            <p className="card-title">Guna sai krishna</p>
            <p className="card-description">
              Boost Conversations with Our Expert Website Redesign Services.
            </p>
          </div>
        </div>
      </div>

      <div className="our-works-div">
        <p className="our-worksTitle">Our Works</p>

        <div className="our-works-content">
          {/* Left: Text content */}
          <div className="our-works-text">
            <div className="service-block">
              <p >Website Design</p>
              <p>
                Our team excels in designing stunning websites that <br />
                attract and engage visitors. From sleek landing pages to complex
                interactive websites, <br />
                we tailor our designs to meet your specific needs.
              </p>
            </div>
            <div className="service-block">
              <p>App Development</p>
              <p>
                We specialize in crafting user-friendly mobile applications
                <br /> for both Android and iOS platforms. Our apps combine
                functionality <br />
                and aesthetics to deliver exceptional user experiences.
              </p>
            </div>
            <div className="service-block">
              <p>Optimisation Services</p>
              <p>
                Is your website outdated or underperforming? Our optimization
                services <br />
                focus on improving your site's speed,<br /> responsiveness, and user
                experience to drive more traffic and conversions.
              </p>
            </div>
            <div className="service-block">
              <p>Maintenance Plans</p>
              <p>
                Ensure your online presence remains seamless with our secure
                hosting and <br />
                maintenance services. Let us handle the <br />technical aspects so you
                can focus on growing your business.
              </p>
            </div>
            <div className="service-block">
              <p>Upgrade Support</p>
              <p>
                When it's time for a digital makeover, we're here to help. Our
                redesign <br /> services breathe new life into your website,<br />
                incorporating the latest trends and technologies for enhanced
                performance.
              </p>
            </div>
          </div>

          {/* Right: Images */}
          <div className="our-works-images">
            <img src={ServiceImage1} alt="Web Design" />
            <img src={ServiceImage2} alt="App Development" />
            <img src={ServiceImage3} alt="Optimisation" />
          </div>
        </div>
      </div>
      <ChatWidget />
    </div>
  );
}

export default TechContent;
