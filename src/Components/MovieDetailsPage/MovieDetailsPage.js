import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { moviesId } from '../../helpers/helpers';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';


const MovieDetailsPage = () => {
    const [from, setFrom] = useState("")
    const [film, setFilm] = useState({})
    const [search, setSearch] = useState("")
    const match = useRouteMatch()
    const history = useHistory()
    const location = useLocation()
    const id = match.params.moviesId
    console.log('location', location);

    const goBack = () => {
        history.push({
            pathname: from,
            search: search
        });
    };

    useEffect(() => {
        setFrom(location.state.from)
        setSearch(location.state.search)
        moviesId(id)
            .then(data => {
                setFilm(data)
            })
            .catch(error => console.log(error))

    }, [])
    return (
        <div>
            <button type="button" onClick={goBack}>Back</button>
            <hr />
            <h1>
                {`${film.title}`}
            </h1>
            <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={`${film.title}`} />
            <hr />

            <ul className="MP__list">
                <li className="MP__list__item"><Link to={`${match.url}/cast`}>cast</Link></li>
                <li className="MP__list__item"><Link to={`${match.url}/reviews`}>reviews</Link></li>
            </ul>
            <hr />
            <Switch>
                <Route path={`${match.url}/reviews`} component={Reviews}></Route>
                <Route path={`${match.url}/cast`} render={(props) => <Cast {...props} id={id} />}></Route>
            </Switch>
        </div>
    );
};

export default MovieDetailsPage;