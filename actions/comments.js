import fetch from 'isomorphic-fetch';
import { API } from '../config';
//import { handleResponse } from './auth';

export const createComment = (comment) => {
    console.log('comment : '+ JSON.stringify(comment))
    return fetch(`${API}/comment`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
        .then(response => {
            //handleResponse(response);
            console.log('response : '+JSON.stringify(response))
            return response.json();
        })
        .catch(err => console.log(err));
};
/*
export const getTags = () => {
    return fetch(`${API}/tags`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const singleTag = (slug) => {
    return fetch(`${API}/tag/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const removeTag = (slug, token) => {
    return fetch(`${API}/tag/${slug}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};
*/