import axios from 'axios';

const local = axios.create({
    baseURL:'/ze/data'
});

export default local;