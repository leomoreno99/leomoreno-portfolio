import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Project } from './Project'
import SectionTitle from '../SectionTitle'
import projects from '../../assets/data/projects.json'
import imgEc from "../../assets/images/projects_images/ecommerce.png"
import imgCucco from "../../assets/images/projects_images/cucco.png"
import intPilar from "../../assets/images/projects_images/integrador_pilartecno.png"
import Button from "../Button";
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import sr from '../../utils/sr'
import { srConfig } from '../../config'
import { githubURL } from '../../assets/data/links'

const { eCommerce, tiendaCucco, abmTourism } = projects

const ProjectsSectionStyle = styled.div`
    margin-bottom: 18rem;
    .button__container {
      display: flex;
      justify-content: center;
    }
    @media only screen and (max-width: 480px) {
        font-size: 1.5rem;
        .button-wrapper {
          width: 100%;
          text-align: center;
          margin-top: 2.5rem;
        }
      }
`


export const ProjectsSection = ({tema}) => {
  const revealTitle = useRef(null);
  const revealProject1 = useRef(null);
  const revealProject2 = useRef(null);
  const revealProject3 = useRef(null);
  const revealButton = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealProject1.current, srConfig());
    sr.reveal(revealProject2.current, srConfig());
    sr.reveal(revealProject3.current, srConfig());
    console.log(revealProject1)
  }, []);

  const abrirGitHub = () => {
    window.open(githubURL, "_blank");
  };

  return (
    <ProjectsSectionStyle id='projects'>
        <div className='container'>
            <SectionTitle heading='Proyectos' revealTitle={revealTitle} />
            <Project revealProject={revealProject1} title={eCommerce.title} tecnologies={eCommerce.tecnologies} links={eCommerce.links} img={imgEc} external $mode='reverse' tema={tema} >
              {eCommerce.description}
            </Project>
            <Project revealProject={revealProject2} title={tiendaCucco.title} tecnologies={tiendaCucco.tecnologies} links={tiendaCucco.links} img={imgCucco} tema={tema} >
              {tiendaCucco.description}
            </Project>
            <Project revealProject={revealProject3} title={abmTourism.title} tecnologies={abmTourism.tecnologies} links={abmTourism.links} img={intPilar} $mode='reverse' tema={tema} >
              {abmTourism.description}
            </Project>
            <div className='button__container'>
              <Button revealButton={revealButton} onClick={abrirGitHub} btnText='Ver más' outline/>
            </div>
        </div>
    </ProjectsSectionStyle>
  )
}
