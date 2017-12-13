import axios from 'axios';
import * as Config from './../constants/Config';

export default function callApi(endpoint, method = 'GET', body) {
	return axios({
      method: 'GET',
      url: `${Config.API_URL}/${endpoint}`,
      data: null
    })
    .catch(error => {
      console.log(error);
    });
};