import React from "react";
import styled from "styled-components";

const SocialLogoStyles = styled.div`
  svg {
    width: 3rem;
    height: 3rem;
    transition: 0.3s;
  }

  svg:hover {
    fill: var(--orange);
  }

  @media only screen and (max-width: 768px) {
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

export default function SocialLogo({ svg, href = "#" }) {
  const { viewBox, path, fillRule, transform } = svg;
  return (
    <SocialLogoStyles>
      <a href={href} target="_blank" rel="noreferrer">
        <svg viewBox={viewBox}>
          <g fill-rule={fillRule} transform={transform}>
            {path}
          </g>
        </svg>
      </a>
    </SocialLogoStyles>
  );
}
