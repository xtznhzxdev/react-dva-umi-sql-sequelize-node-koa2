import { connect } from 'dva';
import { Button, Icon, Card } from 'antd';
import router from 'umi/router';
import { PageLayout } from '@/components';
import { List } from '@/components/pages-mine-article';


const namespace = 'mineArticle';
const MineArticleView = ({
  dispatch,
  location,
  mineArticle: {
    list,
    pagination
  },
  loading
}) => {
  const listProps = {
    loading: loading.effects[`${namespace}/query`],
    list,
    pagination,
    onDeleteArticle(){
      alert('onDeleteArticle')
    },
    onChange(page, pageSize){
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
  }

  return (
    <PageLayout
      location={location}
      prefixBreadcrumb={[{ key: 'mine', link: '/mine', value: '我的'}]}>
      <Card bordered={false}>
        <Button type="primary" style={{ marginBottom: 24 }} onClick={() => { router.push('/mine/article/add'); }}><Icon type="edit" />我有想法，立马写</Button>
        <List {...listProps} />
      </Card>
    </PageLayout>
  );
}


export default connect(({ mineArticle, loading }) => ({ mineArticle, loading }))(MineArticleView)
