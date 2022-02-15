import React from 'react';
import styled from 'styled-components';
import Ptext from './Ptext';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: start;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
        margin-top: 28.2rem;
      width: 135rem;
      font-size: 13.7rem;
      font-family: 'Inter Semi Bold';
      color: var(--deep-dark);
    }
  }
  .hero__info {
    margin-top: 12rem;
    font-size: 5.2rem;
    font-family: 'Inter Medium';
    span {
        font-family: 'Inter Extra Light'
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__info {
      margin-top: 3rem;
    }
    
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span className="hero__name">
                Hola, <br></br>
                Soy Leonel Moreno, <br></br>
                Front End Developer</span>
          </h1>
          <div className="hero__info">
            <p>
            Soy estudiante avanzado de Ingeniería en Sistemas. Me gusta el desarrollo web, 
            siempre estoy profundizando conocimientos sobre ello y sobre nuevas tecnologías. 
            <span>Amante del arte en todo su esplendor.</span>
            </p>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
