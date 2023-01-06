import { lazy } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { RouteSuspended } from "../../components/RouteSuspended/Index";

const Page = lazy(() => import("./Index"));

export default () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <RouteSuspended exact path={`${path}`}>
        <Page />
      </RouteSuspended>
    </Switch>
  );
};
