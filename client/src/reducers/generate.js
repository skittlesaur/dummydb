import {CREATE_RECORDS} from "../constants/generate";

const reducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_RECORDS:
            return action.data;
        default:
            return state;
    }
}

export default reducer;