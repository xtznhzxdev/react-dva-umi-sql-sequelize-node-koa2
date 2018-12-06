import { Layout, Menu, Spin, Dropdown, Avatar, Icon } from 'antd';
import Link from 'umi/link';
import { imageUrl } from '@/utils'
import styles from './index.less';
const { Header }  = Layout;
const MenuItem = Menu.Item;

export default ({
  username,
  onLogout
}) => {
  const menuMine = (
    <Menu>
      <Menu.Item key="userCenter">
        <Link to="/mine/profile"><Icon type="user" /> 个人中心 </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <span onClick={onLogout}><Icon type="logout" /> 退出</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header>
      <Link className={styles.logo} to="/">江湖再见</Link>
      <div className={styles.rightOpe}>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ float: 'left', lineHeight: '64px' }}>
          <MenuItem key="home"><Link to="/">首页</Link></MenuItem>
          <MenuItem key="article"><Link to="/article">我手写我口</Link></MenuItem>
          <MenuItem key="wenda"><Link to="/wenda">有问有答</Link></MenuItem>
          <MenuItem key="book"><Link to="/book">读书领读</Link></MenuItem>
          <MenuItem key="tool"><Link to="/tool">上帝之手</Link></MenuItem>
          {username ? <MenuItem key="notices"><Link to="/mine/notices">未读通知</Link></MenuItem>: null}
          {username ? <MenuItem key="mine">
            <Link to="/mine">
              <Avatar
                size="small"
                className={styles.avatar}
                src={imageUrl.avatar}
                alt={username}
                style={{ marginRight: 10 }}
              /><span className={styles.username}>{username}</span>
            </Link>
          </MenuItem> : null}
          {username ? null : <MenuItem key="register"><Link to="/register">注册</Link></MenuItem>}
          {username ? null : <MenuItem key="login"><Link to="/login">登录</Link></MenuItem>}
        </Menu>
      </div>
    </Header>
  )
}
