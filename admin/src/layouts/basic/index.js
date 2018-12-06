import React from 'react';
import { connect } from 'dva';
import { Layout, BackTop } from 'antd';
import { Header, Footer } from '@/components';
import styles from './index.less';
const { Content } = Layout;

const namespace = 'app';
const MainLayout = ({
  dispatch,
  location: {
    pathname
  },
  children,
  app: {
    userInfo
  },
  loading
}) => {
  const headerProps = {
    username: userInfo.username || localStorage.getItem('username')
  }

  return (
    <Layout>
      <Header {...headerProps} />
      <Layout className={styles.layoutBody}>
        <BackTop />
        <Content style={{ padding: 24 }}>
          {children}
        </Content>
      </Layout>
      <Footer pathname={pathname} />
    </Layout>
  )
}

export default connect(({ app, loading }) => ({ app, loading }))(MainLayout);
