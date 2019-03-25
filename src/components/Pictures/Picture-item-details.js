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

import Ingredients from './Ingredients/Ingredients'
import Helper from '../ui/helper';
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

        // let x = window.matchMedia("(max-width: 700px)")
        // myFunction(x) // Call listener function at run time
        // x.addListener(myFunction) // Attach listener function on state changes


        if (!this.props.getPictureDetail)  return null; //spinner loading


      
    // info picture
        let author = this.props.getPictureDetail.author ;
    return (
        <span className={css(styles.pictureWrapper)}>
            <div className={css(styles.oneGridRow)} >
                <div>
            <div className={css(styles.container)} >
            <div className={css(styles.card)} >
                        <button type="button" onClick={this.goBack.bind(this)}>Return</button>
                      <Heading>Author : </Heading>

                          <SubHeading>
                          <Helper text={author}
			            	helper={<p>This is the author name</p>} /> 
                          </SubHeading>
                 
                          
                         
       <div className={css(styles.container1)}>
           <h1 className={css(h1)}> recipe name </h1>
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


                <div className="img-wrapper">


                 <FontAwesomeIcon  onClick={() => {this.props.ChangeFavori(this.props.fieldData.pictures, this.props.match.params.id)}}
                                   icon={faHeart}
                                   color={ this.props.getPictureDetail.valueSelected === false ? 'grey' : 'red' }
                                   size="lg" />
                </div>

                <div className={css(styles.card)} >
                    <p>
                        { this.props.getPictureDetail.desciption  }
                    </p>
                </div>


            </div>

            </div>
                </div>
<div className={css(container)}>
                <div>

 <Ingredients ingredients={this.props.getPictureDetail.ingredients}/>


</div>

<div>

 <Ingredients ingredients={this.props.getPictureDetail.ingredients}/>


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
        overflow: 'auto',
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
        maxWidth: '100%',
    },
    card: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3',
        marginLeft: '20px',
        marginRight: '20px'

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
    oneGridRow: {
        display : 'grid',
        gridTemplateRow : '900px ',

    },
    container2: {
    position: 'absolute',
    bottom: '100px',
    left: '25px'
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

// carefull on mobile it's showing on a wrong place
const h1 =  {
    position: 'absolute',
    top: '20%',
    left: '0',
    width: '100%',
    fontSize: '5.9vw'
}

// @media only screen and (max-width: 767px) {
//
//     h1 {
//         font-size: 3em;
//     }


//
//
// function myFunction(x) {
//     if (x.matches) { // If media query matches
//         document.body.style.backgroundColor = "yellow";
//     } else {
//         document.body.style.backgroundColor = "pink";
//     }
//}


const container =  {
    display : 'grid',
    gridTemplateColumns : '400px 400px ',
    gridGap : '50px',



};