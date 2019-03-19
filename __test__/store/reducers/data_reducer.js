
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


