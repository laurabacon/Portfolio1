import React from 'react';
import Button from 'react-bootstrap/Button';
import '../assets/css/home.css';

const Home = () => {
  return (
    <section id="home">
      <div className="home-container">
        <h1>Hi, I'm Laura</h1>
        <h2>Full Stack Developer</h2>
        {/* <img src="laura.jpg" alt="Laura" className="developer-picture" /> */}
        <Button variant="primary">Contact Me</Button>
      </div>
    </section>
  );
};

export default Home;
