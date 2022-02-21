import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  h2 {
    font-family: 'Inter Semi Bold';
    font-size: 5.2rem;
  }
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 3.4rem;
    }
  }
`;

export default function SectionTitle({
  heading = 'Heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}
