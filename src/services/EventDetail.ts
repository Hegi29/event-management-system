import axios from 'axios';

import { BASE_URL, TIMEOUT_AXIOS } from '../constants';

axios.defaults.timeout = TIMEOUT_AXIOS;

const PostEventDetail = async (data: any) => {
    const url = `${BASE_URL}/EventDetail/Create`;
    const response = await axios.post(url, data);
    console.log(response.data);
    return response;
};

const GetEventDetailByDateList = async () => {
    const url = `${BASE_URL}/EventDetail/GetEventDetailList`;
    const response = await axios.get(url);
    console.log(response.data);
    return response;
};

const PutEventDetail = async (data: any) => {
    const url = `${BASE_URL}/EventDetail/Update`;
    const response = await axios.put(url);
    console.log(response.data);
    return response;
};

const GetEventDetailList = async (param: any) => {
    const params = {
        isDraft: param.isDraft,
        status: param.status,
        pageSize: param.pageSize,
        email: param.email
    };

    const url = `${BASE_URL}/EventDetail/GetEventDetailList`;
    const response = await axios.get(url, {params});
    // console.log(response.data);
    return response.data;
};

const GetEventDetailStatusList = async (email: string) => {
    const url = `${BASE_URL}/EventDetail/GetEventDetailStatusList`;
    const response = await axios.get(url, {params: { email }});
    console.log(response.data);
    return response;
};

const GetEventByID = async (id: string) => {
    const url = `${BASE_URL}/EventDetail/GetEventByID/${id}`;
    const response = await axios.get(url);
    console.log(response.data);
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
