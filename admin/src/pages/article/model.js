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
            type: 'queryArticalList'
          })
        }
      })
    }
  },
  effects: {
    *queryArticalList({ payload = {} }, { call , put }) {
      const data = {
        current: pagination.current,
        pageSize: pagination.pageSize,
        category: 'all',
        ...payload
      };
      const ret = yield call(api.queryArticleList, data);
      if(ret.code === 0) {
        ret.msg && message.success(ret.msg)
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
