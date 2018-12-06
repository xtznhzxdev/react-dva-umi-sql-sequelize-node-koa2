import { message } from 'antd';
import { pagination, getToken } from '@/utils';
import * as api from './service';

export default {
  namespace: 'mineArticle',
  state: {
    data: {
      list: [],
      pagination: {}
    }
  },
  subscriptions: {
    setupHistory({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if(pathname === '/mine/article') {
          dispatch({
            type: 'query'
          });
        }
      });
    }
  },
  effects: {
    *query({ payload = {} }, { call , put }) {
      payload.token = getToken();
      const ret = yield call(api.postMyArticle, {
        ...pagination,
        ...payload
      });
      if(ret.code === 0) {
        ret.msg && message.success(ret.msg);
        yield put({
          type: 'save',
          payload: {
            list: ret.data,
            pagination: {
              ...ret.meta
            }
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
