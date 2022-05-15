import {FETCH_CATEGORIES, FETCH_TYPES} from "../constants/types";

const reducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {...state, categories: action.data};
        case FETCH_TYPES:
            return {...state, data: action.data};
        default:
            return state
    }
}

export default reducer;