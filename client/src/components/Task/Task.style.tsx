import styled from "styled-components";

export const TaskS = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background-color: #25273c;

  &:first-child {
    border-radius: 0.5em 0.5em 0em 0em;
  }

  &:last-child {
    border-radius: 0em 0em 0.5em 0.5em;
  }

  & button {
    background: none;
    outline: none;
    border: none;
    color: #ffffff;
    cursor: pointer;
  }

  & > p {
    color: #ffffff;
  }
`;
