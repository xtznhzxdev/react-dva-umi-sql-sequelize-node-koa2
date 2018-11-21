import { Card, Row, Col } from 'antd';
import styles from './card-statistic.less';

const Info = ({ title, value, bordered }) => (
  <div className={styles.headerInfo}>
    <span>{title}</span>
    <p>{value}</p>
    {bordered && <em />}
  </div>
);

const CardGridMetadata = ({
  data = {},
  loading = true
}) => {
  return (
    <Card
      loading={loading}
      bordered={false}
      bodyStyle={{ padding: '24px 0' }}
      style={{ marginBottom: 24 }}>
      <Row>
        <Col sm={8} xs={24}>
          <Info title="我的关注" value={`${data.a}个关注`} bordered />
        </Col>
        <Col sm={8} xs={24}>
          <Info title="元数据总数" value={`${data.b}条元数据`} bordered />
        </Col>
        <Col sm={8} xs={24}>
          <Info title="总访问数" value={`${data.c}次访问`} />
        </Col>
      </Row>
    </Card>
  )
}

export default CardGridMetadata;


