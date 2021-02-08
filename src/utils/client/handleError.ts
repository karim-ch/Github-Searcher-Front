import { AxiosError } from 'axios';

function handleError(error: AxiosError) {
  if (error?.response?.data) return error?.response?.data;
  if (error?.response?.statusText) return error?.response?.statusText;
  return 'Something Went Wrong...';
}

export default handleError;
