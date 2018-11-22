import { message } from 'antd';
import * as api from '../services/home';

export default {
  namespace: 'home',
  state: {
  },
  subscriptions: {
    setupHistory({ dispatch, history}) {
      return history.listen(({ pathname }) => {
        if(pathname === '/') {
          dispatch({
            type: 'query'
          })
        }
      })
    }
  },
  effects: {
    *query({ payload = {} }, { call , put }) {

    }
  },
  reducers: {
    save(state, action){
      return {...state, ...action.payload}
    }
  }
}
