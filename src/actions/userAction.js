import * as types from './actionTypes';
import {beginAjaxCall, ajaxcallError} from './ajaxStatusActions';
import toastr from 'toastr';

export function createUserSuccess(user_obj) {
    return {
        type:types.CREATE_USER,
        user_obj
    };
}

export function authenticateUserSuccess(user_obj) {
    return {
        type:types.AUTHENTICATE_USER,
         user_obj
        };
}


export function createUser(user) {
    return function(dispatch, getState) {
        dispatch(beginAjaxCall());
        return fetch('http://localhost:2000/createUser', {
            method:'POST',
            body:JSON.stringify(user),
            headers : {'content-type':'application/json'}
        })
        .then(resp => resp.json())
        .then(resp_json => {
            dispatch(createUserSuccess(user));
        }).catch(error => {
            dispatch(ajaxcallError(error));
            throw(error);
        }); 
    };
}

export function authenticateUser(user) {
    //console.log(user);
    return function(dispatch, getState)  {
        dispatch(beginAjaxCall());
        return fetch('http://localhost:2000/auth' , {
            method: 'POST',
            body:JSON.stringify(user),
            headers: {
                'content-type':'application/json'
            }
        })
        .then(resp => resp.json())
        .then(resp_json => {
            console.log(resp_json);
            if(resp_json.flg == true){
                dispatch(authenticateUserSuccess(user));
            }else{
           toastr.error("No users exists! Please Enter Correct Information");
           dispatch(ajaxcallError());
        }
        }).catch(error => {
            dispatch(ajaxcallError(error));
            throw(error);
        }); 
    };
}