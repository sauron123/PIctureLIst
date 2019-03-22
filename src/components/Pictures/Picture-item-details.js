import React, { Component } from 'react';
import { css } from 'emotion';
import Heading from "../text/Heading";
import SubHeading from "../text/SubHeading";
import calculateUrl from '../../utils/calculUrl';


import { connect } from 'react-redux';
import { postsFetchData, ChangeFavori, ChangeRating } from '../../store/actions/data_action';
import selectImageById from '../../store/selectors/selectImageById';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Rating from '../ui/rating2';


class PictureItemDetail extends Component {


    componentDidMount() {

        if(this.props.fieldData.pictures.length === 0)
        this.props.postsFetchData();
    }



    onStarChangeRate = (nextRate) => {
        this.props.ChangeRating(this.props.fieldData.pictures, this.props.match.params.id, nextRate);
    };

    goBack(){
        this.props.history.push("/");
    }

    render() {


        if (!this.props.getPictureDetail) return null; //spinner loading


      
    // info picture
        let author = this.props.getPictureDetail.author ;
    return (
        <span className={css(styles.pictureWrapper)}>
            <div className={css(styles.container)} >
            <div className={css(styles.card)} >
                        <button type="button" onClick={this.goBack.bind(this)}>Return</button>
                      <Heading>Author : </Heading>

                          <SubHeading>{author}</SubHeading>

       <div className={css(styles.container1)}>
            <img className={css(styles.imgStyle)}
                 src={calculateUrl(this.props.getPictureDetail)}
                 alt ="" />

           <div  className={css(styles.container)}>

                 <Rating
                     rating={(typeof this.props.getPictureDetail.rating == "undefined" ? 0 : this.props.getPictureDetail.rating)}
                     ClickChangeRate = {this.onStarChangeRate}
                 />

           </div>
            </div>

            <div  className={css(styles.container2)}>
                 <FontAwesomeIcon  onClick={() => {this.props.ChangeFavori(this.props.fieldData.pictures, this.props.match.params.id)}}
                                   icon={faHeart}
                                   color={ this.props.getPictureDetail.valueSelected === false ? 'black' : 'red' }
                                   size="lg" />
           </div>
            </div>
            </div>

        </span>



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


// const styles = {
//     pictureWrapper: {
//         marginLeft: '10px 50px 10px 150px',
//         marginRight: '10px 50px 10px 150px',
//         padding: '10px 50px 10px 150px'
//     },
//     infoWrapper: {
//         margin: '10px 50px 10px 150px',
//         padding: '10px 50px 10px 150px'
//     },
//     columnStyle: {
//         flex: '33.33%',
//         padding: '5px',
//     },
//     imgStyle: {
//         display: 'block',
//         marginLeft: 'auto',
//         marginRight: 'auto',
//         width: '30%',
//         maxWidth: '30%'
//     },
//     card: {
//         boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
//         transition: '0.3'
//     },
//     container: {
//         position: 'relative', //flex
//     },
//     favBlock : {
//         position: 'grid',
//         bottom: '20px',
//         right: '20px',
//         backgroundColor: 'white',
//         color: 'white',
//         paddingLeft: '20px',
//         paddingRight: '20px',
//         float: 'left',
//         width: '20%',
//         fontSize: 'calc(14px + (40 - 5) * ((100vw - 300px) / (1600 - 300)))'
//     },
//     favBlock1 : {
//         position: 'grid',
//         backgroundColor: 'white',
//         color: 'white',
//         bottom: '20px',
//         left: '20px',
//         float: 'left',
//         width: '20%',
//         fontSize: 'calc(14px + (40 - 5) * ((100vw - 300px) / (1600 - 300)))'
//     },
//
// };



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
    },
    card: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3'
    },
    container: {
        position: 'relative'

    },
    favBlock : {
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        paddingLeft: '20px',
        paddingRight: '20px'
    },
    favBlock1 : {
        position: 'absolute',
        bottom: '20px',
        left: '20px'
    },
    container1: {
        position: 'relative',
        textAlign: 'center',
        color: 'white'
    },
    container2: {
    position: 'absolute',
    bottom: '30px',
    left: '16px'
    },
over1 : {
    position: 'relative',
    top: '0',
    left: '0'
},
// over2 : {
//     position: 'absolute',
//     top: '60px',
//     left: '80px'
// },
//    divv : {
//         position: 'relative',
//         left: '0',
//         top: '0'
// }

};

