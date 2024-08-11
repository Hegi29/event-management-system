import axios from 'axios';

import { BASE_URL, TIMEOUT_AXIOS } from '../constants';

axios.defaults.timeout = TIMEOUT_AXIOS;

const PostComment = async (data: any) => {
    const url = `${BASE_URL}/Comment/Create`;
    axios.post(url, data)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log('error: ', JSON.stringify(error));
        });
};

export default PostComment;
