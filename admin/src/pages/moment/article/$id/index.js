import { connect } from 'dva';
import { Menu, Button, Dropdown, Icon, Card, Row, Col } from 'antd';
import { PageLayout, Description, Pagination, ArticleList } from '@/components';
import { articleCategory } from '@/utils'
import styles from './index.less';

const ButtonGroup = Button.Group;
const MenuItem = Menu.Item;
const DescriptionItem = Description.Item;

const actionMenu = (
  <Menu>
    <MenuItem key='collection'>收藏此文</MenuItem>
    <MenuItem key='viewAuthor'>想看作者</MenuItem>
  </Menu>
);

const action = (
  <div>
    <ButtonGroup>
      <Button>给Ta点赞</Button>
      <Button>我要评论</Button>
      <Dropdown overlay={actionMenu} placement="bottomRight">
        <Button><Icon type="ellipsis" /></Button>
      </Dropdown>
    </ButtonGroup><Button type="primary">关注作者</Button>
  </div>
);

const tabList = [
  { key: 'content', tab: '文章内容' },
  { key: 'otherArticles', tab: 'Ta的其他文章', default: true }
];

const namespace = 'articleDetail';

const ArticleDetailView = ({
  dispatch,
  location,
  articleDetail: {
    info,
    tabKey,
    otherArticles,
    otherArticlesPagination
  },
  loading
}) => {
  const content = (
    <Description className={styles.headerList} col="2">
      <DescriptionItem term="分类">{articleCategory[info.category]}</DescriptionItem>
      <DescriptionItem term="标签">{info.tags}</DescriptionItem>
      <DescriptionItem term="浏览次数">{info.pv}</DescriptionItem>
      <DescriptionItem term="回复数">{info.replyCount}</DescriptionItem>
      <DescriptionItem term="创作时间">{info.createdAt}</DescriptionItem>
      <DescriptionItem term="更新时间">{info.updatedAt}</DescriptionItem>
    </Description>
  );

  const extraContent = (
    <Row>
      <Col xs={24} sm={12}>
        <div className={styles.textSecondary}>赞</div>
        <div className={styles.heading}>{info.zan}</div>
      </Col>
      <Col xs={24} sm={12}>
        <div className={styles.textSecondary}>喜欢</div>
        <div className={styles.heading}>{info.like}</div>
      </Col>
    </Row>
  )

  // 文章
  let articleContent = (
    <Card title="" style={{ marginBottom: 24 }} bordered={false}>
      {info.content}
    </Card>
  );

  // 其他文章
  if(tabKey === 'otherArticles') {
    const articleListProps = {
      loading: loading.effects[`${namespace}/getOtherArticles`],
      list: otherArticles
    }
    const paginationProps = {
      ...otherArticlesPagination,
      onChange(page, pageSize) {
        dispatch({
          type: `${namespace}/getOtherArticles`,
          payload: {
            current: page,
            pageSize
          }
        })
      },
      onShowSizeChange(current, pageSize){
        dispatch({
          type: `${namespace}/getOtherArticles`,
          payload: { current, pageSize }
        })
      }
    }
    articleContent = (
      <Card title="" style={{ marginBottom: 24 }} bordered={false}>
        <ArticleList {...articleListProps} />
        <Pagination {...paginationProps} />
      </Card>
    );
  }

  return (
    <PageLayout
      title={info.title}
      location={location}
      action={action}
      content={content}
      extraContent={extraContent}
      tabList={tabList}
      tabKey={tabKey}
      onTabChange={key => {
        dispatch({
          type: `${namespace}/setChangeTab`,
          payload: {
            tabKey: key,
            authorId: info.authorId
          }
        })
      }}>
      {articleContent}
    </PageLayout>
  );
}


export default connect(({ articleDetail, loading }) => ({ articleDetail, loading }))(ArticleDetailView)

