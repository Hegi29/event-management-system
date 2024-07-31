import axios from 'axios';

import { BASE_URL, TIMEOUT_AXIOS } from '../constants';

axios.defaults.timeout = TIMEOUT_AXIOS;

const getActivityList = async (params: any) => {
    const data = {
        pageSize: params.pageSize,
        pageNumber: params.pageNumber
    };
    const url = `${BASE_URL}/Activity/GetAllActivities?pageSize=${data.pageSize}&pageNumber=${data.pageNumber}`;
    const response = await axios.get(url);
    return response;
};

export default getActivityList;
