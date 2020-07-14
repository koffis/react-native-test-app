import {unsplashAPI} from "../api/api";

const SET_DATA = 'SET_DATA';

let initialState = {
    data: null
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};

export const setData = (payload) => ({type: SET_DATA, payload});

export const getData = (order) => (dispatch) => {
    unsplashAPI.getLastPhotos(order).then((response) => {
        dispatch(setData(response.data));
    })
};


export default appReducer;