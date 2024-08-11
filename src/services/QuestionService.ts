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
    let paramSection = '';

    switch (param.sectionName) {
        case 'EventDetail':
            paramSection = 'Event';
            break;
        case 'VenueDetail':
            paramSection = 'Venue';
            break;
        default:
            paramSection = param.sectionName;
            break;
    }

    const query = `sectionName=${paramSection}&venueId=${param.venueId}&eventId=${param.eventId}`;
    const url = `${BASE_URL}/Question/GetAllQuestion?${query}`;

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

const GetAllQuestionToVerify = async (param: any) => {
    const query = `eventId=${param.eventId}&venueId=${param.venueId}&sectionName=${param.sectionName}`;
    const url = `${BASE_URL}/Question/GetAllQuestionToVerify?${query}`;
    console.log("🚀 ~ GetAllQuestionToVerify ~ query:", query)
    const response = await axios.get(url);
    console.log("🚀 ~ GetAllQuestionToVerify ~ response:", response.data.data)
    return response;
};

const GetAllQuestionStatus = async (param: any) => {
    let paramSection = '';

    switch (param.section) {
        case 'EventDetail':
            paramSection = 'Event';
            break;
        case 'VenueDetail':
            paramSection = 'Venue';
            break;
        default:
            paramSection = param.sectionName;
            break;
    }

    const query = `eventId=${param.eventId}&venueId=${param.venueId}&type=${paramSection}`;
    const url = `${BASE_URL}/Question/GetAllQuestionStatus?${query}`;
    const response = await axios.get(url);
    return response;
};

const GetAllQuestionEvidenceStatus = async (param: any) => {
    const url = `${BASE_URL}/Question/GetAllQuestionEvidenceStatus?eventId=${param.eventId}&venueId=${param.venueId}`;
    const response = await axios.get(url);
    return response;
};

export {
    Create,
    GetAllQuestion,
    GetAllQuestionEvidenceStatus,
    GetAllQuestionStatus,
    GetAllQuestionToVerify
}