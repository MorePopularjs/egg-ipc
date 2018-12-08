'use strict';

exports.schedule = {
  interval: '10m',
  type: 'all', // run in all workers  通过所有的 worker去更新
};

exports.task = async function (ctx) {
  await ctx.service.source.update();
  // 这个位置是强制更新 所有的
  ctx.app.lastUpdateBy = 'force';
};
