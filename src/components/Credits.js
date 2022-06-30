import React from "react";
import ProjectIcon from "./ProjectsSection/ProjectIcon";
import { GitHubIconSmall } from "../assets/images/svgs";
import styled from "styled-components";
import { githubPortfolioUrl } from "../assets/data/links";

const ContactSectionStyles = styled.div`
  margin-bottom: 2rem;
  .credits__container {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-top: 22rem;
    font-family: "Podkova Regular";
    font-size: 15px;
    color: var(--tertiary);
    &:hover {
      color: var(--secondary);
    }
  }

  @media only screen and (max-width: 768px) {
    .credits__container {
      font-size: 12px !important;
    }
  }
`;

export const Credits = () => {
  return (
    <ContactSectionStyles>
      <a className="credits__container" href={githubPortfolioUrl} target='_blank' rel='noreferrer'>
        <p>Diseñado y desarrollado por Leonel Moreno</p>
        <ProjectIcon svg={GitHubIconSmall} dimensions={1.2} href={githubPortfolioUrl} />
      </a>
    </ContactSectionStyles>
  );
};
