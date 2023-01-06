import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { AppImage } from "../AppImage/Index";
import { PublicLink } from "../PublicLink/Index";
import "./scss/index.scss";

interface HeaderInterface {
  children?: ReactNode;
}

export const Header = ({ children }: HeaderInterface) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-logo mx-auto pb-5">
          <AppImage src="/images/logo.png" alt="logo" ratio="3-1" />
        </div>

        <ul className="header-menu mb-3 mb-md-5 p-0 text-center mt-4 mt-md-0">
          <li className="ms-xs pb-3">
            <PublicLink to="/">Characters</PublicLink>
          </li>
          <li className="ms-xs pb-3">
            <PublicLink to="/episodes">Episodes</PublicLink>
          </li>
          <li className="ms-x pb-3">
            <PublicLink to="/locations">Locations</PublicLink>
          </li>
        </ul>

        <div className="row justify-content-center">
          <div className="col-md-8">{children}</div>
        </div>
      </div>
    </div>
  );
};
