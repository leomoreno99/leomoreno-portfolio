import React from "react";
import styled from "styled-components";

const PStyle = styled.div`
  max-width: 890px;
  font-size: 2.2rem;
  color: var(--tertiary);
  @media only screen and (max-width: 860px) {
    font-size: 1.8rem;
    line-height: 1.3;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export default function Ptext({ children }) {
  return (
    <PStyle className="para" >
      <p>{children}</p>
    </PStyle>
  );
}
