import axios from 'axios';

// const API_URL = "http://18.100.8.222:3001/api/v1"
const API_URL = process.env.NEXT_PUBLIC_BASE_URL
console.log("BASE_URL:", process.env.NEXT_PUBLIC_BASE_URL);

const createApi = () => {
  return axios.create({
    // baseURL: "http://18.100.8.222:3001/api/v1",
    baseURL: API_URL,
    // baseURL: process.env.BASE_URL,
    timeout: 60000,
    headers: {
      // "Access-Control-Allow-Origin": API_URL,
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/json",
    //   Authorization: "Bearer ".concat(process.env.API_TOKEN),
    },
  });
};

// const api = createApi(process.env.API_URL, process.env.API_TOKEN);
const api = createApi(API_URL);

export default api;