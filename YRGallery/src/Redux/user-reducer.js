import {userAPI} from "../api/api";

const SET_USER = 'SET_USER';
const SET_PHOTOS = 'SET_PHOTOS';

let initialState = {
    userData: null,
    photos: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                userData: action.payload
            };
        case SET_PHOTOS:
            return {
                ...state,
                photos: action.photos
            };
        default:
            return state;
    }
};

export const setUser = (payload) => ({type: SET_USER, payload});
export const setPhotos = (photos) => ({type: SET_PHOTOS, photos});

export const getUser = (username) => (dispatch) => {
    userAPI.getUser(username).then((response) => {
        dispatch(setUser(response.data));
    })
};

export const getUserPhotos = (username) => (dispatch) => {
    userAPI.getUserPhotos(username).then(response =>
        dispatch(setPhotos(response.data)));
};


export default userReducer;