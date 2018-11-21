import { connect } from 'dva';
import { Button, Icon } from 'antd';
import { PageLayout } from '@/components';
import styles from './index.less';

const IndexView = ({
  dispatch,
  location,
  dashboard,
  loading
}) => {
  console.log('dashboard', dashboard)
  return (
    <PageLayout
      location={location}
    >
      dashboard
    </PageLayout>
  );
}

export default connect(({ dashboard, loading }) => ({ dashboard, loading }))(IndexView);
