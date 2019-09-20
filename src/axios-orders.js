import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://berger-app-basic.firebaseio.com/'
})

export default instance;