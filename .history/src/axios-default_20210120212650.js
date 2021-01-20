import axios from 'axios';

const token = Helpers.urlParam('token');
const instance = axios.create({
    baseURL: Configs.API_DOMAIN,
    headers: {
        'ShoppingApiToken': token,
        'BOOKING_FORM_VERSION': Configs.BOOKING_FORM_VERSION
    }
});

export default instance;