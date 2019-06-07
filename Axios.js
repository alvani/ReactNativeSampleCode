import * as axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2/';
const API_KEY = '053c935ad1844ffcb2c37ac792478012';

var instance = axios.create();
instance.defaults.baseURL = BASE_URL;
instance.defaults.timeout = 20000;
instance.defaults.params = {'apiKey': API_KEY, 'country': 'id'};

export { instance as default };