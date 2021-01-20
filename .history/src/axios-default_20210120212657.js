import axios from 'axios';

const token = Helpers.urlParam('token');
const instance = axios.create({
    baseURL: "",
    headers: {
        'ShoppingApiToken': token,
        'BOOKING_FORM_VERSION': Configs.BOOKING_FORM_VERSION
    }
});

export default instance;