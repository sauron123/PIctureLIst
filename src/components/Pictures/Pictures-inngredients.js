import React from 'react';
import { css } from 'emotion';

const ingredients =() => {

    return (




            <div className={css(container)} >

                <div >  <img className={css(styleImg)}  src="https://source.unsplash.com/collection/1163637/480x480" /><p>ing1</p></div>
                <div >  <img className={css(styleImg)}  src="https://source.unsplash.com/collection/1163637/480x480" /><p>ing2</p></div>
                <div >  <img className={css(styleImg)}  src="https://source.unsplash.com/collection/1163637/480x480" /><p>ing3</p></div>
                <div >  <img className={css(styleImg)}  src="https://source.unsplash.com/collection/1163637/480x480" /><p>ing4</p></div>
                <div >  <img className={css(styleImg)}  src="https://source.unsplash.com/collection/1163637/480x480" /><p>ing5</p></div>
                <div >  <img className={css(styleImg)}  src="https://source.unsplash.com/collection/1163637/480x480" /><p>ing6</p> </div>
                <div >  <img className={css(styleImg)}  src="https://source.unsplash.com/collection/1163637/480x480" /><p>ing7</p> </div>

            </div>


    );
};



export default (ingredients);


const container =  {
    display : 'grid',
    gridTemplateColumns : '200px 500px ',
    gridGap : '20px',
    textAlign : 'center'


};

const card = {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3',
    marginLeft: '20px',
    marginRight: '20px'

};
const styleImg  = {

    borderRadius: '50%',
    width: '50',
    height: '50px',
    cursor: 'pointer',

};
