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
        //baseURL:'http://localhost:3000'
        baseURL:'http://betbetter.fun',
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

export const pay_manage=()=>{
    const current_date=new Date();
    if(localStorage['jwtToken'] && localStorage['jwtToken'] !== "undefined"){
        if(jwt.decode(localStorage.getItem('jwtToken')).limitdate){
            console.log(jwt.decode(localStorage.getItem('jwtToken')));
            return true;
        }
        else if(jwt.decode(localStorage.getItem('jwtToken')).role===1){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}

export const admin_manage=()=>{
    if(localStorage['jwtToken'] && localStorage['jwtToken'] !== "undefined"){
        if(jwt.decode(localStorage.getItem('jwtToken')).role===1){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }  
}


export const checkUserUniqueness = ({ field, value }) => {
    return dispatch => {
        return fetch('/api/users/validate', options({ field, value }))
    }
}

export const userSignupRequest = (userSignUPDetails) => {
    return dispatch => { 
        axios.post(`/api/users/signup`, JSON.stringify(userSignUPDetails), {
            headers: {
                'Content-Type': 'application/json'
            },
            //baseURL:'http://localhost:3000'
            baseURL:'http://betbetter.fun'
        })
        .then(res => {
            res = res.data;
            if(res.Status){
                console.log(res);
                history.push("/signin");
            }else{
                console.log(res.errors);
                if(res.errors.name!=undefined){
                    alert(res.errors.name);
                }
                else if(res.errors.username!=undefined){
                    alert(res.errors.username);
                }
                else if(res.errors.email!=undefined){
                    alert(res.errors.email);
                }
                else{
                    alert(res.errors.confirmPassword);
                }
            }
        });
    }
}  

export const userLoginRequest = (userLoginDetails) => {
    return dispatch => { 
        axios.post(`/api/users/login`, JSON.stringify(userLoginDetails), {
            headers: {
                'Content-Type': 'application/json'
            },
            //baseURL:'http://localhost:3000'
            baseURL:'http://betbetter.fun'
        })
        .then(res => {
            res = res.data;
        
            if(res.status){
                const token = res.token;
                delete res.token;
                localStorage.setItem('jwtToken', token);
                dispatch({ type: actionTypes.LOGIN_SUCCESSFUL, authorizationToken: token, authenticatedUsername: jwt.decode(token).username });
                console.log(jwt.decode(token));
                if(jwt.decode(token).role===1){
                    history.push("/admin");
                }
                else if(jwt.decode(token).limitdate){
                    history.push("/bet");
                }
                else{
                    history.push("/pricing");
                }
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