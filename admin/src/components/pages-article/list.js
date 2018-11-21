import { Divider } from 'antd';
import { PageTable } from '@/components';
import {pagination} from '@/utils';

const columns = [
  {
    title: '名称',
    dataIndex: 'a',
    key: 'a',
    width: 200
  },
  {
    title: '责任人',
    dataIndex: 'b',
    key: 'b'
  },
  {
    title: '类型',
    dataIndex: 'c',
    key: 'c',
    width: 100
  },
  {
    title: '分类',
    dataIndex: 'd',
    key: 'd',
    width: 100
  },
  {
    title: '类目',
    dataIndex: 'e',
    key: 'e',
    width: 200
  },
  {
    title: '是否关注',
    dataIndex: 'f',
    key: 'f',
    width: 100
  },
  {
    title: '关注人数',
    dataIndex: 'g',
    key: 'g',
    sorter: true,
    width: 120
  },
  {
    title: '访问量',
    dataIndex: 'h',
    sorter: true,
    key: 'h',
    width: 120
  },
  {
    title: '操作',
    dataIndex: 'actions',
    key: 'actions',
    fixed: 'right',
    width: 200,
    render: () => (
      <div>
        <a href="">类目编辑</a>
        <Divider type="vertical" />
        <a href="">责任人编辑</a>
      </div>
    )
  }
];

const isLoaded = false;

const List = ({
  dataSource = [
    {
      id: 0,
      a: 1
    }
  ]
}) => {
  const tableProps = {
    loading: isLoaded,
    columns,
    dataSource,
    rowKey: 'id',
    pagination,
    scroll: { x: 1400, y: 300 },
    onPageChange (){

    },
    onShowSizeChange(){

    }
  };

  return (
    <PageTable {...tableProps} />
  )
}

export default List;
