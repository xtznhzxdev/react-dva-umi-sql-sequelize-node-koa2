import React from 'react';
import { connect } from 'dva';
import { Layout, BackTop } from 'antd';
import { Header } from '@/components';
const { Content, Sider } = Layout;

const namespace = 'app';
const MainLayout = (props) => {
    const { location: { hash, pathname: pn }, children, dispatch, app: { userInfo, menusData }, loading } = props;
    const headerProps = {
      username: userInfo.username || localStorage.getItem('username')
    }

    return (
      <Layout>
        <Header {...headerProps} />
        <Layout style={{ marginTop: 64 }}>
          <BackTop />
          <Content style={{ padding: 24 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    )
}

export default connect(({ app, loading }) => ({ app, loading }))(MainLayout);


