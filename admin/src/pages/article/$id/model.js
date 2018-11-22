import { pagination } from '@/utils'
import * as api from './service';
export default {
  namespace: 'articleDetail',
  state: {
    info: {},
    comment: [],
    otherArticles: [],
    otherArticlesPagination: pagination,
    tabKey: 'content'
  },
  subscriptions: {
    setupHistory({ dispatch, history}) {
      history.listen(({ pathname }) => {
        if(/\/article\/\d+/.test(pathname)) {
          const id = pathname.split('/').pop();
          dispatch({
            type: 'getArticle',
            payload: { id }
          })
        }
      })
    }
  },
  effects: {
    *getArticle({ payload = {} }, { call, put }) {
      const ret = yield call(api.queryArticle, payload);
      if(ret.code === 0){
        yield put({
          type: 'save',
          payload: {
            info: ret.data,
            tabKey: 'content'
          }
        })
      }
    },
    *getOtherArticles({ payload = {} }, { select, call, put }) {
      // 该作者的其他文章
      const data = {
        current: pagination.current,
        pageSize: pagination.pageSize,
        category: 'all',
        ...payload
      };
      const ret = yield call(api.queryOtherArticles, data);
      if(ret.code === 0){
        yield put({
          type: 'save',
          payload: {
            otherArticles: ret.data,
            otherArticlesPagination: ret.meta
          }
        })
      }
    },
    *setChangeTab({ payload = {} }, { call, put }) {
      const { tabKey, ...restProps } = payload;
      yield put({
        type: 'save',
        payload: { tabKey }
      });

      if(tabKey === 'otherArticles'){
        yield put({
          type: 'getOtherArticles',
          payload: {
            ...restProps
          }
        });
      }
    }
  },
  reducers: {
    save(state, action){
      return { ...state, ...action.payload };
    }
  }
}
