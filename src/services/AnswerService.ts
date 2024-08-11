import axios from 'axios';

import { BASE_URL, TIMEOUT_AXIOS } from '../constants';

axios.defaults.timeout = TIMEOUT_AXIOS;

const PostAnswer = async (data: any) => {
    let bodyFormData = new FormData();

    for (let key in data) {
        bodyFormData.append(key, data[key]);
    }

    const url = `${BASE_URL}/Answer/Create`;
    const response = await axios.post(url, bodyFormData);
    console.log(response.data);
    return response;
};

export default PostAnswer;
