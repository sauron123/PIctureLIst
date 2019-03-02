import React, { Component } from 'react';


class PictureItem extends Component {
    constructor (props){
        super(props);
        this.urlPicture = this.props.urlPicture;
    }
//src =this.props.urlpicture
  render() {

    // get imgPicture if the url of picture exist
    const imgPicture = this.urlPicture ?
        <img style={{width: '150px', height: '150px'}} className='picture-img' src = {this.urlPicture}  /> : '';

    return (
        // chaque raw en bootstratp = 12 colone //medium 3 a chaque ligne et samll 2 a chaque ligne
        <div className="col-sm-6 col-md-4">
             {imgPicture}
        </div>
    );
  }

}

export default PictureItem;
// container => row => array on picture