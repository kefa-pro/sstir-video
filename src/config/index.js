const env = process.env;

const { REACT_APP_URL_TYPE, REACT_APP_AUTH_TOKEN } = env;
const getUrl = () => {
  switch (REACT_APP_URL_TYPE) {
    case 'dev':
      return 'http://101.132.40.63:7099/rest';
    case 'qa':
      return 'http://101.132.40.63:7099/rest';
    case 'prod':
      return 'http://101.132.40.63:7099/rest';
    default:
      return 'http://101.132.40.63:7099/rest';
  }
};

export default {
  token: REACT_APP_AUTH_TOKEN,
  baseUrl: getUrl()
};
