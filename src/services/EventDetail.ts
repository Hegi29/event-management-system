import axios from 'axios';

import { BASE_URL, TIMEOUT_AXIOS } from '../constants';

axios.defaults.timeout = TIMEOUT_AXIOS;

const PostEventDetail = async (data: any) => {
    const url = `${BASE_URL}/EventDetail/Create`;
    const response = await axios.post(url, data);
    console.log(response.data);
    return response;
};

const GetEventDetailByDateList = async (param: any) => {
    // console.log('param: ', param);
    const data = {
        // activityStartDate: "2024-07-31T00:25:42.534Z", //param.startDate
        // activityEndDate: "2024-07-31T00:25:42.534Z" //param.endDate
        activityStartDate: param.startDate,
        activityEndDate: param.endDate
    };

    const url = `${BASE_URL}/EventDetail/GetEventDetailByDateList`;
    const response = await axios.post(url, data);
    // console.log(response);
    return response;
};

const PutEventDetail = async (data: any) => {
    const url = `${BASE_URL}/EventDetail/Update`;
    const response = await axios.put(url, data);
    console.log(response.data);
    return response;
};

const GetEventDetailList = async (param: any) => {
    const params = {
        isDraft: param.isDraft,
        status: param.status,
        pageNumber: param.pageNumber,
        pageSize: param.pageSize,
        email: param.email
    };

    const url = `${BASE_URL}/EventDetail/GetEventDetailList`;
    const response = await axios.get(url, { params });
    return response;
};

const GetEventDetailStatusList = async (email: string) => {
    const url = `${BASE_URL}/EventDetail/GetEventDetailStatusList`;
    const response = await axios.get(url, { params: { email } });
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
