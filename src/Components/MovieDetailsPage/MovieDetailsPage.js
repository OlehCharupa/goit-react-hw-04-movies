import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { moviesId } from '../../helpers/helpers';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import "./MovieDetailsPage.css"


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
        <div className="container">
            <button type="button" onClick={goBack} >Back</button>
            <hr />
            <div className="det_box">
                <img className="det_poster" src={`https://image.tmdb.org/t/p/w300${film.poster_path}` || `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThfniC93R4LVY3q47jnybdM21z-XuIsx2rMQ&usqp=CAU`} alt={`${film.title}`} />
                <div className="det_box-in-box">
                    <h1 className="det_box-in-box_title">
                        {`${film.title}`}
                    </h1>
                    <p className="det_box-in-box_text">{film.overview}</p>


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