import * as actionTypes from '../actions/actionTypes';

const initialState = {
    bookmarks: [],
    sports: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GOT_ALL_BOOKMARKS:
            return {
                ...state,
                bookmarks: action.bookmarks
            };
        case actionTypes.GOT_ALL_SPORTS: {
            return {
                ...state,
                sports: action.sports
            }
        }
        default:
            return state;
    }
};

export default reducer;
