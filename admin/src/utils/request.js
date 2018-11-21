import fetch from 'dva/fetch';
import router from 'umi/router';
import queryString from 'query-string';
import isObject from 'lodash/isObject';
import { message } from 'antd';
import { setLogout } from './storage';

const log = (name = '', req = '', options = {}, res = {}) => {
  if(window.location.hostname !== 'data.tf56.com') {
    name = name ? `【${name}】数据` : '地址'
    console.group(`%c 请求${name}：${req}`, 'color:#009a61');
    console.log(`时间：${new Date().toLocaleString()}\n参数：`, options, '\n响应：', res);
    console.groupEnd();
  }
}

let defaultOpts = {
  method: 'get',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With':'XMLHttpRequest'
  }
};

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

function parseData(data) {
  if (!data || typeof data !== 'string') {
      return data;
  }
  data = data.trim();

  try {
      data = JSON.parse(data);
  } catch (e) {
      data = (new Function('return ' + data))();
  }

  return data;
}

function checkResult(name, url, options, data) {
  log(name, url, options, data);
  data = parseData(data) || {};
  if(data.code !== 0){
    data.msg && message.error(data.msg);
  }

  // 跳转到登录页面
  // if (data.redirect === true ) {
  //   setLogout();
  //   if(window.location.hostname ==='localhost') {
  //     router.push('/login');
  //   }
  // }

  return data;
}

function stitchUrlParam(url, param,requestType) {
  if(requestType === 1){
    return url + '/' + param;
  } else {
    let mark = url.indexOf('?') === -1 ? '?' : '&';
    return url + mark + param;
  }
}

const reuqestJson = (url, opts = {}) => {
  const { name = '', ...options } = opts;
  return fetch(url, options)
    .then(checkStatus)
    .then((res) => res.json())
    .then(data => checkResult(name, url, options, data));
}


export const request = (url, options = {}) => {
  if (options.type === 'json') {
    options.headers = {...defaultOpts.headers, 'Content-Type': 'application/json; charset=UTF-8'};
    if (isObject(options.body)) {
      options.body = JSON.stringify(options.body);
    }
  }

  if (isObject(options.body)) {
    options.body = queryString.stringify(options.body) || '';
  }

  options = Object.assign({}, defaultOpts, options);

  // if (options.method.toLowerCase() === 'get') {
  //   if(options.body){
  //     url = stitchUrlParam(url, options.body,options.requestType);
  //     delete options.body;
  //   }
  // }
  return reuqestJson(url, options);
}
