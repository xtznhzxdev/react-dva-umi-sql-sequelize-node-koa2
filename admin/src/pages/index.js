import { connect } from 'dva';
import { PageLayout } from '@/components';

const Home = ({
  dispatch,
  location,
  home,
  loading
}) => {
  return (
    <>
      <h1>首页</h1>
    </>
  );
}

export default connect(({ home, loading }) => ({ home, loading }))(Home);
