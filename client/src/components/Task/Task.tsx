// Imports
import { FC } from "react";

// Styles
import { TaskS } from "./Task.style";

export const Task: FC = () => {
  return (
    <TaskS>
      <p>Task</p>
      <div>
        <button>
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </TaskS>
  );
};
