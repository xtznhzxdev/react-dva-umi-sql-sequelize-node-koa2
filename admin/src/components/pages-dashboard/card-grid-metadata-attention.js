import { Card, Avatar, Row, Col, Icon, Button } from 'antd';
import Link from 'umi/link';
import { avatarUrl } from '@/utils';
import styles from './card-grid-metadata.less';

const CardGridMetadataAttention = ({
  title = '',
  data = [],
  loading = true,
  onCancelAttention
}) => {
  return (
    <Card
      title={title}
      bordered={false}
      bodyStyle={{ padding:0 }}
      extra={<Link to='/attention'>全部{title}</Link>}
      loading={loading}
      >
      {
        data.length && data.map(item => (
          <Card.Grid className={styles.cardGrid} key={item.id}>
            <Card bodyStyle={{ padding:0 }} bordered={false}>
              <Card.Meta
                title={(
                  <div className={styles.cardTitle}>
                    <Avatar size="small" src={avatarUrl} />
                    <Link to={`/metadata/${item.id}`}>{item.title}</Link>
                  </div>
                )}
                description={item.description}
              />
              <Row style={{ marginTop: 14 }}>
                <Col sm={12} style={{color:"#999" }}><Button onClick={() => { onCancelAttention(item.id); }} type="danger"><Icon type="heart" />取消关注</Button></Col>
                <Col sm={12} style={{ textAlign: "right" }}><Link to={`/metadata/${item.id}`} style={{ lineHeight:'32px' }}>查看详情</Link></Col>
              </Row>
            </Card>
          </Card.Grid>
        ))
      }
    </Card>
  )
}

export default CardGridMetadataAttention;
