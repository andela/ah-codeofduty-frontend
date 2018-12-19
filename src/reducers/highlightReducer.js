import {
    HIGHLIGHT_FAILURE,
    HIGHLIGHT_SUCCESS,
    SAVE_HIGHLIGHT_SUCCESS,
    SAVE_HIGHLIGHT_FAILURE,
    GET_HIGHLIGHT_SUCCESS,
    GET_HIGHLIGHT_FAILURE,
    COMMENT_HIGHLIGHT_SUCCESS,
    COMMENT_HIGHLIGHT_FAILURE
} from "../components/ArticleHighlight/actionTypes";

const initialState = {
    data: {},
    errors: {},
};

const HighlightReducer = (state = initialState, action) => {
    switch (action.type) {
        case HIGHLIGHT_SUCCESS: {
            return { ...state, data: action.payload };
        }
        case HIGHLIGHT_FAILURE: {
            return { ...state, errors: action.payload };
        }
        case SAVE_HIGHLIGHT_SUCCESS: {
            return { ...state, data: action.payload };
        }
        case SAVE_HIGHLIGHT_FAILURE: {
            return { ...state, data: action.payload };
        }
        case GET_HIGHLIGHT_SUCCESS: {
            return { ...state, data: action.payload };
        }
        case GET_HIGHLIGHT_FAILURE: {
            return { ...state, data: action.payload };
        }
        case COMMENT_HIGHLIGHT_SUCCESS: {
            return { ...state, data: action.payload };
        }
        case COMMENT_HIGHLIGHT_FAILURE: {
            return { ...state, data: action.payload };
        }
        default:
            return state;
    }
};

export default HighlightReducer;