import React,{useContext} from 'react'
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Avengers from '../images/hero Section Slide show/Avengers.jpeg';
import Friends from '../images/hero Section Slide show/Friends.jpeg';
import ironman from '../images/hero Section Slide show/ironman.jpeg';
import Spiderman from '../images/hero Section Slide show/Spiderman.jpeg';
import aquaman from '../images/hero Section Slide show/aquaman.jpeg';
import thor from '../images/hero Section Slide show/thor.png';
import {Carousel}  from 'react-bootstrap';

function HeroSection() {
    return (
      <Carousel className="hero">
          <Carousel.Item>
            <img className="d-block w-100" src={Avengers} alt="First slide"/>
              <Carousel.Caption>
                  <h3>Avengers</h3>
                  <p>English | Hindi | Telugu </p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={ironman} alt="Second slide"/>
            <Carousel.Caption>
                  <h3>Watch In 3D</h3>
                  <p>English | Hindi </p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Friends} alt="Third slide"/>
            <Carousel.Caption>
                  <h3>2003</h3>
                  <p> 10 seasons</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Spiderman} alt="Fourth slide"/>      
            <Carousel.Caption>
                  <h3>Leaving Netchills on Jul 22</h3>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={thor} alt="Fifth slide"/>
            <Carousel.Caption>
            <h3>Thor Ragnarok</h3>
            <p>Watch on Netchills</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={aquaman} alt="Sixth slide"/>
          </Carousel.Item>
        </Carousel>
    )
};
    

export default HeroSection;
