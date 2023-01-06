import { ReactNode } from "react";
import { Header } from "../../components/Header/Index";

import "./scss/index.scss";

interface MainLayoutInterface {
  children?: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutInterface) => {
  return (
    <div className="mainLayout">
      <div className="mainLayout-content">{children}</div>
    </div>
  );
};
