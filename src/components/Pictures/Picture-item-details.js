import React, { Component } from 'react';


class PictureItemDetail extends Component {

  

  render() {
      
    // info picture
    let {urlPicture, pictureName, author} = this.props.location.state;

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 picture-detail-wrapper">
                    <span className="picture-detail-wrapper">
                    <span className="author-detail"><strong>Author : </strong> <span className="author-detail-name">{author}</span></span>
                    <img style={{width: '750px', height:'750px'}} src={urlPicture} alt = {pictureName} />
                    </span>
                </div>
            </div>
        </div>
       
    );
  }

}

export default PictureItemDetail;
