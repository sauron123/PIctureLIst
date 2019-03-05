import React, { Component } from 'react';


class PictureItem extends Component {

        urlPicture = this.props.urlPicture;


  render() {

    // get imgPicture if the url of picture exist
    const imgPicture = this.urlPicture ? <img style={{width: '150px', height: '150px'}} className='picture-img' src = {'https://picsum.photos' + '/' + this.urlPicture.width + '/' + this.urlPicture.height + '?image=' + this.urlPicture.id}  /> : '';

    return (
        <div className="col-sm-6 col-md-4">
             {imgPicture}
        </div>
    );
  }

}

export default PictureItem;
