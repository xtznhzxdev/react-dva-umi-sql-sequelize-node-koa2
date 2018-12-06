// 加载组件
import { Spin, Alert } from "antd"

const Loading = ({ tip = "", message = "", description = "" }) => (
  <Spin tip={tip}>
    <Alert
      description={description}
      message={`${message}努力加载中...`}
      type="info"
    />
  </Spin>
)

export default Loading;
