import styled from "styled-components";
import Meme from "../assets/images/meme_pagina.jpg";
import Button from "../components/Button";
import { Credits } from "../components/Credits";
import SocialLogo from "../components/SocialLogo";
import { LeoMorenoLogo } from "../assets/images/svgs";
import { SocialLogos } from "../components/SocialLogos";

const NotFoundStyles = styled.div`
  .item__container {
    width: 100%;
    box-shadow: 0px 5px 6px -1px rgba(0, 0, 0, 0.15);
    padding: 2.5rem 0;
    display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--primary);
     position: fixed;
  }

  .item__container .logo_container {
      width: 90%;
      margin: 0 auto;
      height: 100%;
      
  }

  .container {
    display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  padding-top: 10rem;
  }

  h1 {
    color: var(--secondary);
    font-size: 5.4rem;
    font-family: 'Inter Bold';
    text-align: center;
    span {
      font-family: 'Segoe UI Emoji';
    }
  }
  img {
    max-width: 40rem;
    border: 1px solid var(--secondary);
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 4rem;
    }
    .item__container {
      padding: 1rem 0;
    }
  }

  @media only screen and (max-width: 480px) {
        .button-wrapper {
          width: 100%;
          text-align: center;
        }
      }
`;

export const PageNotFound = () => {
  const goHome = () => {
    const url = "/";
    window.open(url, "_self");
  };

  return (
    <NotFoundStyles>
      <div className="item__container">
        <div className="logo_container">
        <SocialLogo
          className="logo"
          svg={LeoMorenoLogo}
          href="/"
          filled
          dimensions={3.5}
          target=""
        />
        </div>
      </div>
      <div className="container">
        <h1>Uy! Esta página no existe <span>☹️</span></h1>
        <img src={Meme} alt="meme" />
        <Button btnText="Ir a inicio" onClick={goHome} outline />
        <SocialLogos github />
        <Credits />
      </div>
    </NotFoundStyles>
  );
};
