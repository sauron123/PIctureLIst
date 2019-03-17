import React, { Component } from 'react';
import PictureItem from './Picture-item';
import { css } from 'emotion';
import  Heading  from '../text/Heading'
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import {postsFetchData} from '../../store/actions/data_action';

class PicturesList extends Component {


    componentDidMount() {

       this.props.postsFetchData();
    }



    render() {
        // Parse List Picutres
        const pictureListItems = this.props.fieldData.pictures.map((item, index) => {
            return <PictureItem key={index} itemPicture = {item} history={this.props.history}/> ;
        });
       
        return (

            <React.Fragment>
                <Heading>
                    List of Pictures
                </Heading>
                <div  className={css`display: flex;`}>
                    <div className={css(styles.columnStyle)}>
                        {pictureListItems}
                    </div>
                </div>
            </React.Fragment>
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

export default withRouter(connect(mapStateToProps, {postsFetchData})(PicturesList));

const styles = {
    fontStyle :{
        textAlign : 'center',
        color : '#00BFFF',
        margin : '50px 0px'}
    ,
    columnStyle :{
        flex: '33.33%',
        padding: '5px',
    },

};
