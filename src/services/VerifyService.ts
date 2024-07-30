import axios from "axios";

import { BASE_URL, TIMEOUT_AXIOS } from "../constants";

axios.defaults.timeout = TIMEOUT_AXIOS;

const Verify = async (data: any) => {
    const url = `${BASE_URL}/Verify/Verify`;
    const response = await axios.post(url, data);
    console.log(response.data);
    return response;
};

export default Verify;
