import { createGlobalStyle } from "styled-components";
import InterExtraLight from "../assets/fonts/Inter-ExtraLight.ttf";
import InterLight from "../assets/fonts/Inter-Light.ttf";
import InterMedium from "../assets/fonts/Inter-Medium.ttf";
import InterRegular from "../assets/fonts/Inter-Regular.ttf";
import InterSemiBold from "../assets/fonts/Inter-SemiBold.ttf";
import InterBold from "../assets/fonts/Inter-Bold.ttf";
import PodkovaRegular from "../assets/fonts/Podkova-Regular.ttf"
import PodkovaBold from "../assets/fonts/Podkova-Bold.ttf"
import PodkovaSemiBold from "../assets/fonts/Podkova-SemiBold.ttf"

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Inter Extra Light';
    src: url(${InterExtraLight});
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter Light';
    src: url(${InterLight});
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter Medium';
    src: url(${InterMedium});
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter Regular';
    src: url(${InterRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter Semi Bold';
    src: url(${InterSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter Bold';
    src: url(${InterBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Podkova Regular';
    src: url(${PodkovaRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Podkova Bold';
    src: url(${PodkovaBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Podkova Semi Bold';
    src: url(${PodkovaSemiBold});
    font-style: normal;
  }
  
`;

export default Typography;
