import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Ptext from "../Ptext";
import SectionTitle from "../SectionTitle";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import { srConfig } from "../../config";
import sr from "../../utils/sr";
import { Credits } from "../Credits";
import { SocialLogos } from "../SocialLogos";
import { linkedinURL } from "../../assets/data/links";

const ContactSectionStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--contact-background);

  .contactSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 85%;
    margin: 0 auto;

    .contact_description {
      padding: 0 20%;
      a {
        color: var(--secondary);
      }
    }

    .social {
      display: flex;
      flex-direction: row;
      gap: 4.6rem;
      margin-top: 10rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .contact_description {
      padding: 0 10% !important;
    }
  }
`;

export default function ContactSection() {
  const revealContainer = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
          return;
        }
        sr.reveal(revealContainer.current, srConfig());
      }, []);

  return (
    <ContactSectionStyles ref={revealContainer} >
      <div id="contact" className="contactSection">
        <SectionTitle heading="Contacto" negative />
        <div className="contact_description">
          <Ptext >
            Si tienes alguna solicitud o pregunta, no dudes en contactarme a través
            de <a href={linkedinURL} target='_blank' rel="noreferrer" >mi Linkedin</a> o por alguno de estos medios de contacto.
          </Ptext>
        </div>
        
        <SocialLogos />

        <Credits />
      </div>
    </ContactSectionStyles>
  );
}
