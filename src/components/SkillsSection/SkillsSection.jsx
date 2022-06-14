import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { arrow } from "../../assets/images/svgs";
import { srConfig } from "../../config";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import sr from "../../utils/sr";
import Ptext from "../Ptext";
import SectionTitle from "../SectionTitle";

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
        @media only screen and (max-width: 480px) {
        margin-top: 3rem;
        gap: 0 3.5rem !important; 
      }
    }

    ul.skills-list {
    padding: 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 2rem;
      font-family: 'Podkova Regular';
      font-size: 1.8rem;
      color: var(--tertiary);
      &:before {
        content: '⪧';position: absolute;
        left: 0;
        top: 4px;
        color: var(--secondary);
        font-size: 1.2rem;
        line-height: 12px;
      }
      @media only screen and (max-width: 480px) {
        font-size: 1.5rem;
      }
      
    }
  }
  
`;

const skills1 = ['JavaScript (ES6+)', 'React.js ', 'HTML5','CSS3', 'Node.js', 'Express', 'Git/GitHub']
const skills2 = ['Material UI', 'Styled Components', 'Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Trello']
const skills3 = ['REST', 'PostgreSQL', 'MySQL', 'MongoDB']

export const SkillsSection = () => {
  const revealContainer = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
          return;
        }
        sr.reveal(revealContainer.current, srConfig());
      }, []);

  return (
    <SkillsStyle id="skills" arrow={arrow} ref={revealContainer} >
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
