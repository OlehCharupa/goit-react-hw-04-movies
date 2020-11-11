import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';


const MovieDetailsPage = () => {
    const [from, setFrom] = useState("")
    const match = useRouteMatch()
    const history = useHistory()
    const location = useLocation()

    const goBack = () => {
        history.push(from);
    };

    useEffect(
        () => {
            setFrom(location.state.from)
        }, []
    )
    return (
        <div>
            <button type="button" onClick={goBack}>Back</button>
            <hr />
            <ul className="MP__list">
                <li className="MP__list__item"><Link to={`${match.path}/cast`}>cast</Link></li>
                <li className="MP__list__item"><Link to={`${match.path}/reviews`}>reviews</Link></li>
            </ul>
            <hr />
            <Switch>
                <Route path={`${match.path}/cast`} component={Cast}></Route>
                <Route path={`${match.path}/reviews`} component={Reviews}></Route>
            </Switch>
        </div>
    );
};

export default MovieDetailsPage;