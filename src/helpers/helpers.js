import Axios from "axios"


export const popularMovies = async () => {
    try {
        const response = await Axios.get(`${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            .then(response => response.data.results)
        return response
    } catch (error) {
        console.log(error.messege);
    }
}

export const searchMovies = async (query) => {
    try {
        const response = await Axios.get(`${process.env.REACT_APP_BASE_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=1`)
            .then(response => response.data.results)
        return response
    } catch (error) {
        console.log(error.messege);
    }

}
export const moviesId = async (id) => {
    try {
        const response = await Axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.data)
        return response
    } catch (error) {
        console.log(error.message);
    }

}

export const movieCredits = (id) => {
    try {
        const response = Axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
        return response
    } catch (error) {
        console.log(error.message);
    }
}
export const movieReviews = (id) => {
    try {
        const response = Axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}`)
        return response
    } catch (error) {
        console.log(error.message);
    }
}

