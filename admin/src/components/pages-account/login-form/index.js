import { Form, Icon, Input, Button } from 'antd';
import Link from 'umi/link';
import styles from './index.less';

const FormItem = Form.Item;

const LoginForm = ({
  onSubmit,
  form: {
    getFieldDecorator,
    validateFields
  }
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    validateFields((err, values) => {
      if (err) return;
      onSubmit(values);
    });
  }

  return (
    <Form onSubmit={handleSubmit} className={styles.loginForm}>
      <FormItem>
        {getFieldDecorator('username', {
          rules: [{ required: true, min:2, max: 10, message: '用户名2-10个字符' }],
        })(
          <Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('password', {
          rules: [{ required: true, min:5, message: '请输入密码，至少5个字符' }],
        })(
          <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
        )}
      </FormItem>
      <p className={styles.forgotpwd}><Link to="/account/forgotpwd">忘记登录密码？</Link></p>
      <Button size="large" style={{ width: '100%', marginTop: 12 }} type="primary" htmlType="submit" className="login-form-button">
        登录
      </Button>
      <p className={styles.toRegister}><Link to="/account/register">免费注册</Link></p>
    </Form>
  );
}

export default Form.create()(LoginForm);
