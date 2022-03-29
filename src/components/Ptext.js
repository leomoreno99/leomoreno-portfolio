import React from "react";
import styled from "styled-components";

const PStyle = styled.div`
  max-width: 890px;
  font-size: 2.2rem;
  color: ${(props)=> props.negative?'black':'var(--secondary)'};
  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
    line-height: 1.3;
  }
`;

export default function Ptext({ children, negative }) {
  return (
    <PStyle className="para" negative={negative} >
      <p>{children}</p>
    </PStyle>
  );
}
