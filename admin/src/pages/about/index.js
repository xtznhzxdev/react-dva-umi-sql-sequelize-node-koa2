import { connect } from 'dva';
import Link from 'umi/link';
import { Row, Col, Card, Timeline, Icon, List, Avatar } from 'antd';
import styles from './index.less';
import qrcode from '@/assets/image/qrcode.jpg';
import qq from '@/assets/image/qq.jpg';

const AboutView = ({
  dispatch,
  about: {
    data = [],
    profileList = []
  },
  loading
}) => {
  return (
    <Row gutter={24}>
      <Col xs={24} sm={24} md={10} lg={7} style={{ marginBottom: 24 }}>
        <Card bordered={false} title="不忘初心">
          <List
            className={styles.profile}
            bordered={false}
            dataSource={profileList}
            renderItem={item => (<List.Item>{item.url ? item.target ? <a target="_blank" href={item.url}>{item.icon && <Icon type={item.icon} />}{item.title}</a> : <Link to={item.url}>{item.icon && <Icon type={item.icon} />}{item.title}</Link> : <span>{item.icon && <Icon type={item.icon} />}{item.title}</span>}</List.Item>)}
          />
          <Row gutter={12} style={{ marginBottom: 12 }}>
            <Col xs={24} sm={12} md={12} lg={12}>
              <img src={qrcode} alt="微信公众号" width="100%" />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12}>
              <img src={qq} alt="QQ号" width="100%" />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col xs={24} sm={24} md={14} lg={17}>
        <Card bordered={false} title="版本发布">
          <Timeline className={styles.timeline}>
            {data.map((item, index) => {
              return (
                <Timeline.Item color={item.color && item.color} key={index} dot={item.icon && <Icon type={item.icon} style={{ fontSize: '16px' }} />}>
                  <p style={{ color: item.color || '#1890ff' }}>{item.time}</p>
                  {item.list ?
                    <Card bordered={false} className={styles.list}>
                      <List
                        itemLayout="horizontal"
                        dataSource={item.list}
                        renderItem={v => (
                          <List.Item>
                            {v.url ?
                              <Link to={v.url}>
                                <List.Item.Meta
                                  avatar={<Avatar src={v.src} />}
                                  title={v.title}
                                  description={v.description}/>
                              </Link> :
                              <List.Item.Meta
                                avatar={<Avatar src={v.src} />}
                                title={v.title}
                                description={v.description}/>
                            }
                          </List.Item>
                        )}
                      />
                    </Card>
                    : <p className={styles.description}>
                      {item.url ?  <Link to={item.url}>{item.description}</Link> : item.description}
                    </p>
                  }
                </Timeline.Item>
              )
            })}
          </Timeline>
        </Card>
      </Col>
    </Row>
  );
}


export default connect(({ about, loading }) => ({ about, loading }))(AboutView)
