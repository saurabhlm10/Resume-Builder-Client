const { default: axios } = require("axios");

const axiosInstance = axios.create({
    baseURL: 'https://resume-builder-server.cyclic.app/'
})

export default axiosInstance