import * as actionTypes from '../actions/actionTypes'

const initialState = {
    isAuthenticated : false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESSFUL:
            return {
                isAuthenticated: true,
                authenticatedUsername: action.authenticatedUsername,
            }
        case actionTypes.LOGOUT_USER: {
            return {
                isAuthenticated: false,
                authenticatedUsername: ''
            }
        }
        default:
            return state;
    }
};

export default reducer;
