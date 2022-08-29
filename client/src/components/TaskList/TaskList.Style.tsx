import styled from "styled-components";

export const TaskListS = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;

  & > * + * {
    border-top: 0.1em solid white;
  }
`;
