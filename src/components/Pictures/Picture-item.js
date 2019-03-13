import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class PictureItem extends Component {

  constructor (props){
    super(props);
    this.itemPicture = this.props.itemPicture;
    this.urlPicture = 'https://picsum.photos' + '/' + this.itemPicture.width + '/' + this.itemPicture.height + '?image=' + this.itemPicture.id; 

  }
  goToDetailPicture = () => {
    this.props.history.push({
      pathname: `/image/${this.itemPicture.id}`,
      // search: '?id=' + this.itemPicture.id,
      state: { urlPicture: this.urlPicture,
               pictureName: this.itemPicture.filename,
               author: this.itemPicture.author }
    });
  }

  render() {
    
    // get imgPicture if the url of picture exist
    const imgPicture = this.itemPicture ? <img style={{width: '150px', height: '150px'}} className='picture-img'
     src = {this.urlPicture} 
    alt = {this.itemPicture.filename}
    onClick = {this.goToDetailPicture} /> : '';

    return (
        <div className="col-sm-6 col-md-4">
             {imgPicture}
        </div>
    );
  }

}

export default withRouter (PictureItem) ;
