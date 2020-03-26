import types from '../actions/types';

const initialState = {
    pageData: []
}
    

export default function (state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_FORECAST:
            return {
                ...state,
                pageData: action.payload.data
            }
        default:
            return state;
    }
}