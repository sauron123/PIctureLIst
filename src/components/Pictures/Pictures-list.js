import React, { Component } from 'react';
import axios from 'axios';
import './Picture-item/Picture-item';
import PictureItem from './Picture-item/Picture-item';

class PicturesList extends Component {
    x  // and this????
    state = {
        pictures: []
      }

     urlSrc = 'https://picsum.photos/150?image='; // what s this?????

     // limit of number of pictures
     limitList = 20; 
// why didmount ???
  componentDidMount() {
        axios.get(`http://picsum.photos/list`)
          .then(res => {
            const pictures = res.data.slice(1,this.limitList - 1);
            this.setState({ pictures });
          })
      }

  render() {
      // Parse List Picutres
    const pictureListItems = this.state.pictures.map((item, indexElement) => { // item not used ?????
         return <PictureItem urlPicture = {this.urlSrc + indexElement} /> ;
    });
// how r u using u cosnt as variable here not with tab ????
    return (
        // render at the same level
        <React.Fragment> // c qui ? ???
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
