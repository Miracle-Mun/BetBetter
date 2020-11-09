import * as actionTypes from './actionTypes'
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { history } from "../../history"

const options = data => {
    return {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'post',
        baseURL:'http://localhost:5000',
        body: JSON.stringify(data)
    };
};

export const is_session = () => {
    if(localStorage['jwtToken'] && localStorage['jwtToken'] !== "undefined"){
      return true;
    }else{
      return false;
    }
}


export const checkUserUniqueness = ({ field, value }) => {
    return dispatch => {
        return fetch('/api/users/validate', options({ field, value }))
    }
}

export const userSignupRequest = (userSignupDetails) => {
    return dispatch => {
        return fetch('/api/users/signup', options(userSignupDetails))
    }
}

export const userLoginRequest = (userLoginDetails) => {
    return dispatch => { 
        axios.post(`/api/users/login`, JSON.stringify(userLoginDetails), {
            headers: {
                'Content-Type': 'application/json'
            },
            baseURL:'http://localhost:5000'
        })
        .then(res => {
            res = res.data;
        
            if(res.status){
                const token = res.token;
                delete res.token;
                localStorage.setItem('jwtToken', token);
                dispatch({ type: actionTypes.LOGIN_SUCCESSFUL, authorizationToken: token, authenticatedUsername: jwt.decode(token).username });
                history.push("/");
            }else{
                alert(res.errors);
            }
        });
    }
    
    // return dispatch => {
    //     return fetch('/api/users/login', options(userLoginDetails))
    //     .then(res => res.json())
    //     .then(res => {
    //         console.log(res)
    //         if (res.success) {
    //             const token = res.token;
    //             delete res.token;
    //             localStorage.setItem('jwtToken', token);
    //             dispatch({ type: actionTypes.LOGIN_SUCCESSFUL, authorizationToken: token, authenticatedUsername: jwt.decode(token).username });
    //         }
    //         return res;
    //     })
    // }   
}

export const userLogoutRequest = () => {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('BasicMERNStackAppMyArticles');
        dispatch({ type: actionTypes.LOGOUT_USER });
    }
}