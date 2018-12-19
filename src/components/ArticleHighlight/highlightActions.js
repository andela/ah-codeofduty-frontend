import axios from "axios";
import { urls, headerObject } from "../../apiEndpoints";
import {HIGHLIGHT_FAILURE, HIGHLIGHT_SUCCESS} from "./actionTypes";
import {highlightSuccess} from "./actionCreators";
import authUser from "../../utils/authUser";

const { token } = authUser();

export const highlightRequest = postData => dispatch => {
    dispatch(highlightSuccess(true));
    return axios.post(urls.HIGHLIGHT, postData, headerObject(token))
        .then((data) => {
            dispatch({
                type: HIGHLIGHT_SUCCESS,
                payload: data.data,
            });
        })
        .catch((error) => {
            const errors = error && 'Please try again';
            dispatch({
                type: HIGHLIGHT_FAILURE,
                payload: errors,
            });
        });
};

