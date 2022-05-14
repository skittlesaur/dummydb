import {FETCH_ISSUES, FETCH_RELEASES, FETCH_REQUESTS} from "../constants/github";

const reducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_RELEASES:
        case FETCH_REQUESTS:
        case FETCH_ISSUES:
            return action.data;
        default:
            return state;
    }
}

export default reducer;