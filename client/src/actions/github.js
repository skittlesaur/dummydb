import * as api from '../api';
import {FETCH_ISSUES, FETCH_RELEASES, FETCH_REQUESTS} from "../constants/github";

export const fetchReleases = async (dispatch) => {
    try {
        const {data} = await api.fetchGithubReleases();
        dispatch({type: FETCH_RELEASES, data});
    } catch (e) {
        console.log(e);
    }
}

export const fetchRequests = async (dispatch) => {
    try {
        const {data} = await api.fetchGithubRequests();
        dispatch({type: FETCH_REQUESTS, data});
    } catch (e) {
        console.log(e);
    }
}

export const fetchIssues = async (dispatch) => {
    try {
        const {data} = await api.fetchGithubIssues();
        dispatch({type: FETCH_ISSUES, data});
    } catch (e) {
        console.log(e);
    }
}