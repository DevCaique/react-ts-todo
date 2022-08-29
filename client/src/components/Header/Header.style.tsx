import styled from "styled-components";

export const HeaderS = styled.div`
  display: flex;
  justify-content: center;

  & > input {
    padding: 1.5em 2em;
    flex-basis: 100%;
    background-color: #25273c;
    border: none;
    color: white;
    border-radius: 0.5em;
  }

  & > button {
    border: none;
    outline: none;
    padding: 1em 2em;
    cursor: pointer;
    flex-basis: 30%;
  }
`;
