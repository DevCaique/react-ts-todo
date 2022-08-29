import { FC } from "react";
import { Task } from "../Task/Task";
import { TaskListS } from "./TaskList.Style";

export const TaskList: FC = () => {
  return (
    <TaskListS>
      <Task />
      <Task />
      <Task />
    </TaskListS>
  );
};
