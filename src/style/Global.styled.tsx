import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 

  body {
    min-width: 320px;
    margin: 0;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
    font-weight: 400;


  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {

  }

  section {
    margin: 0 auto;

  }


  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`