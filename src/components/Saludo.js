import React from "react";
import styled from "styled-components";

const SocialLogoStyles = styled.div`
  svg {
    /* width: 3rem;
    height: 3rem;
    transition: 0.3s; */
    fill: var(--secondary);
  }

  /* svg:hover {
    fill: var(--tertiary);
  }

  @media only screen and (max-width: 768px) {
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  } */
`;

export default function Saludo({ svg }) {
  const { viewBox, path, fillRule, transform } = svg;
  return (
    <SocialLogoStyles>
      <svg viewBox={viewBox}>
        <g fill-rule={fillRule} transform={transform}>
          {path}
        </g>
      </svg>
    </SocialLogoStyles>
  );
}
