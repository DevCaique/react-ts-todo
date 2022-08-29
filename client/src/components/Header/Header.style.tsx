import styled from "styled-components";

export const HeaderS = styled.div`
  display: flex;
  justify-content: center;

  & > input {
    padding: 1em 2em;
    flex-basis: 70%;
  }

  & > button {
    border: none;
    outline: none;
    padding: 1em 2em;
    cursor: pointer;
    flex-basis: 30%;
  }
`;
