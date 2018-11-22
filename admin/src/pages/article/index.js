import { connect } from 'dva';
import router from 'umi/router';
import { Card, Button, Icon } from 'antd';
import { PageLayout, Pagination } from '@/components';
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
    loading: loading.effects[`${namespace}/queryArticalList`],
    list: articleList,
    path: '/article'
  };

  const paginationProps = {
    ...articlePagination,
    onChange(page, pageSize) {
      dispatch({
        type: `${namespace}/queryArticalList`,
        payload: {
          current: page,
          pageSize
        }
      })
    },
    onShowSizeChange(current, pageSize){
      dispatch({
        type: `${namespace}/queryArticalList`,
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
        <Button type="dashed" style={{ marginBottom: 12, width: '100%' }} onClick={() => { router.push('/mine/article/add'); }}><Icon type="edit" />我有想法，立马写</Button>
        <List {...listProps} />
        <Pagination {...paginationProps} />
      </Card>
    </>
  );
}


export default connect(({ article, loading }) => ({ article, loading }))(ArticleView);
