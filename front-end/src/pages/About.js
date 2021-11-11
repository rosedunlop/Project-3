import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const About = () => {
  return (
    <section>
      <div className='about-text'>
        <h2>About aioli</h2>
        <p>
            aioli was developed by Rose Dunlop, Hannah Hill and Ed Chamberlain as their project for  the software engineering course at General Assembly. 
        </p>
        <p>
            The project is a full stack MERN webpage that utilises the database they built and incorporates everything they have learnt in the last 8 weeks. 
        </p>
        <p> Finally... Feast your eyes on these recipes </p>        
      </div>
      <div className="group-photos">
      <Container>
        <Row className="squad-photos">
          <Col xs={6} md={4} className='photos'>
            <a href="https://www.linkedin.com/in/rose-dunlop-b0683b21a/" target="_blank" rel="noreferrer">
            <Image src="https://i.imgur.com/Cdyr2d5.jpg" roundedCircle />
            </a>
            <p>Rose Dunlop</p>
          </Col>
          <Col xs={6} md={4} className='photos'>
            <a href = "https://www.linkedin.com/in/hannah-hill/" target="_blank" rel="noreferrer">
            <Image src="https://i.imgur.com/vdy819L.jpg" roundedCircle />
            </a>
            <p>Hannah Hill</p>
          </Col>
          <Col xs={6} md={4} className='photos'>
            <a href = "https://www.linkedin.com/in/edward-chamberlain-8ab05414b/" target="_blank" rel="noreferrer">
            <Image src="https://i.imgur.com/HMpkjmh.jpg" roundedCircle />
            </a>
            <p>Ed Chamberlain</p>
          </Col>
        </Row>
      </Container>
      </div>
    </section>
  )
}
  
  
export default About
  