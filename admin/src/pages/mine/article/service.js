import { request } from '@/utils';

export const postMyArticle = (payload) => {
  return request('/article/my', {
    method: 'POST',
    body: payload,
  })
}
