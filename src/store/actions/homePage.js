import * as actionTypes from './actionTypes';
import axios from 'axios'


export const setProduct = (response) => {
    
    return {
        type : actionTypes.SET_PRODUCTS_HOME_PAGE,
        listOfProducts : response.data
    }
}

export const fetchProductFailed = () => {
    return {
        type : actionTypes.FETCH_PRODUCT_FAILED
    }
}

export const fetchProduct =  () => {
    return dispatch => {
        
        axios.get('http://localhost:3000')
        .then( response => {
            
            dispatch(setProduct(response)); 

        })
        .catch(error => {
            console.log('greska mater ti')
            dispatch(fetchProductFailed());
        });
    }
}