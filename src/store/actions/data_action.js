import * as types from "./actionTypes";
import getImage from '../../utils/utils'
import {LIMIT_LIST} from '../../constants';

export const postsFetchData = () => dispatch => {
  
    return   getImage().then(res => {
        const pictures = res.data.slice(1,LIMIT_LIST);    
  
         dispatch({ type: types.LOADING_POSTS, payload: pictures })
       })
  }

export const getPictureDetail = (Picture) => dispatch => {
    
    return dispatch ({
        type: types.FIND_PICTURE,
        payload: Picture
    })
}
