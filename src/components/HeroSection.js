import React from "react";
import styled from "styled-components";
import Saludo from "../assets/images/saludo.svg";
import MouseScroll from "../assets/images/mouse_scroll.png";

const HeroStyles = styled.div`
  .hero {
    min-height: 1000px;
    width: 100%;
    text-align: start;
    display: flex;
    justify-content: center;
    position: relative;
  }
  .hero__name {
    margin-top: 28.2rem;
    width: 135rem;
  }
  .hero__info {
    margin-top: 11rem;
    font-size: 5.2rem;
    font-family: "Inter Medium";
    span {
      font-family: "Inter Extra Light";
    }
  }
  .hero__scrollDown {
    display: flex;
    align-items: center;
    gap: 1rem;
    position: fixed;
    bottom: 50px;
    width: 50px;
    left: 50px;
    p {
      font-size: 1rem;
      letter-spacing: 0.2rem;
      color: var(--black);
    }

    img {
      max-height: 16px;
      animation-duration: 0.5s;
      animation-name: mov;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
    @keyframes mov {
      from {
        transform: translateY(2px);
      }
      to {
        transform: translateY(-2px);
      }
    }
  }

  @media only screen and (max-width: 1480px) {
    .hero__scrollDown {
      flex-direction: column;
      left: 0px;
      bottom: 40px;
      p {
        transform: translateY(-70px) rotate(90deg);
        margin-bottom: -40px;
      }
      img {
        max-width: 16px;
      }
    }
  }

  @media only screen and (max-width: 1350px) {
    .hero__name {
      width: 100%;
      font-size: 7rem;
      font-family: "Inter Bold";
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__name {
      margin-top: 15rem;
      font-size: 1.4rem;
      margin-bottom: -3rem;
      font-size: 3.7rem;
    }

    .hero__info {
      margin-top: 10rem;
      font-size: 2.5rem;
      width: 100%;
    }
    .hero__scrollDown {
      display: none;
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <div className="hero__name">
            <object data={Saludo} type="image/svg+xml" />
          </div>
          <div className="hero__info">
            <p>
              Soy estudiante avanzado de Ingeniería en Sistemas. Me gusta el
              desarrollo web, siempre estoy profundizando conocimientos sobre
              ello y sobre nuevas tecnologías.
              <span> Amante del arte en todo su esplendor.</span>
            </p>
          </div>
          <div className="hero__scrollDown">
            <p>SCROLL</p>
            <img src={MouseScroll} alt="mouse scroll" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
