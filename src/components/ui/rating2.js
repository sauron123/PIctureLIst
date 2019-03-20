import React, { Component } from 'react';


class Rating extends Component {


      state= {
        rating: this.props.rating || null,
      };



    render() {
      let stars = [];
      
      for(let i = 0; i < 5; i++) {
        let klass = 'star-rating__star';
        
        if (this.props.rating >i && this.props.rating != null) {
          klass += ' is-selected';
        }
  
        stars.push(
          <label
            className={klass}
            onClick={() => {this.props.ClickChangeRate(i+1)}}
            >
            ★
          </label>
        );
      }
      
      return (
        <div className="star-rating">
          {stars}
        </div>
      );
    }
  }
  export default (Rating);
