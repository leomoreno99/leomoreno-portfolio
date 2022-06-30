import SocialLogo from "./SocialLogo";
import styled from "styled-components";
import { EmailLogo, GitHubIcon, LinkedinLogo, WhatsAppLogo } from "../assets/images/svgs";
import { email, githubURL, linkedinURL, wspNumber } from "../assets/data/links";

const SocialLogosStyles = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4.6rem;
  margin-top: 10rem;

  @media only screen and (max-width: 768px) {
    gap: 3rem !important;
  }
`;



export const SocialLogos = ({ github = false }) => {
  return (
    <SocialLogosStyles>
      <SocialLogo
        svg={LinkedinLogo}
        href={linkedinURL}
      />
      <SocialLogo
        svg={WhatsAppLogo}
        href={`https://wa.me/${wspNumber}`}
        filled
      />
      <SocialLogo
        svg={EmailLogo}
        href={`mailto:${email}`}
        filled
      />
      {github ? <SocialLogo svg={GitHubIcon} href={githubURL} /> : ""}
    </SocialLogosStyles>
  );
};
