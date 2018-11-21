import { request } from '@/utils';

// 新增待办事项
export const postTodoCreate = (payload) => {
  return request('/todo/create', {
    method: 'POST',
    type: 'json',
    body: payload
  })
}


// 删除待办事项
export const deleteTodo = (payload) => {
  return request('/todo/delete', {
    method: 'POST',
    type: 'json',
    body: payload
  })
}

// 更新待办事项
export const postUpdateTodo = (payload) => {
  return request('/todo/update', {
    method: 'POST',
    type: 'json',
    body: payload
  })
}

// 更新待办事项状态
export const postUpdateTodoStatus = (payload) => {
  return request('/todo/updateStatus', {
    method: 'POST',
    type: 'json',
    body: payload
  })
}


// 获取待办事项列表
export const postTodoList = (payload) => {
  return request('/todo/list', {
    method: 'POST',
    type: 'json',
    body: payload
  })
}

