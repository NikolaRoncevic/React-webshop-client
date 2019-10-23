import * as actionTypes from './../actions/actionTypes';


const intialState = {
    listOfProducts : [],
};

const setProduct = (state,action) => {
    const {set} = require('immutable');
    return set(state,'listOfProducts',action.listOfProducts)

    
};
const fetchProductFailed = (state,action) => {
    return {
        ...state,
        error : true
    }
};

export const homePageReducer = (state = intialState,action) => {
    switch(action.type) {
        case actionTypes.SET_PRODUCTS_HOME_PAGE: return setProduct(state,action);
        case actionTypes.FETCH_PRODUCTS_HOME_PAGE_FAILED : return fetchProductFailed(state,action);
        default: return state;
    }
};