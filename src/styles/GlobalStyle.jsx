import styled, { createGlobalStyle } from 'styled-components';

export const ButtonBase = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  color: #fff;

`;

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
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', Arial, sans-serif;
    background-color: ${(props) => props.theme.color.bodyBg};
    color: ${(props) => props.theme.color.textColor};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  main {
    flex: 1;
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
`;

export default GlobalStyle;