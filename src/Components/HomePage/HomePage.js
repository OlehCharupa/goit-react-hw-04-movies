import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { popularMovies } from "../../helpers/helpers"
import "./HomePage.css"

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

        return (
            <div className="container">
                <ul className="movies-list">
                    {films.map(film =>
                        <li key={film.id} className="movies-item">
                            <Link to={{
                                pathname: `/movies/${film.id}`,
                                state: {
                                    from: `${match.path}`,
                                    id: `${film.id}`
                                },
                            }}>
                                <img className="movies-poster" src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />

                                <h3 className="movies-title">{film.title}</h3>
                            </Link>
                        </li>)}
                </ul>
            </div >
        );
    }
};

export default HomePage;