

import * as actionTypes from '../actions/actionTypes';

const initialState = {
    pictures : [],
};


const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADING_POSTS:
            return {
                ...state,
                pictures : action.payload
            };
        case actionTypes.CHANGE_FAVORI:
        return {
            ...state,
            pictures : action.payload
        };
        case actionTypes.CHANGE_RATING:
        return {
            ...state,
            pictures : action.payload
        };
        default:
            return state;
    }
};

export default dataReducer;