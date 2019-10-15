import * as actionTypes from '../actions/actionTypes';

const intialState = {
    product : null,
    error : false
};

const setProduct = (state,action) => {
    return {
        ...state,
        ...action.product


    }
};
const fetchProductFailed = (state,action) => {
    return {
        ...state,
        error : true
    }
};

export const singleProductReducer = (state = intialState,action) => {
    switch(action.type) {
        case actionTypes.SET_PRODUCT: return setProduct(state,action);
        case actionTypes.FETCH_PRODUCT_FAILED : return fetchProductFailed(state,action);
        default: return state;
    }
};


