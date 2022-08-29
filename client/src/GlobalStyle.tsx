import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    line-height: 1.6;
    font-size: .9rem;
    color: #ffffff;
    height: 100vh;
    background: linear-gradient(#3120A9 35%, #222222 0%);
    font-family: 'Roboto', sans-serif;
}
`;

export const Container = styled.main`
  margin-inline: auto;
  padding-top: 4rem;
  width: min(40rem, 90%);
`;
