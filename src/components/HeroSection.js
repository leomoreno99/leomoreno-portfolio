import styled from "styled-components";
import { keyframes } from "styled-components";
import Button from "./Button";
import MouseIcon from "./MouseIcon";
// import Saludo from "../assets/images/saludo.svg";
// import MouseScroll from "../assets/images/mouse_scroll.png";
import Saludo from "./Saludo";

const MouseScroll = {
  viewBox: "0 0 32 32",
  path: (
    <>
      <path d="M16,2a9.01,9.01,0,0,0-9,9V21a9,9,0,0,0,18,0V11A9.01,9.01,0,0,0,16,2Zm7,19A7,7,0,0,1,9,21V11a7,7,0,0,1,14,0Z" />
      <path d="M16,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,16,8Z" />
    </>
  ),
};

const MouseClick = {
  viewBox: "0 0 109.21 122.88",
  path: (
    <path d="M86,122.31a5.57,5.57,0,0,1-.9.35,5.09,5.09,0,0,1-1,.18,5.46,5.46,0,0,1-1,0,6.77,6.77,0,0,1-1-.15,6,6,0,0,1-1-.36l0,0a5.51,5.51,0,0,1-.92-.53l0,0a6.41,6.41,0,0,1-.78-.69,5.19,5.19,0,0,1-.65-.87l-9.08-14.88-7.69,9a15.49,15.49,0,0,1-1.1,1.18c-.39.37-.78.71-1.18,1l-.08.06a12.19,12.19,0,0,1-1.2.82,9.66,9.66,0,0,1-1.24.63,6.91,6.91,0,0,1-1,.37,6.21,6.21,0,0,1-1,.22,7.55,7.55,0,0,1-1.06.07,7.19,7.19,0,0,1-1-.11,6.14,6.14,0,0,1-1.18-.35,5.42,5.42,0,0,1-1.06-.57,6.22,6.22,0,0,1-.92-.78l0,0a7.31,7.31,0,0,1-.75-1l-.11-.2-.09-.21L47.72,112l0-.17L40.91,43.26a4.52,4.52,0,0,1,0-1.33,4.3,4.3,0,0,1,.43-1.25,4.31,4.31,0,0,1,1.39-1.55l0,0a3.82,3.82,0,0,1,.9-.46,4.25,4.25,0,0,1,1-.24h0a4.31,4.31,0,0,1,1.29.05,4.67,4.67,0,0,1,1.25.44l.3.16c13.51,8.84,26.1,17.06,38.64,25.25l19,12.39a11.72,11.72,0,0,1,1,.72l0,0a8.78,8.78,0,0,1,.82.73l.06.07a7.41,7.41,0,0,1,.71.82,5.91,5.91,0,0,1,.57.87,6.42,6.42,0,0,1,.51,1.14,5.6,5.6,0,0,1,.26,1.17,5.44,5.44,0,0,1,0,1.21h0a6.59,6.59,0,0,1-.23,1.19,6.54,6.54,0,0,1-.94,1.88,6.41,6.41,0,0,1-.67.83,7.45,7.45,0,0,1-.82.76,10.42,10.42,0,0,1-1.16.83,12.92,12.92,0,0,1-1.34.7c-.47.21-1,.41-1.46.58a14.27,14.27,0,0,1-1.55.43h0c-2.77.54-5.53,1.21-8.27,1.87l-3.25.77,9,14.94a5.84,5.84,0,0,1,.46,1,5.59,5.59,0,0,1,.15,3.21l0,.1a5.53,5.53,0,0,1-.33.94,6.43,6.43,0,0,1-.51.89,5.62,5.62,0,0,1-.68.81,6,6,0,0,1-.82.67l-2,1.29A83,83,0,0,1,86,122.31ZM37.63,19.46a4,4,0,0,1-6.92,4l-8-14a4,4,0,0,1,6.91-4l8.06,14Zm-15,46.77a4,4,0,0,1,4,6.91l-14,8.06a4,4,0,0,1-4-6.91l14-8.06ZM20.56,39.84a4,4,0,0,1-2.07,7.72L3,43.36A4,4,0,0,1,5,35.64l15.53,4.2ZM82,41.17a4,4,0,0,1-4-6.91L92,26.2a4,4,0,0,1,4,6.91L82,41.17ZM63.46,20.57a4,4,0,1,1-7.71-2.06L59.87,3A4,4,0,0,1,67.59,5L63.46,20.57Zm20.17,96.36,9.67-5.86c-3.38-5.62-8.85-13.55-11.51-19.17a2.17,2.17,0,0,1-.12-.36,2.4,2.4,0,0,1,1.81-2.87c5.38-1.23,10.88-2.39,16.22-3.73a10.28,10.28,0,0,0,1.8-.58,6.11,6.11,0,0,0,1.3-.77,3.38,3.38,0,0,0,.38-.38.9.9,0,0,0,.14-.24l-.06-.18a2.15,2.15,0,0,0-.44-.53,5.75,5.75,0,0,0-.83-.63L47.06,45.75c2.11,21.36,5.2,44.1,6.45,65.31a6.28,6.28,0,0,0,.18,1,2.89,2.89,0,0,0,.26.62l.13.14a1,1,0,0,0,.29,0,2.76,2.76,0,0,0,.51-.17,5.71,5.71,0,0,0,1.28-.79,11.22,11.22,0,0,0,1.35-1.33c1.93-2.27,9.6-12.14,11.4-13.18a2.4,2.4,0,0,1,3.28.82l11.44,18.75Z" />
  ),
};

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
    color: var(--secondary);
    span {
      font-family: "Inter Extra Light";
    }
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
      color: var(--secondary);
    }

    /* img {
      max-height: 16px;
      animation-duration: 0.5s;
      animation-name: mov;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    } */
  }

  .hero__scrollDown {
    bottom: 50px;
    left: 50px;
    div {
      animation: ${mov} .5s alternate-reverse infinite;
    }
    /* @keyframes mov {
      from {
        transform: translateY(2px);
      }
      to {
        transform: translateY(-2px);
      }
    } */
  }

  .hero__clickMouse {
    width: 350px;
    right: -125px;
    flex-direction: column;
    top: 320px;
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
    .button-wrapper,
    .button {
      width: 100%;
      text-align: center;
    }
  }
`;

export default function HeroSection() {
  const scroll = () => {
    console.log("scroll");
    window.scroll({
      top: 3900,
      behavior: "smooth",
    });
  };

  const abrirCV = () => {
    const url =
      "https://drive.google.com/file/d/1qVB4jDWhf5lkX9dJDNvuEvrkVlksXUAL/view?usp=sharing";
    window.open(url, "_blank");
  };

  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <div className="hero__name">
            <Saludo />
            {/* <object data={Saludo} type="image/svg+xml" /> */}
          </div>
          <div className="hero__info">
            <p>
              Soy estudiante avanzado de Ingeniería en Sistemas. Me gusta el
              desarrollo web, siempre estoy profundizando conocimientos sobre
              ello y sobre nuevas tecnologías.
              <span> Amante del arte en todo su esplendor.</span>
            </p>
            <Button btnText="Contactame" onClick={scroll} />
            <Button btnText="Descarga mi CV" onClick={abrirCV} outline />
          </div>
          <div className="hero__clickMouse">
            <p>CLICKEÁ EN LA PANTALLA PARA CAMBIAR EL COLOR</p>
            <MouseIcon icon={MouseClick} />
            {/* <img src={MouseScroll} alt="mouse scroll" /> */}
          </div>
          <div className="hero__scrollDown">
            <p>SCROLL</p>
            <MouseIcon icon={MouseScroll} />
            {/* <img src={MouseScroll} alt="mouse scroll" /> */}
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
