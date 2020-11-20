import * as actionTypes from './actionTypes';
import axios from 'axios';
import { history } from "../../history"

const options = () => {
    return {
        headers: {
            'Content-Type': 'application/json'
        },
        //baseURL:'http://localhost:3000'
        baseURL:'http://betbetter.fun'
    };
};

export const getAllUsers = () => {
    return dispatch => { 
        axios.post(`/api/admin/users`, '', {
            headers: {
                'Content-Type': 'application/json'
            },
            //baseURL:'http://localhost:3000'
            baseURL:'http://betbetter.fun'
        })
        .then(res => {
            res = res.data;
            
            localStorage.setItem('users', JSON.stringify(res.users));
            dispatch({ type: actionTypes.GOT_ALL_USERS, users: res.users })
        });
    }
};

export const DeleteUser = (user_id) => {
    
    return dispatch => {
        console.log(user_id); 
        axios.post(`/api/admin/deluser`, JSON.stringify(user_id), {
            headers: {
                'Content-Type': 'application/json'
            },
            //baseURL:'http://localhost:3000'
            baseURL:'http://betbetter.fun'
        })
        .then(res => {
            res = res.data;
            localStorage.setItem('users', JSON.stringify(res.users));
            dispatch({ type: actionTypes.GOT_ALL_USERS, users: res.users })
            history.push("/admin"); 
        });
    }
};

export const getClientdata = () => {
    return dispatch => { 
        axios.post(`/api/admin/getclient`, '', {
            headers: {
                'Content-Type': 'application/json'
            },
            //baseURL:'http://localhost:3000'
            baseURL:'http://betbetter.fun'
        })
        .then(res => {
            res = res.data;
            localStorage.setItem('clientData', JSON.stringify(res.clientData[0]));
            dispatch({ type: actionTypes.GOT_CLIENT, clientData: res.clientData})
        });
    }
};

export const GETPay = (data) => {
    localStorage.setItem('totalprice',data)
    return dispatch=>{
        history.push("/paypal")
    }
};

export const GETClient = (data) => {
    return dispatch => { 
        console.log(data);
        axios.post(`/api/admin/client`, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            },
            //baseURL:'http://localhost:3000'
            baseURL:'http://betbetter.fun'
        })
        .then(res => {
            if(res.data.status==="true"){
                history.push("/pricing");
            }
        });
    }
};

export const getAllPayments = () => {
    return dispatch => { 
        axios.post(`/api/admin/payments`, '', {
            headers: {
                'Content-Type': 'application/json'
            },
            //baseURL:'http://localhost:3000'
            baseURL:'http://betbetter.fun'
        })
        .then(res => {
            res = res.data;
            console.log(res);
            localStorage.setItem('payments', JSON.stringify(res.payments));
            dispatch({ type: actionTypes.GOT_PAYMENTS, payments: res.payments })
        });
    }
};

export const adminGetToken = (tokendata) => {        
   return dispatch=>{
    localStorage.setItem('apitoken', tokendata);
    dispatch({ type: actionTypes.GET_APITOKEN, apitoken: tokendata })
    history.push("/bet");
   }
};