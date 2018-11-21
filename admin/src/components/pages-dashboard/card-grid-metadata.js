import { Card, Avatar, Row, Col } from 'antd';
import Link from 'umi/link';
import { avatarUrl } from '@/utils';
import styles from './card-grid-metadata.less';

const CardGridMetadata = ({
  title = '',
  data = [],
  loading = true,
  tab = '1'
}) => {
  return (
    <Card
      title={title}
      bordered={false}
      bodyStyle={{ padding:0 }}
      style={{ marginBottom:24 }}
      extra={<Link to={`/metadata?tab=${tab}`}>全部{title}</Link>}
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
              <Row style={{ marginTop: 8 }}>
                <Col sm={16} style={{color:"#999" }}>{item.member || ''}</Col>
                <Col sm={8} style={{ textAlign: "right" }}><Link to={`/metadata/${item.id}`}>查看详情</Link></Col>
              </Row>
            </Card>
          </Card.Grid>
        ))
      }
    </Card>
  )
}

export default CardGridMetadata;
