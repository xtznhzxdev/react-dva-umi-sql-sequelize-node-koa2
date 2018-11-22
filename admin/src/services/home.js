import { request } from '@/utils';

export const queryArticleList = (payload) => {
  return request('/article/list', {
    method: 'POST',
    body: payload,
  })
}
