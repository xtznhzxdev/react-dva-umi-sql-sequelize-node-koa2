import { message } from 'antd';
import * as api from './service';
import { pagination } from '@/utils';

export default {
  namespace: 'article',
  state: {
    articleList: [],
    articlePagination: pagination
  },
  subscriptions: {
    setupHistory({ dispatch, history}) {
      return history.listen(({ pathname }) => {
        if(pathname === '/article') {
          dispatch({
            type: 'query'
          })
        }
      })
    }
  },
  effects: {
    *query({ payload = {} }, { call , put }) {
      const ret = yield call(api.postArticleList, {
        pagination,
        ...payload
      });
      if(ret.code === 0) {
        ret.msg && message.success(ret.msg);
        yield put({
          type: 'save',
          payload: {
            articleList: ret.data,
            articlePagination: ret.meta
          }
        })
      }
    }
  },
  reducers: {
    save(state, action){
      return {...state, ...action.payload}
    }
  }
}
