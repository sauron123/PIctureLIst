import dataReducer from "../../../src/store/reducers/data_reducer";

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