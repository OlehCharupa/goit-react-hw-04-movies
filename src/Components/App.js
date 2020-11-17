import { Switch, Route, Redirect } from "react-router-dom"
import React, { Suspense } from 'react';
import Header from "./Header/Header"
import HomePage from "./HomePage/HomePage";
import MoviesPage from "./MoviesPage/MoviesPage";
import Loader from "react-loader-spinner";
import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage";
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch >
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:moviesId" component={MovieDetailsPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;