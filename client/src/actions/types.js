import * as api from '../api';
import {FETCH_CATEGORIES, FETCH_TYPES} from "../constants/types";

export const getCategories = async (dispatch) => {
    try {
        const {data} = await api.fetchCategories();
        dispatch({type: FETCH_CATEGORIES, data: data.categories});
    } catch (e) {
        console.log(e);
    }
}

export const getTypes = (type) => async (dispatch) => {
    try {
        const {data} = await api.fetchType(type);
        dispatch({type: FETCH_TYPES, data: data.data});
    } catch (e) {
        console.log(e);
    }
}