import React from "react";
import styled from "styled-components";

const SectionTitleStyle = styled.div`
  color: ${(props)=> props.negative?'var(--contact-color)':'var(--secondary)'};
  h2 {
    font-family: "Podkova Semi Bold";
    font-size: 11rem;
    -webkit-text-stroke: 1px var(--secondary);
    -webkit-text-fill-color: transparent;
    text-rendering: optimizeLegibility;
  }
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 8rem;
    }
  }
  @media only screen and (max-width: 480px) {
    h2 {
      font-size: 6rem;
    }
  }
`;

export default function SectionTitle({ heading = "Heading", revealTitle, negative }) {
  return (
    <SectionTitleStyle className="section-title" negative={negative} ref={revealTitle} >
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}
