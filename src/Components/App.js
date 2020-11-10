import { Switch, Route, Redirect } from "react-router-dom"
import React from 'react';
import Header from "./Header/Header"
import HomePage from "./HomePage/HomePage";
import MoviesPage from "./MoviesPage/MoviesPage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        {/* <Route path="/movies/:movieId" component={ } />
        <Route path="/movies/:movieId/cast" component={ } />
        <Route path="/movies/:movieId/reviews" component={ } />
        <Redirect to="/" /> */}
      </Switch>
    </div>
  );
};

export default App;