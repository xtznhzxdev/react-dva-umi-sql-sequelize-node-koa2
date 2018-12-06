import router from 'umi/router';
import * as api from '../services/app';
import { menusData, setLogout } from '@/utils'

export default {
  namespace: 'app',
  state: {
    collapsed: false,
    userInfo: {
      username: 'pangrui',
      id: 16396
    },
    menusData: []
  },

  subscriptions: {
    setupHistory({dispatch, history}) {
      history.listen(location => {
        const { pathname } = location;
        if(['/login', '/register'].indexOf(pathname) === -1){
          dispatch({
            type: 'getSysInfo'
          });
          dispatch({
            type: 'getUserInfo'
          });
        }
      })
    }
  },

  effects: {
    *logout({ payload = {} }, { call, put }){
      // 退出登录
      yield call(api.logout, {...payload});
      setLogout();
      yield put(router.put('/login'));
    },
    *getSysInfo({ payload = {} }, { call, put }) {
      yield put({
        type: 'save',
        payload: {
          menusData
        }
      })
    },
    *getUserInfo({ payload = {} }, { select, call, put }) {
      const { userInfo } = yield select(state => state.app);
      if(!userInfo) {
        const data = yield call(api.queryUserInfo, payload);
        yield put({
          type: 'save',
          payload: {
            userInfo: data
          }
        })
      }
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    }
  }
}
