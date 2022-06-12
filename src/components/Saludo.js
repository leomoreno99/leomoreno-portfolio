import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { SaludoSvg } from "../assets/images/svgs";
import { SaludoMobile } from "../assets/images/svgs"

const SaludoStyles = styled.div`
  margin-bottom: 1rem;
  svg {
    fill: var(--secondary);
  }
  @media only screen and (max-width: 768px) {
    margin-top: 4rem;
  }
`;

export default function Saludo() {

  const [saludo, setSaludo] = useState(SaludoSvg)

 useEffect(() => {
    let width = window.screen.width
    width >= 768 ? setSaludo(SaludoSvg) : setSaludo(SaludoMobile)
   }, [])
 
   window.addEventListener("resize", ()=>{
    let width = window.screen.width
    width >= 768 ? setSaludo(SaludoSvg) : setSaludo(SaludoMobile)
  })

  return (
    <SaludoStyles>
      <svg viewBox={saludo.viewBox}>
        <g>
          {saludo.path}
        </g>
      </svg>
    </SaludoStyles>
  );
}
