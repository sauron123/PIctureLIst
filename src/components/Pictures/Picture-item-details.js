import React, { Component } from 'react';
import { css } from 'emotion';
import Heading from "../text/Heading";
import SubHeading from "../text/SubHeading";

import { connect } from 'react-redux';
import { postsFetchData, ChangeFavori, ChangeRating } from '../../store/actions/data_action';
import selectImageById from '../../store/selectors/selectImageById';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import StarRatingComponent from 'react-star-rating-component';



class PictureItemDetail extends Component {


    componentDidMount() {

        if(this.props.fieldData.pictures.length === 0)
        this.props.postsFetchData();
    }

    onStarClick(nextValue, prevValue, name) {
        this.props.ChangeRating(this.props.fieldData.pictures, this.props.match.params.id, nextValue);
    };

    goBack(){
        this.props.history.push("/");
    }

    render() {


        if (!this.props.getPictureDetail) return null; //spinner loading


      
    // info picture
        let author = this.props.getPictureDetail.author ;
    return (

        <div className={css(styles.pictureWrapper)}>
            <div className={css(styles.card)} >
                        <button type="button" onClick={this.goBack.bind(this)}>Return</button>
                      <Heading>Author : </Heading>

                          <SubHeading>{author}</SubHeading>


       < div className={css`position: relative;`} >
            <img className={css(styles.imgStyle)}
                 src={calculateUrl2(this.props.getPictureDetail)}
                 alt ="" />

         <div className={css(styles.container)} >
             <div className={css(styles.organize1)} >
                <FontAwesomeIcon  onClick={() => {this.props.ChangeFavori(this.props.fieldData.pictures, this.props.match.params.id)}}
                                  icon={faHeart}
                                  color={(typeof this.props.getPictureDetail.valueSelected == "undefined" ? 'black' : this.props.getPictureDetail.valueSelected)} size="lg" />
             </div>

           <div className={css(styles.organize2)} >
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={(typeof this.props.getPictureDetail.rating == "undefined" ? 1 : this.props.getPictureDetail.rating)}
                    onStarClick={this.onStarClick.bind(this)}
                />
           </div>

         </div>
         </div>
        </div>
        </div>

    );
    }
}

const mapStateToProps = (state, ownProps) => {
    let  id = ownProps.match.params.id;
    const getPictureDetail = selectImageById(state.fieldData.pictures, id);

    return {
        fieldData: state.fieldData,
        getPictureDetail : getPictureDetail
    }
};

// const mapDispatchToProps = dispatch => {
//     return {
//        postsFetchData

//     }
// }

export default connect(mapStateToProps, {postsFetchData, ChangeFavori, ChangeRating})(PictureItemDetail);
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
        width: '50%',
        maxWidth: '50%'
    },
    card: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3'
    },
    container: {
        padding: '2px 16px'
    },
    organize1: {
        position: 'absolute',
        bottom: '8px',
        right: '16px',
        fontSize: 'calc(14px + (40 - 5) * ((100vw - 300px) / (1600 - 300)))'
    },
    organize2: {
        position: 'absolute',
        bottom: '8px',
        left: '16px',
        fontSize: 'calc(14px + (40 - 5) * ((100vw - 300px) / (1600 - 300)))'
    }
};

const calculateUrl2 = (itemPictureProp) => {
    return (`https://picsum.photos/${itemPictureProp.width}/${itemPictureProp.height}?image=${itemPictureProp.id}`);
}; // move and export
