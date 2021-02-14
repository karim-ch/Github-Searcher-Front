import axios from 'axios';
import { getEnv } from '../getEnv';

const baseURL = getEnv(
  'REACT_APP_CLIENT_URL',
  'http://github-env.eba-5fd2gsz8.us-west-2.elasticbeanstalk.com',
);

const githubSearcherClient = axios.create({
  baseURL,
});

export default githubSearcherClient;
