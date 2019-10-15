import * as actionTypes from './actionTypes';
import axios from 'axios';



export const setProduct = (response) => {
    return {
        type : actionTypes.SET_PRODUCT,
        product : response.data
    }
}

export const fetchProductFailed = () => {
    return {
        type : actionTypes.FETCH_PRODUCT_FAILED
    }
}

export const fetchProduct = (id) => {
    return dispatch => {
        axios.get('http://localhost:3000/product/' + id)
        .then( response => {
            dispatch(setProduct(response)); 

        })
        .catch(error => {
            console.log('greska mater ti')
            dispatch(fetchProductFailed());
        });
    }
}