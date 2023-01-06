import "./App.scss";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { lazy } from "react";
import { MainLayout } from "./layouts/MainLayout/Index";
import { RouteSuspended } from "./components/RouteSuspended/Index";

const EpisodesPage = lazy(() => import("./pages/Episodes/Generate"));
const LocationsPage = lazy(() => import("./pages/Locations/Generate"));
const CharactersPage = lazy(() => import("./pages/Characters/Index"));
const CharactersPageById = lazy(() => import("./pages/Characters/View"));

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div>
            <Switch>
              <RouteSuspended path="/" exact>
                <MainLayout>
                  <CharactersPage />
                </MainLayout>
              </RouteSuspended>

              <RouteSuspended path="/character/:id">
                <MainLayout>
                  <CharactersPageById />
                </MainLayout>
              </RouteSuspended>

              <RouteSuspended path="/episodes">
                <MainLayout>
                  <EpisodesPage />
                </MainLayout>
              </RouteSuspended>

              <RouteSuspended path="/locations">
                <MainLayout>
                  <LocationsPage />
                </MainLayout>
              </RouteSuspended>
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
