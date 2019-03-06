import React, { Component } from 'react';


class PictureItem extends Component {

  
  itemPicture = this.props.itemPicture;

  render() {

    // get imgPicture if the url of picture exist
    const imgPicture = this.itemPicture ? <img style={{width: '150px', height: '150px'}} className='picture-img' src = {'https://picsum.photos' + '/' + this.itemPicture.width + '/' + this.itemPicture.height + '?image=' + this.itemPicture.id}  alt = {this.itemPicture.filename} /> : '';

    return (
        <div className="col-sm-6 col-md-4">
             {imgPicture}
        </div>
    );
  }

}

export default PictureItem;
