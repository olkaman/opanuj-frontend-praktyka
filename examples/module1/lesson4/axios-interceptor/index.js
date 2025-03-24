import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  config.metadata = { requestTime: new Date() };
  console.log(config);
  return config;
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  const {
    config: { url, metadata },
  } = response;

  console.log(
    `The server request to ${url} lasted ${
      new Date() - metadata.requestTime
    } ms`
  );
  return response;
});

const {
  data: { articles },
} = await axios.get('/api/data/articles?timeout=2000');

document.querySelector('#data').innerHTML = articles[0].content;
