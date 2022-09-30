const axios = require('axios');

const apiService = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json',
});

apiService.defaults.headers.common['Accept'] = 'application/json';
apiService.defaults.headers.common['Content-Type'] = 'application/json';

export default apiService;