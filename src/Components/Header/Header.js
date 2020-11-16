import React from 'react';
import { NavLink } from "react-router-dom"
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

export default Header;