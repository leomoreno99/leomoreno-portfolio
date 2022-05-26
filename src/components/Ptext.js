import React from "react";
import styled from "styled-components";

const PStyle = styled.div`
  max-width: 890px;
  font-size: 2.2rem;
  color: ${(props)=> props.negative?'var(--contact-color)':'var(--tertiary)'};
  @media only screen and (max-width: 860px) {
    font-size: 1.8rem;
    line-height: 1.3;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export default function Ptext({ children, negative }) {
  return (
    <PStyle className="para" negative={negative} >
      <p>{children}</p>
    </PStyle>
  );
}
