import { connect } from 'dva';
import { PageLayout } from '@/components';

const MineBookView = ({
  dispatch,
  location,
  mineBook,
  loading
}) => {
  return (
    <PageLayout
      location={location}>
      mineBook
    </PageLayout>
  );
}


export default connect(({ mineBook, loading }) => ({ mineBook, loading }))(MineBookView);
