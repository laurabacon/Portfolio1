import React from 'react';
import aboutMePic from '../assets/ContactMePhoto.png';
import '../assets/css/about.css';

const About = () => {
  return (
    <section>
      <div className='color'>
        <h3>About Me</h3>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={aboutMePic} alt="developer picture" style={{ width: '300px', height: 'auto' }} />
            <p style={{ flexGrow: 1 }}>Dedicated and results-driven professional with a proven track record in Quality Assurance, Admissions Management, and Customer Service. Seeking a challenging role where I can leverage my skills in data analysis, team leadership, process improvement, and consultative sales to contribute to an organization's success and growth.</p>
          </div>
      </div>

      <div className='color' id="resume">
      <h3>Resume</h3>
      <br />
      <h5>Download My Resume: <a href="src/assets/Resume QA Manager.pdf" download="Resume QA Manager.pdf">
        Resume
      </a></h5>
      
      <br />
      <h5>Skills</h5>
      <p>Frontend:</p>
      <ul>
        <li>HTML5</li>
        <li>CSS</li>
        <li>JQuery</li>
        <li>Javascript</li>
        <li>Bootstrap</li>
        <li>AJAX</li>
        <li>SAAS</li>
      </ul>
      <p>Backend:</p>
      <ul>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Express</li>
        <li>ReactJS</li>
        <li>Node</li>
        <li>Handlebars</li>
        <li>Firebase</li>
        <li>AWS</li>
        <li>Webpack</li>
        <li>Gulp</li>
      </ul>
      </div>
    </section>
  );
}

export default About;

