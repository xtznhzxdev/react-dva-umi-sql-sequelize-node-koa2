import Link from 'umi/link';
import { Divider } from 'antd';
import classNames from 'classnames';
import styles from './index.less';

export default ({
  pathname
}) => {
  const cls = classNames(styles.authFooter, {
    [styles.hasBg]: pathname.indexOf('/account') > -1,
    [styles.hasMenu]: pathname.indexOf('/mine') > -1
  });

  return (
    <div className={cls}>
      <div className={styles.links}>
        <Link to="/newstart">新手入门</Link>
        <Divider type="vertical" />
        <Link to="/api">API</Link>
        <Divider type="vertical" />
        <a target="_blank" href="http://www.ruizhengyun.cn/">我的博客</a>
        <Divider type="vertical" />
        <a target="_blank" href="http://www.ruizhengyun.cn/tutorial">糖衣炮弹</a>
        <Divider type="vertical" />
        <Link to="/about">关于</Link>
      </div>
      <div>@2018 胖芮 版权所有</div>
    </div>
  )
}
