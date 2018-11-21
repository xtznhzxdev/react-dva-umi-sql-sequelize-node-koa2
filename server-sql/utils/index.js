const isShowLog = true;

export const print = (req = '', res = '') => {
  if(isShowLog) {
    console.log(`====>请求内容：${req}\n====>请求时间：${new Date().toLocaleString()}\n====>请求响应：`, res);
  }
}

export const tokenError =  {
  code: 1,
  redirect: true,
  redirectUrl: '/login',
  msg: 'token失效，请重新登录'
};