import React, { Component } from 'react';
import PictureItem from './Picture-item';
import { css } from 'emotion';
import getImage from '../../utils/utils'
import  Heading  from '../text/Heading'
import { withRouter } from 'react-router-dom';
import {PICSUM_URL, LIMIT_LIST} from '../../constants';



class PicturesList extends Component {
    state = {
        pictures: []
    }

    componentDidMount() {

        getImage().then(res => {
            const pictures = res.data.slice(1,LIMIT_LIST);
            this.setState({ pictures });
        })
    }



    render() {
        // Parse List Picutres
        const pictureListItems = this.state.pictures.map((item, index) => {
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


export default withRouter (PicturesList) ;

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
