import React, { Component } from 'react';
import PictureItem from './Picture-item';
import { css } from 'emotion';
import  Heading  from '../text/Heading'
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import {postsFetchData} from '../../store/actions/data_action';
import Pagination from '../ui/pagination';
class PicturesList extends Component {

    constructor() {
        super();


        this.state = {
            pageOfItems: []
        };

        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }
    componentDidMount() {
       if(this.props.fieldData.pictures.length === 0)
       this.props.postsFetchData();
    }
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }



    render() {
        let pictureListItems;
        // Parse List Picutres
        if (this.state.pageOfItems.length>0)
       {  pictureListItems = this.state.pageOfItems.map((item, index) => {
            return <PictureItem key={index} itemPicture = {item} history={this.props.history}/> ;
        });}
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
                {this.props.fieldData.pictures.length>0 && 
                        <Pagination items={this.props.fieldData.pictures} onChangePage={this.onChangePage}/>
                       }

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
