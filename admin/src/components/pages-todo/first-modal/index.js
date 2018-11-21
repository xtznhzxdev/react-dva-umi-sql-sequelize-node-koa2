import { Modal, Form } from 'antd';
import TodoForm from './todo-form';

const titles = {
  'add-todo': '新增事项',
  'edit-todo': '编辑事项',
};

const FirstModal = ({
  form: {
    getFieldDecorator,
    validateFields,
    setFields,
    resetFields
  },
  type,
  visible,
  modalItem,
  onOk,
  onCancel
}) => {
  const handleOk = () => {
    validateFields((errors, values) => {
      if(errors) return;
      const data = {
        ...modalItem,
        ...values
      }
      onOk(data);
    });
  }

  const modalProps = {
    title: titles[type],
    visible,
    onOk: handleOk,
    onCancel,
    afterClose(){
      resetFields();
    }
  };

  const ctxProps = {
    getFieldDecorator,
    modalItem
  }

  let ctx = null;
  if(['add-todo', 'edit-todo'].indexOf(type) > -1) {
    ctx = <TodoForm {...ctxProps} />
  }

  return (
    <Modal {...modalProps}>
      <Form mode="inline">
        {ctx}
      </Form>
    </Modal>
  )
}

export default Form.create()(FirstModal);
