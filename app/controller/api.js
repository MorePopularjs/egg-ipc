'use strict';

const Controller = require('egg').Controller;

class Api extends Controller {
  async index() {
    const { ctx, app, service } = this;
    // 这个应该有agent 通知 app 进程进行获取数据
    app.apiClient.publish(
      {
        dataId: '1111',
        publishData: 'xxx',
      }
    )
    const data = await app.apiClient.get('foo');
    console.log('2222222222');
    console.log(data);
    ctx.body = {
      index: service.source.get('index'),
      lastUpdateBy: ctx.app.lastUpdateBy,
    };
  }
}

module.exports = Api;
