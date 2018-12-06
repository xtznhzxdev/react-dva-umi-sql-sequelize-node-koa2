import { Alert } from 'antd';

export default ({
  type = 'info',
  message = '暂无数据',
  description = ""
}) => (
  <div style={{ padding: 24 }}>
    <Alert message={message} type={type} description={description} />
  </div>
)
