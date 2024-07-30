import axios from "axios";

import { BASE_URL, TIMEOUT_AXIOS } from "../constants";

axios.defaults.timeout = TIMEOUT_AXIOS;

const CreateVenue = async (data: any) => {
    const url = `${BASE_URL}/Venue/Create`;
    const response = await axios.post(url, data);
    console.log(response.data);
    return response;
};

const GetVenueByKeyword = async (data: any) => {
    const url = `${BASE_URL}/Venue/GetVenueByKeyword`;
    const response = await axios.post(url, data);
    console.log(response.data);
    return response;
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

const GetVenueList = async () => {
    try {
        const url = `${BASE_URL}/Venue/GetVenueList`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export {
    CreateVenue,
    GetVenueByKeyword,
    UpdateVenue,
    UpdateAllVenueExpiredStatus,
    GetVenueList
};
