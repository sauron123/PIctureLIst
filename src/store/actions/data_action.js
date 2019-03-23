import * as types from "./actionTypes";
import getImage from '../../utils/utils'
import {LIMIT_LIST} from '../../constants';



export const postsFetchData = () => dispatch => {
  
    return   getImage().then(res => {
        const pictures = res.data.slice(1,LIMIT_LIST).map((item) => {
          let elementItem = {...item}
          elementItem.valueSelected = false;
          elementItem.rating = 0;
          elementItem.desciption = "There are many idiosyncratic typing styles in between novice-style \"hunt and peck\" and touch typing. For example, many \"hunt and peck\" typists have the keyboard layout memorized and are able to type while focusing their gaze on the screen. Some use just two fingers, while others use 3-6 fingers. Some use their fingers very consistently, with the same finger being used to type the same character every time, while others vary the way they use their fingers. (Wikipedia)"
          return elementItem;
        });   
         
         dispatch({ type: types.LOADING_POSTS, payload: pictures })
       })
  }

  export const ChangeFavori = (pictures, id) => dispatch => {

        // let newPicture = {...selectImageById(pictures, id)}
        // newPicture.valueSelected = (newPicture.valueSelected ==='red') ? 'black' : 'red'
            if (id === undefined) return null;
        const picturesList = pictures.map((element) => {
          const elementPicture = {...element}
          if (elementPicture.id == id)
          {
            elementPicture.valueSelected = !elementPicture.valueSelected;
          }
          return elementPicture;

        })
           
        dispatch({ type: types.CHANGE_FAVORI, payload: picturesList })

  }


  export const ChangeRating = (pictures, id, valueRating) => dispatch => {

      if (id === undefined) return null;

          const picturesList = pictures.map((element) => {
              const elementPicture = {...element}
              if (elementPicture.id == id) {
                  elementPicture.rating = valueRating;
              }
              return elementPicture;

            });

       
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
