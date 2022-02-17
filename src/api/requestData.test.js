import axios from 'axios';
import requestData from './requestData';
import { TRENDING_FEED_URL, USER_FEED_URL, USER_INFO_URL } from './requestDataConfig';

jest.mock('axios');

describe('requestData', () => {
  let url, name, setResponseData, setIsLoading, limit;

  beforeEach(() => {
    url = 'https://url-for-get.com/';
    name = 'name';
    setResponseData = jest.fn();
    setIsLoading = jest.fn();
    limit = 10;
  });

  it.each`
    url                  | name    | limit
    ${USER_INFO_URL}     | ${name} | ${10}
    ${USER_FEED_URL}     | ${name} | ${20}
    ${TRENDING_FEED_URL} | ${''}   | ${30}
  `('should call axios with url = "$url", name = "$name" and limit = "$limit"', async () => {
    axios.get.mockResolvedValue({});

    await requestData({ url, name, limit });

    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining(`${url}${name}?limit=${limit}`), expect.any(Object));
  });
});
