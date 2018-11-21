import React from 'react';
import { connect } from 'dva';
import { LoginForm } from '@/components';

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
    <div>
      <LoginForm {...loginFormProps} />
    </div>
  )
};

export default connect(({ login, loading }) => ({ login, loading }))(LoginView)
