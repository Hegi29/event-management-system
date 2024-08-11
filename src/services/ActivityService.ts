import axios from 'axios';

import { BASE_URL, TIMEOUT_AXIOS } from '../constants';

axios.defaults.timeout = TIMEOUT_AXIOS;

const getActivityList = async (params: any) => {
    const query = `pageSize=${params.pageSize}&pageNumber=${params.pageNumber}&email=${params.email}`;
    const url = `${BASE_URL}/Activity/GetAllActivities?${query}`;
    const response = await axios.get(url);
    return response;
};

export default getActivityList;
