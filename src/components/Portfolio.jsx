import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import image2 from '../assets/dateNight.png';
import image4 from '../assets/StarRay.png';
import image3 from '../assets/TechBlog.png';
import image1 from '../assets/WeatherAPI.png';
import image5 from '../assets/workDay.png';
import image6 from '../assets/StarRay copy.png';



const Portfolio = () => {
  const titles = ['Weather Dahsboard', 'Date Night Planner', 'Tech Blog', 'Star Ray Design E-Commerce', 'Work Day Scheduler', 'Star Ray Design Refactored'];
  const deployLinks = ['https://scook9.github.io/module-6-weather-dashboard/', 'https://scook9.github.io/menYou/' ,'https://tech-blog-8675309-7fdcc372d423.herokuapp.com/login', 'https://shielded-gorge-64229-3114d756159e.herokuapp.com/', 'https://laurabacon.github.io/Work-Day-Scheduler/', 'https://shielded-gorge-64229-3114d756159e.herokuapp.com/'];
  const githubLinks = ['https://github.com/scook9/module-6-weather-dashboard', 'https://github.com/scook9/menYou' ,'https://github.com/scook9/module-14-tech-blog', 'https://github.com/scook9/candles-n-things', 'https://github.com/laurabacon/Work-Day-Scheduler', 'https://github.com/laurabacon/Star-Ray'];

  const imageUrls = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
  ];

  return (
    <section id="portfolio">
      <div>
        <Row xs={1} md={2} className="g-6" style={{ marginBottom: '20px' }}>
          {imageUrls.map((imageUrl, idx) => (
            <Col key={idx}>
              <Card style={{ marginBottom: '20px', marginTop:'20px' }}>
                <Card.Img variant="top" src={imageUrl} style={{ width: 'auto', height: 'auto' }} />
                <Card.Body>
                  <Card.Title>{titles[idx]}</Card.Title>
                  <Card.Link href={deployLinks[idx]}>Deploy</Card.Link>
                  <Card.Link href={githubLinks[idx]}>Github</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}


export default Portfolio;