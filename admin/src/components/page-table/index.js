import { Table } from 'antd';
import Pagination from '../pagination';

export default ({
  pagination,
  onPageChange,
  onShowSizeChange,
  ...restProps
}) => {
  const tableProps = {
    pagination: false,
    ...restProps
  };

  if(restProps.scroll) {
    tableProps.scroll = restProps.scroll;
  }

  if(restProps.rowSelection) {
    tableProps.rowSelection = restProps.rowSelection;
  }

  const paginationProps = {
    pagination,
    onChange(page, pageSize) {
      onPageChange(page, pageSize)
    },
    onShowSizeChange(current, pageSize){
      onShowSizeChange(current, pageSize)
    }
  }

  return (
    <>
      <Table {...tableProps} />
      <Pagination {...paginationProps} />
    </>
  )
}
