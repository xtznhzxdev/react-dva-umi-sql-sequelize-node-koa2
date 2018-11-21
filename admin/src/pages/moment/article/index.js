import { connect } from 'dva';
import { Card } from 'antd';
import { PageLayout, Pagination, ArticleList } from '@/components';
import { Search } from '@/components/pages-article';

const namespace = 'article';
const ArtileView = ({
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

  const articleListProps = {
    loading: loading.effects[`${namespace}/queryArticalList`],
    list: articleList,
    path: '/moment/article'
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
    <PageLayout location={location}>
      {/* 搜索 */}
      <Card bordered={false} style={{ marginBottom: 24 }}>
        <Search {...searchProps} />
      </Card>

      {/* 文章列表及分页 */}
      <Card bordered={false}>
        <ArticleList {...articleListProps} />
        <Pagination {...paginationProps} />
      </Card>
    </PageLayout>
  );
}


export default connect(({ article, loading }) => ({ article, loading }))(ArtileView);
