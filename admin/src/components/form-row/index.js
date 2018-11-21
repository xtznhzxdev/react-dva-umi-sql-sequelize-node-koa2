import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

export default ({ title, children, last, block, grid, ...rest }) => {
  const cls = classNames(styles.formRow, {
    [styles.formRowBlock]: block,
    [styles.formRowLast]: last,
    [styles.formRowGrid]: grid
  });

  return (
    <div className={cls} {...rest}>
      {
        title && (
          <div className={styles.label}>
            <span>{title}</span>
          </div>
        )
      }
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};
