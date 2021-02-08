import axios from 'axios';
import { getEnv } from '../getEnv';

const baseURL = getEnv('REACT_APP_CLIENT_URL', 'http://localhost:7000');
console.log(baseURL);

const githubSearcherClient = axios.create({
  baseURL,
});

githubSearcherClient.interceptors.request.use(config => {
  const enrichedConfig = { ...config };
  enrichedConfig.params = config.params || {};
  return enrichedConfig;
});

export default githubSearcherClient;
