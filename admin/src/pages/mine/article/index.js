import { connect } from 'dva';

const MineArticleView = ({
  dispatch,
  mineArticle,
  loading
}) => {
  return (
    <div>
      <h1>mineArticle</h1>
    </div>
  );
}


export default connect(({ mineArticle, loading }) => ({ mineArticle, loading }))(MineArticleView)
