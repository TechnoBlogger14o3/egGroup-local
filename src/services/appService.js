/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
*/

// import Settings
import { BASE_URL } from '../config/settings';

export default async (url, method, reqBody = {}, headers = {}) => {
  try {
    const URL = BASE_URL.concat(url);
    const body = Object.keys(reqBody).length && JSON.stringify(reqBody);

    const fetchParams = { method, headers };

    if ((method === 'POST' && !body) || (method === 'PUT' && !body)) {
      throw new Error('Request body required');
    }

    if (body) {
      fetchParams.body = body;
      fetchParams.headers['Content-Type'] = 'application/json';
    }
    console.log(URL, fetchParams);
    const fetchPromise = fetch(URL, fetchParams);
    const timerPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Request timeout');
      }, 10000);
    });

    const response = await Promise.race([fetchPromise, timerPromise]);
    return response;
  } catch (err) {
    return err;
  }
};
