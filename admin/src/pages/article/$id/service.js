import { request } from '@/utils';

export const postArticleDetail = (payload) => {
  return request('/article/detail', {
    method: 'POST',
    body: payload
  })
}

export const postArticleList = (payload) => {
  return request('/article/list', {
    method: 'POST',
    body: payload,
  })
}
