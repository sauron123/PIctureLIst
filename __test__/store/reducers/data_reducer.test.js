import dataReducer from '../../../src/store/reducers/data_reducer'

describe('post_data reducer', () => {
    it('should return the initial state', () => {
        expect(dataReducer(undefined, {})).toEqual([
            {
                pictures: [],
            }
        ])
    })
});




it('should load pictures post ', () => {
    const action = {
        type: 'LOADING_POSTS',

        payload: {
            format: 'jpeg',
            width: 5616,
            height: 3744,
            filename: '0001_LNRyGwIJr5c.jpeg',
            id: 1,
            author: 'Alejandro Escamilla',
            author_url: 'https://unsplash.com/@alejandroescamilla',
            post_url: 'https://unsplash.com/photos/LNRyGwIJr5c',
            valueSelected: 'black', // should be true or false
            rating: 0
        },
    };



    const store = dataReducer([], action);
    const expected = {
        pictures: {
            format: 'jpeg',
            width: 5616,
            height: 3744,
            filename: '0001_LNRyGwIJr5c.jpeg',
            id: 1,
            author: 'Alejandro Escamilla',
            author_url: 'https://unsplash.com/@alejandroescamilla',
            post_url: 'https://unsplash.com/photos/LNRyGwIJr5c',
            valueSelected: 'black',
            rating: 0
        }
    };

    expect(store).toEqual(expected);
});

it('sets the post to favorite', () => {
    const action = {
        type: 'CHANGE_RATING',
        payload: {
            format: 'jpeg',
            width: 5616,
            height: 3744,
            filename: '0001_LNRyGwIJr5c.jpeg',
            id: 1,
            author: 'Alejandro Escamilla',
            author_url: 'https://unsplash.com/@alejandroescamilla',
            post_url: 'https://unsplash.com/photos/LNRyGwIJr5c',
            valueSelected: true,
            rating: 0
        },
    };

    // const previousPayload =
    //     {
    //         format: 'jpeg',
    //         width: 5616,
    //         height: 3744,
    //         filename: '0001_LNRyGwIJr5c.jpeg',
    //         id: 1,
    //         author: 'Alejandro Escamilla',
    //         author_url: 'https://unsplash.com/@alejandroescamilla',
    //         post_url: 'https://unsplash.com/photos/LNRyGwIJr5c',
    //         valueSelected: 'black',
    //         rating: 0
    //     }

    const store = dataReducer( [] ,action);
    //console.log('here store',store);

    expect(store.pictures.valueSelected).toEqual(true);
});


it('sets the rate to specific value', () => {
    const action = {
        type: 'CHANGE_FAVORI',
        payload: {
            format: 'jpeg',
            width: 5616,
            height: 3744,
            filename: '0001_LNRyGwIJr5c.jpeg',
            id: 1,
            author: 'Alejandro Escamilla',
            author_url: 'https://unsplash.com/@alejandroescamilla',
            post_url: 'https://unsplash.com/photos/LNRyGwIJr5c',
            valueSelected: 'red',
            rating: 5,
        },
    };
// split test before and after , and in after specifying the object #############################
    const storeWithRarting = dataReducer( undefined ,action);

    expect(storeWithRarting.pictures.rating).toEqual(5);

    const postaction = {
        type: 'CHANGE_FAVORI',
        payload: {
            format: 'jpeg',
            width: 5616,
            height: 3744,
            filename: '0001_LNRyGwIJr5c.jpeg',
            id: 1,
            author: 'Alejandro Escamilla',
            author_url: 'https://unsplash.com/@alejandroescamilla',
            post_url: 'https://unsplash.com/photos/LNRyGwIJr5c',
            valueSelected: 'red',
            rating: 0,
        },
    };

    const storeAfterRating = dataReducer( storeWithRarting , postaction);

    expect(storeAfterRating.pictures.rating).toEqual(0);
});




// Enzyme.configure({ adapter: new Adapter() })
//
// function setup() {
//     const props = {
//         addTodo: jest.fn()
//     }
//
//     const enzymeWrapper = shallow(<Header {...props} />)
//
//     return {
//         props,
//         enzymeWrapper
//     }
// }
//
// describe('components', () => {
//     describe('Header', () => {
//         it('should render self and subcomponents', () => {
//             const { enzymeWrapper } = setup()
//
//             expect(enzymeWrapper.find('header').hasClass('header')).toBe(true)
//
//             expect(enzymeWrapper.find('h1').text()).toBe('todos')
//
//             const todoInputProps = enzymeWrapper.find('TodoTextInput').props()
//             expect(todoInputProps.newTodo).toBe(true)
//             expect(todoInputProps.placeholder).toEqual('What needs to be done?')
//         })
//
//         it('should call addTodo if length of text is greater than 0', () => {
//             const { enzymeWrapper, props } = setup()
//             const input = enzymeWrapper.find('TodoTextInput')
//             input.props().onSave('')
//             expect(props.addTodo.mock.calls.length).toBe(0)
//             input.props().onSave('Use Redux')
//             expect(props.addTodo.mock.calls.length).toBe(1)
//         })
//     })
// })


// it('ComponentDidMount', () => {
//     wrapper = shallow(<Mycomponent  {...props}/>
//     expect(showUrl.calledOnce).toBe(true)
// })
//
//
//



