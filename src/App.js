import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'
import './App.css';
import PicturesList from './components/Pictures/Pictures-list';
import PictureItemDetail from './components/Pictures/Picture-item-details';

class App extends Component {
  render() {
    return <Router>
			<div>
				<Route exact path="/" render={() => {
					return <PicturesList />;
				}} />
				<Route exact path="/image/:id" render={(props) => {

					return <PictureItemDetail {...props}/>
				}} />
			</div>
		</Router>;
  }
}

export default App;
