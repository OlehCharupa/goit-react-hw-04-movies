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