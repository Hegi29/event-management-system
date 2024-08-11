import axios from "axios";

import { BASE_URL, TIMEOUT_AXIOS } from "../constants";

axios.defaults.timeout = TIMEOUT_AXIOS;

const CreateVenue = (data: any) => {
    const url = `${BASE_URL}/Venue/Create`;
    
    axios.post(url, data)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log('error: ', JSON.stringify(error));
        });
};

const GetVenueByKeyword = async (value: any) => {
    const url = `${BASE_URL}/Venue/GetVenueByKeyword`;

    return axios.post(url, { keyword: value })
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

const UpdateVenue = async (data: any) => {
    const url = `${BASE_URL}Venue/UpdateAllVenueExpiredStatus`;
    const response = await axios.put(url, data);
    console.log(response.data);
    return response;
};

const UpdateAllVenueExpiredStatus = async (data: any) => {
    const url = `${BASE_URL}Venue/UpdateAllVenueExpiredStatus`;
    const response = await axios.put(url, data);
    console.log(response.data);
    return response;
};

const GetVenueList = async (param: any) => {
    try {
        const query = `isDraft=${param.isDraft}&status=${param.status}&pageSize=${param.pageSize}&pageNumber=${param.pageNumber}&keyword=${param.keyword}&email=${param.email}`;
        const url = `${BASE_URL}/Venue/GetVenueList?${query}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const GetVenueStatusList = async (email: string) => {
    try {
        const query = `email=${email}`;
        const url = `${BASE_URL}/Venue/GetAllVenueStatus?${query}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const GetTopVenueList = async (param: any) => {
    try {
        const query = `pageSize=${param.pageSize}&pageNumber=${param.pageNumber}`;
        const url = `${BASE_URL}/Venue/GetTopVenueList?${query}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export {
    CreateVenue,
    GetVenueByKeyword,
    GetVenueStatusList,
    UpdateVenue,
    UpdateAllVenueExpiredStatus,
    GetVenueList,
    GetTopVenueList
};
