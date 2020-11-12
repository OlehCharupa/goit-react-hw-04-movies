import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const MoviesPage = () => {
    const match = useRouteMatch()
    console.log('moviesPage', match);
    const [search, useSearch] = useState("")


    return (
        <div>
            <h1>MoviesPage</h1>
            <form className="SearchForm" >
                <input
                    name="search"
                    value={search}
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                />
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>
            </form>
            <ul>
                {[].map(film =>
                    <li key={film.id}>
                        <Link to={{
                            pathname: `/movies/:moviesId`,
                            state: { from: `${match.path}` },
                        }}>
                            <h3>{film.title}</h3>
                        </Link>
                    </li>)}
            </ul>
            {/* <Link to={{
                pathname: `/movies/cat`,
                state: { from: `${match.path}` },
            }}>переход на детальное описание фильма</Link> */}
        </div >
    );
};

export default MoviesPage;