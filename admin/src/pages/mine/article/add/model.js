import { message } from 'antd';
import router from 'umi/router';
import * as api from './service';

export default {
  namespace: 'articleAction',
  state: {
    articleHtml: null
  },
  subscriptions: {},
  effects: {
    *postArticleCreate({ payload = {} }, { call, put }){
      const token = localStorage.getItem('as-token');
      console.log('payload', payload);
      const ret = yield call(api.postArticleCreate, {
        token,
        ...payload
      });
      if(ret.code === 0) {
        ret.msg && message.success(ret.msg);
        router.push('/mine/article');
      }
    }
  },
  reducers: {
    save(state, action) {
      console.log('save', action)
      return { ...state, ...action.payload }
    }
  }
}
