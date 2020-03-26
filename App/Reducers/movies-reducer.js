import { ADD_MOVIES, SEARCH_MOVIES } from "./../Actions";
const INITIAL_STATE = {
    movies: [],
    search: []
};

export default function(state = INITIAL_STATE, action) {

    if (action.type === ADD_MOVIES) {

        const result = { ...state, movies: state.movies.concat(action.payload.data) };

        return result;

    } else if (action.type === SEARCH_MOVIES) {

        const result = { ...state, search: action.payload.data };

        return result;

    } else {
        return state;
    }
}
