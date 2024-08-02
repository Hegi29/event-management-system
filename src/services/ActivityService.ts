import axios from 'axios';

import { storage } from '../utils/Storage';
import { BASE_URL, TIMEOUT_AXIOS } from '../constants';

axios.defaults.timeout = TIMEOUT_AXIOS;

const email = storage.getString('user.email');

const getActivityList = async (params: any) => {
    const query = `pageSize=${params.pageSize}&pageNumber=${params.pageNumber}&email=${email}`;
    const url = `${BASE_URL}/Activity/GetAllActivities?${query}`;
    const response = await axios.get(url);
    return response;
};

export default getActivityList;
