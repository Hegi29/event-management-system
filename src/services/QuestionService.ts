import axios from "axios";

import { BASE_URL, TIMEOUT_AXIOS } from "../constants";

axios.defaults.timeout = TIMEOUT_AXIOS;

const Create = async (data: any) => {
    const url = `${BASE_URL}/Question/Create`;
    const response = await axios.post(url, data);
    console.log(response.data);
    return response;
};

const GetAllQuestion = async (param: any) => {
    const url = `${BASE_URL}/Question/GetAllQuestion?sectionName=${param.sectionName}&venueId=${param.venueId}&includeEvent=${param.includeEvent}`;
    const response = await axios.get(url);
    console.log(response.data);
    return response;
};

const GetAllQuestionToVerify = async (param: any) => {
    const url = `${BASE_URL}/Question/GetAllQuestionToVerify?eventId=${param.eventId}&venueId=${param.venueId}&sectionName=${param.sectionName}`;
    const response = await axios.get(url);
    console.log(response.data);
    return response;
};

const GetAllQuestionStatus = async (param: any) => {
    const url = `${BASE_URL}/Question/GetAllQuestionStatus?eventId=${param.eventId}&venueId=${param.venueId}&type=${param.type}`;
    const response = await axios.get(url);
    console.log(response.data);
    return response;
};

const GetAllQuestionEvidenceStatus = async (param: any) => {
    const url = `${BASE_URL}/Question/GetAllQuestionEvidenceStatus?eventId=${param.eventId}&venueId=${param.venueId}`;
    const response = await axios.get(url);
    console.log(response.data);
    return response;
};

export {
    Create,
    GetAllQuestion,
    GetAllQuestionEvidenceStatus,
    GetAllQuestionStatus,
    GetAllQuestionToVerify
}