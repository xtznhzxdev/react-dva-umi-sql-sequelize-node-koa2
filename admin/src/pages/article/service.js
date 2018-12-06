import { request } from '@/utils';

export const postArticleList = (payload) => {
  return request('/article/list', {
    method: 'POST',
    body: payload,
  })
}
