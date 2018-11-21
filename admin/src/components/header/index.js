import { Layout, Menu, Spin, Dropdown, Avatar, Icon } from 'antd';
import Link from 'umi/link';
import { avatarUrl } from '@/utils'
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
      <div className={styles.logo} />
      <div className={styles.rightOpe}>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ float: 'left', lineHeight: '64px' }}>
          <MenuItem key="home"><Link to="/">首页</Link></MenuItem>
          {username ? <MenuItem key="notices"><Link to="/mine/notices">未读通知</Link></MenuItem>: null}
          <MenuItem key="getstart"><Link to="/getstart">新手入门</Link></MenuItem>
          <MenuItem key="api"><Link to="/api">API</Link></MenuItem>
          <MenuItem key="about"><Link to="/about">关于</Link></MenuItem>
          {username ? null : <MenuItem key="register"><Link to="/register">注册</Link></MenuItem>}
          {username ? null : <MenuItem key="login"><Link to="/login">登录</Link></MenuItem>}
        </Menu>
        {username && (
          <Dropdown overlay={menuMine}>
            <span className={styles.account}>
              <Avatar
                size="small"
                className={styles.avatar}
                src={avatarUrl}
                alt={username}
              />
              <span className={styles.username}>{username}</span>
            </span>
          </Dropdown>
        )}
      </div>
    </Header>
  )
}
