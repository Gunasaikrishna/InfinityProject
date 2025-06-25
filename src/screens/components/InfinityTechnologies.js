import React from 'react';
import './InfinityTechnologies.css';
import CreativeImage1 from '../../assets/creativeImage.jpg';
import CreativeImage2 from '../../assets/creativeImage2.jpg';

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
<div className="image-row">
  <img src={CreativeImage1} alt="Creative 1" className="creative-img" />
  <img src={CreativeImage2} alt="Creative 2" className="creative-img" />
</div>

<div className='service-div'>
<h2 className="Services-title">Services</h2>

<div className="section-divider" />


</div>

</div>
      </div>
  );
}

export default TechContent;
