import React from 'react';
import aboutMePic from '../assets/ContactMePhoto.png';

const About = () => {
  return (
    <div>
      <h3>About Me</h3>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={aboutMePic} alt="developer picture" style={{ width: '300px', height: 'auto' }} />
      <p style={{ flexGrow: 1 }}>Dedicated and results-driven professional with a proven track record in Quality Assurance, Admissions Management, and Customer Service. Seeking a challenging role where I can leverage my skills in data analysis, team leadership, process improvement, and consultative sales to contribute to an organization's success and growth.</p>
      </div>
    </div>
  );
}

export default About;

