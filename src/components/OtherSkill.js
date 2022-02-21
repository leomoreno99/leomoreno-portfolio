import React from 'react'
import styled from 'styled-components';
import Ptext from "./Ptext";
import SectionTitle from "./SectionTitle";
import SkillList from './SkillList';

const OtherSkillStyle = styled.div`
    margin-top: 20rem;
    @media only screen and (max-width: 1200px) {
      margin-top: 15rem;
  }
  @media only screen and (max-width: 768px) {
      margin-top: 8rem;
  }
`;

export default function OtherSkill({heading, subheading, skills}) {
  return (
    <OtherSkillStyle>
        <SectionTitle heading={heading} />
          <Ptext>
              {subheading}
          </Ptext>
          <SkillList skill={skills} />
    </OtherSkillStyle>
  )
}
