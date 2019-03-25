import React from 'react';
import { shallow, mount } from 'enzyme';
import PicturesList from './Pictures-list';
import PictureItem from './Picture-item';
import { MemoryRouter } from 'react-router-dom'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore, combineReducers, 	applyMiddleware, compose } from 'redux';
import dataReducer from '../../store/reducers/data_reducer';
import thunk from 'redux-thunk';
import {postsFetchData} from '../../store/actions/data_action';

configure({ adapter: new Adapter() });
//Snapshot
describe('<Pictures-list />', () => {
  it('should render correctly in "debug" mode', () => {
    const ListPicture = shallow(<PicturesList debug/>);
  
    expect(ListPicture).toMatchSnapshot();
  }) ;

// Verify Header Pictures List
it('Find Picture Item', () => {
  const header =  <h1 className="css-yw7oed">
  List of Pictures
  </h1>
  expect(wrapper.contains(header)).toEqual(true);
});

 //Find Pictures
  let store;
  let wrapper;
  beforeEach(()=>{
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const rootReducer = combineReducers({
    fieldData: dataReducer,
    });
    store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(thunk)
        ));
    wrapper = mount(<Provider store = {store} ><MemoryRouter><PicturesList  /></MemoryRouter></Provider>);})


  it('Find Picture Item', () => {
    let expectedPictureItem = {"author": "Alejandro Escamilla",
        "author_url": "https://unsplash.com/@alejandroescamilla",
        "desciption": "There are many idiosyncratic typing styles in between novice-style \"hunt and peck\" and touch typing." +
            " For example, many \"hunt and peck\" typists have the keyboard layout memorized and are able to type while focusing " +
            "their gaze on the screen. Some use just two fingers, while others use 3-6 fingers. Some use their fingers very consistently, " +
            "with the same finger being used to type the same character every time, while others vary the way they use their fingers. (Wikipedia)",
        "filename": "0001_LNRyGwIJr5c.jpeg", "format": "jpeg", "height": 3744, "id": 1, "ingredients": ["ingredientttttttttt 1",
            "ingredient 1", "ingredient 1"], "post_url": "https://unsplash.com/photos/LNRyGwIJr5c", "rating": 0,
        "valueSelected": false, "width": 5616};

    return store.dispatch(postsFetchData()).then(() => {
      expect(store.getState().fieldData.pictures[1]).toEqual(expectedPictureItem);
    });



 
  })
});
