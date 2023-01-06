import { Link, useRouteMatch, useLocation } from "react-router-dom";

export const PublicLink = ({ children, to, className = "", ...rest }) => {
  const match = useRouteMatch({
    path: to,
    exact: true,
  });

  const location = useLocation();

  const activeLink = () => {
    if (match && match.url == "/") {
      return true;
    } else {
      const splitRoute = location.pathname.split("/").filter((i) => i !== "");
      return !!splitRoute.find((i) => to.includes(i));
    }
  };

  return (
    <>
      <Link
        to={to}
        {...rest}
        className={`${className} ${activeLink() ? "active" : ""}`}
      >
        {children}
      </Link>
    </>
  );
};
