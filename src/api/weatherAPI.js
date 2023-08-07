import axios from "axios";


const BASE_URL = 'https://www.ncei.noaa.gov/cdo-web/api/v2/{endpoint}';
const weatherAPI = axios.create({ baseURL: BASE_URL});

export default weatherAPI;