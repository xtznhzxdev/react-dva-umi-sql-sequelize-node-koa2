import { Divider, Popconfirm, Popover } from 'antd';
import Link from 'umi/link';
import { PageTable } from '@/components';

const List = ({
  onDeleteArticle,
  list,
  ...restProps
}) => {
  const columns = [
    {
      title: '文章标题',
      key: 'title',
      dataIndex: 'title',
      width: 200,
      render: (text, record) => {
        return (
          <Link to={`/article/${record.id}`}>
            <Popover content={text} title='' trigger="hover">
              {text.length > 10 ? `${text.substr(0, 10)} ...` : text}
            </Popover>
          </Link>
        )
      }
    },
    {
      title: '分类',
      key: 'category',
      dataIndex: 'category',
      width: 100
    },
    {
      title: '是否公开',
      key: 'isPublic',
      dataIndex: 'isPublic',
      width: 100,
      render: text => <span>{text === 1 ? '公开' : '未公开'}</span>
    },
    {
      title: '浏览次数',
      key: 'pv',
      dataIndex: 'pv',
      width: 100
    },
    {
      title: '赞',
      key: 'like',
      dataIndex: 'like',
      width: 100
    },
    {
      title: '回复数',
      key: 'replyCount',
      dataIndex: 'replyCount',
      width: 100
    },
    {
      title: '是否允许评论',
      key: 'allowComment',
      dataIndex: 'allowComment',
      width: 130,
      render: text => <span>{text !== 1 ? '可评论' : '作者未开启评论'}</span>
    },
    {
      title: '创建时间',
      key: 'createdAt',
      dataIndex: 'createdAt',
      width: 180
    },
    {
      title: '最近更新时间',
      key: 'updatedAt',
      dataIndex: 'updatedAt',
      // width: 150
    },
    {
      title: '操作',
      key: 'action',
      dataIndex: 'action',
      width: 150,
      fixed: 'right',
      render: (text, record) => {
        return (
          <>
            <Popconfirm
              title={`确定删除 - ${record.title}`}
              onConfirm={() => {
                onDeleteArticle(record);
              }}
              onCancel={() => {

              }}
              okText="确定"
              cancelText="取消"
            >
              <a onClick={ (e) => { e.stopPropagation(); }} style={{ color: 'red' }}>删除</a>
            </Popconfirm>
            <Divider type="vertical" />
            <a onClick={ (e) => { e.stopPropagation(); }}>编辑</a>
          </>
        )
      }
    },
  ];

  const pageTableProps = {
    columns,
    dataSource: list,
    rowKey: 'id',
    scroll: { x: 1400, y: 420 },
    ...restProps
  };

  return (
    <PageTable {...pageTableProps} />
  )
}


export default List;
