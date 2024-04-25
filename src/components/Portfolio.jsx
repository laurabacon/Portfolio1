import React, { useEffect } from 'react';
import image2 from '../assets/dateNight.png';
import image4 from '../assets/StarRay.png';
import image5 from '../assets/RefactorStarRay.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/css/portfolio.css';

gsap.registerPlugin(ScrollTrigger);


const Portfolio = () => {
  useEffect(() => {
    // Animation for the first section
    gsap.to(".hero", {
      scrollTrigger: {
        trigger: ".hero",
        scrub: true,
        pin: true,
        start: "center center",
        end: "bottom -50%",
        toggleClass: "active",
        ease: "power2"
      }
    });
  
    gsap.utils.toArray('.hero__inner').forEach((heroInner, index) => {
      const content = heroInner.querySelector('.hero__content');
      const image = heroInner.querySelector('.hero__image');
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroInner,
          scrub: 0.5,
          start: 'top bottom',
          end: 'bottom -100%',
          toggleActions: 'play none none reverse',
        }
      });

      timeline.to(image, {
        filter: 'brightness(1)',
        duration: 0.3, 
        onComplete: () => content.classList.remove('show'),
      });
    });
  }, []);

  useEffect(() => {
    // Animation for the second section
    gsap.to(".section2", {
      scrollTrigger: {
        trigger: ".section2",
        scrub: true,
        pin: true,
        start: "center center",
        end: "bottom -50%",
        toggleClass: "active",
        ease: "power2"
      }
    });

    gsap.utils.toArray('.section2__inner').forEach((sectionInner, index) => {
      const content = sectionInner.querySelector('.section2__content');
      const image = sectionInner.querySelector('.section2__image');
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionInner,
          scrub: 0.5,
          start: 'top bottom',
          end: 'bottom -100%',
          toggleActions: 'play none none reverse',
        }
      });

      timeline.to(image, {
        filter: 'brightness(1)',
        duration: 0.3, 
        onComplete: () => content.classList.remove('show'),
      });
    });
  }, []);

  useEffect(() => {
    // Animation for the third section
    gsap.to(".section4", {
      scrollTrigger: {
        trigger: ".section4",
        scrub: true,
        pin: true,
        start: "center center",
        end: "bottom -50%",
        toggleClass: "active",
        ease: "power2"
      }
    });

    gsap.utils.toArray('.section4__inner').forEach((sectionInner, index) => {
      const content = sectionInner.querySelector('.section4__content');
      const image = sectionInner.querySelector('.section4__image');
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionInner,
          scrub: 0.5,
          start: 'top bottom',
          end: 'bottom -100%',
          toggleActions: 'play none none reverse',
        }
      });

      timeline.to(image, {
        filter: 'brightness(1)',
        duration: 0.3, 
        onComplete: () => content.classList.remove('show'),
      });
    });
  }, []);
    


// Add in an animated "Scroll to view projects with an arrow" - bouncing annimation?? 
// after the h2 element in div below
  return (
    <div className='background'>
      <div className="container">
        <h2 className="container__headline">Welcome</h2>
        <h3 className='scroll-to-view-projects'>Scroll To View Projects</h3>
      </div>

        


      <section className="container hero">
        <div className="hero__inner">
          <div className="hero__images">
            <img className="hero__image" src={image5}
            alt="project1" />
          </div>
          <div className="hero__content">
            <div className="hero__headline">
              <span>
                <h2>Refactored Mern Star Ray Designs</h2>
                <a href="https://lit-eyrie-12834-5b6e0706190e.herokuapp.com/">Deploy</a>
                <br />
                <a href="https://github.com/laurabacon/Star-Ray">Github</a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section2 container hero">
        <div className="section2__inner">
          <div className="hero__images">
            <img className="section2__image" src={image4} alt="Project 2" />
          </div>
          <div className="section2__content">
            <div className="section2__headline">
              <span>
                <h2>Star Ray Designs</h2>
                <a href="https://shielded-gorge-64229-3114d756159e.herokuapp.com/">Deploy</a>
                <br />
                <a href="https://github.com/scook9/candles-n-things">Github</a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section4 container hero">
        <div className="section4__inner">
          <div className="section4__images">
            <img className="section4__image" src={image2} alt="Project 4" />
          </div>
          <div className="section4__content">
            <div className="section4__headline">
              <span>
                <h2>Date Night Planner</h2>
                <a href="https://scook9.github.io/menYou/">Deploy</a>
                <br />
                <a href="https://github.com/scook9/menYou">Github</a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  }

export default Portfolio;
