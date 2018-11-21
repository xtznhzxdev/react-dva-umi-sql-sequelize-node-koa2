import React from 'react';
import { connect } from 'dva';
import { Layout, BackTop, Icon } from 'antd';
import { Header, Menus, Loading } from '@/components';
import styles from './index.less'
const { Content, Sider } = Layout;

const namespace = 'app';

const MainLayout = (props) => {
    const { location: { hash, pathname: pn }, children, dispatch, app: { userInfo, menusData }, loading } = props;
    const headerProps = {
      username: userInfo.username || localStorage.getItem('username')
    }

    const pathname = hash && hash.split('#')[1] || pn;
    const menusProps = {
      menusData,
      pathname
    };

    return (
      <Layout>
        <Header {...headerProps} />
        <Layout style={{ marginTop: 64 }}>
          <BackTop />
          <div className={styles.sider}>
            <Menus {...menusProps} />
          </div>
          <Content style={{ padding: 24, marginLeft: 240 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    )
}

export default connect(({ app, loading }) => ({ app, loading }))(MainLayout);


