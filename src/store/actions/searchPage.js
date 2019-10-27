import * as actionTypes from './actionTypes';
import axios from 'axios'

export const updateProducer = (data) => {
    return {
        type: actionTypes.UPDATE_PRODUCER,
        data: data
    }
}
export const updateRamMemory = (data) => {
    return {
        type: actionTypes.UPDATE_RAM_MEMORY,
        data: data
    }
}
export const updateProcessor = (data) => {
    return {
        type: actionTypes.UPDATE_PROCESSOR,
        data: data
    }
}
export const updateGraphicCard = (data) => {
    return {
        type: actionTypes.UPDATE_GRAPHIC_CARD,
        data: data
    }
}
export const updateSearchText = (data) => {
    return {
        type: actionTypes.UPDATE_SEARCH_TEXT,
        data: data
    }
}
export const updateMinPrice = (data) => {
    return {
        type: actionTypes.UPDATE_MIN_PRICE,
        data: data
    }
}
export const updateMaxPrice = (data) => {
    return {
        type: actionTypes.UPDATE_MAX_PRICE,
        data: data
    }
}

export const setProduct = (response) => {
    return {
        type: actionTypes.SET_PRODUCTS_SEARCH_PAGE,
        listOfProducts: response.data
    }
}

export const fetchProductFailed = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SEARCH_PAGE_FAILED
    }
}

export const fetchProduct = (
    producer,
    ramMemory,
    processor,
    graphicCard,
    search,
    maxPrice,
    minPrice) => {
    return dispatch => {
        console.log(`http://localhost:3000/search?producer=${producer}&ramMemory=${ramMemory}&processor=${processor}&graphicCard=${graphicCard}&search=${search}&maxPrice=${maxPrice}&minPrice=${minPrice}`)
        axios.get(`http://localhost:3000/search?producer=${producer}&ramMemory=${ramMemory}&processor=${processor}&graphicCard=${graphicCard}&search=${search}&maxPrice=${maxPrice}&minPrice=${minPrice}`)
            .then(response => {

                dispatch(setProduct(response));

            })
            .catch(error => {
                console.log('greska mater ti')
                dispatch(fetchProductFailed());
            });
    }
}