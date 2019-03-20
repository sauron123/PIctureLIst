import * as types from "./actionTypes";
import getImage from '../../utils/utils'
import {LIMIT_LIST} from '../../constants';
import selectImageById from '../../store/selectors/selectImageById';


export const postsFetchData = () => dispatch => {
  
    return   getImage().then(res => {
        const pictures = res.data.slice(1,LIMIT_LIST).map((item) => {
          let elementItem = {...item}
          elementItem.valueSelected = 'black';
          elementItem.rating = 1;
          return elementItem;
        });   
         
         dispatch({ type: types.LOADING_POSTS, payload: pictures })
       })
  }

  export const ChangeFavori = (pictures, id) => dispatch => {

        // let newPicture = {...selectImageById(pictures, id)}
        // newPicture.valueSelected = (newPicture.valueSelected ==='red') ? 'black' : 'red'

        let picturesList = pictures.map((element) => {
          let elementPicture = {...element}
          if (elementPicture.id == id)
          {
            elementPicture.valueSelected = (elementPicture.valueSelected ==='red') ? 'black' : 'red'
            return elementPicture;
          }
          return elementPicture;

        })
           
        dispatch({ type: types.CHANGE_FAVORI, payload: picturesList })

  }


  export const ChangeRating = (pictures, id, valueRating) => dispatch => {

    let picturesList = pictures.map((element) => {
      let elementPicture = {...element}
      if (elementPicture.id == id)
      {
        elementPicture.rating = valueRating;
        return elementPicture;
      }
      return elementPicture;

    })
       
    dispatch({ type: types.CHANGE_RATING, payload: picturesList })

}
  

// Filter Picture
// const findPicture = (PictureList, id) => {
//
//     return (PictureList).find(x => x.id === parseInt(id));
// }
//
// export const getPictureDetail = (PictureList, id) => dispatch => {
//     return dispatch ({
//         type: types.FIND_PICTURE,
//         payload: findPicture(PictureList, id)
//     })
// }
