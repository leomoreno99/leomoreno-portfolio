import React from "react";
import styled from "styled-components";
import Ptext from "./Ptext";
import SectionTitle from "./SectionTitle";
import Skill from "./Skill";

import JsLogo from "../assets/images/javascript-logo-bn.svg";
import CssLogo from "../assets/images/css-logo-bn.svg";
import ExpressLogo from "../assets/images/express-logo-bn.svg";
import GitLogo from "../assets/images/git-logo-bn.svg";
import HtmlLogo from "../assets/images/html-logo-bn.svg";
import NodeLogo from "../assets/images/node-logo-bn.svg";
import ReactLogo from "../assets/images/react-logo-bn.svg";
import OtherSkill from "./OtherSkill";

const AboutSectionStyle = styled.div`
  .aboutSection {
    margin-top: 20rem;
    margin-bottom: 7.7rem;
    span {
      font-family: "Inter Extra Light";

      a {
        color: var(--black);
        text-decoration: underline;
        text-decoration-color: var(--orange);
      }
    }
  }
  .aboutSection__skills {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
  }

  .aboutSection__eduaction div {
    display: flex;
    justify-content: space-between;
  }

  .aboutSection__eduaction {
    margin-top: 20rem;

    .aboutSection__eduaction__left,
    .aboutSection__eduaction__right {
      display: block;
      width: 50%;
      margin-top: 6.4rem;
      margin-left: 6rem;
      font-size: 2.2rem;
      font-family: "Inter Regular";
    }
    .aboutSection__eduaction__left span,
    .aboutSection__eduaction__right span {
      color: var(--gray);
      font-family: "Inter Regular";
    }

    .subrayado {
      text-decoration: underline;
      color: var(--black);
    }
  }
  @media only screen and (max-width: 1200px) {
    .aboutSection {
      margin-top: 15rem;
    }
    .aboutSection__eduaction {
      margin-top: 15rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .aboutSection {
      margin-top: 0px;
    }
    .aboutSection__eduaction {
      margin-top: 8rem;
    }
    .aboutSection__eduaction div {
      flex-direction: column;
      align-content: flex-start;
    }

    .aboutSection__eduaction__left,
    .aboutSection__eduaction__right {
      width: 80% !important;
      font-size: 1.6rem !important;
    }
  }
`;

const skillsP = [
  "Desarrollo de software",
  "Capacidad de liderazgo",
  "Trabajo en equipo",
  "Resolución de problemas",
  "Creatividad",
];
const skillsC = [
  "Diseño Gráfico",
  "Diseño UX",
  "Bases de datos relacionales (MySQL, PostgreSQL)",
  "Metodologías ágiles",
  "Músico",
];

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection">
          <SectionTitle heading="Software Skills" />
          <Ptext>
            A lo largo de mi camino como desarrollador y amante de la tecnogogía
            he aprendido sobre varias tecnologías, cada una mas interesante que
            la anterior, he aquí mis predilectas y las que uso en el día a día.{" "}
            <span>
              Puedes ver algo de mi trabajo en{" "}
              <a
                href="https://github.com/leomoreno99"
                rel="noreferrer"
                target="_blank"
              >
                GitHub.
              </a>
            </span>
          </Ptext>
          <div className="aboutSection__skills">
            <Skill image={JsLogo} />
            <Skill image={ReactLogo} />
            <Skill image={HtmlLogo} />
            <Skill image={CssLogo} />
            <Skill image={NodeLogo} />
            <Skill image={ExpressLogo} />
            <Skill image={GitLogo} />
          </div>
          <OtherSkill
            heading="Professional Skills"
            subheading="Habilidades que fuí adquiriendo gracias a experiencias vividas a lo largo de mis años como estudiante, músico, diseñador gráfico como así tambien por cursos de coaching  y de metodologías ágiles."
            skills={skillsP}
          />
          <OtherSkill
            heading="Complementary Skills"
            subheading="Gracias a mi experiencia en otras áreas como el diseño y en la universidad, adquirí habilidades que creo que son de gran ayuda y que complementan perfectamente con mi perfil de desarrollador front end."
            skills={skillsC}
          />
          <div className="aboutSection__eduaction">
            <SectionTitle heading="Educación y experiencia" />
            <Ptext>
              Estudiante de 5to año de Ingeniería con 37 materias aprobadas (23
              restantes). Realicé varios cursos para mejorar y ahondar mis
              conocimientos donde destaco los más importantes y con mayor
              reconocimiento.
            </Ptext>
            <div>
              <div className="aboutSection__eduaction__left">
                <p>
                  Ingeniero en Sistemas de Información
                  <br />
                  <span>
                    Universidad Nacional de La Rioja
                    <br />
                    2018 - Actualidad
                  </span>
                  <br />
                  <br />
                  <p className="subrayado">Cursos</p>
                  <br />
                  <br />
                  MERN Stack
                  <br />
                  <span>
                    Pilar Tecno
                    <br />
                    2021 - Actualidad
                  </span>
                  <br />
                  <br />
                  <span>
                    Diseño UX
                    <br />
                    MateriaD
                    <br />
                    2021
                  </span>
                  <br />
                  <br />
                  Diseñador Gráfico
                  <br />
                  <span>
                    Centro de capacitación ISDEEA
                    <br />
                    2017 - 2018
                  </span>
                </p>
              </div>
              <div className="aboutSection__eduaction__right">
                <p>
                  Trabajos finales de desarrollo web
                  <br />
                  <span>
                    Universidad Nacional de La Rioja
                    <br />
                    2020 - 2021
                  </span>
                  <br />
                  <br />
                  Finalista del Programa de innovación financiera digital "Banco
                  Patagonia Emprende"
                  <br />
                  <span>
                    Banco Patagonia
                    <br />
                    2019
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutSectionStyle>
  );
}
