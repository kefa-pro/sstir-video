const env = process.env;

const { REACT_APP_URL_TYPE, REACT_APP_AUTH_TOKEN } = env;
const getUrl = () => {
  switch (REACT_APP_URL_TYPE) {
    case 'dev':
      return {
        baseUrl: 'http://apigate.test.sstir.cn/cms/activity/',
        uploadUrl: 'http://apigate.test.sstir.cn/cms/activity/upload'
      };
    case 'qa':
      return {
        baseUrl: 'http://apigate.test.sstir.cn/cms/activity/',
        uploadUrl: 'http://apigate.test.sstir.cn/cms/activity/upload'
      };
    case 'prod':
      return {
        baseUrl: 'http://apigate.test.sstir.cn/cms/activity/',
        uploadUrl: 'http://apigate.test.sstir.cn/cms/activity/upload'
      };
    default:
      return {
        baseUrl: 'http://apigate.test.sstir.cn/cms/activity/',
        uploadUrl: 'http://apigate.test.sstir.cn/cms/activity/upload'
      };
  }
};

export default {
  token: REACT_APP_AUTH_TOKEN,
  baseUrl: getUrl().baseUrl,
  uploadUrl: getUrl().uploadUrl
};
