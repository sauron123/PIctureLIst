

import * as actionTypes from '../actions/actionTypes';

const initialState = {
    pictures : [],
    pictureDetail : null
};


const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADING_POSTS:
            return {
                ...state,
                pictures : action.payload
            };
         case actionTypes.FIND_PICTURE:
            return {
                ...state,
                pictureDetail : action.payload
            };
        default:
            return state;
    }
};

export default dataReducer;