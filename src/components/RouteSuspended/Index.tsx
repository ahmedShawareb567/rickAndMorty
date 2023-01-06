import { ReactNode, Suspense } from "react";
import { Route } from "react-router-dom";
import { Loading } from "../Loading/Index";

interface RouteSuspendedInterface {
  children?: ReactNode;
  path?: string;
  exact?: boolean;
}

export const RouteSuspended = ({
  children,
  ...rest
}: RouteSuspendedInterface) => {
  return (
    <>
      <Route {...rest}>
        <Suspense fallback={<Loading type="fallback" />}>{children}</Suspense>
      </Route>
    </>
  );
};
