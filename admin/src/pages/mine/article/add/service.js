import { request } from '@/utils';

// 新增文章
export const postArticleCreate = (payload) => {
  return request('/article/create', {
    method: 'POST',
    type: 'json',
    body: payload
  })
}
