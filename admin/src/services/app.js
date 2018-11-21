import { request } from '@/utils';

function postUserLogin(payload){
  return request('/user/login', {
    method: 'POST',
    body: payload,
  })
}

export {
  postUserLogin
}
