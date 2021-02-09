import axios from 'axios';
import { getEnv } from '../getEnv';

const baseURL = getEnv('REACT_APP_CLIENT_URL', 'http://localhost:7000');

const githubSearcherClient = axios.create({
  baseURL,
});

export default githubSearcherClient;
