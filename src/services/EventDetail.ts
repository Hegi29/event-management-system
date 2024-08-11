import axios from 'axios';

import { BASE_URL, TIMEOUT_AXIOS } from '../constants';

axios.defaults.timeout = TIMEOUT_AXIOS;

const PostEventDetail = async (data: any) => {
    const url = `${BASE_URL}/EventDetail/Create`;
    const response = await axios.post(url, data);
    return response;
};

const GetEventDetailByDateList = async (param: any) => {
    console.log("🚀 ~ GetEventDetailByDateList ~ param:", param)

    const a = param.startDate.toISOString().split('T')[0];
    const b = param.endDate.toISOString().split('T')[0];

    console.log("🚀 ~ GetEventDetailByDateList ~ newStart:", a);
    console.log("🚀 ~ GetEventDetailByDateList ~ newStart:", b);

    const query = `ActivityStartDate=${a}&ActivityEndDate=${b}`;
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
    const params = `isDraft=${param.isDraft}&status=${param.status}&keyword=${param.keyword}&pageNumber=${param.pageNumber}&pageSize=${param.pageSize}&email=${param.email}`;
    const url = `${BASE_URL}/EventDetail/GetEventDetailList?${params}`;
    const response = await axios.get(url);
    return response;
};

const GetEventDetailStatusList = async (email: string) => {
    const query = `email=${email}`;
    const url = `${BASE_URL}/EventDetail/GetEventDetailStatusList?${query}`;
    const response = await axios.get(url);
    return response;
};

const GetEventByID = async (id: string) => {
    const url = `${BASE_URL}/EventDetail/GetEventByID/${id}`;
    return axios.get(url)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }

            console.log(error.config);

            return error;
        });
};

export {
    PostEventDetail,
    GetEventDetailByDateList,
    GetEventByID,
    GetEventDetailStatusList,
    GetEventDetailList,
    PutEventDetail
};
