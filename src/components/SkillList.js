import React from "react";
import styled from "styled-components";

const SkillListStyle = styled.div`
  margin-top: 6.4rem;
  margin-left: 6rem;
  width: 88rem;
  ul {
    column-count: 2;
  }
  li {
    font-size: 2.2rem;
  }

  @media only screen and (max-width: 1000px) {
    width: 65rem;
  }

  @media only screen and (max-width: 768px) {
    width: 85%;
    margin-top: 4rem;
    ul {
      column-count: 1;
    }
    li {
      font-size: 1.6rem;
    }
  }
`;

export default function SkillList({ skill = ["skill"] }) {
  return (
    <SkillListStyle >
      <ul>
        {skill.map((skill) => {
          return <li>{skill}</li>;
        })}
      </ul>
    </SkillListStyle>
  );
}
