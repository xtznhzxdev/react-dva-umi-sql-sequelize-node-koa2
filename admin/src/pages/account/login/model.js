import router from 'umi/router';
import { message } from 'antd';
import { setLogin } from '@/utils';
import * as api from './service';

export default {
  namespace: 'login',
  state: {
    userInfo: {}
  },
  subscriptions: {
    setupHistory({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if(['/login', '/register'].indexOf(pathname) === -1){

        }
      })
    }
  },
  effects: {
    *toLogin({ payload = {} }, { call, put }) {
      const ret = yield call(api.queryLogin, payload)
      if(ret) {
        const { token, data, msg } = ret;
        setLogin({ token, username: data.username });
        msg && message.success(msg);
        yield put({
          type: 'global/save',
          payload: {
            userInfo: ret.data
          }
        })
        yield put(router.push('/'));
      }
    }
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    }
  }
}
