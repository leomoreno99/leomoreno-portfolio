import React from "react";
import styled from "styled-components";
import { SaludoSvg } from "../assets/images/svgs";

const SaludoStyles = styled.div`
  margin-bottom: 1rem;
  svg {
    fill: var(--secondary);
  }
`;

export default function Saludo() {
  const { viewBox, path, fillRule, transform } = SaludoSvg;
  return (
    <SaludoStyles>
      <svg viewBox={viewBox}>
        <g fill-rule={fillRule} transform={transform}>
          {path}
        </g>
      </svg>
    </SaludoStyles>
  );
}
