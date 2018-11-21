import React from 'react';
import classNames from 'classnames';
import { Col } from 'antd';
import sytles from './index.less';
import responsive from './responsive';

export default ({
  term,
  column,
  className,
  children,
  ...restProps
}) => {
  const clsString = classNames(sytles.description, className);
  return (
    <Col className={clsString} {...responsive[column]} {...restProps}>
      {term && <div className={sytles.term}>{term}</div>}
      {((children !== 'undefined') && (children !== '') && (children !== null)) ? <div className={sytles.detail}>{children}</div> : '无'}
    </Col>
  )
}
