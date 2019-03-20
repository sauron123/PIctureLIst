import React, { Component } from 'react';


class Rating extends Component {


      state= {
        rating: this.props.rating || null,
        temp_rating: null
      };

    changeRate = (rate) => {
        this.setState({
            rating: rate,
            temp_rating: rate
          }, ()=>{this.props.ClickChangeRate(rate)});
    }
 
    star_over= (rating)  =>{
      this.setState({
        temp_rating: this.state.rating,
        rating
      }, ()=>{
        this.setState({
            rating: this.state.rating,
            temp_rating: this.state.temp_rating
      });
  });
      
    }
    star_out= () =>{
        
      this.setState({ rating: this.state.temp_rating }, ()=>{
        this.setState({ rating: this.state.rating });
      });
    }
    render() {
      let stars = [];
      
      for(let i = 0; i < 5; i++) {
        let klass = 'star-rating__star';
        
        if (this.state.rating >i && this.state.rating != null) {
          klass += ' is-selected';
        }
  
        stars.push(
          <label
            className={klass}
            onClick={() => {this.changeRate(i+1)}}
            onMouseOver={() => {this.star_over(i+1)}}
            onMouseOut={this.star_out}
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
