// Imports
import { FC } from "react";
import { Header } from "./components/Header/Header";
import { TaskList } from "./components/TaskList/TaskList";
import { Container, GlobalStyle } from "./GlobalStyle";

export const App: FC = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <TaskList />
    </Container>
  );
};
