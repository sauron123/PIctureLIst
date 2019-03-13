import React from 'react';
import { css } from 'emotion';
import { PICSUM_URL } from '../../constants';


const calculateUrl = (itemPictureProp) => {
    return (`${PICSUM_URL}/ ${itemPictureProp.width} / ${itemPictureProp.height} ?image=  ${itemPictureProp.id}`);
}

const styleImg  = {
    padding: '25px',
    margin: '30px 0px',
    width: '150px',
    height: '150px',
};


const  PictureItem = (props) => {

    return (
        props.itemPicture ?  <img   className={css(styleImg)} alt="" src={calculateUrl(props.itemPicture)} /> :''
    );
}

export default PictureItem;