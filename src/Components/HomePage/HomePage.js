import React, { Component } from 'react';
import { getMovies } from "../../helpers/helpers"

class HomePage extends Component {
    componentDidMount() {
        console.log('componentDidMount')
        getMovies().then(data => console.log(data))
    }

    render() {


        return (
            <div>
                <h1>HomePage</h1>
            </div>
        );
    }
};

export default HomePage;