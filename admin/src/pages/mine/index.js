import { connect } from 'dva';
import { PageLayout } from '@/components';

const MineView = ({
  dispatch,
  location,
  mine,
  loading
}) => {
  return (
    <PageLayout title="一览众生晓">
      一览众生晓
    </PageLayout>
  );
}


export default connect(({ mine, loading }) => ({ mine, loading }))(MineView);
