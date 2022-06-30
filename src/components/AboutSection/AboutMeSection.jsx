import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Ptext from '../Ptext'
import SectionTitle from '../SectionTitle'
import Perfil from '../../assets/images/Perfil.png'
import sr from '../../utils/sr'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { srConfig } from '../../config'
import { instagramURL } from '../../assets/data/links'

const AboutSectionStyle = styled.div`
margin-bottom: 7.7rem;

.container {
    padding: 0 8.2rem 10rem 4.5rem; //con el boton eran 20 en vez de 10
}

.information__container {
    display: flex;
    gap: 7.3rem;
    .text {
        flex-grow: 2;

        p p {
            margin-bottom: 0.7rem;

            a {
                color: var(--secondary);
            }
        }
    }

    .img__container {
        position: relative;
        max-width: 300px;
        @media (max-width: 860px) {
            max-width: 200px
        }
        @media (max-width: 768px) {
            margin: 50px auto 0;
            max-width: 300px;
            width: 70%;
        }
        .wrapper {
            
            display: block;
            position: relative;
            width: 100%;
            background-color: ${(props)=>props.clsName === 'theme5'? 'var(--primary)':'var(--tertiary)' };
            .img {
                position: relative;
                filter: grayscale(100%) contrast(1) brightness(90%);
                mix-blend-mode: multiply;
                transition: var(--transition);
            }
            &:before,
            &:after {
                content: '';
                display: block;
                position: absolute;
                width: 100%;
                height: 100%;
                transition: var(--transition);
            }
            &:before {
                top: 0;
                left: 0;
                background-color: var(--secondary);
                mix-blend-mode: screen;
            }
            &:after {
                border: 2px solid var(--secondary);
                top: -2px;
                left: -2px;
                z-index: -1;
            }
            &:hover,
            &:focus {
                background: transparent;
                outline: 0;
                &:after {
                    top: 5px;
                    left: 5px;
                }
                .img {
                    filter: none;
                    mix-blend-mode: normal;
                }
            }
        }
    }
}

@media only screen and (max-width: 768px) {
    padding: 0;
    .information__container {
        flex-direction: column;
        gap: 0;
    }

}

`

export const AboutMeSection = ({tema}) => {
    const revealContainer = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
          return;
        }
        sr.reveal(revealContainer.current, srConfig());
      }, [prefersReducedMotion]);
      

  return (
    <AboutSectionStyle id='about' ref={revealContainer} clsName={tema} >
        <div className="container">
            <SectionTitle heading='Sobre mi' ></SectionTitle>
            <div className='information__container' >
                <div className='text'>
                    <Ptext>
                        <p>Soy estudiante avanzado de Ingeniería en Sistemas. Me gusta el desarrollo web, siempre estoy profundizando conocimientos sobre ello y sobre nuevas tecnologías. Amante del arte en todo su esplendor.</p>
                        <p>Soy bueno socializando con los demás, no tengo inconvenientes al hablar en público o dar mi opinión.</p>
                        <p>Me considero bueno organizándome, resolviendo problemas y trabajando en equipo.</p>
                        <p>Tengo una gran creatividad, soy músico, <a href={instagramURL} target="_blank" rel='noreferrer' >hago arte digital</a>, diseño gráfico y diseño UX/UI.</p>
                    </Ptext>
                </div>
                <div className='img__container'>
                    <div className="wrapper">
                        <img
                            className="img"
                            src={Perfil}
                            alt="Leo Moreno Perfil"
                        />
                    </div>
                </div>
            </div>
        </div>
    </AboutSectionStyle>
  )
}

