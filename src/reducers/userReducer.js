import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state=initialState.users, action) {
    switch(action.type){
        case types.CREATE_USER:
        return [
            ...state,
            Object.assign({}, action.user)
        ];

        case types.AUTHENTICATE_USER: console.log(state);
        return [
            ...state.filter(user => user.username !==action.users.username),
            Object.assign({}, action.user)
        ];
        

        default:
        return state;
    }
}