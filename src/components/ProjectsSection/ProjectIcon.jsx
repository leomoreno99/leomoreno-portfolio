import React from "react";
import styled from "styled-components";

const ProjectIconStyles = styled.div`
height: ${(props)=>props.dimensions}rem;
  svg {
    width: ${(props)=>props.dimensions}rem;
    height: ${(props)=>props.dimensions}rem;
    transition: 0.3s;
    stroke: var(--tertiary);
    fill: transparent;
  }

  svg:hover {
    stroke: var(--secondary);
  }

  @media only screen and (max-width: 768px) {
    svg {
      width: ${(props)=>props.dimensions-0.3}rem;
    height: ${(props)=>props.dimensions-0.3}rem;
    }
  }
`;

export default function ProjectIcon({ svg, dimensions = 2.2, href = "#" }) {
  const { viewBox, path, fillRule, transform, defs=<></> } = svg;
  return (
    <ProjectIconStyles dimensions={dimensions} >
      <a href={href} target="_blank" rel="noreferrer">
        <svg viewBox={viewBox}>
          <g fillRule={fillRule} transform={transform}>
            {path}
          </g>
          {defs}
        </svg>
      </a>
    </ProjectIconStyles>
  );
}
