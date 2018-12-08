'use strict';
// 1、
// const Subscriber = require('./lib/subscriber');

// module.exports = agent => {
//   agent.logger.info('init subscriber');
//   const subscriber = new Subscriber();
//   subscriber.on('changed', () => agent.messenger.sendToApp('refresh', 'push'));
//   subscriber.on('error', err => agent.logger.error(err));
// };
// 利用agent 跟新数据 这种发送到app 进程的是


// 2、agent 如何不通过master进程通讯 通过异步获取 
// const RegistryClient = require('./registry_client');
// module.exports = agent => {
//   // 对 RegistryClient 进行封装和实例化 串
//   agent.registryClient = agent.cluster(RegistryClient)
//     // create 方法的参数就是 RegistryClient 构造函数的参数
//     .create({ name: 10 });
//   agent.beforeStart(async () => {
//     await agent.registryClient.ready();
//     agent.coreLogger.info('registry client is ready');
//   });

//   // 调用 publish 发布数据  远程数据发生变化通过  通知其他客户端更新数据
//   setTimeout(() => {
//     agent.registryClient.publish({
//       dataId: 'demo.DemoService',
//       publishData: 'xxx',
//     });
//   }, 5000);
// };



// 提供 一个新的client同步获取数据

const APIClient = require('./APIClient'); // 上面那个模块
module.exports = agent => {
  const config = agent.config.apiClient;
  agent.apiClient = new APIClient(Object.assign({}, config, { cluster: agent.cluster }));
  agent.beforeStart(async () => {
    await agent.apiClient.ready();
  });
};