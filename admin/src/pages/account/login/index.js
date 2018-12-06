import React from 'react';
import { connect } from 'dva';
import { LoginForm } from '@/components/pages-account';
import styles from './index.less';

const LoginView = ({
  dispatch,
  login,
  loading
}) => {
  const loginFormProps = {
    onSubmit(data){
      dispatch({
        type: 'login/toLogin',
        payload: data
      })
    }
  }
  return (
    <div className={styles.loginWrap}>
      <div className={styles.loginForm}>
        <h2>账密登录</h2>
        <LoginForm {...loginFormProps} />
      </div>
    </div>
  )
};

export default connect(({ login, loading }) => ({ login, loading }))(LoginView)
