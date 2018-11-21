import React from 'react';
import Link from 'umi/link';
import { Menu, Icon } from 'antd';
const { SubMenu, Item } = Menu;
// import styles from './index.less';

const MenusComponent = ({
  menusData,
  pathname,
  mode = 'inline',
  theme = 'dark'
}) => {
  // 生成菜单
  const renderMenu = (data = []) => {
    if(data.length == 0) {
      return null;
    }

    return data.map(item => {
      const { title, key, link = '/', icon, iconTheme = '' } = item;
      if(item.children) {
        return (
          <SubMenu key={key} text={title} title={<span><Icon type={icon} theme={iconTheme} />{title}</span>}>
            {renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Item key={key} text={title}>
          {pathname === link ? (
            <span>
              {icon ? <Icon type={icon} theme={iconTheme} /> : null}
              {title}
            </span>
          ) : (
            <Link to={link}>
              {icon ? <Icon type={icon} theme={iconTheme} /> : null}
              {title}
            </Link>
          )}
        </Item>
      )
    })
  }

  // 当期选中key
  let keys = []
  const queryKeyByPathname = (data = []) => {
    data.length && data.forEach(item => {
      item.children && item.children.length && queryKeyByPathname(item.children);
      (pathname === item.link) && keys.push(item.key);
    });
  }
  queryKeyByPathname(menusData);

  return (
    <Menu
      selectedKeys={keys}
      mode={mode}
      theme={theme}>
      {renderMenu(menusData)}
    </Menu>
  )
}

export default MenusComponent;
