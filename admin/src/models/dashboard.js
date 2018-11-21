export default {
  namespace: 'dashboard',
  state: {
    data: {}
  },
  subscriptions: {
    setupHistory({ dispatch, history}) {
      return history.listen(({ pathname }) => {
        if(pathname === '/') {
        }
      })
    }
  },
  effects: {

  },
  reducers: {

  }
}
