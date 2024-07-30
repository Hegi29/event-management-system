import axios from "axios";

import { BASE_URL, TIMEOUT_AXIOS } from "../constants";

axios.defaults.timeout = TIMEOUT_AXIOS;

const PostCreate = async (data: any) => {
    const url = `${BASE_URL}/MasterProvince/Create`;
    const response = await axios.post(url, data);
    console.log(response.data);
    return response;
};

const PostGetListProvince = async (data: any) => {
    const url = `${BASE_URL}/MasterProvince/GetListProvince`;
    const response = await axios.post(url, data);
    console.log(response.data);
    return response;
};

const PostUpdate = async (data: any) => {
    const url = `${BASE_URL}/MasterProvince/Update`;
    const response = await axios.post(url, data);
    console.log(response.data);
    return response;
};

const Remove = async (id: string, modifiedBy: string) => {
    const url = `${BASE_URL}/MasterProvince/Remove/${id}/${modifiedBy}`;
    const response = await axios.delete(url);
    console.log(response.data);
    return response;
};

const GetDetailProvinsi = async (id: string) => {
    const url = `${BASE_URL}/MasterProvince/GetDetailProvinsi/${id}`;
    const response = await axios.delete(url);
    console.log(response.data);
    return response;
};

const GetProvinsi = async (id: string) => {
    const url = `${BASE_URL}/MasterProvince/GetDetailProvinsi/${id}`;
    const response = await axios.delete(url);
    console.log(response.data);
    return response;
};

export { 
    GetDetailProvinsi,
    GetProvinsi,
    PostCreate,
    PostGetListProvince,
    PostUpdate,
    Remove
 };

