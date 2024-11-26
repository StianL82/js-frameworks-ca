import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html {
  --color-bodyBg: #FFFBF8;
  --color-darkGray: #333;
  --color-textWhite: #FFF;
  --color-primary: #007BFF;
  --color-secondary: #ff6347;
  --color-lightGray: #E3DDDD;
  --color-heading: #222;
  --color-border: #e0e0e0;
  --color-buttonBg: #007BFF;
  --color-buttonText: #fff;
  --color-buttonHoverBg: #0056b3;
  --color-link: #007BFF;
  --color-linkHover: #0056b3;
  }  

body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: ${(props) => props.theme.color.bodyBg};
    color: ${(props) => props.theme.color.textColor};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 10px 0;
    font-weight: 700;
    font-family: 'Lobster', cursive;
    color: ${(props) => props.theme.color.primaryColor};
  }

  p {
    line-height: 1.6;
    margin: 10px 0;
    font-family: 'Open Sans', sans-serif;
  }

  a {
    color: ${(props) => props.theme.color.primaryColor};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    cursor: pointer;
  }
`;

export default GlobalStyle;						
