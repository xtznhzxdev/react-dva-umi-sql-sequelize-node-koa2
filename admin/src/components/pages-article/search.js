import { Form, Row, Col, Select, Input, Tooltip, Icon } from 'antd';
import { formItemLayout, articleCategory } from '@/utils';
import { FormRow, TagSelect } from '@/components';

const FormItem = Form.Item;

const Search = ({
  form: {
    getFieldDecorator
  },
  onSearch,
  onTagSelectChange
}) => {
  return (
    <Form layout="inline">
      <FormRow title="所属类目" block style={{ paddingBottom: 11 }}>
        <FormItem>
          {getFieldDecorator('category')(
            <TagSelect onChange={onTagSelectChange} showAll expandable>
              {articleCategory.map(item => <TagSelect.Option key={item.key} value={item.key}>{item.value}</TagSelect.Option>)}
            </TagSelect>
          )}
        </FormItem>
      </FormRow>
      <FormRow title="其他选项" block last>
        <Row>
          <Col xs={8} lg={12} md={24} >
            <FormItem>
              {getFieldDecorator('category')(
                <TagSelect onChange={onTagSelectChange} showAll expandable>
                  {articleCategory.map(item => <TagSelect.Option key={item.key} value={item.key}>{item.value}</TagSelect.Option>)}
                </TagSelect>
              )}
            </FormItem>
          </Col>
        </Row>
      </FormRow>
    </Form>
  )
}

export default Form.create()(Search);
