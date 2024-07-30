import axios from "axios";

import { BASE_URL, TIMEOUT_AXIOS } from "../constants";

axios.defaults.timeout = TIMEOUT_AXIOS;

const CreateSection = async (data: any) => {
    const url = `${BASE_URL}/Section/Create`;
    const response = await axios.post(url, data);
    console.log(response.data);
    return response;
};

export default CreateSection;
