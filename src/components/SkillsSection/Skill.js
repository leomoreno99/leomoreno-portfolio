import React from "react";
import styled from "styled-components";
import JsLogo from "../assets/images/javascript-logo-bn.svg";

const SkillStyle = styled.div`
  position: relative;
  width: 25%;
  height: 16rem;

  svg {
    object-fit: contain;
    max-width: calc(100% - 80px);
    max-height: calc(100% - 80px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 50%;
    fill: var(--secondary)
  }
  
  /* img {
    object-fit: contain;
    max-width: calc(100% - 80px);
    max-height: calc(100% - 80px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 50%;
  } */
  
  @media only screen and (max-width: 1200px) {
    width: 33.33333%;
  }
  @media only screen and (max-width: 768px) {
    width: 50%;
    height: 12rem;

    svg {
      max-width: calc(100% - 80px);
      max-height: calc(100% - 80px);
    }

    /* img {
      max-width: calc(100% - 80px);
      max-height: calc(100% - 80px);
    } */
  }
`;

export default function Skill({ image = JsLogo }) {


  const { viewBox, path} = image;
  return (
    <SkillStyle>
        <svg viewBox={viewBox}>
            {path}
        </svg>
    </SkillStyle>
  );



  // return (
  //   <SkillStyle>
  //     <img src={image} alt="svg" />
  //   </SkillStyle>
  // );
}
