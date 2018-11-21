import { List, Icon, Avatar } from 'antd';
import Link from 'umi/link';
const ListItem = List.Item;
const ArticleList = ({
  loading,
  list = []
}) => {
  const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

  const ListContent = ({ data: { title, content, updatedAt, id, authorId, authorName = '', avatar = ''} }) => (
    <div>
      <h2><Link to={`/moment/article/${id}`}>{title}</Link></h2>
      <p>{content}</p>
      <div>
        <Avatar src={avatar} size="small" /><Link to={`/user/${authorId}`}>{authorName}</Link> 发布于
        <em>{updatedAt}</em>
      </div>
    </div>
  );

  return (
    <List
      size="large"
      loading={loading}
      rowKey="id"
      itemLayout="vertical"
      dataSource={list}
      renderItem={item => (
        <ListItem
          key={item.id}
          actions={[
            <IconText type="star-o" text={item.pv} />,
            <IconText type="like-o" text={item.like} />,
            <IconText type="message" text={item.replyCount} />,
          ]}>
          <ListContent data={item} />
        </ListItem>
      )}/>
  )
}

export default ArticleList;
