import { userConstants } from '../Constants/index';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default (state = initialState, action) =>{
    switch (action.type) {
    case userConstants.LOGIN_REGISTER_SUCCESS:
        return {
        loggedIn: true,
        user: action.user
        };
    case userConstants.LOGIN_REGISTER_FAILURE:
        return {};
    case userConstants.LOGOUT:
        return {};
    default:
        return state
    }
}