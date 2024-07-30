import axios from 'axios';

axios.defaults.timeout = 5000;

const baseUrl = 'http://172.19.12.57:7132';

// Invoking get method to perform a GET request
const GetVenueList = async () => {
  const url = `${baseUrl}/Event/v1/Venue/GetVenueList`;
  const response = await axios.get(url);
  console.log(response.data);
};

export default GetVenueList;
