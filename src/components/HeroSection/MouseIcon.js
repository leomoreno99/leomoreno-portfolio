import React from "react";
import styled from "styled-components";


const MouseStyles = styled.div`
  svg {
    fill: var(--secondary);
    width: 20px;
    height: 20px;
    animation-duration: 0.5s;
    animation-name: mov;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
`;

export default function MouseIcon({icon}) {
  const { viewBox, path } = icon;
  return (
    <MouseStyles>
      <svg viewBox={viewBox}>{path}</svg>
    </MouseStyles>
  );
}
