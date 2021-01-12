import MovieTypes from "./movie.types";

export const fetchMoviesPending = () =>({
    type : MovieTypes.FETCH_MOVIES_PENDING
});

export const fetchMoviesSuccess = (movies) =>{
   return ({
    type : MovieTypes.FETCH_MOVIES_SUCCESS,
    payload : movies
})};

export const fetchMoviesError = (error) =>({
    type : MovieTypes.FETCH_MOVIES_ERROR,
    payload :error
});

export const deleteMovie =  movie =>({
    type:MovieTypes.DELETE_MOVIE,
    payload:movie
});

export const updateMovie =  movie =>({
    type:MovieTypes.UPDATE_MOVIE,
    payload:movie
});

export const fetchMovies = () =>{
    return dispatch => {
        dispatch(fetchMoviesPending());
        fetch('http://localhost:3001/moviesInfo')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            dispatch(fetchMoviesSuccess(res));
        })
        .catch(error => {
            console.log(error);
            dispatch(fetchMoviesError(error));
        })
    }
}