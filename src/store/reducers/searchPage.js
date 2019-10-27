import * as actionTypes from './../actions/actionTypes';


const intialState = {
    listOfProducts: [],
    producer: '',
    ramMemory: '',
    processor: '',
    graphicCard: '',
    searchText: '',
    minPrice: undefined,
    maxPrice: undefined
};

const setProduct = (state, action) => {
    const { set } = require('immutable');
    return set(state, 'listOfProducts', action.listOfProducts)


};
const fetchProductFailed = (state, action) => {
    return {
        ...state,
        error: true
    }
};

const updateProducer = (state, action) => {
    return {
        ...state,
        producer: action.data
    }
}
const updateRamMemory = (state, action) => {
    return {
        ...state,
        ramMemory: action.data
    }
}
const updateProcessor = (state, action) => {
    return {
        ...state,
        processor: action.data
    }
}

const updateGraphicCard = (state, action) => {
    return {
        ...state,
        processor: action.data
    }
}

const updateSearchText = (state,action) => {
    return {
        ...state,
        searchText : action.data
    }
}

const updateMinPrice = (state,action) => {
    return {
        ...state,
        minPrice : action.data
    }
}
const updateMaxPrice = (state,action) => {
    return {
        ...state,
        maxPrice : action.data
    }
}

export const searchPageReducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS_SEARCH_PAGE: return setProduct(state, action);
        case actionTypes.FETCH_PRODUCTS_SEARCH_PAGE_FAILED: return fetchProductFailed(state, action);
        case actionTypes.UPDATE_PRODUCER: return updateProducer(state, action);
        case actionTypes.UPDATE_PROCESSOR : return updateProcessor(state,action);
        case actionTypes.UPDATE_RAM_MEMORY : return updateRamMemory(state,action);
        case actionTypes.UPDATE_GRAPHIC_CARD : return updateGraphicCard(state,action);
        case actionTypes.UPDATE_SEARCH_TEXT : return updateSearchText(state,action);
        case actionTypes.UPDATE_MAX_PRICE : return updateMaxPrice(state,action);
        case actionTypes.UPDATE_MIN_PRICE : return updateMinPrice(state,action);
        default: return state; 
    }
};