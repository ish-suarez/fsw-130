// ---------------------------------- Setting Initial State For Movies
const initialState = [ 'Seven Pounds', 'Fast and Furious']
// ---------------------------------- Adding A Movie  
export function addMovie(movie) {
    return {
        type: 'ADD_MOVIE',
        data: movie
    }
}
// ---------------------------------- Removing Movie
export function removeMovie(movie) {
    return {
        type: 'REMOVE_MOVIE',
        data: movie
    }
}
// ---------------------------------- Getting All Movies
export function getAllMovies() {
    return {
        type: 'GET_ALL_MOVIES'
    }
}
// ---------------------------------------------------------------------- Movie Reducer
export default function moviesReducer(movies = initialState, action) {
    switch(action.type) {
        case 'ADD_MOVIE':
            return [...movies, action.data]
            break;
        case 'REMOVE_MOVIE':             
            const updatedArr = movies.filter(movie => movie.toLowerCase() !== action.data.toLowerCase())
            return updatedArr;
            break;
        case 'GET_ALL_MOVIES':
            return movies;
            break;
        default:
            return movies;
    }
}