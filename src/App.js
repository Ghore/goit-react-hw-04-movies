import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./components/nav/Nav";

const moviesConfig = {
  hash: "movies",
};

const AsyncHomePage = lazy(() => import("./pages/HomePage"));
const AsyncMovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const AsyncMoviesPage = lazy(() => import("./pages/MoviesPage"));

const App = () => (
  <>
    <div>
      <Nav />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <HomePage
                {...props}
                hash={moviesConfig.hash}
                component={AsyncHomePage}
              />
            )}
          />
          <Route
            path={`/${moviesConfig.hash}/:movieId`}
            component={AsyncMovieDetailsPage}
          />
          <Route path="/movies" component={AsyncMoviesPage} />
        </Switch>
      </Suspense>
    </div>
  </>
);

export default App;
