import React from "react";
import styled from "styled-components";

const SectionTitleStyle = styled.div`
  color: ${(props)=> props.negative?'var(--contact-color)':'var(--secondary)'};
  h2 {
    font-family: "Inter Semi Bold";
    font-size: 5.2rem;
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
