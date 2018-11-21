import { Form, Input, Select } from 'antd';
import { todoCategory, formItemLayout } from '@/utils';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

const TodoForm = ({
  getFieldDecorator,
  modalItem
}) => {
  return (
    <>
      <FormItem label="待办名称" {...formItemLayout}>
        {getFieldDecorator('title', {
          initialValue: modalItem.title || '',
          rules: [
            {
              required: true,
              min: 2,
              max: 20,
              message: '待办名称2-20个字符，说不清楚可在描述中填写哦'
            }
          ]
        })(
          <Input placeholder="请输入事项名称" />
        )}
      </FormItem>
      <FormItem label="待办分类" {...formItemLayout}>
        {getFieldDecorator('category', {
          initialValue: modalItem.category || '',
          rules: [
            {
              required: true,
              message: '待办记得选下哦，便于后期识别'
            }
          ]
        })(
          <Select>
            {Object.keys(todoCategory).map(key => (<Option key={key}>{todoCategory[key]}</Option>))}
          </Select>
        )}
      </FormItem>
      <FormItem label="待办描述" {...formItemLayout}>
      {getFieldDecorator('description', {
        initialValue: modalItem.description || '',
        rules: [
          {
            min: 2,
            max: 100,
            message: '事项描述得有2-100个字符'
          }
        ]
      })(
        <TextArea rows={4} placeholder="请输入事项描述" />
      )}
      </FormItem>
    </>
  )
}

export default TodoForm;
