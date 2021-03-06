import { message } from 'antd';
import moment from 'moment';
import { getToken } from '@/utils';
import * as api from './service';

export default {
  namespace: 'todo',
  state: {
    data: {},
    currentDate: '',
    dateSearch: moment().format('YYYY-M-D'),
    dateMode: 'month',

    drawerVisible: false,
    drawerItem: null,

    type: '',
    visible: false,
    modalItem: {}
  },
  subscriptions: {
    setupHistory({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if(pathname === '/mine/todo') {
          dispatch({
            type: 'query'
          });
        }
      });
    }
  },
  effects: {
    *query({ payload = {} }, { select, call, put }) {
      payload.token = getToken();
      let { currentDate, dateSearch } = yield select(state => state.todo);
      let { drawerItemUpdate, ...param } = payload;
      const ret = yield call(api.postTodoList, {
        dateSearch,
        ...param
      });
      if(ret.code === 0){
        message.success(ret.msg);
        const { data } = ret;
        const tmp = {};
        data.forEach(item => {
          const key= item.time;
          if(tmp[key] === undefined ) {
            tmp[key] = [];
          }
          tmp[key].push(item);
        });

        // 是否更新抽屉数据
        if(drawerItemUpdate) {
          yield put({
            type: 'setDrawer',
            payload: tmp[currentDate]
          });
        }

        yield put({
          type: 'save',
          payload: {
            data: tmp
          }
        });
      }
    },
    *postCreateTodo({ payload = {} }, { call, put }) {
      payload.token = getToken();
      const ret = yield call(api.postTodoCreate, payload);
      if(ret.code === 0 ) {
        message.success(ret.msg);
        yield put({
          type: 'hideModal'
        });
        yield put({
          type: 'query',
          payload: {
            drawerItemUpdate: true
          }
        });
      }
    },
    *postDeleteTodo({ payload = {} }, { call, put }) {
      payload.token = getToken();
      const ret = yield call(api.postDeleteTodo, payload);
      if(ret.code === 0 ) {
        message.success(`待办事项 ${payload.title} 删除成功`);
        yield put({
          type: 'query',
          payload: {
            drawerItemUpdate: true
          }
        });
      }
    },
    *postUpdateTodo({ payload = {} }, { call, put }) {
      const token = getToken();
      const ret = yield call(api.postUpdateTodo, {
        token,
        ...payload
      });
      if(ret.code === 0 ) {
        message.success(`待办事项 ${payload.title} 更新成功`);
        yield put({
          type: 'hideModal'
        });
        yield put({
          type: 'query',
          payload: {
            drawerItemUpdate: true
          }
        });
      }
    }
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload}
    },
    showDrawer(state, action){
      return { ...state, drawerVisible: true, ...action.payload }
    },
    hideDrawer(state, action){
      return { ...state, drawerVisible: false, drawerItem: {} }
    },
    setDrawer(state, action){
      return { ...state, drawerItem: action.payload }
    },
    showModal(state, action){
      return { ...state, visible: true, ...action.payload }
    },
    hideModal(state, action){
      return { ...state, visible: false, modalItem: {} }
    },
    setModal(state, action){
      return { ...state, modalItem: action.payload }
    }
  }
}
