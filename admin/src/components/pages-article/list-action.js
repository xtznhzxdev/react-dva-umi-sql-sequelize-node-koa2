import { Button, Row, Col } from 'antd';

const ListAction = ({
  onAddAttention,
  onAddCategory,
  onManageAttention
}) => {
  return (
    <Row gutter={48} style={{ marginBottom: 24 }}>
      <Col lg={16}>
        <Button type="primary" style={{ marginRight:24 }} onClick={onAddAttention}>添加关注</Button>
        <Button type="primary" onClick={onAddCategory}>添加类目</Button>
      </Col>
      <Col sm={8} style={{ textAlign: 'right' }}>
        <Button type="primary" onClick={onManageAttention}>类目管理</Button>
      </Col>
    </Row>
  )
}

export default ListAction;
