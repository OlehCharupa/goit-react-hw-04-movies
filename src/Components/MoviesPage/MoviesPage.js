import React, { useEffect, useState, Component } from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import { searchMovies, popularMovies } from '../../helpers/helpers';
import "./MoviesPage.css"

class MoviesPage extends Component {
    state = {
        films: [],
        query: ""
    }
    inputHeandler = ({ target }) => {
        this.setState({
            query: target.value
        })
    }


    onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.search.value);
        searchMovies(this.state.query).then(
            data => {
                this.setState({
                    films: data
                })
            }
        )

    }
    // activeFilm = ({ target }) => {
    //     const activId = target.dataset.id
    // }
    componentDidMount() {
        // popularMovies().then(data => {
        //     this.setState({
        //         films: data
        //     })
        // })
    }
    // componentDidUpdate(prevProps, prevState) {
    // }
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
                                    search: `search=${query}`
                                },
                            }}>
                                <img className="movies-poster" src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />
                                <h3 className="movies-title" data-id={film.id}>{film.title}</h3>
                            </Link>
                        </li>)}
                </ul>
                {/* <Link to={{
                pathname: `/movies/cat`,
                state: { from: `${match.path}` },
            }}>переход на детальное описание фильма</Link> */}
            </div >
        );
    }
}

export default MoviesPage;



// const MoviesPage = () => {
//     const [search, useSearch] = useState("")
//     const [films, setFilms] = useState([])
//     const match = useRouteMatch()
//     const location = useLocation()
//     console.log('moviesPage', match);
//     console.log('moviesPage: location', location);

//     console.log(search);



//     // const inputHeandler = ({ target }) => {
//     //     location.search = target.value
//     //     //  useSearch({
//     //     //     search: target.value
//     //     // })
//     // }


//     // const onSubmit = (e) => {
//     //     e.preventDefault()
//     //     searchMovies(search).then(

//     //     )
//     // }
//     useEffect(() => {
//         popularMovies().then(data => {
//             setFilms({
//                 films: data
//             })
//         })
//     }, [])


//     return (
//         <div>
//             <h1>MoviesPage</h1>
//             <form className="SearchForm"
//             // onSubmit={onSubmit}
//             >
//                 <input
//                     // onChange={inputHeandler}
//                     name="search"
//                     value={search}
//                     className="SearchForm-input"
//                     type="text"
//                     autoComplete="off"
//                     autoFocus
//                     placeholder="Search movies"
//                 />
//                 <button type="submit" className="SearchForm-button">
//                     <span className="SearchForm-button-label">Search</span>
//                 </button>
//             </form>
//             <ul>
//                 {films.map(film =>
//                     <li key={film.id}>
//                         <Link to={{
//                             pathname: `/movies/:moviesId`,
//                             state: { from: `${match.path}` },
//                         }}>
//                             <h3>{film.title}</h3>
//                         </Link>
//                     </li>)}
//             </ul>
//             {/* <Link to={{
//                 pathname: `/movies/cat`,
//                 state: { from: `${match.path}` },
//             }}>переход на детальное описание фильма</Link> */}
//         </div >
//     );
// };

// export default MoviesPage;