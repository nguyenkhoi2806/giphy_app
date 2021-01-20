import axios from 'axios';

const token = Helpers.urlParam('token');
const instance = axios.create({
    baseURL: "https://api.giphy.com/v1/gifs/trending?api_key=Q3Uv1P06bTTnt8Xf9erzb3PtnG",
    headers: {
        'ShoppingApiToken': token,
        'BOOKING_FORM_VERSION': Configs.BOOKING_FORM_VERSION
    }
});

export default instance;