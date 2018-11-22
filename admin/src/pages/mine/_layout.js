import { Layout} from 'antd';
import { Menus } from '@/components';
import { menusData } from '@/utils';
import styles from './_layout.less'
const { Content } = Layout;

const MineLayout = ({
  children,
  location: { hash, pathname: pn }
}) => {
    const pathname = hash && hash.split('#')[1] || pn;
    const menusProps = {
      menusData,
      pathname
    };

    return (
      <Layout style={{ margin: -24 }}>
        <div className={styles.sider}>
          <Menus {...menusProps} />
        </div>
        <Content style={{ padding: 24, marginLeft: 240 }}>
          {children}
        </Content>
      </Layout>
    )
}

export default MineLayout


