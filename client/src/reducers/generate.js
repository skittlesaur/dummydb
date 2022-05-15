import {CREATE_RECORDS, FETCH_OUTPUT} from "../constants/generate";

const reducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_OUTPUT:
        case CREATE_RECORDS:
            return action.data;
        default:
            return state;
    }
}

export default reducer;