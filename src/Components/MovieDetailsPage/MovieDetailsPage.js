import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { moviesId } from '../../helpers/helpers';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import "./MovieDetailsPage.css"


const MovieDetailsPage = () => {
    const [from, setFrom] = useState("")
    const [film, setFilm] = useState({})
    const [query, setQuery] = useState("")
    const [search, setSearch] = useState("")
    const [genres, setGenres] = useState([])
    const match = useRouteMatch()
    const history = useHistory()
    const location = useLocation()
    const id = match.params.moviesId

    const goBack = () => {
        history.push({
            pathname: from,
            search: search,
            query
        });
    };

    useEffect(() => {
        setFrom(location.state.from)
        setSearch(location.state.search)
        setQuery(location.state.query)
        moviesId(id)
            .then(data => {
                setFilm(data)
                setGenres(data.genres)
            })
            .catch(error => console.log(error))

    }, [])
    return (
        <div className="container">
            <button type="button" onClick={goBack} >Back</button>
            <hr />
            <div className="det_box">
                <img className="det_poster" src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt={`${film.title}`} />
                <div className="det_box-in-box">
                    <h1 className="det_box-in-box_title">
                        {`${film.title}`}
                    </h1>
                    <h4 className="det_box-in-box_text">{film.overview}</h4>
                    <h4>Genres:</h4>
                    <ul>
                        {genres.map(el => <li>{el.name}</li>)}
                    </ul>
                </div>
            </div>
            <hr />
            <ul className="MP__list">
                <li className="MP__list__item"><Link to={`${match.url}/cast`}>cast</Link></li>
                <li className="MP__list__item"><Link to={`${match.url}/reviews`}>reviews</Link></li>
            </ul>
            <hr />
            <Switch>
                <Route path={`${match.url}/reviews`} render={(props) => <Reviews {...props} id={id} />}></Route>
                <Route path={`${match.url}/cast`} render={(props) => <Cast {...props} id={id} />}></Route>
            </Switch>
        </div>
    );
};

export default MovieDetailsPage;