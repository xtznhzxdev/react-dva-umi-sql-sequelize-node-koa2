import { request } from '@/utils';

export const queryLogin = (payload) => {
  return request('/user/login', {
    method: 'POST',
    body: payload,
  })
}
