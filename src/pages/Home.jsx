import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Button from 'react-bootstrap/Button';
import '../assets/css/home.css';

const Home = () => {
  useEffect(() => {
    const STAR_COLOR = '#fff';
    const STAR_SIZE = 3;
    const STAR_MIN_SCALE = 0.2;
    const OVERFLOW_THRESHOLD = 50;
    const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    let scale = 1; // device pixel ratio
    let width;
    let height;
    let stars = [];
    let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };
    let interval = 1000 / 30; // Update interval in milliseconds (e.g., 30 FPS)

    function generate() {
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: 0,
          y: 0,
          z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
        });
      }
    }

    function placeStar(star) {
      star.x = Math.random() * width;
      star.y = Math.random() * height;
    }

    function recycleStar(star) {
      // Logic for recycling stars (same as before)
    }

    function resize() {
        scale = window.devicePixelRatio || 1;
        width = window.innerWidth * scale;
        height = window.innerHeight * scale;
        canvas.width = width;
        canvas.height = height;
        stars.forEach(placeStar);
      }

    function step() {
      context.clearRect(0, 0, width, height);
      update();
      render();
      setTimeout(step, interval); // Update at regular intervals
    }

    function update() {
      velocity.tx *= 0.96;
      velocity.ty *= 0.96;
      velocity.x += (velocity.tx - velocity.x) * 0.8;
      velocity.y += (velocity.ty - velocity.y) * 0.8;
      stars.forEach((star) => {
        star.x += velocity.x * star.z;
        star.y += velocity.y * star.z;
        star.x += (star.x - width / 2) * velocity.z * star.z;
        star.y += (star.y - height / 2) * velocity.z * star.z;
        star.z += velocity.z;
        if (
          star.x < -OVERFLOW_THRESHOLD ||
          star.x > width + OVERFLOW_THRESHOLD ||
          star.y < -OVERFLOW_THRESHOLD ||
          star.y > height + OVERFLOW_THRESHOLD
        ) {
          recycleStar(star);
        }
      });
    }

    function render() {
      stars.forEach((star) => {
        context.beginPath();
        context.lineCap = 'round';
        context.lineWidth = STAR_SIZE * star.z * scale;
        context.globalAlpha = 0.5 + 0.5 * Math.random();
        context.strokeStyle = STAR_COLOR;
        context.beginPath();
        context.moveTo(star.x, star.y);
        var tailX = velocity.x * 2,
          tailY = velocity.y * 2;
        if (Math.abs(tailX) < 0.1) tailX = 0.5;
        if (Math.abs(tailY) < 0.1) tailY = 0.5;
        context.lineTo(star.x + tailX, star.y + tailY);
        context.stroke();
      });
    }

    window.onresize = resize;

    generate();
    resize();
    step();

    // Clean-up function
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []); // Empty dependency array to run only once after the initial render

  return (
    <section id="home">
      <div className="home-container">
        <h1>Hi, I'm Laura</h1>
        <h2>Full Stack Developer</h2>
        <img src="laura.jpg" alt="Laura" className="developer-picture" />
        <Button variant="primary">Contact Me</Button>
        <canvas />
      </div>
    </section>
  );
};

export default Home;
