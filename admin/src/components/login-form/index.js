import { Form, Icon, Input, Button, Checkbox } from 'antd';
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
    <Form onSubmit={handleSubmit} className="login-form">
      <FormItem>
        {getFieldDecorator('username', {
          rules: [{ required: true, min:2, max: 10, message: '用户名2-10个字符' }],
        })(
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('password', {
          rules: [{ required: true, min:5, message: '请输入密码，至少5个字符' }],
        })(
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(
          <Checkbox>记住我</Checkbox>
        )}
        <a className="login-form-forgot" href="">忘记密码</a>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        或 <a href="">立即注册</a>
      </FormItem>
    </Form>
  );
}

export default Form.create()(LoginForm);
