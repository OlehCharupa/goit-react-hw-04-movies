import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const MoviesPage = () => {
    const match = useRouteMatch()
    console.log('moviesPage', match);
    return (
        <div>
            <h1>MoviesPage</h1>
            <Link to={{
                pathname: `/movies/cat`,
                state: { from: `${match.path}` },
            }}>переход на детальное описание фильма</Link>
        </div >
    );
};

export default MoviesPage;