// Imports
import { FC } from "react";

// Components
import { HeaderS } from "./Header.style";

export const Header: FC = () => {
  return (
    <HeaderS>
      <input type="text" placeholder="Your task..." />
      <button>Add</button>
    </HeaderS>
  );
};
