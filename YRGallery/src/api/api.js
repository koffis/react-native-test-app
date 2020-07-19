import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        "Authorization": "Client-ID EfnjknDVfIUo0oAOrNYrPXGfyKE9qS0uXSuxL7S65Ok"
    }
});

export const unsplashAPI = {
    getLastPhotos(order){
        return instance.get(`photos?page=1&per_page=30&order_by=${order}`)
    },
    getSort(query){
        return instance.get(`search/photos?page=1&per_page=30&query=${query}`)
    }
};

export const userAPI = {
    getUser(username){
        return instance.get(`/users/${username}`)
    },
    getUserPhotos(username){
        return instance.get(`/users/${username}/photos?per_page=30`)
    }
};