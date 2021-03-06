import axios from 'axios';
import { X_RAPIDAPI_HOST, X_RAPIDAPI_KEY } from './requestDataConfig';

type RequestDataProps = {
  url: string;
  name?: string;
  setResponseData: (data: []) => void;
  setIsLoading?: (loading: boolean) => void;
  limit?: number;
};

const requestData = ({
  url = '',
  name = '',
  setResponseData,
  setIsLoading = () => false,
  limit = 30,
}: RequestDataProps): null => {
  axios
    .get(`${url + name}?limit=${limit}`, {
      headers: {
        'x-rapidapi-host': X_RAPIDAPI_HOST,
        'x-rapidapi-key': X_RAPIDAPI_KEY,
      },
    })
    .then((response) => {
      setResponseData(response.data);
      setIsLoading(false);
      return response;
    })
    .catch((error) => {
      /* eslint-disable no-console */
      if (error.response) {
        console.log('Client received an error response (5xx, 4xx)');
      } else if (error.request) {
        console.log('Client never received a response, or request never left ');
      } else {
        console.log('Something wrong');
      }
      /* eslint-enable no-console */
    });
  return null;
};

export default requestData;
