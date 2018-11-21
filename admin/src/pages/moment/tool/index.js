import { connect } from 'dva';
import { Calendar, Badge } from 'antd';
import { PageLayout } from '@/components';

const ToolView = ({
  dispatch,
  location,
  tool,
  loading
}) => {
  const monthCellRender = (value) => {

  }

  return (
    <PageLayout
      location={location}>
    </PageLayout>
  );
}


export default connect(({ tool, loading }) => ({ tool, loading }))(ToolView);
