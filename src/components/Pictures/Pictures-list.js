import React, { Component } from 'react';
import axios from 'axios';
import './Picture-item/Picture-item';
import PictureItem from './Picture-item/Picture-item';

export  const urlSrc = 'https://picsum.photos';
export  const limitList = 19;

class PicturesList extends Component {
    state = {
        pictures: []
      }


     // limit of number of pictures


  componentDidMount() {
        axios.get(`${urlSrc}/list`)
          .then(res => {
            const pictures = res.data.slice(1,limitList);
            this.setState({ pictures });
          })
      }

  render() {
      // Parse List Picutres
    const pictureListItems = this.state.pictures.map((item, index) => { 
         return <PictureItem key={`index${index}`} urlPicture = {item} /> ;
    });

    return (
        // render at the same level
        <React.Fragment>
        <h1 className="title-pictures-list"> List of Pictures</h1>
        <div className="container">
            <div className="row">
                {pictureListItems}
            </div>
        </div>
        </React.Fragment>
    );
  }

}

export default PicturesList;
