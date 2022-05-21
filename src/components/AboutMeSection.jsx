import React from 'react'
import styled from 'styled-components'
import Ptext from './Ptext'
import SectionTitle from './SectionTitle'
import Perfil from '../assets/images/Perfil.jpg'

const AboutSectionStyle = styled.div`
margin-bottom: 7.7rem;

.container {
    padding: 0 8.2rem 20rem 4.5rem;
}

.information__container {
    display: flex;
    gap: 7.3rem;
    .text {
        flex-grow: 2;

        p p {
            margin-bottom: 0.7rem;
        }
    }

    .img__container {
        position: relative;
        max-width: 300px;
        @media (max-width: 768px) {
            margin: 50px auto 0;
            width: 70%;
        }
        .wrapper {
            
            display: block;
            position: relative;
            width: 100%;
            background-color: var(--secondary);
            .img {
                position: relative;
                mix-blend-mode: multiply;
                filter: grayscale(100%) contrast(1);
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
                mix-blend-mode: var(--secondary);
            }
            &:after {
                border: 2px solid var(--secondary);
                top: 15px;
                left: 15px;
                z-index: -1;
            }
            &:hover,
            &:focus {
                background: transparent;
                outline: 0;
                &:after {
                    top: 10px;
                    left: 10px;
                }
                .img {
                    filter: none;
                    mix-blend-mode: normal;
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0;
    }
    .information__container {
        flex-direction: column;
        gap: 0;
    }

}

`

export const AboutMeSection = () => {
  return (
    <AboutSectionStyle>
        <div className="container">
            <SectionTitle heading='Sobre mi' ></SectionTitle>
            <div className='information__container' >
                <div className='text'>
                    <Ptext>
                        <p>Soy estudiante avanzado de Ingeniería en Sistemas. Me gusta el desarrollo web, siempre estoy profundizando conocimientos sobre ello y sobre nuevas tecnologías. Amante del arte en todo su esplendor.</p>
                        <p>Soy bueno socializando con los demás, no tengo inconvenientes al hablar en público o dar mi opinión.</p>
                        <p>Me considero bueno organizándome, resolviendo problemas y trabajando en equipo.</p>
                        <p>Tengo una gran creatividad, soy músico, hago arte digital, diseño gráfico y diseño UX/UI.</p>
                    </Ptext>
                </div>
                {/* <div className='image'>
                    <img src={Perfil} alt='me'/>
                </div> */}
                <div className='img__container'>
                    <div className="wrapper">
                        <img
                            className="img"
                            src={Perfil}
                            alt="perfil"
                        />
                    </div>
                </div>
            </div>
        </div>
    </AboutSectionStyle>
  )
}

