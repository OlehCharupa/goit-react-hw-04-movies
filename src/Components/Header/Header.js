import React from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink, Switch } from "react-router-dom"
import HomePage from "../HomePage/HomePage"
import MoviesPage from "../MoviesPage/MoviesPage"
import "./Header.css"


const Header = () => {
    return (
        <div className="header">
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li className="header-nav-item"><NavLink className="header-nav-link" to="/">Home</NavLink></li>
                    <li className="header-nav-item"><NavLink className="header-nav-link" to="/movies">Movies</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

Header.propTypes = {

};

export default Header;