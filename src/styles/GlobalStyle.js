import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

*::selection {
  background: var(--tertiary);
  color: var(--primary)
}

  :root{  
    //falta lo del mouse scroll y el navbar al llegar a contactos
    
      /* --white: white;
      --black: black; */

      //Transitions
      /* --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1); */
      --transition: .15s cubic-bezier(.4,0,.2,1);

      //Themes
    /* .theme1 {
      transition-duration:  1s;
      --primary: #00A19A;
      --secondary: #EBEDED; 
      --tertiary: #EB0805;
      --quaternary: #C7EDED; //de 1 a 16 en HSB
      --contact-background: #282B29;
      --contact-color: #EBEDED;
    }
      .theme2 {
        transition-duration:  1s;
      --primary: #E8E5E2;
      --secondary: #1E1E1E;
      --tertiary: #EB0805;
      --quaternary: #5D5C5A;
      --contact-background: white;
      --contact-color: black;
    }
    .theme3 {
      transition-duration:  1s;
      --primary: #A6D1C9;
      --secondary: #E83C38;
      --tertiary: #282B29;
      --quaternary: #DB6967;
      --contact-background: white;
      --contact-color: black;
    }
    .theme4 {
      transition-duration:  1s;
      --primary: #F4C4C4;
      --secondary: #282B29;
      --tertiary: #00A19A;
      --quaternary: #5D5C5A;
      --contact-background: white;
      --contact-color: black;
    }
    .theme5 {
      transition-duration:  1s;
      --primary: #282B29;
      --secondary: #A6D1C9;
      --tertiary: #EB0805;
      --quaternary: #7D9E98;
      --contact-background: white;
      --contact-color: black;
    } */

    .theme1 {
      transition-duration:  1s;
      --primary: #003D41;
      --secondary: #14C4AF; 
      --tertiary: #88B0A9;
      --quaternary: #004D52;
    }

    .theme2 {
      transition-duration:  1s;
      --primary: #41003A;
      --secondary: #D7D3CF; 
      --tertiary: #B0889E;
      --quaternary: #52004A;
    }

    .theme3 {
      transition-duration:  1s;
      --primary: #000E41;
      --secondary: #C4145D; //1B58F6
      --tertiary: #8893B0;
      --quaternary: #001752;
    }

    // este no me gusta mucho
    .theme4 {
      transition-duration:  1s;
      --primary: #1E1E1E;
      --secondary: #ED5210; 
      --tertiary: #B09688;
      --quaternary: #522200;
    }

    // Mmmm este no me gusta nada
    .theme5 {
      transition-duration:  1s;
      --primary: #E8E5E2;
      --secondary: #1E1E1E; 
      --tertiary: #4D4C4C;
      --quaternary: #C1D6D2;
    }
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--secondary);
  }
  
  
  ::-webkit-scrollbar-track {
    background-color: var(--primary);
  }
  
  html{
    font-size: 10px;
    font-family: 'Inter Regular';
    scroll-behavior: smooth;
  }
  
  body {
    background-color: var(--primary);
  }

  .navBar {
    transition-duration:  1s;
  }

  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
`;
export default GlobalStyles;
