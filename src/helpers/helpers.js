import Axios from "axios"


export const getMovies = async () => {

    try {
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}`)
        return response
    } catch (error) {
        console.log(error.messege.data);
    }
}