import React  from 'react';  // modify to a component


const Rating = (props) => {


      let stars = [];

      for(let i = 0; i < 5; i++) {
        let klass = 'star-rating__star';

        if (props.rating >i && props.rating != null) {
          klass += ' is-selected';
        }

        stars.push(
//use map instead of push
          <label
            className={klass}
            onClick={() => {if (props.ClickChangeRate) props.ClickChangeRate(i+1)}}
            key={'Rating' + i}>
            ★
          </label>

        );
      }
      
      return (
        <div>
          {stars}
        </div>
      )};

  export default (Rating);




