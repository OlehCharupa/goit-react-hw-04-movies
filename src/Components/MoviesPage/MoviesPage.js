import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../../helpers/helpers';
import "./MoviesPage.css"

class MoviesPage extends Component {
    state = {
        films: [],
        query: "",
    }
    inputHeandler = ({ target }) => {
        this.setState({
            query: target.value
        })
    }


    onSubmit = (e) => {
        e.preventDefault()
        searchMovies(this.state.query).then(
            data => {
                this.setState({
                    films: data
                })
            }
        )
        this.props.history.push({
            search: `search=${this.state.query}`
        })

    }
    componentDidMount() {
        if (this.props.location.query) {
            searchMovies(this.props.location.query).then(
                data => {
                    this.setState({
                        films: data
                    })
                }
            )
            this.props.history.push({
                search: `search=${this.props.location.query}`
            })
            this.setState({
                query: this.props.location.query
            })
        }
    }
    render() {
        const { films, query } = this.state
        const { match } = this.props
        return (
            <div className="container">
                <form className="SearchForm"
                    onSubmit={this.onSubmit}
                >
                    <input
                        onChange={this.inputHeandler}
                        name="search"
                        value={query}
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
                <ul className="movies-list">
                    {films.map(film =>
                        <li key={film.id} className="movies-item" onClick={this.activeFilm}>
                            <Link to={{
                                pathname: `/movies/${film.id}`,
                                id: film.id,
                                state: {
                                    from: `${match.path}`,
                                    search: `search=${query}`,
                                    query
                                },
                            }}>
                                <img className="movies-poster" src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />
                                <h3 className="movies-title" data-id={film.id}>{film.title}</h3>
                            </Link>
                        </li>)}
                </ul>
            </div >
        );
    }
}

export default MoviesPage;
