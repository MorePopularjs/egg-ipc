'use strict';

exports.schedule = {
  interval: '10s',
  type: 'worker', // only run in one worker
};

exports.task = async function (ctx) {
  // console.log('pull_refresh');
  // const needRefresh = await ctx.service.source.checkUpdate();
  // console.log('是否需要更新', needRefresh,'通过所有的app 更新数据');
  // if (!needRefresh) return;

  // notify all workers to update memory cache from `file`
  // ctx.app.messenger.sendToApp('refresh', 'pull');
};
