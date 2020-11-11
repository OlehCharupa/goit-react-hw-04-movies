import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom"
import React, { Suspense, lazy } from 'react';
import Header from "./Header/Header"
import HomePage from "./HomePage/HomePage";
import MoviesPage from "./MoviesPage/MoviesPage";
import Loader from "react-loader-spinner";
import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />}>
        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:moviesId" component={MovieDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>

    </div>
  );
};

export default App;