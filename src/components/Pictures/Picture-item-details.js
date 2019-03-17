import React, { Component } from 'react';
import { css } from 'emotion';
import Heading from "../text/Heading";
import SubHeading from "../text/SubHeading";

import { connect } from 'react-redux';
import {postsFetchData} from '../../store/actions/data_action';

class PictureItemDetail extends Component {

    state = {
        Picture:null
    };

    

    componentDidMount() {
            let id = this.props.match.params.id;
            let pictures = this.props.fieldData.pictures;
            if (pictures.length === 0)
            this.props.postsFetchData();

            const found = this.findPicture(pictures, id);
            this.setState({  Picture : found });
        
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.fieldData !== this.props.fieldData)
       {    let  id = this.props.match.params.id;
            let pictures = this.props.fieldData.pictures;
            this.setState({ Picture: this.findPicture(pictures, id)})
    }
    }

    findPicture = (PictureList, id) => {
        return (PictureList).find(x => x.id === parseInt(id));
    }


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

const mapStateToProps = state => {
    return {
        fieldData: state.fieldData
    }
};

// const mapDispatchToProps = dispatch => {
//     return {
//        postsFetchData

//     }
// }

export default connect(mapStateToProps, {postsFetchData})(PictureItemDetail);
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
