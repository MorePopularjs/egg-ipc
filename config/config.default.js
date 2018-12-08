const path = require('path');

module.exports = appInfo => {
  const config = exports = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = `${appInfo.name}_1523937732669_879`;
  config.apiClient = {
    subMap: {
      foo: {
        dataId: '1111',
      }
    }
  };
  return config;
};
