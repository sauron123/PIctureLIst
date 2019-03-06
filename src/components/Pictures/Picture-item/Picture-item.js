import React, { Component } from 'react';
import { css } from 'emotion';

class PictureItem extends Component {

    itemPicture = this.props.itemPicture;// rename itemPicture


  render() {


    // get imgPicture if the url of picture exist
    const imgPicture = this.itemPicture ? <img alt={this.itemPicture.filename } style={{width: '150px', height: '150px'}} className='picture-img' src = {'https://picsum.photos' + '/' + this.itemPicture.width + '/' + this.itemPicture.height + '?image=' + this.itemPicture.id}  /> : '';

    return (
        <div className={css`
      padding: 32px;
      font-size: 24px;
      border-radius: 4px;
    ;
      }
    `} >
             {imgPicture}
        </div>
    );
  }

}

export default PictureItem;
