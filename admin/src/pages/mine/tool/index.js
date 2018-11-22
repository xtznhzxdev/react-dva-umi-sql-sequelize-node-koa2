import { connect } from 'dva';
import { PageLayout } from '@/components';

const MineToolView = ({
  dispatch,
  location,
  mineTool,
  loading
}) => {
  return (
    <PageLayout
      location={location}>
      mineTool
    </PageLayout>
  );
}


export default connect(({ mineTool, loading }) => ({ mineTool, loading }))(MineToolView);
