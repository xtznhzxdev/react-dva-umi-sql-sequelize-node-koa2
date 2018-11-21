import { request } from '@/utils';

export const queryArticle = (payload) => {
  return request('/article/detail', {
    method: 'POST',
    body: payload
  })
}


export const queryOtherArticles = (payload) => {
  return request('/article/otherArticles', {
    method: 'POST',
    body: payload
  })
}
