import { Badge } from 'antd';
import styles from './index.less';

const MonthList = ({
  data = {}
}) => {
  if(!Object.keys(data).length) return false;

  return (
    <ul className={styles.events}>
      <li key='article'><Badge status="warning" text={`${data.articleCount} 篇文章`} /></li>
      <li key='todo'><Badge status="success" text={`${data.todoCount} 件待办`} /></li>
      <li key='tool'><Badge status="success" text={`${data.toolCount} 个工具`} /></li>
    </ul>
  )
}

export default MonthList;
