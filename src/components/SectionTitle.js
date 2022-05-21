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
      font-size: 3.4rem;
    }
  }
`;

export default function SectionTitle({ heading = "Heading", negative }) {
  return (
    <SectionTitleStyle className="section-title" negative={negative} >
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}
