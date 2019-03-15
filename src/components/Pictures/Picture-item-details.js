import React, { Component } from 'react';
import { css } from 'emotion';
import Heading from "../text/Heading";
import SubHeading from "../text/SubHeading";
import getImage from '../../utils/utils';

class PictureItemDetail extends Component {

    state = {
        Picture:null
    };

    componentDidMount() {
        let  id = this.props.match.params.id;

        getImage().then(res => {
            const  section = res.data.slice(0,100); // import from utils maybe with a slice param
            const found = (section).find(x => x.id === parseInt(id));
            this.setState({  Picture : found });
        })
    };


    render() {

        if (!this.state.Picture) return null; //spinner loading
   // console.log(this.props)
      
    // info picture
    //let {urlPicture, pictureName, author} = this.props.location.state;

    return (
        <div className={css(styles.pictureWrapper)}>
                <span className={css(styles.infoWrapper)}>
                      <Heading>Author : </Heading>

                          <SubHeading>{this.state.Picture.author}</SubHeading>

                </span>
            <img className={css(styles.imgStyle)}
                 src={calculateUrl2(this.state.Picture)}
                // src=return (`${PICSUM_URL}/${itemPictureProp.width}/${itemPictureProp.height}?image=${itemPictureProp.id}`);
                 alt ="" />
        </div>
    );
    }
}

export default PictureItemDetail;

const styles = {
    pictureWrapper: {
        marginLeft: '10px 50px 10px 150px',
        marginRight: '10px 50px 10px 150px',
        padding: '10px 50px 10px 150px'
    },
    infoWrapper: {
        margin: '10px 50px 10px 150px',
        padding: '10px 50px 10px 150px'
    },
    columnStyle: {
        flex: '33.33%',
        padding: '5px',
    },
    imgStyle: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        maxWidth: '100%'
    }
};

const calculateUrl2 = (itemPictureProp) => {
    return (`https://picsum.photos/${itemPictureProp.width}/${itemPictureProp.height}?image=${itemPictureProp.id}`);
}; // move and export
