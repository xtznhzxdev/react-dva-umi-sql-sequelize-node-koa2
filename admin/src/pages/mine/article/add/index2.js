import { connect } from 'dva';
import { Form, Card, Select, Input, Row, Col, Button } from 'antd';
import { PageLayout } from '@/components';
import { articleCategory, gridLayout } from '@/utils';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

const isPublicOptions = ['不公开', '公开'];

const namespace = 'articleAction';
const ArticleActionView = ({
  dispatch,
  location,
  form: {
    getFieldDecorator,
    validateFields,
    resetFields
  },
  articleAction: {
    data
  },
  loading
}) => {
  // 写好了就发布
  const onSubmit = (e) => {
    e.preventDefault();
    validateFields((errors, values) => {
      if(errors) {
        console.error('article form submit errors: ', errors);
      }

      console.log('article form submit values:', values);
      dispatch({
        type: `${namespace}/postArticleCreate`,
        payload: {
          ...values
        }
      })
    });
  }

  // 清空
  const clearForm = (e) => {
    e.preventDefault();
    resetFields();
  }
  return (
    <PageLayout
      location={location}
      prefixBreadcrumb={[{ key: 'mine', link: '/mine', value: '我的'}]}
      suffixBreadcrumb={[{ key: 'addArticle', value: '新增文章'}]}>
      <Card bordered={false}>
        <Form mode="inline" onSubmit={onSubmit}>
          <FormItem label="">
            {getFieldDecorator('title', {
              rules: [{
                required: true,
                min: 2,
                max: 50,
                message: '请输入标题（2-50个字符）'
              }]
            })(
              <Input placeholder="请输入标题" />
            )}
          </FormItem>
          <FormItem label="">
            {getFieldDecorator('content', {
              rules: [{
                required: true,
                min: 2,
                message: '请输入内容（至少2个字符）'
              }]
            })(
              <TextArea rows={10} placeholder="请输入内容" />
            )}
          </FormItem>
          <Row gutter={24}>
            <Col {...gridLayout}>
              <FormItem label="">
                {getFieldDecorator('category', {
                  rules: [{
                    required: true,
                    message: '请选择分类'
                  }]
                })(
                  <Select placeholder="请选择分类">
                    {Object.keys(articleCategory).map(item => <Option key={item} value={item}>{articleCategory[item]}</Option>)}
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col {...gridLayout}>
              <FormItem label="">
                {getFieldDecorator('isPublic', {
                  initialValue: 1
                })(
                  <Select placeholder="请选择是否公开">
                    {isPublicOptions.map((item, index) => <Option key={index} value={index}>{item}</Option>)}
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col style={{ textAlign: 'right' }} span={24}>
              <Button onClick={clearForm} style={{ marginRight: 10 }}>清空全部</Button>
              <Button type="primary" htmlType="submit">写好了就发布</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </PageLayout>
  )
}

export default connect(({ articleAction, loading }) => ({ articleAction, loading }))(Form.create()(ArticleActionView));
