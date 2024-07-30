import axios from "axios";

import { BASE_URL, TIMEOUT_AXIOS } from "../constants";

axios.defaults.timeout = TIMEOUT_AXIOS;

const GetImageByPath = async () => {
    const url = `${BASE_URL}/Image/GetImageByPath`;
    const response = await axios.get(url);
    console.log(response.data);
    return response;
};

export default GetImageByPath;