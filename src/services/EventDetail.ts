import axios from 'axios';

import { BASE_URL, TIMEOUT_AXIOS } from '../constants';
import { storage } from '../utils/Storage';

axios.defaults.timeout = TIMEOUT_AXIOS;

const email = storage.getString('user.email');

const PostEventDetail = async (data: any) => {
    const url = `${BASE_URL}/EventDetail/Create`;
    const response = await axios.post(url, data);
    console.log(response.data);
    return response;
};

const GetEventDetailByDateList = async (param: any) => {
    const query = `ActivityStartDate=${param.activityStartDate}&ActivityEndDate=${param.ActivityEndDate}`;
    const url = `${BASE_URL}/EventDetail/GetEventDetailByDateList?${query}`;
    const response = await axios.get(url);
    return response;
};

const PutEventDetail = async (data: any) => {
    const url = `${BASE_URL}/EventDetail/Update`;
    const response = await axios.put(url, data);
    console.log(response.data);
    return response;
};

const GetEventDetailList = async (param: any) => {
    const params = `isDraft=${param.isDraft}&status=${param.status}&keyword=${param.keyword}&pageNumber=${param.pageNumber}&pageSize=${param.pageSize}&email=${email}`;
    const url = `${BASE_URL}/EventDetail/GetEventDetailList?${params}`;
    const response = await axios.get(url);
    return response;
};

const GetEventDetailStatusList = async () => {
    const url = `${BASE_URL}/EventDetail/GetEventDetailStatusList?email=${email}`;
    const response = await axios.get(url);
    return response;
};

const GetEventByID = async (id: string) => {
    const url = `${BASE_URL}/EventDetail/GetEventByID/${id}`;
    const response = await axios.get(url);
    return response;
};

export {
    PostEventDetail,
    GetEventDetailByDateList,
    GetEventByID,
    GetEventDetailStatusList,
    GetEventDetailList,
    PutEventDetail
};
