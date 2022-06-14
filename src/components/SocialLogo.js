import React from "react";
import styled from "styled-components";

const SocialLogoStyles = styled.div`
  svg {
    width: ${(props)=>props.dimensions}rem;
    height: ${(props)=>props.dimensions}rem;
    transition: 0.3s;
    stroke: ${(props)=> props.filled ? 'transparent' : 'var(--secondary)' };
    fill: ${(props)=> props.filled ? 'var(--secondary)' : 'transparent' };
  }

  svg:hover {
    stroke: ${(props)=> props.filled ? 'transparent' : 'var(--tertiary)' };
    fill: ${(props)=> props.filled ? 'var(--tertiary)' : 'transparent' };
  }

  @media only screen and (max-width: 768px) {
    svg {
      width: ${(props)=>props.dimensions-0.5}rem;
      height: ${(props)=>props.dimensions-0.5}rem;
    }
  }
`;

export default function SocialLogo({revealIcon, svg, href = "#", filled=false, dimensions=3, target="_blank" }) {
  const { viewBox, path, fillRule, transform } = svg;
  return (
    <SocialLogoStyles filled={filled} dimensions={dimensions} ref={revealIcon} >
      <a href={href} target={target} rel="noreferrer">
        <svg viewBox={viewBox}>
          <g fill-rule={fillRule} transform={transform}>
            {path}
          </g>
        </svg>
      </a>
    </SocialLogoStyles>
  );
}
