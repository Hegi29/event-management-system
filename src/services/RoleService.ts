import axios from "axios";

import { BASE_URL, TIMEOUT_AXIOS } from "../constants";

axios.defaults.timeout = TIMEOUT_AXIOS;

const CreateRole = async () => {
    const url = `${BASE_URL}/Role/GetAllQuestionStatus`;
    const response = await axios.post(url, {});
    console.log(response.data);
    return response;
};

const UpdateRole = async () => {
    const url = `${BASE_URL}/Role/GetAllQuestionStatus}`;
    const response = await axios.post(url, {});
    console.log(response.data);
    return response;
};

const GetAllRole = async () => {
    const url = `${BASE_URL}/Role/GetAllRole`;
    const response = await axios.get(url);
    console.log(response.data);
    return response;
};

const GetAllRoleById = async (id: string) => {
    const url = `${BASE_URL}/Role/GetAllRoleById/${id}`;
    const response = await axios.get(url);
    console.log(response.data);
    return response;
};

export {
    CreateRole,
    UpdateRole,
    GetAllRole,
    GetAllRoleById
}
