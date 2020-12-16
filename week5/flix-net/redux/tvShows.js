// ---------------------------------- Setting Initial State For TV Shows
const initialState = [ 'Dexter', 'Avatar the Last Airbender' ]

// ---------------------------------- Adding A TV Show
export function addTvShow(tvShow) {
    return {
        type: 'ADD_TV_SHOW',
        data: tvShow
    }
}

// ---------------------------------- Removing TV Show
export function removeTvShow(tvShow) {
    return {
        type: 'REMOVE_TV_SHOW',
        data: tvShow
    }
}

// ---------------------------------- Getting All TV Shows
export function getAllTvShows() {
    return {
        type: 'GET_ALL_TV_SHOWS'
    }
}

// ------------------------------------------------------------------- Setting Initial StateSetting Initial State
export default function tvShowReducer(tvShows = initialState, action) {
    switch(action.type) {
        case 'ADD_TV_SHOW':
            return [...tvShows, action.data]
            break;
        case 'REMOVE_TV_SHOW':             
            const updatedArr = tvShows.filter(tvShow => tvShow.toLowerCase() !== action.data.toLowerCase())
            return updatedArr
            break;
        case 'GET_ALL_TV_SHOWS': 
            return tvShows;
            break;
        default:
            return tvShows;
    }
}