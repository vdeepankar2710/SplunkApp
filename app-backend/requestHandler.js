const axios = require('axios');
const https = require("https");

// Define authentication credentials
const username = 'Deepankar';
const password = 'Deep@123';

// Define the base URL without authentication
const baseURL = `https://localhost:8089`

// Create an Axios instance with the base URL and authentication
const axiosInstance = axios.create({
  baseURL,
  auth: {
    username,
    password,
  },
});

const params = {
  output_mode: 'json',
};

// Make a GET request
const httpsAgent = new https.Agent({
  rejectUnauthorized: false, // (NOTE: this will disable client verification)
})

const getHandler = async (url) => {
    let reqUrl = baseURL + url;
    axiosInstance.get(reqUrl, {httpsAgent, params})
    .then(response => {
        console.log(baseURL, "response for corresponding url", response && response.data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
}
module.exports = { getHandler };

