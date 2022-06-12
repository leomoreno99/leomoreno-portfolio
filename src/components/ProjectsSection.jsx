import React from 'react'
import styled from 'styled-components'
import { Project } from './Project'
import SectionTitle from './SectionTitle'
import projects from '../assets/data/projects.json'
import imgEc from "../assets/images/projects_images/ecommerce.png"
import imgCucco from "../assets/images/projects_images/cucco.png"
import Button from "./Button";

const { eCommerce, tiendaCucco } = projects

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


export const ProjectsSection = () => {
  return (
    <ProjectsSectionStyle id='projects'>
        <div className='container'>
            <SectionTitle heading='Proyectos' />
            <Project title={eCommerce.title} tecnologies={eCommerce.tecnologies} links={eCommerce.links} img={imgEc} external $mode='reverse' >
              {eCommerce.description}
            </Project>
            <Project title={tiendaCucco.title} tecnologies={tiendaCucco.tecnologies} links={tiendaCucco.links} img={imgCucco} >
              {tiendaCucco.description}
            </Project>
            <div className='button__container'>
              <Button btnText='Ver más' outline/>
            </div>
        </div>
    </ProjectsSectionStyle>
  )
}
