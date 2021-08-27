import { createGlobalStyle } from 'styled-components';
import Gamour from './assets/fonts/Gamour.otf';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Gamour';
  src: url(${Gamour});
}

    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
    html {
      font-size: 62.5%;
    }
    
    body {
      box-sizing: border-box;
      font-family: 'montserrat', sans-serif;
    }
    
    a {
      text-decoration: none;
    }
    
    ul, li {
      list-style: none;
    }
`;