import {
    GET_HIGHLIGHT_FAILURE,
    GET_HIGHLIGHT_SUCCESS,
    HIGHLIGHT_FAILURE,
    HIGHLIGHT_SUCCESS,
    SAVE_HIGHLIGHT_FAILURE,
    SAVE_HIGHLIGHT_SUCCESS
} from "./actionTypes";

export const highlightSuccess = payload => ({
    type: HIGHLIGHT_SUCCESS,
    payload,
});
export const highlightFailure = payload => ({
    type: HIGHLIGHT_FAILURE,
    payload,
});
export const saveHighlightSuccess = payload => ({
    type: SAVE_HIGHLIGHT_SUCCESS,
    payload,
});
export const saveHighlightFailure = payload => ({
    type: SAVE_HIGHLIGHT_FAILURE,
    payload,
});
export const getHighlightSuccess = payload => ({
    type: GET_HIGHLIGHT_SUCCESS,
    payload,
});
export const getHighlightFailure = payload => ({
    type: GET_HIGHLIGHT_FAILURE,
    payload,
});