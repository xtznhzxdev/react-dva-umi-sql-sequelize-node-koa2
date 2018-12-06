import { connect } from 'dva';
import { Card } from 'antd';
import { Pagination } from '@/components';
import { Search, List } from '@/components/pages-article';

const namespace = 'article';
const ArticleView = ({
  dispatch,
  location,
  article: {
    articleList,
    articlePagination
  },
  loading
}) => {
  const searchProps = {
    onSearch(value) {
      alert(value);
    },
    onTagSelectChange(){

    }
  };

  const listProps = {
    loading: loading.effects[`${namespace}/query`],
    list: articleList,
    path: '/article'
  };

  const paginationProps = {
    ...articlePagination,
    onChange(page, pageSize) {
      dispatch({
        type: `${namespace}/query`,
        payload: {
          current: page,
          pageSize
        }
      })
    },
    onShowSizeChange(current, pageSize){
      dispatch({
        type: `${namespace}/query`,
        payload: {
          current,
          pageSize
        }
      })
    }
  };

  return (
    <>
      {/* 搜索 */}
      <Card bordered={false} style={{ marginBottom: 24 }}>
        <Search {...searchProps} />
      </Card>

      {/* 文章列表及分页 */}
      <Card bordered={false}>
        <List {...listProps} />
        <Pagination {...paginationProps} />
      </Card>
    </>
  );
}


export default connect(({ article, loading }) => ({ article, loading }))(ArticleView);
