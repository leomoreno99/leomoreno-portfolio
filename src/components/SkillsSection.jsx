import React from "react";
import styled from "styled-components";
import { arrow } from "../assets/images/svgs";
import Ptext from "./Ptext";
import SectionTitle from "./SectionTitle";

const SkillsStyle = styled.div`
    margin-bottom: 7.7rem;
    .container {
        max-width: 90rem;
        margin: 0 auto;
    }

    .text {
        flex-grow: 2;

        p p {
            margin-bottom: 0.7rem;
        }
    }

    .skill-list__container {
        display: flex;
        gap: 0 6.5rem;
        flex-wrap: wrap;
        margin-top: 4.7rem;
    }

    ul.skills-list {
    /* display: grid;
    grid-template-columns: repeat(3, minmax(140px, 200px)); */
    /* grid-gap: 0 10px; */
    padding: 0;
    /* margin: 20px 0 0 0; */
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 2rem;
      font-family: 'Podkova Regular';
      font-size: 1.8rem;
      color: var(--secondary);
      &:before {
        /* content: ${(props)=> `url(${props.arrow()})`}; */
        content: '⪧';
        /* 〻〜⪧⦊☛› */
        /* content: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.08976 10.1826L4.08976 9.02149C4.08976 8.94155 4.13246 8.86749 4.20176 8.82759L7.0313 7.19393C7.18054 7.10769 7.18054 6.89223 7.0313 6.80599L4.20162 5.17233C4.13232 5.13229 4.08962 5.05837 4.08962 4.97843L4.08962 3.81727C4.08962 3.64493 4.27624 3.53713 4.42548 3.62337L9.93812 6.80613C10.0874 6.89237 10.0874 7.10783 9.93812 7.19407L4.42562 10.3767C4.27638 10.4628 4.08976 10.3551 4.08976 10.1826Z' fill='%2314C4AF'/%3E%3Cpath d='M4.20179 5.1723L4.53443 5.36438C4.53625 5.35836 4.53765 5.35178 4.53891 5.34534L4.48165 5.3123C4.41235 5.27226 4.36965 5.19834 4.36965 5.1184L4.36965 3.95724C4.36965 3.81612 4.49481 3.72022 4.62207 3.73674L4.42551 3.62334C4.27627 3.5371 4.08965 3.6449 4.08965 3.81724L4.08965 4.9784C4.08979 5.05848 4.13249 5.1324 4.20179 5.1723Z' fill='%2314C4AF'/%3E%3Cpath d='M7.03134 7.19389L4.20166 8.82755C4.13236 8.86759 4.08966 8.94151 4.08966 9.02145L4.08966 10.1826C4.08966 10.3387 4.24254 10.4402 4.3824 10.3943C4.37484 10.3719 4.36966 10.3484 4.36966 10.3226L4.36966 9.16145C4.36966 9.08151 4.41236 9.00745 4.48166 8.96755L7.31134 7.33389C7.32226 7.32661 7.41564 7.26165 7.42334 7.13999C7.43132 7.01245 7.33809 6.93461 7.32913 6.92747C7.23967 6.86545 7.15034 6.80357 7.06089 6.74155C7.06536 6.75723 7.07068 6.78523 7.05822 6.81295C7.05668 6.81645 7.05487 6.81981 7.05305 6.82275C7.17849 6.91697 7.17246 7.11255 7.03134 7.19389Z' fill='%2314C4AF'/%3E%3Cpath d='M4.08976 10.1826L4.08976 9.02149C4.08976 8.94155 4.13246 8.86749 4.20176 8.82759L7.0313 7.19393C7.18054 7.10769 7.18054 6.89223 7.0313 6.80599L4.20162 5.17233C4.13232 5.13229 4.08962 5.05837 4.08962 4.97843L4.08962 3.81727C4.08962 3.64493 4.27624 3.53713 4.42548 3.62337L9.93812 6.80613C10.0874 6.89237 10.0874 7.10783 9.93812 7.19407L4.42562 10.3767C4.27638 10.4628 4.08976 10.3551 4.08976 10.1826Z' stroke='%2314C4AF' stroke-miterlimit='10'/%3E%3C/svg%3E"); */
        position: absolute;
        left: 0;
        top: 4px;
        color: var(--secondary);
        font-size: 1.2rem;
        line-height: 12px;
      }
      
    }
  }
`;

const skills1 = ['JavaScript (ES6+)', 'React.js ', 'HTML5','CSS3', 'Node.js', 'Express', 'Git/GitHub']
const skills2 = ['Material UI', 'Styled Components', 'Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Trello']
const skills3 = ['REST', 'PostgreSQL', 'MySQL', 'MongoDB']

export const SkillsSection = () => {
  return (
    <SkillsStyle arrow={arrow} >
      <div className="container">
        <SectionTitle heading="Skills" />
        <div className="text">
          <Ptext>
            <p>
              A lo largo de mi camino como desarrollador y amante de la
              tecnogogía he aprendido sobre varias tecnologías, cada una mas
              interesante que la anterior.
            </p>
            <p>He aquí mis predilectas y las que uso en el día a día.</p>
          </Ptext>
          <div className="skill-list__container">
            <ul className="skills-list">
                {skills1 && skills1.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
            <ul className="skills-list">
                {skills2 && skills2.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
            <ul className="skills-list">
                {skills3 && skills3.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </SkillsStyle>
  );
};
