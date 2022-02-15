import { createGlobalStyle } from 'styled-components';
import InterExtraLight from '../assets/fonts/Inter-ExtraLight.ttf'
import InterLight from '../assets/fonts/Inter-Light.ttf'
import InterMedium from '../assets/fonts/Inter-Medium.ttf'
import InterRegular from '../assets/fonts/Inter-Regular.ttf'
import InterSemiBold from '../assets/fonts/Inter-SemiBold.ttf'


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
  html{
    font-family: 'Inter Regular';
    color: var(--black);
  }
  *{
    font-family: 'Inter Regular';
    color: var(--black);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Inter Medium'
  }
`;

export default Typography;
