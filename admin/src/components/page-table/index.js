import { Table } from 'antd';
import Pagination from '../pagination';

export default ({
  pagination,
  onChange,
  onShowSizeChange,
  ...restProps
}) => {
  const tableProps = {
    showHeader: true,
    rowKey: 'id',
    pagination: false,
    ...restProps
  };

  if(restProps.scroll) {
    tableProps.scroll = restProps.scroll;
  }

  if(restProps.expandedRowRender) {
    tableProps.expandedRowRender = restProps.expandedRowRender;
  }

  if(restProps.rowSelection) {
    tableProps.rowSelection = restProps.rowSelection;
  }

  if(typeof restProps.onTableChange === 'function') {
    tableProps.onChange = (pagination, filters, sorter) => {
      restProps.onTableChange(pagination, filters, sorter);
    }
  }

  const paginationProps = {
    onChange,
    onShowSizeChange,
    ...pagination
  };

  return (
    <>
      <Table {...tableProps} />
      {pagination ? <Pagination {...paginationProps} /> : null}
    </>
  )
}
