import React, { PureComponent } from 'react';
import Link from 'umi/link';
import { Breadcrumb, Tabs } from 'antd';
import classNames from 'classnames';
import { menusData } from '@/utils';
import styles from './index.less';

const { TabPane } = Tabs;

export default class PageHeader extends PureComponent {
  onChange = (key) => {
    if (this.props.onTabChange) {
      this.props.onTabChange(key);
    }
  };

  onBreadcrumbData = ({ pathname, data, prefixBreadcrumb, suffixBreadcrumb }) => {
    if(pathname === '/') {
      pathname = ['dashboard'];
    } else {
      pathname = pathname.substr(1).split('/');
    }

    const titles = [];
    const fn = (pathname, arr) => {
      pathname.forEach(item => {
        arr.forEach(v => {
          if(item === v.key) {
            titles.push(v);
            if(v.children) {
              fn(pathname, v.children);
            }
          }
        })
      })
    }
    fn(pathname, data);

    if(prefixBreadcrumb) {
      if(prefixBreadcrumb.length === 1) {
        titles.unshift(prefixBreadcrumb[0]);
      }
    }
    if(suffixBreadcrumb) {
      if(suffixBreadcrumb.length === 1) {
        titles.push(suffixBreadcrumb[0]);
      }
    }

    return titles;
  }

  render() {
    const {
      title,
      logo,
      action,
      content,
      extraContent,
      tabList,
      tabKey,
      className,
      location,
      linkElement = 'a',
      prefixBreadcrumb = [],
      suffixBreadcrumb = []
    } = this.props;

    const defaultActive = tabList && tabList.filter(item => item.default)[0];

    // 面包屑
    let breadcrumb = null;
    if(location && location.pathname) {
      const param = {
        pathname: location.pathname,
        data: menusData
      }
      if(prefixBreadcrumb && Array.isArray(prefixBreadcrumb) && prefixBreadcrumb.length) {
        param.prefixBreadcrumb = prefixBreadcrumb;
      }
      if(suffixBreadcrumb && Array.isArray(suffixBreadcrumb) && suffixBreadcrumb.length) {
        param.suffixBreadcrumb = suffixBreadcrumb;
      }
      let breadcrumbList = this.onBreadcrumbData(param);

      breadcrumb = (
        <Breadcrumb className={styles.content}>
          <Breadcrumb.Item key="home"><Link to="/">首页</Link></Breadcrumb.Item>
          {breadcrumbList.map(item => {
            if(item.link) {
              return (
                <Breadcrumb.Item key={item.key}>
                  <Link to={item.link}>{item.title || item.value}</Link>
                </Breadcrumb.Item>
              )
            }
            return (
              <Breadcrumb.Item key={item.key}>{item.title || item.value}</Breadcrumb.Item>
            )
          })}
        </Breadcrumb>
      );
    }


    const clsString = classNames(styles.pageHeader, className);
    return (
      <div className={clsString}>
        {breadcrumb && breadcrumb}
        <div className={styles.detail}>
          {logo && <div className={styles.logo}>{logo}</div>}
          <div className={styles.main}>
            <div className={styles.row}>
              {title && <h1 className={styles.title}>{title}</h1>}
              {!title && !breadcrumb && <h1 className={styles.title}>请传location或title</h1>}
              {action && <div className={styles.action}>{action}</div>}
            </div>
            <div className={styles.row}>
              {content && <div className={styles.content}>{content}</div>}
              {extraContent && <div className={styles.extraContent}>{extraContent}</div>}
            </div>
          </div>
        </div>
        {tabList && tabList.length &&
        <Tabs
          className={styles.tabs}
          defaultActiveKey={(defaultActive && defaultActive.key)}
          activeKey={tabKey}
          onChange={this.onChange}
          >
          {tabList.map(item => <TabPane key={item.key} tab={item.tab}></TabPane>)}
        </Tabs>}
      </div>
    )
  }
}
