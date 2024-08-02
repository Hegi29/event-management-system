import axios from "axios";

import { BASE_URL, TIMEOUT_AXIOS } from "../constants";
import { storage } from "../utils/Storage";

axios.defaults.timeout = TIMEOUT_AXIOS;

const email = storage.getString('user.email');

const CreateVenue = async (data: any) => {
    const url = `${BASE_URL}/Venue/Create`;
    const response = await axios.post(url, data);
    console.log(response.data);
    return response;
};

const GetVenueByKeyword = async (data: any) => {
    const param = {
        "keyword": data
    };
    const url = `${BASE_URL}/Venue/GetVenueByKeyword`;
    const response = await axios.post(url, param);
    return response.data;
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
        const query = `isDraft=${param.isDraft}&status=${param.status}&pageSize=${param.pageSize}&pageNumber=${param.pageNumber}&keyword=${param.keyword}&email=${email}`;
        const url = `${BASE_URL}/Venue/GetVenueList?${query}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const GetVenueStatusList = async () => {
    try {
        const url = `${BASE_URL}/Venue/GetAllVenueStatus?email=${email}`;
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
