import { Badge, Button, List } from 'antd';
import { todoStatus, todoCategory, statusColor } from '@/utils';
import styles from './index.less';

const DayList = ({
  action,
  onAddTodo,
  onEditTodo,
  onDeleteTodo,
  onSwitchTodo,
  data = []
}) => {
  if(!data.length && !action) return false;

  if(!action) {
    return (
      <ul className={styles.events}>
        {
          data.map(item => {
            const titleMore = item.title.length > 4 ? '...' : '';

            return (
              <li key={item.id}><Badge status={todoStatus[item.status]} text={`[${todoCategory[item.category]}]${item.title.substr(0, 4)}${titleMore}`} /></li>
            )
          })
        }
      </ul>
    )
  }

  if(!data.length && action) {
    return (
      <Button type="dashed" icon="plus" style={{ width: '100%', marginBottom: 8}} onClick={onAddTodo}>我要记事</Button>
    )
  };

  const ListContent = ({ data: { category } }) => (
    <div className={styles.listContent}>
      <h4>分类</h4>
      <p>{todoCategory[category]}</p>
    </div>
  );

  return (
    <>
      <Button type="dashed" icon="plus" style={{ width: '100%', marginBottom: 8}} onClick={onAddTodo}>我要记事</Button>
      <List
        size="large"
        rowKey="id"
        loading={false}
        dataSource={data}
        renderItem={item => (
          <List.Item
            actions={[ <a disabled={item.status === 'done'} onClick={() => { onEditTodo(item); }}>编辑</a>, <a disabled={item.status === 'done'} onClick={() => { onDeleteTodo(item); }}>删除</a>, <a onClick={() => { onSwitchTodo(item); }}>{item.status === 'todo' ? '我已完成' : '重新激活'}</a> ]}>
            <List.Item.Meta
              title={<span style={{ color: statusColor[todoStatus[item.status]] }}>{item.title.substr(0, 15)}</span>}
              description={item.description}
            />
           <ListContent data={item} />
          </List.Item>
        )} />
    </>
  )
}

export default DayList;
