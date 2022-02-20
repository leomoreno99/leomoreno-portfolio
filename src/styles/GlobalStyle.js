import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

*::selection {
  background: var(--orange);
  color: var(--beige)
}

  :root{  
    --deep-dark: #1E1E1E;
    --beige: #E8E5E2;
    --orange: #EB0805;
    --black: black;
    --white: white;
  }
  html{
    font-size: 10px;
    font-family: 'Inter Regular';
    background-color: var(--beige);
  }
  /* ul,li{
    list-style: none;
  } */
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  /* [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  } */
`;
export default GlobalStyles;
