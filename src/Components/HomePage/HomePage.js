import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { popularMovies } from "../../helpers/helpers"
import FilmsItem from '../FilmsItem/FilmsItem';

class HomePage extends Component {
    state = {
        films: []
    }

    componentDidMount() {
        console.log('componentDidMount')
        popularMovies().then(data =>
            this.setState({
                films: data
            })
        )
    }

    render() {
        const { films } = this.state
        const { match } = this.props
        const { params } = this.props
        const { location } = this.props
        console.log(match);
        console.log(params);
        console.log(location);
        // console.log(films);
        return (
            <>
                <h1>HomePage</h1>
                <ul>
                    {/* {films.map(film => <FilmsItem {...film} key={film.id} />)} */}
                    {films.map(film =>
                        <li key={film.id}>
                            <Link to={{
                                pathname: `/movies/:moviesId`,
                                state: { from: `${match.path}` },
                            }}>
                                <h3>{film.title}</h3>
                            </Link>
                        </li>)}
                </ul>
            </ >
        );
    }
};

export default HomePage;