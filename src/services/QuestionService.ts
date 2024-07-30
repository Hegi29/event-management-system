import axios from "axios";

import { BASE_URL, TIMEOUT_AXIOS } from "../constants";

axios.defaults.timeout = TIMEOUT_AXIOS;

const Create = async (id: string) => {
    const url = `${BASE_URL}/Question/Create/${id}`;
    const response = await axios.delete(url);
    console.log(response.data);
    return response;
};

const GetAllQuestion = async (id: string) => {
    const url = `${BASE_URL}/Question/GetAllQuestion/${id}`;
    const response = await axios.delete(url);
    console.log(response.data);
    return response;
};

const GetAllQuestionToVerify = async (id: string) => {
    const url = `${BASE_URL}/Question/GetAllQuestionToVerify/${id}`;
    const response = await axios.delete(url);
    console.log(response.data);
    return response;
};

const GetAllQuestionStatus = async (id: string) => {
    const url = `${BASE_URL}/Question/GetAllQuestionStatus/${id}`;
    const response = await axios.delete(url);
    console.log(response.data);
    return response;
};

export {
    Create,
    GetAllQuestion,
    GetAllQuestionToVerify,
    GetAllQuestionStatus
}