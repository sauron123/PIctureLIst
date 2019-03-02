import React, { Component } from 'react';


class PictureItem extends Component {
    constructor (props){
        super(props);
        this.urlPicture = this.props.urlPicture;
    }

  render() {

    // get imgPicture if the url of picture exist
    const imgPicture = this.urlPicture ? <img src = {this.urlPicture}  /> : '';

    return (
        <div className="col-md-4">
             {imgPicture}
        </div>
    );
  }

}

export default PictureItem;
