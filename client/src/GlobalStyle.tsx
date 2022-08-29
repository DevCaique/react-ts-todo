import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    line-height: 1.6;
    color: #ffffff;
    height: 100vh;
    background: linear-gradient(#741A75 35%, #181824 0%);
}
`;

export const Container = styled.main`
  margin-inline: auto;
  padding-top: 4rem;
  width: min(40rem, 90%);
`;
