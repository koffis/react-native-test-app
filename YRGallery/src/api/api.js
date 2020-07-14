import * as axios from "axios";

export const unsplashAPI = {
    getLastPhotos(order){
        return axios.get(`https://api.unsplash.com/photos?page=1&per_page=20&order_by=${order}`,
            {headers:{"Authorization": "Client-ID EfnjknDVfIUo0oAOrNYrPXGfyKE9qS0uXSuxL7S65Ok"}}
            )
    },
    getSort(query){
        return axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=20&query=${query}`,
            {headers:{"Authorization": "Client-ID EfnjknDVfIUo0oAOrNYrPXGfyKE9qS0uXSuxL7S65Ok"}}
        )
    }
};