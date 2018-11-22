import { connect } from 'dva';
import { Form, Card, Select, Input } from 'antd';
import { PageLayout } from '@/components';
import { articleCategory } from '@/utils';

const FormItem = Form.Item;
const Option = Select.Option;

const namespace = 'articleAction';
const ArticleActionView = ({
  dispatch,
  location,
  form: {
    getFieldDecorator
  },
  articleAction: {
    data
  },
  loading
}) => {
  return (
    <PageLayout
      location={location}
      breadcrumbMark={ [{ key: 'articalAction', title: '我有想法，正在输出...' }] }>
      <Card bordered={false}>
        <Form mode="inline">
          <FormItem label="" style={{ marginBottom: 6 }}>
            {getFieldDecorator('category', {
              rules: [{
                required: true,
                message: '请选择分类'
              }]
            })(
              <Select>
                {Object.keys(articleCategory).map(index => {
                  const item = articleCategory[index];
                  return (
                    <Option key={item.key}>{item.value}</Option>
                  )
                })}
              </Select>
            )}
          </FormItem>
        </Form>
      </Card>
    </PageLayout>
  )
}

export default connect(({ articleAction, loading }) => ({ articleAction, loading }))(Form.create()(ArticleActionView));
