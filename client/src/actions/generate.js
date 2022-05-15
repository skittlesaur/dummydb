import * as api from '../api/index';
import {CREATE_RECORDS} from "../constants/generate";

export const createRecords = (n = 20, type, fields) => async (dispatch) => {
    try {
        const {data} = await api.createRecords(n, type, fields);
        dispatch({type: CREATE_RECORDS, data});
    } catch (e) {
        console.log(e)
    }
}