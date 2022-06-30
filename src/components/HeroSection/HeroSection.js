import { useEffect, useRef } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { cvURL } from "../../assets/data/links";
import { MouseClick, MouseScroll } from "../../assets/images/svgs";
import { srConfig } from "../../config";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import sr from "../../utils/sr";
import Button from "../Button";
import MouseIcon from "./MouseIcon";
import Saludo from "./Saludo";

const mov = keyframes`
  from {
        transform: translateY(2px);
      }
      to {
        transform: translateY(-2px);
      }
`;

const mov2 = keyframes`
  from {
        transform: translate(-2px, -2px);
      }
      to {
        transform: translate(2px, 2px);
      }
`;

const HeroStyles = styled.div`
  .hero {
    min-height: 100vh;
    width: 100%;
    /* text-align: start; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .container {
      height: min-content;
    }
  }
  .hero__name {
    /* margin-top: 28.2rem; */
    width: 100%;
  }
  .hero__scrollDown,
  .hero__clickMouse {
    display: flex;
    align-items: center;
    gap: 1rem;
    position: fixed;
    width: 50px;
    /* bottom: 50px;
    left: 50px; */
    p {
      font-size: 1rem;
      letter-spacing: 0.2rem;
      font-family: 'Roboto Regular';
      color: var(--secondary);
    }
  }

  .hero__scrollDown {
    bottom: 50px;
    left: 50px;
    div {
      animation: ${mov} .5s alternate-reverse infinite;
    }
  }

  .hero__clickMouse {
    width: 350px;
    right: -125px;
    flex-direction: column;
    top: 350px;
    p {
      transform: translateY(-70px) rotate(90deg);
      margin-bottom: 93px;
    }
    div {
      max-width: 16px;
      animation: ${mov2} 1s alternate infinite;
    }
  }

  @media only screen and (max-width: 1480px) {
    .hero__scrollDown {
      flex-direction: column;
      left: 0px;
      bottom: 40px;
      p {
        transform: translateY(-70px) rotate(90deg);
        margin-bottom: -45px;
      }
    }
    .hero__clickMouse {
      right: -150px;
    }
  }

  @media only screen and (max-width: 768px) {
    .hero__name {
      font-size: 1.4rem;
      font-size: 3.7rem;
    }
    .hero__scrollDown {
      display: none;
    }
    .hero__clickMouse {
      flex-direction: row;
      position: absolute;
      top: 60px;
      width: 140px;
      right: 12px;
      align-items: center;
      p {
        transform: translateY(0px) rotate(0deg);
        margin-bottom: 0px;
        order: 2;
        text-align: right;
        font-size: 0.8rem;
      }
      div {
        order: 1;
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .button-wrapper {
        width: 100%;
        text-align: center;
        margin-top: 1rem;
      }
  }
`;

export default function HeroSection() {
  const titleReveal = useRef(null);
  const button1Reveal = useRef(null);
  const button2Reveal = useRef(null);
  const info1Reveal = useRef(null);
  const info2Reveal = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
          return;
        }
        sr.reveal(info1Reveal.current, srConfig(2200));
        sr.reveal(titleReveal.current, srConfig(2400));
        sr.reveal(button1Reveal.current, srConfig(2600));
        sr.reveal(button2Reveal.current, srConfig(2800));
        sr.reveal(info2Reveal.current, srConfig(3000));
      }, [prefersReducedMotion]);
  
  const scroll = () => {
    console.log("scroll");
    window.scroll({
      top: 3900,
      behavior: "smooth",
    });
  };

  const abrirCV = () => {
    window.open(cvURL, "_blank");
  };

  return (
    <HeroStyles >
      <div id="home" className="hero">
        <div className="container">
          <div className="hero__name">
            <Saludo titleReveal={titleReveal}/>
            <Button revealButton={button1Reveal} btnText="Contactame" onClick={scroll} />
            <Button revealButton={button2Reveal} btnText="Descarga mi CV" onClick={abrirCV} outline />
          </div>
          <div className="hero__clickMouse" ref={info1Reveal} >
            <p>CLICKEÁ EN LA PANTALLA PARA CAMBIAR EL COLOR</p>
            <MouseIcon icon={MouseClick} />
          </div>
          <div className="hero__scrollDown" ref={info2Reveal} >
            <p>SCROLL</p>
            <MouseIcon icon={MouseScroll} />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
