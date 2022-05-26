import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import { ExternalLinkIcon, GitHubIcon } from '../assets/images/svgs'
import ProjectIcon from './ProjectIcon'

const ProjectSectionStyle = styled.div`
margin-top: 2.5rem;
.project__container {
    position: relative;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(12, 1fr);
    -moz-box-align: center;
    align-items: center;
    margin-bottom: 10rem;

    .project_img{
        grid-area: 1 / 6 / -1 / -1;
        grid-column-start: 6;
        grid-column-end: -1;
        position: relative;
        z-index: 1;
        width: 100%;
        border: 1px solid var(--secondary);
        ${(props)=>{
                switch (props.$mode) {
                    case "reverse":
                    return css`
                        grid-column: 1 / 8 ;
                    `;
                }
        }}
       .wrapper {
            display: block;
            position: relative;
            width: 100%;
            height: 100%;
            background-color: var(--tertiary);
            .img {
                position: relative;
                filter: grayscale(100%) contrast(1) brightness(90%);
                mix-blend-mode: multiply;
                transition: var(--transition);
            }
            &:before {
                content: '';
                display: block;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background-color: var(--secondary);
                mix-blend-mode: screen;
                transition: var(--transition);
            }
            &:hover,
            &:focus {
                background: transparent;
                outline: 0;
                .img {
                    filter: none;
                    mix-blend-mode: normal;
                }
            }
        }
    }
    .project_information {
        /* flex: 5; */
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        position: relative;
        grid-area: 1 / 1 / -1 / 7;
        grid-column-start: 1;
        grid-column-end: 7;

        ${(props)=>{
            switch (props.$mode) {
                case "reverse":
                return css`
                    grid-column: 7 / -1;
                    text-align: right;
                `;
            }
        }}
        .title_project {
            position: relative;
            z-index: 2;
            font-family: 'Podkova Bold';
            font-size: 4rem;
            color: var(--secondary);
        }
        .description_project {
            position: relative;

            z-index: 2;
            background-color: var(--quaternary);
            font-family: 'Inter Regular';
            font-size: 1.7rem;
            color: var(--tertiary);
            border: 1px solid var(--secondary);

            ${(props)=>{
                switch (props.$mode) {
                    case "reverse":
                    return css`
                        padding: 2.5rem 2.5rem 2.5rem 4rem;
                    `;
                    default:
                        return css`
                        padding: 2.5rem 4rem 2.5rem 2.5rem;
                    `;
                }
            }}
        }

        .tecnologies_project {
            display: flex;
            gap: 2rem;
            position: relative;
            z-index: 2;
            font-family: 'Podkova Regular';
            font-size: 1.7rem;
            color: var(--tertiary);
            p {
                background-color: var(--primary);
                padding: 2px;
            }
        }

        .links_project {
            display: flex;
            gap: 1.5rem;
        }

        .tecnologies_project,
        .links_project {
            ${(props)=>{
                switch (props.$mode) {
                    case "reverse":
                    return css`
                        justify-content: flex-end;
                    `;
                }
            }}
        }
    }

    @media only screen and (max-width: 1080px) {
        .project_information {

            ${(props)=>{
            switch (props.$mode) {
                    case "reverse":
                    return css`
                       grid-column: 5 / -1;
                    `;
                    default:
                        return css`
                        grid-column: 1 / 9;
                    `;
                }
        }
        }
        }
    }

    @media only screen and (max-width: 768px) {

        margin-bottom: 5rem;
        border: 1px solid var(--secondary);

        .project_information {
            grid-column: 1 / -1;
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            height: 100%;
            width: 100%;
            z-index: 5;
            padding: 4rem;

            .description_project {
                padding: 0;
                background: transparent;
                border: none;
                
            }

            .tecnologies_project {
                justify-content: flex-start;
                flex-wrap: wrap;
                gap: 0;
            }

            .tecnologies_project p{
                background-color: transparent;
                margin-right: 2rem;
            }
        }

        .project_img {
            grid-column: 1 / -1;
            opacity: 0.15;
            height: 100%;
            .img {
                object-fit: cover;
                height: 100%;
                filter: grayscale(100%) contrast(1) brightness(50%);
            }
        }
    }

    @media only screen and (max-width: 480px) {
        margin-bottom: 0px;
        
        .project_information {
            gap: 1.5rem;
            padding: 3rem;
            .title_project {
                font-size: 3.5rem !important;
            }
            .description_project,
            .tecnologies_project {
                font-size: 1.5rem;
            }
        }
        
    }

}

`

export const Project = ({title='Title', children='Descripcion de ejemplo', tecnologies=['Tec1', 'Tec2'], links=['#', '#'], img, external=false, $mode=''}) => {
  return (
    <ProjectSectionStyle $mode={$mode} >
        <div className='project__container'>
            <div className='project_information'>
                <h1 className='title_project'>{title}</h1>
                <p className='description_project'>
                    {children}
                </p>
                <div className='tecnologies_project'>
                    { tecnologies.map((tec)=><p>{tec}</p>) }
                </div>
                <div className='links_project'>
                   <ProjectIcon svg={GitHubIcon} href={links[0]} dimensions={2.2} />
                   { external ? <ProjectIcon svg={ExternalLinkIcon} href={links[1]} dimensions={2.4} /> : '' }
                </div>
            </div>
            <div className='project_img'>
                <div className="wrapper">
                    <img
                        className="img"
                        src={img}
                        alt="project_img"
                    />
                </div>
            </div>
        </div>
    </ProjectSectionStyle>
  )
}
