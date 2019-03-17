import React, { Component } from 'react';
import { css } from 'emotion';
import Heading from "../text/Heading";
import SubHeading from "../text/SubHeading";

import { connect } from 'react-redux';
import {postsFetchData, getPictureDetail} from '../../store/actions/data_action';

class PictureItemDetail extends Component {


    componentDidMount() {
            let id = this.props.match.params.id;
            let pictures = this.props.fieldData.pictures;
            if (pictures.length ===0)
            this.props.postsFetchData();

            this.props.getPictureDetail(pictures, id);    }
        


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.fieldData.pictures !== this.props.fieldData.pictures)
       {    let  id = this.props.match.params.id;
            let pictures = this.props.fieldData.pictures;
            this.props.getPictureDetail(pictures, id);    }
    }




    render() {

        if (!this.props.fieldData.pictureDetail) return null; //spinner loading
   // console.log(this.props)
      
    // info picture
    let {author} = this.props.fieldData.pictureDetail;

    return (
        <div className={css(styles.pictureWrapper)}>
                <span className={css(styles.infoWrapper)}>
                      <Heading>Author : </Heading>

                          <SubHeading>{author}</SubHeading>

                </span>
            <img className={css(styles.imgStyle)}
                 src={calculateUrl2(this.props.fieldData.pictureDetail)}
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

export default connect(mapStateToProps, {postsFetchData, getPictureDetail})(PictureItemDetail);
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
