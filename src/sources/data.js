import axios from 'axios';

const local = axios.create({
    baseURL:'/data'
});

export default local;