import MovieTypes from "./movie.types";
import { updateMovie,deleteMovie } from './movie.utils';

const INITIAL_STATE = {
    moviesInfo: [],
    pending : false,
    error : false 
}

const movieReducer  = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case MovieTypes.FETCH_MOVIES_PENDING :
            return {
                ...state,
                pending : true
            }
        case MovieTypes.FETCH_MOVIES_SUCCESS :{
            console.log(action);
            return {
                ...state,
                pending : false,
                moviesInfo : action.payload
            }
        }
        case MovieTypes.FETCH_MOVIES_ERROR :
            return {
                ...state,
                pending : false,
                error :action.error
            }
        case MovieTypes.DELETE_MOVIE : 
            return{
              ...state,
              moviesInfo: deleteMovie(state.moviesInfo ,action.payload)
            }
            case MovieTypes.UPDATE_MOVIE : 
                return{
                  ...state,
                  moviesInfo: updateMovie(state.moviesInfo ,action.payload)
                }
        default :
            return state;
    }
}

export default movieReducer;